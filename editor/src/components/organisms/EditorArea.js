import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "../atoms/EditorArea.css";

const EditorArea = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      "<p>Hello World!AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>",
    onUpdate({ editor }) {
      console.log(editor.getJSON());
    },
  });

  return <EditorContent editor={editor} />;
};

export default EditorArea;
