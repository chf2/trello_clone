# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.title @board.title

json.lists @board.lists do |list|
  json.title list.title

  json.cards list.cards do |card|
    json.title card.title
    json.description card.description
    json.list_id card.list_id
  end
end