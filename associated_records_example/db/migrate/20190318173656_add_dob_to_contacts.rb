class AddDobToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :birthday, :date
  end
end
