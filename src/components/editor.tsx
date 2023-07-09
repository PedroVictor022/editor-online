import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InitialContent } from "./initial-content";
import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";

import "highlight.js/styles/github-dark.css";

lowlight.registerLanguage("js", js);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: InitialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });
  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
      />
      {editor && (
         <BubbleMenu editor={editor} className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x-zinc-600 gap-2">
            <button className="p-2 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none">Bold</button>
            <button className="p-2 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none">Bold</button>
            <button className="p-2 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none">Bold</button>
         </BubbleMenu>
      )}
    </>
  );
}
