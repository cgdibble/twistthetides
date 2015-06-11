class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.text :title
      t.string :file_path

      t.timestamps
    end
  end
end
