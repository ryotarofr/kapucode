import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

// codeBlockの実装
type CopyTextProps = {
  dir: string;
  text: string;
};

export const CopyTextButton = ({ text, dir }: CopyTextProps) => {
  function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      },
    );
  }

  return (
    <div>
      <div className="grid bg-gray-500">
        <div className="overflow-hidden rounded-md bg-[#3a404d]">
          <div className="flex items-center justify-between px-4 text-xs text-white">
            <p className="text-sm">{dir}</p>
            {/* コピーアイコン */}
            <Tooltip arrow placement="top" title="Copy to Clipboard">
              <IconButton color="secondary" onClick={() => copyTextToClipboard(text)} size="medium">
                <ContentCopyIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </div>
          <SyntaxHighlighter
            customStyle={{
              padding: "10px",
            }}
            language="jsx"
            style={atomOneDark}
            wrapLongLines={false}
          >
            {text}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
