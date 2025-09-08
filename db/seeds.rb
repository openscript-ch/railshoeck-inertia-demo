# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#
# Seed items

Item.delete_all


item_types = %w[electronics furniture decoration]
item_names = %w[
  RaspberryPi Arduino SSD GPU CPU Motherboard RAM Router Switch NAS Headset Drone Microphone Webcam Tablet Stylus
  Gamepad Joystick PCB Breadboard Multimeter Oscilloscope Actuator Powerbank Plotter 3DPrinter Chair Plant Monitor
  Laptop Sofa Table Lamp Shelf Rug Painting Clock Speaker Mug Book Frame Candle Basket Mirror Pillow Blanket Phone
  Keyboard Mouse Headphones Desk Stool Picture Vase Charger Remote Notebook Pen Pencil Backpack Bottle Microwave Grill
]

item_names.each do |name|
  Item.create!(
    name: ,
    acquisition: Date.today - rand(365).days,
    price: rand(10.0..2000.0).round(2),
    item_type: item_types.sample
  )
end
