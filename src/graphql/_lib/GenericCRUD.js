const GenericCRUD = {
  save: genericSave.bind(this),
}


function genericSave(Entity) {
  let saveRecord = (parent, args, context, info) => {
    if (args.id === undefined) {
      let record = new Entity(args);
      return record.save();
    } else {
      return Entity.findOneAndUpdate({ _id: args.id }, args);
    }
  };
  return saveRecord;
};

function curryGenericDelete() {}

module.exports = GenericCRUD;
