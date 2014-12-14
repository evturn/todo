class CreateToDoTable < ActiveRecord::Migration
  def change
    create_table :to_do_tables do |t|
      t.string :todo
      t.boolean :archived
      t.boolean :done
    end
  end
end
