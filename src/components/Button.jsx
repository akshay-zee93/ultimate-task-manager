const Button = ({ children, className, ...rest }) => {
  return (
    <button className={`cursor-pointer p-2 rounded-lg ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
