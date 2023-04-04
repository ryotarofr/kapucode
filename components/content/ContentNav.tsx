import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Fab from "@mui/material/Fab";

export const ContentNav = ({ onOpenSlider, onOpenQuest }: any) => {
  return (
    <div className="mx-4 md:fixed md:bottom-10">
      {/* 問題のボタン */}
      <Fab aria-label="edit" color="secondary" onClick={onOpenQuest}>
        <MenuBookIcon className="m-5" fontSize="large" />
      </Fab>

      {/* スライドボタン */}
      <Fab onClick={onOpenSlider} variant="extended">
        <LibraryBooksIcon color="secondary" fontSize="large" sx={{ mr: 1 }} />
        スライド
      </Fab>
    </div>
  );
};
