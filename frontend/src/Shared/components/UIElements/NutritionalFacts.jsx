import React from "react";

//check keys for more than 2 keys and have the keys higher than 2 be subkeys
//split keys by capital letter and use that for the title (Capitalize each letter)
const DummyNutrition = {
  servingSize: "2oz",
  totalServings: "18",
  fat: {
    value: "8g",
    daily: 10,
    saturatedFat: { value: "1g", daily: 5 },
    transFat: { value: "0g" },
  },
  cholesterol: { value: "0mg", daily: 0 },
  sodium: { value: "160mg", daily: 7 },
  totalCarbohydrate: {
    value: "37g",
    daily: 13,
    dietaryFiber: { value: "4g", daily: 14 },
    totalSugars: { value: "12g" },
    addedSugar: { value: "10g", daily: 20 },
  },
  protein: { value: "3g" },
  VitaminsAndMinerals: [
    { name: "VitaminD", value: "2mcg", daily: 10 },
    { name: "Calcium", value: "260mcg", daily: 20 },
    { name: "Iron", value: "8mg", daily: 45 },
    { name: "Potassium", value: "235mg", daily: 6 },
  ], //teste
};
console.log("This is going to be an interesting component to create.");
const NutritionalFacts = (props) => {
  const { nutrition } = props;
  let keys = Object.keys(DummyNutrition);
  const disclamer =
    "*Percent Daily Values (DV) are based on a 2,000 calorie diet. Your Daily Values may be higher or lower depending on your calorie needs.";
  return (
    <section className="flex flex-col px-2  pb-[2rem] border-[1px] relative">
      <p className="text-3xl bold border-b-4">NUTRITION FACTS</p>
      <p>test</p>
    </section>
  );
};

export default NutritionalFacts;
