class AddUserColumnSource < ActiveRecord::Migration[5.2]
  def change
    add_column :sources, :user_id, :integer
    add_index :sources, :user_id
  end
end
