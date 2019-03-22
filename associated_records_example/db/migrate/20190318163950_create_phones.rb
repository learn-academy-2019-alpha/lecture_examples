class CreatePhones < ActiveRecord::Migration[5.2]
  def change
    create_table :phones do |t|
      t.integer :contact_id
      t.string :number
      t.string :description
      t.string :brand
      t.timestamps
    end
  end
end
