/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2693598926")

  // update collection data
  unmarshal({
    "name": "retours_programmes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2693598926")

  // update collection data
  unmarshal({
    "name": "retour_programmes"
  }, collection)

  return app.save(collection)
})
