import React from "react";
import { Editor } from "@tiptap/react";

interface ToolbarProps {
  editor: Editor | null;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-2 border-b pb-2 bg-gray-100 p-2 rounded">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1 border rounded ${
          editor.isActive("bold") ? "bg-gray-400 text-white" : "bg-white"
        }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1 border rounded ${
          editor.isActive("italic") ? "bg-gray-400 text-white" : "bg-white"
        }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-3 py-1 border rounded ${
          editor.isActive("strike") ? "bg-gray-400 text-white" : "bg-white"
        }`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-3 py-1 border rounded ${
          editor.isActive("underline") ? "bg-gray-400 text-white" : "bg-white"
        }`}
      >
        Underline
      </button>
    </div>
  );
};

export default Toolbar;
