import { CopyTextButton } from "../CopyTextButton";

export const QuestItem1 = () => {
  const dir1 = "./Quest1.js";
  const code1 = `import { useState } from 'react';`;

  return (
    <div>
      <div>Quest1: ローカルな状態を持ちたい</div>
      <div>method: `useState`フックを使用する</div>
      <CopyTextButton dir={dir1} text={code1} />
    </div>
  );
};
