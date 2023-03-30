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

import { Sandpack } from "@codesandbox/sandpack-react";

export default function CodeEditor() {
  return (
    <Sandpack
      customSetup={{
        dependencies: {
          "react-markdown": "latest",
        },
      }}
      files={{
        "/button.js": `import ReactMarkdown from 'react-markdown' 

export default function App() {
  return (
    <h1>
      aaaaaasasasa
    </h1>
  )
}`,
      }}
      options={{
        activeFile: "/button.js",
        externalResources: ["https://cdn.tailwindcss.com"],
        visibleFiles: ["/App.js", "/button.js", "/index.js"],
      }}
      template="react"
      theme={"auto"}
    />
  );
}
