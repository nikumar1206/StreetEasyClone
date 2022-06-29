json.extract! @listing, :id, :name, :location, :neighborhood, :zip, :price, :rent_bool, :borough, :property_type, :lister_id, :beds, :baths, :lat, :lng, :description
json.imageUrl url_for(@listing.photo) if @listing.photo.attached?
json.lister do
    json.extract! @listing.lister, :email, :name, :phone
end