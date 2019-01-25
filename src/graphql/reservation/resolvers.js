const Reservation = require('../../databases/mlab/collection1/reservation');

const mongoCRUD = require('../_lib/mongoCRUD');

const resolvers = {
  Reservation: {
    /* 
     set graph relationship here with other records
     ie : author: (parent, args, context, info) => Author.findById(parent.authorId),
    */
  },
  Query: {
    reservation: mongoCRUD.findOne(Reservation),
    reservations: mongoCRUD.findAll(Reservation),
    // custom queries go here
  },
  Mutation: {
    // add when id is undefined, else update when id is defined
    saveReservation: mongoCRUD.save(Reservation, 'Reservation'),
    removeReservation: mongoCRUD.remove(Reservation, 'Reservation'),
  },
};

module.exports = resolvers;
//Id name phone email hotel arrival departure  totalAmout