import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

import { ContentNav } from "./ContentNav";
import { Slider } from "./Slider";

export const Templete = ({ project }: { project: any }) => {
  const [open, setOpen] = useState(true);
  const [currentId, setCurrentId] = useState(1);

  // ページ数に合わせて数字を調整
  function handleUpClick() {
    if (currentId < 3) {
      setCurrentId(currentId + 1);
    } else {
      return;
    }
  }
  function handleDownClick() {
    if (currentId > 1) {
      setCurrentId(currentId - 1);
    } else {
      return;
    }
  }
  return (
    <div>
      {/* スライダー閉じた時のやつ */}
      <ContentNav onOpen={() => setOpen(true)} open={open} />
      <div className="border-b font-serif text-2xl">ReactHooks</div>

      {/* スライダーを追加 */}
      <Slider onClose={() => setOpen(false)} open={open}>
        {/* ページ数に合わせて数字調整 */}
        <div className=" absolute bottom-3 flex items-end justify-start">
          {currentId > 1 ? (
            <>
              <ArrowBackIosNewIcon
                className="absolute text-purple-600 hover:text-purple-400"
                fontSize="large"
                onClick={handleDownClick}
              />
            </>
          ) : null}
          {currentId < 3 ? (
            <ArrowForwardIosIcon
              className="relative left-10 text-purple-600 hover:text-purple-400"
              fontSize="large"
              onClick={handleUpClick}
            />
          ) : null}
        </div>
        {/* ↓コンテンツの追加 */}
        Hello world!!
        {currentId == 1 && <div>1ページ目</div>}
        {currentId == 2 && <div>2ページ目</div>}
        {currentId == 3 && <div>3ページ目</div>}
      </Slider>
    </div>
  );
};
