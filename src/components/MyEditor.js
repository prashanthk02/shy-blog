import React, { useEffect, useRef, useState } from "react";
import { Editor, EditorState } from "draft-js";

export default function MyEditor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const editor = useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={(editorState) => setEditorState(editorState)}
      />
    </div>
  );
}
