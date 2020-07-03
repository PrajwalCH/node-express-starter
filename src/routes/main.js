const express = require('express');
const os = require('os');

const router = express.Router();

router.get('/', (request, response) => {
  response.render('home/index', { user: os.hostname });
});

module.exports = router;
