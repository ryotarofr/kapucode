import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineUser, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";

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
      <div className="">
        <div className="">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              {toggle ? <h1 className="">Sign Up</h1> : <h1 className="">Sign In</h1>}

              <div className="">
                <label className="">
                  <AiOutlineUser className="" />
                  <input
                    className=""
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                  />

                  {errors.email && <p className="">正しいメールアドレスを入力してください。</p>}
                </label>
                <label className="{styles.label}">
                  <RiLockPasswordLine className="{styles.bx}" />
                  <input
                    className=""
                    placeholder="password"
                    type="password"
                    {...register("password", { required: true })}
                  />

                  {errors.password && (
                    <p className="">パスワードは 6 ～ 60 文字である必要があります。</p>
                  )}
                </label>
                {toggle ? (
                  <>
                    <button className="" onClick={() => setLogin(false)}>
                      signup
                    </button>
                    <div className="">
                      すでにアカウントをお持ちの方:
                      <a className="" onClick={toggleBool}>
                        signin
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <button className="" onClick={() => setLogin(true)}>
                      signin
                    </button>
                    <div className="">
                      アカウントをお持ちでない方:
                      <a className="" onClick={toggleBool}>
                        signup now
                      </a>
                    </div>
                  </>
                )}
              </div>
            </form>
            {/* <div className={styles.h1}>Sign In</div> */}
            <AiFillGithub className="" onClick={signInWithGithub} />
            <FcGoogle className="" onClick={signInWithGoogle} />
            {/* <LoginButton className={styles.providerButton} type="button" onClick={signInWithGithub}><AiFillGithub onClick={signInWithGithub} /></LoginButton> */}
            {/* <LoginButton type="button" onClick={logout}>ログアウト</LoginButton> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
