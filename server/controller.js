import {
  getRandomMemberHelper,
  getRandom5BoardsHelper,
  getRandom10TeamsHelper,
  getRandom50CardsHelper,
  createBoardHelper,
  getBoardHelper,
  createTeamHelper,
  getCardHelper,
  updateCardHelper,
  createCardMemberAssociation
} from '../database/dbHelpers';

const sendInitialLoadData = (req, res) => {
  let { id } = req.query;
  let data = {}
  getRandomMemberHelper(id)
    .then(member => {
      data.member = member;
      getRandom5BoardsHelper()
        .then(boards => {
          data.boards = boards;
          getRandom10TeamsHelper()
            .then(teams => {
              data.teams = teams;
              getRandom50CardsHelper()
                .then(cards => {
                  data.cards = cards;
                  res.status(200).send(data);
                })
            })
        })
    })
};

const createBoard = (req, res) => {
  let { title } = req.body;
  createBoardHelper(title)
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send(err));
}

const getBoard = (req, res) => {
  let { title } = req.query;
  getBoardHelper(title)
    .then(board => res.status(200).send(board))
    .catch(err => res.status(404).send(err));
}

const createTeam = (req, res) => {
  let { teamname } = req.body;
  createTeamHelper(teamname)
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send(err));
}

const getCard = (req, res) => {
  let { label } = req.query;
  getCardHelper(label)
    .then(card => res.status(200).send(card))
    .catch(err => res.status(404).send(err));
}

const updateCard = (req, res) => {
  let { id, update, member_id } = req.body;
  updateCardHelper(id, update)
    .then(() => {
      if (member_id) {
        createCardMemberAssociation(id, member_id)
         .then(() => res.status(204).send('success'))
         .catch(err => res.status(404).send(err));
      } else {
        res.status(204).send('success');
      }
    })
    .catch(err => res.status(404).send(err));
}

export {
  createBoard,
  getBoard,
  createTeam,
  getCard,
  sendInitialLoadData,
  updateCard
}