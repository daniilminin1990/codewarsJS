// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// Или использовать for (let keyRec in recipe) { for (let keyAvail in available) {keyRec == keyAvail} }
function cakes(recipe, available) {
  let exitObj;
  for (let keyRec in recipe) {
    exitObj = { ...exitObj, [keyRec]: 0 };
    for (let keyAvail in available) {
      if (keyRec == keyAvail) {
        if (available[keyAvail] / recipe[keyRec] > 0) {
          exitObj = { ...exitObj, [keyRec]: Math.floor(available[keyAvail] / recipe[keyRec]) };
        }
      }
    }
  }
  console.log(exitObj);
  const result = Math.min(...Object.values(exitObj));
  return result;
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
// must return 0
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));

// Решение других
/* 
const cakes = (recipe, available) => Math.min(
  ...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0))
)
*/
