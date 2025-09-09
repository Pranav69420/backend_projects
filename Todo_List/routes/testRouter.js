const express = require('express');
const { testingController } = require('../controller/testController');

//Router object 

const router = express.Router();


//routes
router.get('/', testingController);

//export
module.exports = router;