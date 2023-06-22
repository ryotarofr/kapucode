export const codeFile1 = {
  "/Home.module.css": {
    code: `.text{
color: red
    }`,
  },
  "/Quest1.js": {
    code: `// reactからuseStateをimportしよう

  export function Quest1() {
    // useStateを使ってみよう
    
    // カウントアップ関数をつくってみよう
    function handleClick() {
      // stateを+1させて更新させよう
      
  }
    
  return (
    <div>
      <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  );
}`,
  },
  "/Quest1Ans.js": {
    code: `// reactからuseStateをimportしよう
import { useState } from 'react';
  export function Quest1Ans() {
    // useStateを使ってみよう
    const [count, setCount] = useState(0);
    // カウントアップ関数をつくってみよう
    function handleClick() {
      // stateを+1させて更新させよう
      setCount(count + 1);
  }
    
  return (
    <div>
      <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  );
}`,
  },
  "pages/index.js": {
    code: `import { useState } from "react";
import styles from ".././Home.module.css";
import { Quest1 } from ".././Quest1";
import { Quest1Ans } from ".././Quest1Ans";
export default function Home({ data }) {
  const [open, setOpen] = useState(false)
      return (
        <>
          <h1 className={styles.text}>{data}</h1>
          {/* Quest1をを表示させよう */} 
       
          {open ? <h2 onClick={() => setOpen(false)}>答えを非表示</h2> : <h2 onClick={() => setOpen(true)}>答えを表示</h2> }
          {open && <Quest1Ans />}
        </>
      );
    }
      
    export function getServerSideProps() {
      return {
        props: { data: "プレビュー" },
      }
    }
    `,
  },
};

export const codeFile2 = {
  "/Quest2.js": {
    code: `// hooksをimport
import { useState } from 'react';    
export function Quest2Ans() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);
        
  // useEffectを定義し3の倍数でcountを更新するstateを作ってください
        
  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }
        
  return (
    <div>
      <p>Count: {count}</p>
      <p>コンポーネントを更新: {isEven ? 'Yes' : 'No'}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
}`,
  },
  "/Quest2Ans.js": {
    code: `// hooksをimport
import { useState, useEffect } from 'react';

export function Quest2Ans() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);
    
  // useEffectを定義しcountが3の倍数であるときisEvenを更新するstateを作ってください
  useEffect(() => {
    setIsEven(count % 3 === 0);
  }, [count]);
    
  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }
    
  return (
    <div>
      <p>Count: {count}</p>
      <p>コンポーネントを更新: {isEven ? 'Yes' : 'No'}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
}`,
  },
  "pages/index.js": {
    code: `import { useState } from "react";
import { Quest2 } from ".././Quest2";
import { Quest2Ans } from ".././Quest2Ans";
export default function Home({ data }) {
  const [open, setOpen] = useState(false)
      return (
        <>
          <h1>{data}</h1>
          {/* Quest2をを表示 */} 
       
          {open ? <h2 onClick={() => setOpen(false)}>答えを非表示</h2> : <h2 onClick={() => setOpen(true)}>答えを表示</h2> }
          {open && <Quest2Ans />}
        </>
      );
    }
      
    export function getServerSideProps() {
      return {
        props: { data: "プレビュー" },
      }
    }
    `,
  },
};
