import { useState } from "react";

import searchIcon from "../../assets/icons/search.svg";
const Searchbar = (props) => {
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };
  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  //  w-[15rem]
  return (
    <form onSubmit={handleSearch} className={props.containerClasses}>
      <section className="flex relative text-green items-center ">
        <section className="w-[20rem]">
          <figure className="w-[1.5rem] h-[1.5rem] absolute left-[0.5rem] top-[0.65rem]">
            <img src={searchIcon} />
          </figure>
          <input
            className={`${
              props.classes
                ? props.classes
                : "w-[20rem] bg-searchbarGrey text-textGrey rounded-lg outline-none p-[0.5rem] pl-[2rem]"
            }`}
            id="search"
            type="input"
            placeholder="Search"
            onChange={onChangeHandler}
          ></input>
        </section>
      </section>
    </form>
  );
};

export default Searchbar;
