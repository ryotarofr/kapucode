export const codeFile1 = {
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
  "/Quest2.js": {
    code: `// reactからuseStateをimportしよう
import { useState } from 'react';
  export function Quest1() {
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
  "/Quest3.js": {
    code: `// reactからuseStateをimportしよう
import { useState } from 'react';
  export function Quest1() {
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
  "/Quest4.js": {
    code: `// reactからuseStateをimportしよう
import { useState } from 'react';
  export function Quest1() {
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
  "/Quest5.js": {
    code: `// reactからuseStateをimportしよう
import { useState } from 'react';
  export function Quest1() {
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
    code: `import { Quest1 } from ".././Quest1";
import { Quest1Ans } from ".././Quest1Ans";
export default function Home({ data }) {
      return (
        <div>
          <h1>{data}</h1>
          {/* コメントアウトを解除してください  mac:[⌘]+[/]  windows:[Ctrl]+[/] */}
          <h2>Quest1</h2>
          {/* <Quest1 /> */}
          <h2>Quest2</h2>
          {/* <Quest2 /> */}
          <h2>Quest3</h2>
          {/* <Quest3 /> */}
          <h2>Quest4</h2>
          {/* <Quest4 /> */}
          <h2>Quest5</h2>
          {/* <Quest5 /> */}

    
          <h2>Answer1</h2>
          {/* <Quest1Ans /> */}
          <h2>Answer2</h2>
          {/* <Quest2Ans /> */}
          <h2>Answer3</h2>
          {/* <Quest3Ans /> */}
          <h2>Answer4</h2>
          {/* <Quest4Ans /> */}
          <h2>Answer5</h2>
          {/* <Quest5Ans /> */}
          {/*  */}
        </div>
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
