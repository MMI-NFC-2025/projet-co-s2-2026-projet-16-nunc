/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2951504405")

  // remove field
  collection.fields.removeById("file1704208859")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2951504405")

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "file1704208859",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "icon",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
})
