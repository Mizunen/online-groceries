import React from "react";
//split keys by capital letter and use that for the title (Capitalize each letter)
const NutritionalFact = (props) => {
  const { factKey, fact, isLastFact, isSubFact } = props;
  let classes = `flex justify-between`;
  let factNameStart = factKey.charAt(0).toUpperCase() + factKey.slice(1); //capitalize first character and add rest of string.
  let factNameArray = factNameStart.match(/[A-Z][a-z]+/g);
  let factName = factNameArray.join(" ");
  <p>{factName}</p>;
  let hasSubKeys = Object.keys(fact).legth > 2;
  let subKeys = [];
  if (hasSubKeys) {
    subKeys = Object.keys(fact).slice(2);
  }
  let nutritionClasses = "flex justify-between";

  return (
    <>
      <p
        key={factName}
        className={`${nutritionClasses} border-b-2 ${
          fact === "protein" && "border-b-[14px]"
        } ${isLastFact === true && "border-b-[8px]"}
        ${isSubFact && "border-b-[1px]"}
        `}
      >
        <span className={`${isSubFact && "font-normal pl-[1rem]"}`}>
          {factName} <span className="font-normal text-sm">{fact.value}</span>
        </span>
        <span>{Object.keys(fact).includes("daily") && fact.daily + "%"}</span>
      </p>
    </>
  );
};

export default NutritionalFact;
