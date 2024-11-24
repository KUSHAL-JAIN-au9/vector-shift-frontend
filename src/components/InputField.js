const InputField = ({ label, value, onChange }) => (
  <label style={{ display: "block", marginBottom: "8px" }}>
    {label}:
    <input type="text" value={value} onChange={onChange} autoFocus />
  </label>
);

export default InputField;
