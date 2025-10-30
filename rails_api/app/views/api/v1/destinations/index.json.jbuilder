# app/views/api/v1/destinations/index.json.jbuilder

json.array! @destinations do |destination|
  json.id          destination.id
  json.name        destination.name
  json.description destination.description
  json.image_url   destination.image_url
end