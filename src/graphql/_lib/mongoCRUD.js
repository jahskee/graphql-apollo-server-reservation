const mongoCRUD = {
  save,
  remove
}

function save(Entity) {
  return (parent, args, context, info) => {
    if (args.id === undefined) {
      let record = new Entity(args);
      return record.save();
    } else {
      return Entity.findOneAndUpdate({ _id: args.id }, args);
    }
  };
};

function remove(Entity) {
  return (parent, args, context, info) => {
    return Entity.findOneAndRemove({ _id: args.id });
  }
};

module.exports = mongoCRUD;
