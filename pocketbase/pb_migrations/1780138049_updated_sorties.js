/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3654425602")

  // add field
  collection.fields.addAt(11, new Field({
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
      "À venir",
      "En cours",
      "Terminée",
      "Annulée"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3654425602")

  // remove field
  collection.fields.removeById("select3848597695")

  return app.save(collection)
})
