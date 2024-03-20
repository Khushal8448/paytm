import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setUsers(res.data.users));
  }, [filter]);

  return (
    <div>
      <div className="mt-6 text-xl font-bold tracking-wider">Users</div>
      <div className="my-2">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          name="users"
          placeholder="Search user"
          className="w-full rounded-md border border-slate-400 bg-slate-100 px-2 py-1 text-xl"
          id="users"
        />
      </div>
      <div className="no-scrollbar max-h-screen overflow-scroll">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

const User = ({ user }) => {
  const navigate = useNavigate();

  function ToSendMoney() {
    navigate(`/send?id=${user._id}&name=${user.firstName}`);
  }

  return (
    <div className="flex items-center justify-between px-1 py-2 [&:not(:last-child)]:border-b-[1px]">
      <div className="flex items-center justify-center gap-2">
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-200 text-xl font-semibold text-slate-800">
          {user.firstName[0]}
        </div>
        <p className="text-lg">
          {user.firstName}&nbsp;{user.lastName}
        </p>
      </div>
      <div className="">
        <button
          className="rounded-lg bg-slate-900 px-2 py-1 text-sm  text-white"
          onClick={ToSendMoney}
        >
          Send Money
        </button>
      </div>
    </div>
  );
};

export default Users;
