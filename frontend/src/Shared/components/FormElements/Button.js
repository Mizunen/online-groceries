const Button = (props) => {
  return (
    <button
      className="p-[0.75rem] bg-green rounded-lg text-center"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
