import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Fab from "@mui/material/Fab";

export const ContentNav = ({
  lessonIndex,
  nemberOfLessons,
  onOpenSlider,
  onOpenQuest,
  onNextLesson,
  onBackLesson,
}: any) => {
  return (
    <div className="mx-6 flex justify-between pt-2">
      {/* 問題のボタン */}
      <div>
        <Fab aria-label="edit" color="secondary" onClick={onOpenQuest}>
          <MenuBookIcon className="m-5" fontSize="large" />
        </Fab>

        {/* スライドボタン */}
        <Fab onClick={onOpenSlider} variant="extended">
          <LibraryBooksIcon color="secondary" fontSize="large" sx={{ mr: 1 }} />
          スライド
        </Fab>
      </div>
      <div className={`${lessonIndex > 1 ? "" : " hidden"}`}>
        <Fab aria-label="add" color="secondary" onClick={onBackLesson} variant="extended">
          <NavigateBeforeIcon sx={{ mr: 1 }} />
          戻る
        </Fab>
      </div>
      <div className={`${lessonIndex < nemberOfLessons ? "" : " hidden"}`}>
        <Fab aria-label="add" color="secondary" onClick={onNextLesson} variant="extended">
          次へ
          <NavigateNextIcon sx={{ mr: 1 }} />
        </Fab>
      </div>
    </div>
  );
};
