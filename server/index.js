import express from 'express';
import path from 'path';
import parser from 'body-parser';

import router from './router';

const app = express();
const port = process.env.PORT || 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/index.html')));

app.use('/api', router)

if (process.env.NODE_ENV !== 'jest') {
  app.listen(port, () => console.log(`server is listening on port ${port}`));
}


export default app;