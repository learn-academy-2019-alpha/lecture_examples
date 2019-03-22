class CreateGymMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :gym_memberships do |t|
      t.string :name
      t.integer :contact_id
      t.datetime :memberSince

      t.timestamps
    end
  end
end
