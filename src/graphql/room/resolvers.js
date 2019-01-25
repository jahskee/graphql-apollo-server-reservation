const Room = require('../../databases/mlab/collection1/room');

const mongoCRUD = require('../_lib/mongoCRUD');

const resolvers = {
  Room: {
    /* 
     set graph relationship here with other records
     ie : author: (parent, args, context, info) => Author.findById(parent.authorId),
    */
  },
  Query: {
    room: mongoCRUD.findOne(Room),
    rooms: mongoCRUD.findAll(Room),

    // custom queries go here
  },
  Mutation: {
    // add when id is undefined, else update when id is defined
    saveRoom: mongoCRUD.save(Room, 'Room'),
    removeRoom: mongoCRUD.remove(Room, 'Room'),
  },
};

module.exports = resolvers;
