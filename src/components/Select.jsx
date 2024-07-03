const Select = ({ options, className, ...rest }) => {
  return (
    <select
      className={` border text-sm p-2 rounded ${className}`}
      {...rest}
      aria-label={rest["aria-label"] || "Select"}
    >
      {options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
