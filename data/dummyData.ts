export const PostsData = [
  {
    content: "useState",
    desc1: {
      a: "state：",
      b: "setState：",
      c: "useState()：",
    },
    desc2: {
      a: "setStateにより更新された値が代入されます。",
      b: "set〇〇と宣言する。イベント関数が呼ばれた際などでstateの状態を更新する。",
      c: "useState(初期値)と宣言する。()の初期値はstateに代入される。",
    },
    id: 1,
    name: ["state", "setState", "useState();"],
  },
  {
    content: "useEffect",
    desc1: {
      a: "第1引数：",
      b: "第2引数：",
      c: "用途：",
    },
    // 角ってなるバグは半角入れたら治る
    desc2: {
      a: " 実行したい処理を関数で渡す。",
      b: " この処理が依存する値を配列で指定。この値が変更された場合に、再度処理が実行される。",
    },
    id: 2,
    // long_descはどんな形式でもいい
    long_desc1: [
      "1.API呼び出しやデータのフェッチ",
      "2.イベントリスナーの登録や削除",
      "3.タイマーやインターバルの処理",
      "4.外部ライブラリの初期化",
    ],
    long_desc2: "第2引数を指定しなかった場合、useEffectは常に再レンダリング時に実行される。",
    name: ["useEffect(()=>{", " //実行したい処理", " },[]);"],
  },
  {
    content: "useContext：",
    id: 3,
    name: "駆け出しエンジニア",
  },
];
