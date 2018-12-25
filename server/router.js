import express from 'express';
import { createBoard, getBoard, createTeam, sendInitialLoadData } from './controller';

const router = express.Router();

router.route('/load')
  .get(sendInitialLoadData)

router.route('/board')
  .get(getBoard)
  .post(createBoard)

router.route('/team')
  .post(createTeam)

export default router;