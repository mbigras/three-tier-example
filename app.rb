require 'json'
require 'sinatra'
require 'sqlite3'

db = SQLite3::Database.new 'test.db'

before do
  headers( "Access-Control-Allow-Origin" => "*" )
end

get '/' do
  <<~EOL
  GET  /things
  GET  /things/:id
  POST /things -d '{"name":"foo"}'
  EOL
end

get '/things' do
  db
  .execute("SELECT id, name FROM things;")
  .map { |row| { id: row.first, name: row.last } }
  .to_json
end

get '/things/:id' do
  name = db
  .execute("SELECT id, name FROM things WHERE id = #{params[:id]};")
  .map { |row| { id: row.first, name: row.last } }
  .first
  .to_json
end

post '/things' do
  body = JSON.parse request.body.read
  thing = body['name']
  db.execute "INSERT INTO things ( name ) VALUES ( ? )", thing
  { id: db.last_insert_row_id }.to_json
end