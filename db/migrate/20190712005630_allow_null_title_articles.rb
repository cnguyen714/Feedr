class AllowNullTitleArticles < ActiveRecord::Migration[5.2]
  def change
        change_column :articles, :title, :string, :null => true

  end
end
