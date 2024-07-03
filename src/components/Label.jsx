const Label = ({ text, htmlFor, ...rest }) => {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700" {...rest}>
      {text}
    </label>
  );
};

export default Label;
