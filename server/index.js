const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = require('./router');

const PORT = 3000;

router.use(helmet());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(express.static(path.join(__dirname, '/../static')));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
