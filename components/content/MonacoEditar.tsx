// // import CodeMirror from "codemirror";
// import CodeMirror from "codemirror/lib/codemirror";
// import React, { useEffect, useRef } from "react";
// // import "codemirror/lib/codemirror.css";
// // import "codemirror/theme/material.css";
// // import "codemirror/mode/javascript/javascript.js";

// const CodeEditor: React.FC = () => {
//   const editorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (editorRef.current) {
//       const editor = CodeMirror(editorRef.current, {
//         lineNumbers: true,
//         mode: "javascript",
//         theme: "material"
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <div className="code-editor" ref={editorRef}></div>
//     </div>
//   );
// };

// export default CodeEditor;

import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";
import { useState } from "react";

export default function CodeEditor() {
  const [files, setFiles] = useState({
    "/button.js": {
      code: `import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
      
export default function Button() {
    return (
      <h1>
        aaaaaasasasa
       </h1>
    )
    }`,
    },
  });
  // useEffect(() => {
  //   setFiles((prevFiles) => {
  //     return {
  //       ...prevFiles,
  //       '/button.js': {
  //         code: 'console.log("Hello World!");',
  //       },
  //     };
  //   });
  // }, []);
  return (
    <>
      <Sandpack
        customSetup={{
          dependencies: {
            "react-markdown": "latest",
          },
        }}
        files={files}
        // options={{
        //   activeFile: "/App.js",
        //   externalResources: ["https://cdn.tailwindcss.com"],
        //   visibleFiles: ["/App.js", "/button.js", "/index.js"],
        // }}

        template="nextjs"
        theme={"auto"}
      />
    </>
  );
}

type Files = {
  files: any;
};

export const TestB = ({ files }: Files) => {
  return (
    <SandpackProvider
      files={files}
      options={{
        // activeFile: "/index.js",
        externalResources: ["https://cdn.tailwindcss.com"],
        visibleFiles: ["/Quest1Ans.js", "/index.js", "_app.js", "/Quest1.js"],
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

export function TestEditor() {
  const [files, setFiles] = useState({
    "index.html": {
      code: "<div>Hello World!</div>",
    },
    "index.js": {
      code: 'console.log("Hello World!");',
    },
  });

  return (
    <div>
      <Sandpack files={files} />
    </div>
  );
}
