import {
  getRandomMemberHelper,
  getRandom15BoardsHelper,
  getRandom10TeamsHelper,
  getRandom50CardsHelper,
  createBoardHelper,
  getBoardHelper,
  createTeamHelper,
  getCardHelper,
  updateCardHelper
} from '../database/dbHelpers';

const sendInitialLoadData = (req, res) => {
  let data = {}
  getRandomMemberHelper()
    .then(member => {
      data.member = member;
      getRandom15BoardsHelper()
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
  createBoardHelper(title)
    .then(board => res.status(200).send(board))
    .catch(err => res.status(404).send(err));
}

export {
  createBoard,
  getBoard,
  sendInitialLoadData,
}