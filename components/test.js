import { useMemo, useState } from "react";

export function MyComponent({ propA, propB }) {
  const memoizedValue = useMemo(() => {
    // 変更がない場合は以前の値を返す
    return expensiveFunction(propA, propB);
  }, [propA, propB]);

  return <div>{memoizedValue}</div>;
}

export function MyComponent2({ data }) {
  const sortedData = useMemo(() => {
    return data.sort((a, b) => a - b);
  }, [data]);

  return (
    <div>
      <ul>
        {sortedData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function MyComponent3({ data }) {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const sortedData = useMemo(() => {
    // 計算時間を計測する
    setStartTime(Date.now());

    const result = data.sort((a, b) => a - b);

    // 計算時間を計測する
    setEndTime(Date.now());

    return result;
  }, [data]);

  console.log();
  return (
    <div>
      <ul>
        {/* {sortedData.map((item) => (
          <li key={item}>{item}</li>
        ))} */}
      </ul>
      <p>計算時間: {endTime - startTime}ms</p>
    </div>
  );
}

export function MyComponent4({ data }) {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const sortedData = () => {
    // 計算時間を計測する
    setStartTime(Date.now());

    const result = data.sort((a, b) => a - b);

    // 計算時間を計測する
    setEndTime(Date.now());

    return result;
  };

  console.log();
  return (
    <div>
      <ul>
        {/* {sortedData.map((item) => (
          <li key={item}>{item}</li>
        ))} */}
      </ul>
      <p>計算時間: {endTime - startTime}ms</p>
    </div>
  );
}

// export function MyComponent5({ data }) {
//   const [startTimeWithoutMemo, setStartTimeWithoutMemo] = useState(0);
//   const [endTimeWithoutMemo, setEndTimeWithoutMemo] = useState(0);
//   const [startTimeWithMemo, setStartTimeWithMemo] = useState(0);
//   const [endTimeWithMemo, setEndTimeWithMemo] = useState(0);

//   // useMemoを使わない場合の計算時間を測定する
//   const sortDataWithoutMemo = () => {
//     setStartTimeWithoutMemo(Date.now());
//     const result = data.sort((a, b) => a - b);
//     setEndTimeWithoutMemo(Date.now());
//     return result;
//   };

//   const sortedDataWithoutMemo = sortDataWithoutMemo();

//   // useMemoを使う場合の計算時間を測定する
//   const sortedDataWithMemo = useMemo(() => {
//     setStartTimeWithMemo(Date.now());
//     const result = data.sort((a, b) => a - b);
//     setEndTimeWithMemo(Date.now());
//     return result;
//   }, [data]);
//   console.log(sortedDataWithoutMemo);
//   console.log(`without:${endTimeWithoutMemo - startTimeWithoutMemo}`);
//   console.log(sortedDataWithMemo);
//   console.log(`with:${endTimeWithMemo - startTimeWithMemo}`);
//   return (
//     <div>
//       <h2>Without useMemo</h2>
//       <ul>
//         {/* {sortedDataWithoutMemo.map((item) => (
//           <li key={item}>{item}</li>
//         ))} */}
//       </ul>
//       <p>計算時間: {endTimeWithoutMemo - startTimeWithoutMemo}ms</p>
//       <h2>With useMemo</h2>
//       <ul>
//         {/* {sortedDataWithMemo.map((item) => (
//           <li key={item}>{item}</li>
//         ))} */}
//       </ul>
//       <p>計算時間: {endTimeWithMemo - startTimeWithMemo}ms</p>
//     </div>
//   );
// }
