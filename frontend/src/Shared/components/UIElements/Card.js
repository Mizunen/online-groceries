const Card = (props) => {
  return (
    <article
      className={`border  rounded-2xl h-[16rem] w-[10.8rem] flex flex-col items-center mt-[2rem] relative 
  tablet:h[18rem]  tablet:w-[11.8rem] ${props.classes}`}
    >
      {props.children}
    </article>
  );
};

export default Card;
