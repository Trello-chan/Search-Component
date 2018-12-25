import express from 'express';
import { createBoard, getBoard, createTeam, getCard, sendInitialLoadData } from './controller';

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

export default router;