# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.title @board.title
json.id @board.id

json.lists @board.lists do |list|
  json.title list.title
  json.id list.id
  json.ord list.ord

  json.cards list.cards do |card|
    json.extract! card :id, :title, :description, :list_id, :ord
  end
end