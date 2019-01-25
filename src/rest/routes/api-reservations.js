/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const reservationController = require('../controllers/reservationController')

// custom searches
router.get('/reservations', reservationController.searchReservations);
router.get('/test', reservationController.test);
module.exports = router;