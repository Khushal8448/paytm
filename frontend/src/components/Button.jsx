function Button({ label, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full rounded-lg bg-slate-900 py-2 uppercase text-slate-50 hover:bg-slate-950"
    >
      {label}
    </button>
  );
}

export default Button;
