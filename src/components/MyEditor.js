import React, { useEffect, useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../styles/editor.scss";

export default function MyEditor({setPostText}) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const [editorData, setEditorData] = useState(null);

  const editor = useRef(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  useEffect(() => {
    const data = createMarkup(convertedContent);
    setEditorData(data.__html);
    setPostText(editorData);
  },[convertedContent]);

  return (
    <div>
      <Editor
        ref={editor}
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={(editorState) => setEditorState(editorState)}
        placeholder="Start writing your post..."
        // toolbar={{
        //   options: ['inline', 'blockType']
        // }}
      />
    </div>
  );
}
