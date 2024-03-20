import InputBox from "../components/InputBox";

const SendMoney = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <div className="flex max-w-80 flex-col items-center justify-center gap-8 bg-white p-11 shadow-md">
        <div className="w-full text-center text-2xl font-bold">Send Money</div>
        <div className="flex items-center gap-3 self-start">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-green-500 text-xl font-semibold text-white">
            U
          </div>
          <div className="text-2xl font-semibold">Friend&apos;s Name</div>
        </div>

        {/* <p className="text-sm font-semibold">Amount in (Rs)</p> */}

        {/* <input
          type="text"
          name="Amount"
          id="Amount"
          className="w-full rounded-md"
        /> */}

        <InputBox label={"Amount"} Rs={true} placeholder={"Enter Amount"} />

        <button className="w-full rounded-md bg-green-500 py-2 text-xl uppercase text-white transition-colors hover:bg-green-600">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
