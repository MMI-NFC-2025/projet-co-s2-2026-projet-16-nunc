/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_175513025")

  // update field
  collection.fields.addAt(7, new Field({
    "help": "",
    "hidden": false,
    "id": "file4163000079",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_175513025")

  // update field
  collection.fields.addAt(7, new Field({
    "help": "",
    "hidden": false,
    "id": "file4163000079",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "image_principal",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
})
