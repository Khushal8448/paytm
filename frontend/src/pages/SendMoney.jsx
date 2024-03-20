import axios from "axios";
import InputBox from "../components/InputBox";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState("");
  // console.log(searchParams.get("name"));

  const friendsName = searchParams.get("name");

  function moneyTransfer() {
    axios
      .post(
        "http://localhost:3001/api/v1/account/transfer",
        {
          to: searchParams.get("id"),
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      )
      .then((res) => console.log(res));
  }

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <div className="flex max-w-80 flex-col items-center justify-center gap-8 bg-white p-11 shadow-md">
        <div className="w-full text-center text-2xl font-bold">Send Money</div>
        <div className="flex items-center gap-3 self-start">
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-green-500 text-xl font-semibold text-white">
            {friendsName[0].toUpperCase()}
          </div>
          <div className="text-2xl font-semibold">{friendsName}</div>
        </div>

        <InputBox
          label={"Amount"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          Rs={true}
          placeholder={"Enter Amount"}
        />

        <button
          className="w-full rounded-md bg-green-500 py-2 text-xl uppercase text-white transition-colors hover:bg-green-600"
          onClick={moneyTransfer}
        >
          Initiate Transfer
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
