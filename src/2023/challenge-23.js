function organizeChristmasDinner(dishes) {
    const ingredients = new Map();
  
    for (const [dishName, ...dishIngredients] of dishes) {
      for (const ingredient of dishIngredients) {
        ingredients.set(
          ingredient,
          (ingredients.get(ingredient) || []).concat(dishName)
        );
      }
    }
  
    const organizedDishes = [];
    for (const [ingredient, dishes] of ingredients.entries()) {
      if (dishes.length >= 2) {
        organizedDishes.push([ingredient, ...dishes.sort()]);
      }
    }
  
    return organizedDishes.sort();
}