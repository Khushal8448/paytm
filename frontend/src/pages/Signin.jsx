import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

function Signin() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-300">
      <div className="flex w-96 flex-col justify-center rounded-lg  bg-white p-3 text-center">
        <Heading label={"Sign In"} />
        <SubHeading label={"Enter your credentials to access your account"} />

        <InputBox placeholder="khushal@gmail.com" label="Email" />
        <InputBox placeholder="*******8574" label="Password" />
        <div className="pt-4">
          <Button label="Sign In" />
        </div>
        <BottomWarning
          label="Don't have an account ?"
          to={"/signup"}
          buttonText={"Sign up"}
        />
      </div>
    </div>
  );
}

export default Signin;
