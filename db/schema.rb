# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_29_225847) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "title", default: ""
    t.string "body"
    t.string "article_url", null: false
    t.string "image_url"
    t.integer "source_id", null: false
    t.datetime "published_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "author"
    t.index ["article_url", "source_id", "published_at"], name: "index_articles_on_article_url_and_source_id_and_published_at", unique: true
    t.index ["article_url"], name: "index_articles_on_article_url"
    t.index ["source_id"], name: "index_articles_on_source_id"
    t.index ["title"], name: "index_articles_on_title"
  end

  create_table "feeds", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_feeds_on_name"
    t.index ["user_id"], name: "index_feeds_on_user_id"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "feed_id", null: false
    t.integer "source_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feed_id", "source_id"], name: "index_follows_on_feed_id_and_source_id", unique: true
    t.index ["feed_id"], name: "index_follows_on_feed_id"
    t.index ["source_id"], name: "index_follows_on_source_id"
  end

  create_table "sources", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.string "source_url"
    t.string "stream_url", null: false
    t.string "icon_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["name"], name: "index_sources_on_name", unique: true
    t.index ["stream_url"], name: "index_sources_on_stream_url", unique: true
    t.index ["user_id"], name: "index_sources_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
