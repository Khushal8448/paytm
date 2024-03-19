function Appbar() {
  return (
    <div className="flex items-center justify-between border p-3">
      <h1 className="cursor-pointer text-xl font-bold uppercase tracking-wider">
        PayTm App
      </h1>
      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold">Hello User</div>
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-200 text-xl font-semibold text-slate-800">
          U
        </div>
      </div>
    </div>
  );
}

export default Appbar;
