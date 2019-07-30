class AddIndexUniqueArticleUrlSource < ActiveRecord::Migration[5.2]
  def change
    add_index :articles, [:article_url, :source_id, :published_at], unique: true
  end
end
