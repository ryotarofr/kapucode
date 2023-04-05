import { CopyTextButton } from "../CopyTextButton";

export const temp = () => {
  return (
    <div className="max-h-[78vh] overflow-auto">
      <div className="text-md my-2 font-bold"></div>
      <CopyTextButton dir={""} text={""} />
      <div className="h-4" />
    </div>
  );
};

export const QuestItem1 = () => {
  return (
    <div className="max-h-[78vh] overflow-auto">
      <div className="text-md my-2 font-bold">実際に`useState`を使ってみよう！</div>
      {/* <div className="my-2 text-md font-bold">`useState`フックを使用することで、簡単にローカル環境で状態管理をすることができます。</div> */}
      {/* <div>まずは、基本的なuseStateの使い方について実践してみましょう！</div> */}
      <CopyTextButton dir={"./Quest1.js"} text={`import { useState } from 'react';`} />
      <div className="h-4" />
      <div className="text-md my-2 font-bold">stateを定義しよう</div>
      <CopyTextButton dir={"変数名は以下を使用"} text={"[count, setCount]"} />
      <div className="h-4" />
      <div className="text-md my-2 font-bold">カウントを1ずつ加算する関数を作ろう</div>
      <CopyTextButton dir={"ヒント"} text={"setCount(＋1する処理)"} />
      <div className="h-4" />
      <div className="text-md my-2 font-bold">index.jsにcomponentファイルをimportしよう</div>
      <CopyTextButton dir={"index.js"} text={`import { Quest1 } from ".././Quest1";`} />
      <div className="h-4" />
      <div className="text-md my-2 font-bold">Quest1を表示させよう</div>
      <CopyTextButton dir={"index.js"} text={"<Quest1 />"} />
      <div className="h-4" />
    </div>
  );
};

export const QuestItem2 = () => {
  return (
    <div className="max-h-[78vh] overflow-auto">
      <div className="text-md my-2 font-bold">次は`useEffect`です！</div>
      <CopyTextButton dir={"hooksをimportしよう"} text={"useEffect"} />
      <div className="h-4" />
      <div className="text-md font- my-2">`useEffect`を定義しよう</div>
      <CopyTextButton
        dir={"hooksをimportしよう"}
        text={`useEffect(() => {
}, []);`}
      />
      <div className="h-4" />
      <div className="text-md font- my-2">ヒント</div>
      <CopyTextButton
        dir={"第2引数の[]が重要です"}
        text={`useEffect(() => {
setIsEven(count % 3 === 0);
}, [count]);`}
      />
      <div className="h-4" />
      <div className="text-md my-2 font-bold">Quest1を表示させよう</div>
      <CopyTextButton dir={"/index.js"} text={"<Quest2 />"} />
    </div>
  );
};
