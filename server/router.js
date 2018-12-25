import express from 'express';
import { createBoard, getBoard, createTeam, getCard, sendInitialLoadData, updateCard } from './controller';

const router = express.Router();

router.route('/load')
  .get(sendInitialLoadData)

router.route('/board')
  .get(getBoard)
  .post(createBoard)

router.route('/team')
  .post(createTeam)

router.route('/card')
  .get(getCard)
  .patch(updateCard)

export default router;