const mongoose = require('mongoose');
require('dotenv').config();
// individual files
const food = require('./food');
const mealEntry = require('./meal-entry');
const mealTracker = require('./meal-tracker');

// connect to the DB
mongoose.connection.openUri(process.env.DB_CONN, {}, (err, connection) => {
  if (err) {
    console.log('Error connecting to Mongo DB', err);
  } else {
    console.log('Mongoose connected to Mongo DB'.);
  }
});

// export
module.exports = {
  NutritionInfo: food.NutritionInfo,
  Food: food.Food,
  FoodServing: mealEntry.FoodServing,
  MealEntry: mealEntry.MealEntry,
  MealDay: mealTracker.MealDay,
  MealTracker: mealTracker.MealTracker,
};
