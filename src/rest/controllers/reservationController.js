const Reservation = require('../../databases/mlab/collection1/reservation');

const mongoCRUD = require('../../graphql/_lib/mongoCRUD');
class ReservationController {
  constructor() {
    /* ===================== custom CRUD ====================== */

    // -------- search category = 'Science' ------------
    this.searchReservations = async (req, res) => {
 
      let collection;
      try {
        collection = await mongoCRUD.findAll(Reservation);
        res.json(collection);
      } catch (err) {
        console.log(err);
        res.end();
      }
    };

    this.test = async (req, res) => {
      res.json({test: "test"});
      res.end();
    };

  } // end constructor
} // end clsss

const controller = new ReservationController();

module.exports = controller;
