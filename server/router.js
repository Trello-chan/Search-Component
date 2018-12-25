import express from 'express';
import { createBoard, getBoard, sendInitialLoadData } from './controller';

const router = express.Router();

router.route('/load')
  .get(sendInitialLoadData)

router.route('/board')
  .get(getBoard)
  .post(createBoard)

export default router;