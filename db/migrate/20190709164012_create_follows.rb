class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :feed_id, null: false
      t.integer :source_id, null: false

      t.timestamps
    end
    add_index :follows, :feed_id
    add_index :follows, :source_id
    add_index :follows, [:feed_id, :source_id], unique: true
  end
end
