import ProductItem from "./ProductItem";
import { register } from "swiper/element/bundle";
import styles from "./ProductList.module.css";
import Card from "../../Shared/components/UIElements/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";
register();
const rem = 16;
const CategoryList = (props) => {
  //
  return (
    <section className="pl-[2rem] pb-[2rem] ">
      <div className="flex justify-between pr-[2rem] relative bottom-[-1rem] tablet:w-[20rem]">
        <h2 className="text-center font-semibold text-xl capitalize">
          {props.category}
        </h2>
        <NavLink
          className="text-green h-[2rem]"
          to={`/products/category/${props.link}`}
        >
          See all
        </NavLink>
      </div>

      <Swiper
        spaceBetween={50}
        speed={500}
        breakpoints={{
          375: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
          1620: {
            slidesPerView: 7,
          },
        }}
        // breakpoints={{
        //   375: {
        //     slidesPerView: 2,
        //   },
        //   540: {
        //     slidesPerView: 3,
        //   },
        //   767: {
        //     slidesPerView: 4,
        //   },
        //   1080: {
        //     slidesPerView: 5,
        //   },
        // }}
      >
        {props.products.map((product) => {
          return (
            <SwiperSlide>
              <ProductItem product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>

    // <swiper-container
    //   slides-per-view="2"
    //   speed="500"
    //   loop="false"
    //   css-mode="true"
    //   space-between={2 * rem}
    // >
    //   {props.products.map((product) => {
    //     return (
    //       <swiper-slide>
    //         <ProductItem product={product}></ProductItem>
    //       </swiper-slide>
    //     );
    //   })}
    // </swiper-container>

    // <ul className="flex flex-row overflow-hidden w-[20rem]">
    //   {props.products.map((product) => {
    //     console.log(product);
    //     return <ProductItem product={product} />;
    //   })}
    // </ul>
  );
};

export default CategoryList;
