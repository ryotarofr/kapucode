import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import hotkeys from "hotkeys-js";
import { useEffect, useRef, useState } from "react";

import { codeFile1, codeFile2 } from "../../data/codefiles";
import { codeVisibleFile1, codeVisibleFile2 } from "../../data/codevisiblefiles";

import { ContentNav } from "./ContentNav";
import { CodeEditor } from "./MonacoEditar";
import { Quest } from "./Quest";
import { QuestItem1, QuestItem2 } from "./ReactHooks_questItems";
import { SliderItem1 } from "./ReactHooks_sliderItems/index";
import { Slider } from "./Slider";

export const ReactHooks = ({ project }: { project: any }) => {
  const [openSlider, setOpenSlider] = useState(true);
  const [openQuest, setOpenQuest] = useState(false);
  const [currentSliderId, setCurrentSliderId] = useState(1);
  const [currentQuestId, setCurrentQuestId] = useState(1);
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [lessonIndex, setLessonIndex] = useState(1);

  function handleUpSlider() {
    if (currentSliderId < 3) {
      setCurrentSliderId(currentSliderId + 1);
    } else {
      return;
    }
  }
  function handleDownSlider() {
    if (currentSliderId > 1) {
      setCurrentSliderId(currentSliderId - 1);
    } else {
      return;
    }
  }

  function handleUpQuest() {
    if (currentQuestId < 3) {
      setCurrentQuestId(currentQuestId + 1);
    } else {
      return;
    }
  }
  function handleDownQuest() {
    if (currentQuestId > 1) {
      setCurrentQuestId(currentQuestId - 1);
    } else {
      return;
    }
  }

  // ショーカット機能
  // これコンポーネント化できるか検討
  const optionA = useRef<HTMLButtonElement>(null);
  const optionB = useRef<HTMLButtonElement>(null);
  const right_S = useRef<HTMLButtonElement>(null);
  const left_S = useRef<HTMLButtonElement>(null);
  const right_Q = useRef<HTMLButtonElement>(null);
  const left_Q = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    hotkeys("option+a", (event) => {
      optionA.current?.click();
    });
    return () => {
      hotkeys.unbind("option+a");
    };
  }, []);

  useEffect(() => {
    hotkeys("option+b", () => {
      optionB.current?.click();
    });
  }, []);

  useEffect(() => {
    hotkeys("right", () => {
      right_S.current?.click();
    });
  }, []);

  useEffect(() => {
    hotkeys("left", () => {
      left_S.current?.click();
    });
  }, []);

  useEffect(() => {
    hotkeys("right", () => {
      right_Q.current?.click();
    });
  }, []);

  useEffect(() => {
    hotkeys("left", () => {
      left_Q.current?.click();
    });
  }, []);

  let lessonCode: any;
  let lessonDesc: any;
  switch (lessonIndex) {
    case 1:
      lessonCode = <CodeEditor files={codeFile1} visibleFliles={codeVisibleFile1} />;
      lessonDesc = <QuestItem1 />;
      break;
    case 2:
      lessonCode = <CodeEditor files={codeFile2} visibleFliles={codeVisibleFile2} />;
      lessonDesc = <QuestItem2 />;
      break;
    default:
      //いずれも一致しなかった場合;
      break;
  }

  return (
    <div>
      {/* UIのz-indexバグの対策 */}
      <div className={`${!openSlider && !openQuest ? "" : "hidden"}`}>
        <div className="flex flex-row">
          {/* 開発手順のサイドバー */}
          <div className={`h-[85vh] bg-purple-50 ${!closeSidebar ? "w-[26vw]" : "w-[4vw]"}`}>
            {!closeSidebar ? (
              <>
                <div className="flex w-full items-center justify-between border-b py-2 text-lg text-purple-800">
                  <MenuBookIcon className="mx-2" color="secondary" fontSize="medium" />
                  Doc
                  <MenuOpenIcon
                    className="mx-2"
                    color="secondary"
                    fontSize="large"
                    onClick={() => setCloseSidebar(!closeSidebar)}
                  />
                </div>
                <div className="px-6">{lessonDesc}</div>
              </>
            ) : (
              <div className="my-2 flex justify-center">
                <MenuOpenIcon
                  className="mx-2"
                  color="secondary"
                  fontSize="large"
                  onClick={() => setCloseSidebar(!closeSidebar)}
                />
              </div>
            )}
          </div>
          <div className={`${!closeSidebar ? "w-[74vw]" : "w-[96vw]"}`}>
            {/* コードエディタを追加 */}
            {lessonCode}
          </div>
        </div>
        {/* button UI */}
        <ContentNav
          lessonIndex={lessonIndex}
          nemberOfLessons={project.nemberOfLessons}
          onBackLesson={() => setLessonIndex(lessonIndex - 1)}
          onNextLesson={() => setLessonIndex(lessonIndex + 1)}
          onOpenQuest={() => setOpenQuest(true)}
          onOpenSlider={() => setOpenSlider(true)}
        />
      </div>
      <div className="">
        {/* スライダー追加 */}
        {/* ショートカットキー機能(buttonタグ)[⌘][Ctrl] + [b] */}
        <Slider onCloseSlider={() => setOpenSlider(!openSlider)} openSlider={openSlider}>
          <button onClick={() => setOpenSlider(!openSlider)} ref={optionB} />
          <div className="absolute bottom-3 flex items-end justify-start">
            {/* ページ遷移button */}
            {currentSliderId > 1 ? (
              <>
                <button onClick={handleDownSlider} ref={left_S} />
                <ArrowBackIosNewIcon
                  className="absolute text-purple-600 hover:text-purple-400"
                  fontSize="large"
                  onClick={handleDownSlider}
                />
              </>
            ) : null}
            {currentSliderId < 3 ? (
              <>
                <button onClick={handleUpSlider} ref={right_S} />
                <ArrowForwardIosIcon
                  className="relative left-10 text-purple-600 hover:text-purple-400"
                  fontSize="large"
                  onClick={handleUpSlider}
                />
              </>
            ) : null}
          </div>

          {/* ページごとのコンテンツ */}
          {currentSliderId == 1 && <SliderItem1 />}
          {currentSliderId == 2 && (
            <div className="flex h-[200px] items-center justify-center text-xl">
              製作中です。もうしばらくお待ちください🙇‍♂️
            </div>
          )}
          {currentSliderId == 3 && (
            <div className="flex h-[200px] items-center justify-center text-xl">
              製作中です。もうしばらくお待ちください🙇‍♂️
            </div>
          )}
        </Slider>

        {/* クエストを追加 */}

        <Quest onCloseQuest={() => setOpenQuest(!openQuest)} openQuest={openQuest}>
          <div className="absolute bottom-3 flex items-end justify-start">
            <button onClick={() => setOpenQuest(!openQuest)} ref={optionA} />
            {/* ページ遷移button */}
            {currentQuestId > 1 ? (
              <>
                <button onClick={handleDownQuest} ref={left_Q} />
                <ArrowBackIosNewIcon
                  className="absolute text-purple-600 hover:text-purple-400"
                  fontSize="large"
                  onClick={handleDownQuest}
                />
              </>
            ) : null}
            {currentQuestId < 3 ? (
              <>
                <button onClick={handleUpQuest} ref={right_Q} />
                <ArrowForwardIosIcon
                  className="relative left-10 text-purple-600 hover:text-purple-400"
                  fontSize="large"
                  onClick={handleUpQuest}
                />
              </>
            ) : null}
          </div>

          {/* ページごとのコンテンツ */}
          {currentQuestId == 1 && <QuestItem1 />}
          {currentQuestId == 2 && <QuestItem2 />}
          {currentQuestId == 3 && (
            <div className="flex h-[200px] items-center justify-center text-xl">
              製作中です。もうしばらくお待ちください🙇‍♂️
            </div>
          )}
        </Quest>
      </div>
    </div>
  );
};
