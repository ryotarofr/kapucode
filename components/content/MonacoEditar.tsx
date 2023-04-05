import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

type Files = {
  files: any;
  visibleFliles: any;
};

export const CodeEditor = ({ files, visibleFliles }: Files) => {
  return (
    <SandpackProvider
      files={files}
      options={{
        // activeFile: "/index.js",
        externalResources: ["https://cdn.tailwindcss.com"],
        visibleFiles: visibleFliles,
      }}
      template="nextjs"
      theme={amethyst}
    >
      <SandpackLayout>
        {/* <SandpackFileExplorer style={{ height: "85vh" }} /> */}
        <SandpackCodeEditor style={{ height: "85vh" }} />

        <SandpackPreview style={{ height: "85vh" }} />
        {/* <SandpackConsole style={{ height: "85vh" }} /> */}
      </SandpackLayout>
    </SandpackProvider>
  );
};
