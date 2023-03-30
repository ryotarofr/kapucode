import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

import { ContentFooter } from "./ContentFooter";
import CodeEditor from "./MonacoEditar";
import { SliderItems1 } from "./ReactHooks_sliderItems/index";
import { Slider } from "./Slider";

export const ReactHooks = ({ project }: { project: any }) => {
  const [open, setOpen] = useState(true);
  const [currentId, setCurrentId] = useState(1);

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
      {!open && <CodeEditor />}

      <ContentFooter onOpen={() => setOpen(true)} open={open} />
      <div className="px-2">
        <div className="border-b font-serif text-2xl">ReactHooks</div>
      </div>
      <Slider onClose={() => setOpen(false)} open={open}>
        {/* <div>test</div> */}
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
        {/* {currentId} */}
        {currentId == 1 && <SliderItems1 />}
        {currentId == 2 && <div>2</div>}
        {currentId == 3 && <div>3</div>}
      </Slider>
    </div>
  );
};
