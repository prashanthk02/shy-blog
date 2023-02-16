import React, { useEffect, useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function MyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editor = useRef(null);

  // function focusEditor() {
  //   editor.current.focus();
  // }

  // useEffect(() => {
  //   focusEditor();
  // }, []);

  return (
    <div>
      <Editor
        ref={editor}
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={(editorState) => setEditorState(editorState)}
      />
    </div>
  );
}
