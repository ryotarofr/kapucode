import Button from "@mui/material/Button";
import Image from "next/image";

export const Intro = () => {
  return (
    <div className="flex h-[90vh] items-center justify-center">
      <div className="px-10">
        <h1 className=" mb-20 text-center font-serif text-5xl font-black tracking-tighter">
          Full-Stack modern web development
        </h1>
        <h2 className="text-md text-center font-serif">
          さまざまなweb開発技術の紹介と実践的な開発手順をハンズオン形式で学べるサイトです。一緒に手を動かしていきましょう!!
        </h2>
        <div className="flex justify-center pt-20">
          <Button color="secondary" size="large" variant="outlined">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Contents = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-2 grid grid-cols-2 gap-2">
        <div>
          <Button color="secondary" size="large" variant="outlined">
            <div className="">
              <Image alt="logo" height="100" src="/LightMode_CreateNextApp.avif" width="400" />
              <div className="lowercase">Next.js</div>
              <div className="lowercase">Next.jsでフルスタックアプリケーションを作りましょう!</div>
            </div>
          </Button>
        </div>
        <div>
          <Button color="secondary" size="large" variant="outlined">
            <div className="">
              <Image alt="logo" height="100" src="/react.png" width="400" />
              <div className="lowercase">React</div>
            </div>
          </Button>
        </div>
        <div>
          <Button color="secondary" size="large" variant="outlined">
            <div className="">
              <Image alt="logo" height="100" src="/firebase.png" width="400" />
              <div className="lowercase">firebase</div>
            </div>
          </Button>
        </div>
        <div>
          <Button color="secondary" size="large" variant="outlined">
            <div className="">
              <Image alt="logo" height="100" src="/express.jpg" width="400" />
              <div className="lowercase">express</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return <div></div>;
};
