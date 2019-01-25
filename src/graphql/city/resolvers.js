const City = require('../../databases/mlab/collection1/city');

const mongoCRUD = require('../_lib/mongoCRUD');

const resolvers = {
  City: {
    /* 
     set graph relationship here with other records
     ie : author: (parent, args, context, info) => Author.findById(parent.authorId),
    */
  },
  Query: {
    city: mongoCRUD.findOne(City),
    cities: mongoCRUD.findAll(City),

    // custom queries go here
  },
  Mutation: {
    // add when id is undefined, else update when id is defined
    saveCity: mongoCRUD.save(City, 'City'),
    removeCity: mongoCRUD.remove(City, 'City'),
  },
};

module.exports = resolvers;
