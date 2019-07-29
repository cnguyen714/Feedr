class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :body
      t.string :article_url, null: false
      t.string :image_url
      t.integer :source_id, null: false
      t.datetime :published_at, null: false

      t.timestamps
    end
    add_index :articles, :title
    add_index :articles, :article_url
    add_index :articles, :source_id
  end
end
