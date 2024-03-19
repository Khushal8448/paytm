import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

const Signup = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-300">
      <div className="flex w-96 flex-col justify-center rounded-lg  bg-white p-3 text-center">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox placeholder="Khushal" label="First Name" />
        <InputBox placeholder="Mali" label="Last Name" />
        <InputBox placeholder="khushal@gmail.com" label="Email" />
        <InputBox placeholder="*******8574" label="Password" />
        <div className="pt-4">
          <Button label="Sign Up" />
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
