const mongoose = require('mongoose');

const NutritionInfoSchema = new mongoose.Schema({
  servingSizeAmount: Number,
  servingSizeUnit: String,
  servingSizeDescription: String,
  calories: Number,
  totalFat: Number,
  sodium: Number,
  sugar: Number,
  protein: Number,
  fiber: Number
});

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
  imageUrl: {
    type: String,
    default: ""
  }
  tags: [{
    type: String,
    default: ""
  }],
  NutritionInfo: NutritionInfoSchema,
})

const NutritionInfo = mongoose.model('NutritionInfo', NutritionInfoSchema);
const Food = mongoose.model('Food', FoodSchema);

module.exports = {
  NutritionInfo: NutritionInfo,
  Food: Food,
};
