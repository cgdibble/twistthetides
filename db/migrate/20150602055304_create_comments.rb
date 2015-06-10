class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :user_name
      t.string :title
      t.text :content
      t.integer :blog_id

      t.timestamps
    end
  end
end
