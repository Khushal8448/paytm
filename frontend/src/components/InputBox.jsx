function InputBox({ placeholder, label }) {
  return (
    <div>
      <div className="py-2 text-left text-sm font-medium" htmlFor={label}>
        {label}
      </div>
      <input
        type="text"
        className="w-full rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xl font-medium text-slate-700"
        name={label}
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
