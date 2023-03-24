import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const Header = () => {
  return (
    <div
      className="
    tablet:max-w-[500px] tablet:m-auto flex w-full
    flex-col justify-between
  "
    >
      <div className="flex justify-between py-4">
        <div className="tablet:px-8 mobile:px-4 cursor-pointer px-14 font-mono text-lg font-bold italic text-fuchsia-700">
          kapucode
        </div>
        {/* <ul className="flex flex-row  justify-between px-14 tablet:px-8 mobile:px-4"> */}
        {/* Itemを追加 */}
        {/* </ul> */}
        <Stack className="tablet:px-8 mobile:px-4 px-14" direction="row" spacing={2}>
          <Button color="secondary" href="/login">
            Logout
          </Button>
        </Stack>
      </div>
    </div>
  );
};
