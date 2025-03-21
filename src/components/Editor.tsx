import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline"; // Import underline extension

const EditorComponent = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline, // Add Underline extension here
    ],
    content: "<p>Start typing here...</p>",
  });

  if (!editor) {
    return <p>Loading editor...</p>;
  }

  return (
    <div className="p-4 border rounded-lg shadow-lg w-full max-w-2xl mx-auto bg-white">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="p-4 border rounded-md min-h-[150px]" />
    </div>
  );
};

export default EditorComponent;
