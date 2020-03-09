# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

street_names = ["Rue Jean Robert", "Rue de Crimée", "Rue Lacépède", "Rue du commandant Lammy", "Rue de la grande truanderie", "Avenue de l'Opéra", "Avenue d'Italie", "Rue Bichat", "Boulevard Perèire"]

puts 'Creating 20 fake events...'
20.times do
  event = Event.new(
    user: User.find(1),
    title:    "#{Faker::Company.name}",
    location: "#{rand(1..80)} #{street_names.sample}, PARIS",
    description: "#{Faker::Lorem.paragraph}",
    date:  Faker::Date.between_except(from: Date.today, to: 1.year.from_now, excepted: Date.today),
    speakers: "#{Faker::Name.name}",
    seats: "#{rand(20..100)}"
  )
  event.save!
end
puts 'Finished!'
