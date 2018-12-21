import fs from 'fs';
import faker from 'faker';

const relativePath = './database/seedData/data/';

const userDir = fs.createWriteStream(relativePath + 'users.csv');
const teamDir = fs.createWriteStream(relativePath + 'teams.csv');
const boardDir = fs.createWriteStream(relativePath + 'boards.csv');
const cardDir = fs.createWriteStream(relativePath + 'cards.csv');
const cardMemberDir = fs.createWriteStream(relativePath + 'cardMembers.csv');

const entries = 100;

const createUsers = () => {
  console.log('starting createUsers')
  let users = '';
  for (let i = 0; i < entries; i++) {
    let username = faker.name.firstName();
    users += `${username}\n`;
  }
  userDir.write(users);
  console.log('ending createUsers')
}

const createTeams = () => {
  console.log('starting createTeams')
  let teams = '';
  for (let i = 0; i < entries; i++) {
    let group = faker.random.word();
    teams += `${group}\n`;
  }
  teamDir.write(teams);
  console.log('ending createTeams')
} 

const createBoards = () => {
  console.log('starting createBoards')
  let boards = '';
  for (let i = 0; i < entries; i++) {
    let board = faker.random.word();
    let randomTeamId = null;
    if (Math.random() > 0.5) {
      randomTeamId = Math.floor(Math.random() * entries/4);
    } 
    boards += `${board}\t${randomTeamId}\n`;
  }
  boardDir.write(boards);
  console.log('ending createBoards')
}

const createCards = () => {
  console.log('starting createCards')
  let cards = '';
  for (let i = 0; i < (entries * 2); i++) {
    let cardLabel = faker.fake();
    let cardDescription = faker.fake();
    let cardComment = faker.fake();
    let listName = faker.random.word();
    let boardId = Math.floor(Math.random() * entries);
    cards += `${cardLabel}\t${cardDescription}\t${cardComment}\t${listName}\t${boardId}\n`;
  }
  cardDir.write(cards);
  console.log('ending createCards')
}

const createCardMemberAssociation = () => {
  //card_id
  //member_id
  console.log('starting createCardMember')
  let cardMember = '';
  for (let i = 0; i < (entries*2); i++) {
    let memberId = Math.floor(Math.random() * entries);
    cardMember += `${i}\t${memberId}\n`;
  }
  cardMemberDir.write(cardMember);
  console.log('ending createCardMember')
}

const createSeedData = () => {
  createUsers();
  createTeams();
  createBoards();
  createCards();
  createCardMemberAssociation();
}

createSeedData();