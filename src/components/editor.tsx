import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InitialContent } from "./initial-content";
import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

import { PiListBullets, PiListDashes, PiTextAa, PiTextHOne } from "react-icons/pi";

import "highlight.js/styles/github-dark.css";
import { BubbleButton } from "./bubble-button";
import { FloatButton } from "./float-menu-button";

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
        <BubbleMenu
          editor={editor}
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600 "
        >
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("bold")}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive("bold")}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
      {editor && (
        <FloatingMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col gap-2 py-2 px-1"
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <FloatButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <div className="w-12 ">
              <PiListBullets size={30} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm">List</span>
              <span className="text-xs text-zinc-400">
                Insert a new bullet list.
              </span>
            </div>
          </FloatButton>
          <FloatButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <div className="w-12 ">
              <PiTextHOne size={30} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-400">
                Big section heading.
              </span>
            </div>
          </FloatButton>
          <FloatButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <div className="w-12 ">
              <PiListDashes size={30} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm">Enumered list</span>
              <span className="text-xs text-zinc-400">Enum list item.</span>
            </div>
          </FloatButton>
          <FloatButton onClick={() => editor.commands.clearContent()}>
            <div className="w-12 ">
              <PiTextAa size={30} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm">Clear document</span>
              <span className="text-xs text-zinc-400">
                Delete all content in document.
              </span>
            </div>
          </FloatButton>
        </FloatingMenu>
      )}
    </>
  );
}
