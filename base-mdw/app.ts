import {
  neffRouter,
  initController,
  setCustomHandler,
} from '@n7-frontend/express';
import parsers from './src/parsers';
import configurations from './src/configurations';
require('dotenv').config();
import * as cors from 'cors';
import * as express from 'express';

const app = express();

initController({
  parsers,
  configurations,
  baseUrl: process.env.BASE_URL,
  staticUrl: process.env.STATIC_URL,
  searchIndex: process.env.SEARCH_INDEX,
  elasticUri: process.env.ELASTIC_URI,
  defaultLang: process.env.DEFAULT_LANG,
});

// for parsing application/json
app.use(express.json(), cors());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(neffRouter);

// setCustomHandler('getTest', async (req, res) => {
//   res.send('this is the custom get test handler');
// });

// start the express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
