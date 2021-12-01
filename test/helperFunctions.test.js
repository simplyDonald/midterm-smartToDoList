const { assert } = require('chai');
// const {getUserWithEmail, getUserWithId, addItem, addUser, deleteItem, editItem, allItemsForUser} = require("./databaseHelper/databaseHelper")

const matchKeyWords= {
  shopping:{
    keyWords: ["buy", "get", "purchase"],
    categoryId: 104
  },
  films: {
    keyWords: ["watch", "see", "Netflix"],
    categoryId : 101
  },
  books: {
    keyWords: ["read", "study"],
    categoryId : 103
  },
  restaurants:{
    keyWords: ["eat", "drink", "binge"],
    categoryId : 102
  }
    }

const categorizeItem = function(item,matchKeyWords){
  let category_id;
  let firstWord = item.toLowerCase().split(" ");
  console.log(firstWord[0])
  for (let key in matchKeyWords){
    if (matchKeyWords[key].keyWords.includes(firstWord[0])){
      console.log("matched", matchKeyWords[key].keyWords)
      category_id = matchKeyWords[key].categoryId
      console.log(category_id)
      break;
    }
  }
  return category_id;
}
describe('categorizeItem', function() {
  it ('should return 101 for "watch Harry Potter"', function() {
    const userInput = "watch Harry Potter"
    assert.equal(categorizeItem(userInput,matchKeyWords), 101)
  })

  it ('should return 102 for "eat pizza"', function() {
    const userInput = "eat pizza"
    assert.equal(categorizeItem(userInput, matchKeyWords), 102)
  })
  it ('should return 103 for "read series of unfortunate events"', function() {
    const userInput = "read series of unfortunate events"
    assert.equal(categorizeItem(userInput, matchKeyWords), 103)
  })
  it ('should return 104 for "buy shampoo"', function() {
    const userInput = "buy shampoo"
    assert.equal(categorizeItem(userInput, matchKeyWords), 104)
  })
  it ('should return 104 for "buy shampoo"', function() {
    const userInput = "Buy shampoo"
    assert.equal(categorizeItem(userInput, matchKeyWords), 104)
  })
})
