import React, { useState } from "react";

////Display images for products and display the clicked image.
let onlineImage =
  "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg";
const ImageList = (props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const selectImageHandler = (event) => {
    setSelectedImage(event.target.name);
  };
  const allImages = [
    ...props.images,
    "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",
  ];
  return (
    <>
      <figure className=" h-[20rem] w-full  tablet:[w-35rem] rounded-b-[1.25rem] overflow-hidden flex justify-center bg-searchBarGrey ">
        <img
          className="h-full w-full rounded-b-xl bg-searchbarGrey"
          src={allImages[selectedImage]}
        />
      </figure>
      <div className="flex mt-2 ml-[1rem]">
        {props.images.map((image, index) => {
          return (
            <figure
              key={`preview-image-${index}`}
              className={`h-[5rem] w-[5rem]  box-content mx-2 ${
                selectedImage == index && "border-2 border-green"
              }`}
              onClick={selectImageHandler}
            >
              <img className="w-full h-full" src={image} name={index} />
            </figure>
          );
        })}
      </div>
    </>
  );
};

export default ImageList;
