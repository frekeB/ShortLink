const express = require('express');
const urlCtrl = require('../../api/controllers/urlController');

const router = express.Router();

 router.route('/api/shorten').post(urlCtrl.shorten);
router.route('/:encodedId').get(urlCtrl.decode);

module.exports = router;
