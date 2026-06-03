/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3654425602")

  // update field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_175513025",
    "help": "",
    "hidden": false,
    "id": "relation1996459178",
    "maxSelect": 10,
    "minSelect": 0,
    "name": "bar",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3654425602")

  // update field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_175513025",
    "help": "",
    "hidden": false,
    "id": "relation1996459178",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "bar",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
