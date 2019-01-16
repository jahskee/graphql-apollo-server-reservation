const mongoCRUD = {
  findOne,
  findAll,
  save,
  remove,
};

function findOne(Entity) {
  return (parent, args, context, info) => Entity.findById(args.id)
}

function findAll(Entity) {
  return () => Entity.find({})
}

// add when id is undefined, else update when id is defined
function save(Entity, recordName) {
  return (parent, args, context, info) => {
    if (args.id === undefined) {
      let record = new Entity(args);
      return record.save().then(data => {
        console.log(`Added ${recordName} with id=${data._id}.`);
        return data;
      });
    } else {
      return Entity.findOneAndUpdate({ _id: args.id }, args, {
        new: true,
      }).then(data => {
        console.log(`Updated ${recordName} with id=${data._id}.`);
        return data;
      });
    }
  };
}

function remove(Entity, recordName) {
  return (parent, args, context, info) => {
    return Entity.findOneAndRemove({ _id: args.id }).then(data => {
      console.log(`Deleted ${recordName} with id=${data._id}.`);
      return data;
    });
  };
}

module.exports = mongoCRUD;
