class AddUsernameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :username, :string
    add_column :users, :picture, :string
    add_column :users, :description, :text
  end
end
