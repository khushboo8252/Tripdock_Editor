import { Node, mergeAttributes } from '@tiptap/core';
import { Editor } from '@tiptap/react';

// ✅ Extend TipTap Commands with the correct type
declare module '@tiptap/core' {
  interface Commands {
    insertVariable: (options: { value: string }) => boolean;
  }
}

export const Variable = Node.create({
  name: 'variable',
  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      value: {
        default: '',
        parseHTML: (element: HTMLElement) => element.getAttribute('data-variable'),
        renderHTML: (attributes: { value: string }) => ({
          'data-variable': attributes.value,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-variable]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(HTMLAttributes, {
        class: 'bg-yellow-300 text-black px-1 rounded font-bold',
      }),
      `{{${HTMLAttributes.value}}}`,
    ];
  },

  addCommands(): Record<string, any> {
    return {
      ...this.parent?.(),
      insertVariable:
        ({ value }: { value: string }) =>
        ({ editor }: { editor: Editor }) => {
          return editor
            .chain()
            .focus()
            .insertContent({
              type: this.name, // Ensures the type is correct
              attrs: { value },
            })
            .run();
        },
    };
  }
  
});
