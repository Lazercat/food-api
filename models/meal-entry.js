const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodServingSchema = new mongoose.Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  numServings: Number
});

var MealEntrySchema = new Schema({
  time: Date,
  foodItems: [FoodServingSchema]
});

const FoodServing = mongoose.model('FoodServing', FoodServingSchema);
const MealEntry = mongoose.model('MealEntry', MealEntrySchema);

module.exports = {
  FoodServing: FoodServing,
  MealEntry: MealEntry,
};
