import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  console.log(firstName);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/v1/user/signup", {
        firstName,
        lastName,
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-300">
      <div className="flex w-96 flex-col justify-center rounded-lg  bg-white p-3 text-center">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Khushal"
          label="First Name"
        />
        <InputBox
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Mali"
          label="Last Name"
        />
        <InputBox
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="khushal@gmail.com"
          label="Email"
        />
        <InputBox
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*******8574"
          label="Password"
          isPassword={true}
        />
        <div className="pt-4">
          <Button onClick={handleSubmit} label="Sign Up" />
        </div>
        <BottomWarning
          label="Already have an account ?"
          to={"/signin"}
          buttonText={"Sign In"}
        />
      </div>
    </div>
  );
};

export default Signup;
