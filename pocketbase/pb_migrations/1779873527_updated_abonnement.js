/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3416414251")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2951504405",
    "help": "",
    "hidden": false,
    "id": "relation2841473509",
    "maxSelect": 10,
    "minSelect": 0,
    "name": "avantage",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3416414251")

  // remove field
  collection.fields.removeById("relation2841473509")

  return app.save(collection)
})
