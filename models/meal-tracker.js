const mongoose = require('mongoose');

const mealDaySchema = new mongoose.Schema({
  date: Date,
  isCheatDay: Boolean,
  meals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MealEntry'
  }]
});

const trackerSchema = new mongoose.Schema({
  name: String,
  mealDays: [mealDaySchema]
});

const MealDay = mongoose.model('MealDay', mealDaySchema);
const MealTracker = mongoose.model('MealTracker', trackerSchema);

module.exports = {
  MealDay: MealDay,
  MealTracker: MealTracker,
};
