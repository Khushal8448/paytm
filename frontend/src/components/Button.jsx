function Button({ label }) {
  return (
    <button className="w-full rounded-lg bg-slate-900 py-2 uppercase text-white">
      {label}
    </button>
  );
}

export default Button;
