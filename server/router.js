import express from 'express';
import { sendInitialLoadData } from './controller';

const router = express.Router();

router.route('/load')
  .get(sendInitialLoadData)

export default router;