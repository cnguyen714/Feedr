class SetDefaultValueTitleArticle < ActiveRecord::Migration[5.2]
  def change
    change_column :articles, :title, :string, :default => ""
  end
end
