import {
  getRandomMemberHelper,
  getRandom15BoardsHelper,
  getRandom10TeamsHelper,
  getRandom50CardsHelper,
  createBoardHelper,
  createTeamHelper,
  getCardHelper,
  updateCardHelper
} from '../database/dbHelpers';

/*

on load send the following information

randomMember

random 15 boards

get random 10 teams

get random cards

*/

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
}

export {
  sendInitialLoadData,
}