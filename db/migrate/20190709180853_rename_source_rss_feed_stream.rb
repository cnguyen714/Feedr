class RenameSourceRssFeedStream < ActiveRecord::Migration[5.2]
  def change
    rename_column :sources, :rss_url, :stream_url
  end
end
