var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
listLength=ingredients.length

// Write a while loop that prints out the contents of ingredients:
count = 0
while (count < listLength) {
  console.log(ingredients[count])
  count ++
}

// Write a for loop that prints out the contents of ingredients:
for (var count = 0; count < listLength; count++) {
  console.log(ingredients[count]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var count = listLength; count >= 0; count--) {
  console.log(ingredients[count]);
}