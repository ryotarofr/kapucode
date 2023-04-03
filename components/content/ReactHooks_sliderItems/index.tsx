import Image from "next/image";

export const SliderItem1 = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>
        <h1
          className="
      text-center text-3xl 
      lg:my-10 
      lg:text-5xl"
        >
          React/TypeScriptを学ぼう
        </h1>
        <div
          className="
      text-md pt-2
      text-center lg:pt-8
       lg:text-lg"
        >
          <h2>
            このセクションでは、React/TypeScriptの基本的なコードの書き方について学んでいきます。
          </h2>
          <h2>1つ1つ丁寧に解説していきますので最後まで頑張っていきましょう!</h2>
        </div>
        <div className="flex h-[50%] items-center justify-center">
          <Image
            alt="image"
            className="
       mx-auto
       mt-1
      flex w-[240px]
      items-center rounded-md object-contain md:w-[300px] lg:w-[500px]
      "
            height={200}
            src="/sliderimgs/1.png"
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export const SliderItem2 = () => {
  return <div></div>;
};
