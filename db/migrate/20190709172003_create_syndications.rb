class CreateSyndications < ActiveRecord::Migration[5.2]
  def change
    create_table :syndications do |t|
      t.string :name, null: false
      t.string :description
      t.string :source_url
      t.string :rss_url, null: false
      t.string :icon_url

      t.timestamps
    end
    add_index :syndications, :name, unique: true
    add_index :syndications, :rss_url, unique: true
  end
end
