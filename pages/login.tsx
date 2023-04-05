import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
// import { RiLockPasswordLine } from "react-icons/ri";

import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const { signIn, signUp, signInWithGithub, signInWithGoogle } = useAuth();

  const [toggle, setToggle] = useState(false);
  const toggleBool = () => setToggle(!toggle);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <>
      <div className="flex h-[100vh] items-center justify-center">
        <div>
          <div className="my-10 text-center text-4xl text-purple-800">Login</div>
          <div
            className="mb-4 flex cursor-pointer rounded-full border px-8 py-4 text-lg"
            onClick={signInWithGithub}
          >
            <AiFillGithub className=" relative mr-4 text-[30px]" />
            <p className="">sign in with Github</p>
          </div>
          <div
            className="flex cursor-pointer rounded-full border px-8 py-4 text-lg"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="relative mr-4 text-[30px]" />
            <p>sign in with Google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
