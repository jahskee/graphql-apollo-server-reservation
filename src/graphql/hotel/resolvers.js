const Hotel = require('../../databases/mlab/collection1/hotel');

const mongoCRUD = require('../_lib/mongoCRUD');

const resolvers = {
  Hotel: {
     /* 
     set graph relationship here with other records
     ie : author: (parent, args, context, info) => Author.findById(parent.authorId),
    */
  },
  Query: {
    hotel: mongoCRUD.findOne(Hotel),
    hotels: mongoCRUD.findAll(Hotel),
    // custom queries go here
  },
  Mutation: {
    // add when id is undefined, else update when id is defined
    saveHotel: mongoCRUD.save(Hotel, 'Hotel'),
    removeHotel: mongoCRUD.remove(Hotel, 'Hotel'),
  },
};

module.exports = resolvers;
