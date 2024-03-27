import React from "react";
import NutritionalFact from "./NutritionalFact";

//check keys for more than 2 keys and have the keys higher than 2 be subkeys

const DummyNutrition = {
  servingSize: "2oz",
  totalServings: "18",
  calories: 230,
  totalFat: {
    value: "8g",
    daily: 10,
    saturatedFat: { value: "1g", daily: 5 },
    transFat: { value: "0g" },
  },
  cholesterol: { value: "0mg", daily: 0 },
  sodium: { value: "160mg", daily: 7 },
  TotalCarbohydrate: {
    value: "37g",
    daily: 13,
    dietaryFiber: { value: "4g", daily: 14 },
    totalSugars: { value: "12g" },
    addedSugar: { value: "10g", daily: 20 },
  },
  protein: { value: "3g" },
  vitaminD: { value: "2mcg", daily: 10 },
  calcium: { value: "260mcg", daily: 20 },
  iron: { value: "8mg", daily: 45 },
  potassium: { value: "235mg", daily: 6 },
};
let DummyNutritionArray = Object.keys(DummyNutrition);

const NutritionalFacts = (props) => {
  // const { nutrition } = props;
  let nutrition = DummyNutrition;
  let keys = Object.keys(DummyNutrition);
  let nutritionClasses = "flex justify-between";
  const disclamer =
    "* The % Daily Value (DV) teslls you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.";
  return (
    <section className="flex flex-col w-[20rem] px-2  pb-[1rem] border-[2px] relative font-bold">
      <p className="text-[2.12rem]  border-b-[2px]">NUTRITION FACTS</p>
      <p>{nutrition.totalServings} servings per container</p>

      <p className={`${nutritionClasses}  text-xl border-b-[.7rem]`}>
        <span>Serving Size</span> <span>{nutrition.servingSize}</span>
      </p>
      <p className="text-sm">Amount per serving</p>
      <p className={`${nutritionClasses} text-4xl border-b-[6px]`}>
        Calories <span>{nutrition.calories}</span>
      </p>
      <p className="w-[18rem] flex justify-end text-xs">% Daily Value *</p>
      {keys.map((factKey, index) => {
        if (index > 2) {
          let hasSubKeys = Object.keys(nutrition[factKey]).length > 2;
          let subKeys = [];
          if (hasSubKeys) {
            subKeys = Object.keys(nutrition[factKey]).slice(2);
            console.log("subkeys are ");
            console.log(subKeys);
            return (
              <>
                <NutritionalFact factKey={factKey} fact={nutrition[factKey]} />
                {subKeys.map((subFactKey) => {
                  return (
                    <NutritionalFact
                      factKey={subFactKey}
                      fact={nutrition[factKey][subFactKey]}
                      isSubFact
                    />
                  );
                })}
              </>
            );
          } else {
            return (
              <NutritionalFact factKey={factKey} fact={nutrition[factKey]} />
            );
          }
        }
      })}
      <p className="text-xs">{disclamer}</p>
    </section>
  );
};

export default NutritionalFacts;

/* if (index >= 3) {
          // capitalize first letter then separate

          let factNameStart = fact.charAt(0).toUpperCase() + fact.slice(1); //capitalize first character and add rest of string.
          let factNameArray = factNameStart.match(/[A-Z][a-z]+/g);
          let factName = factNameArray.join(" ");
          <p>{factName}</p>;
          let isLastFact =
            fact === nutrition[nutrition.length - 1] ? true : false;
          let hasSubKeys = Object.keys(nutrition[fact]).length > 2;
          let subKeys = [];
          if (hasSubKeys) {
            subKeys = Object.keys(nutrition[fact]).slice(2);
          }
          console.log("subkeys are ");
          console.log(subKeys);
          return (
            <>
              <p
                key={factName}
                className={`${nutritionClasses} border-b-2 ${
                  fact === "protein" && "border-b-[14px]"
                } ${isLastFact === true && "border-b-[8px]"}`}
              >
                <span>
                  {factName}{" "}
                  <span className="font-normal text-sm">
                    {nutrition[fact].value}
                  </span>
                </span>
                <span>
                  {Object.keys(nutrition[fact]).includes("daily") &&
                    nutrition[fact].daily + "%"}
                </span>
              </p>
              {hasSubKeys &&
                subKeys.map((subFact) => {
                  return;
                })}
            </>
          );
        }
      })} */
