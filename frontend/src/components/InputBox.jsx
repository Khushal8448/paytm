function InputBox({ placeholder, value, label, Rs, isPassword, onChange }) {
  return (
    <div>
      <div className="py-2 text-left text-sm font-medium" htmlFor={label}>
        {label} {Rs ? "in (Rs)" : ""}
      </div>
      <input
        type={isPassword ? "password" : "text"}
        value={value}
        className="w-full rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xl font-normal text-slate-700"
        onChange={onChange}
        name={label}
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
