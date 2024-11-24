const SelectField = ({ label, value, onChange, options }) => (
  <label style={{ display: "block", marginBottom: "8px" }}>
    {label}:
    <select
      value={value}
      onChange={onChange}
      style={{ width: "100%", color: "#FFF" }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

export default SelectField;
