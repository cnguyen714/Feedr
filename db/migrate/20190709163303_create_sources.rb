class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
      t.string :name, null: false
      t.string :description
      t.string :source_url
      t.string :rss_url, null: false
      t.string :icon_url

      t.timestamps
    end
    add_index :sources, :name, unique: true
    add_index :sources, :rss_url, unique: true
  end
end
