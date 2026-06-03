/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3102703825")

  // update field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "select3848597695",
    "maxSelect": 0,
    "name": "statut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "En attente",
      "Accepter",
      "Refuser"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3102703825")

  // update field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "select3848597695",
    "maxSelect": 0,
    "name": "statut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "en attente",
      "accepter",
      "refuser"
    ]
  }))

  return app.save(collection)
})
