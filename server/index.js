import express from 'express';
import path from 'path';
import parser from 'body-parser';

const app = express();
const port = process.env.PORT || 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/index.html')));

app.listen(port, () => console.log(`Now listening on search server port: ${port}`));