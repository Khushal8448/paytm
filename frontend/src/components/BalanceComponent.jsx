import { useEffect, useState } from "react";
import axios from "axios";

const BalanceComponent = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setBalance(res.data.balance.toFixed(2)));
  }, []);

  return (
    <div className="flex">
      <p className="py-2 text-xl font-semibold">Your Balance : </p>
      <p className="py-2 text-xl font-semibold">
        &nbsp; <span>Rs</span> {balance}
      </p>
    </div>
  );
};

export default BalanceComponent;
