class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.datetime :date
      t.string :location
      t.integer :seats
      t.integer :speakers

      t.timestamps
    end
  end
end
