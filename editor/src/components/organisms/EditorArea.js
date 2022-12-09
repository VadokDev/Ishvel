import React from 'react';
import BulletList from '@tiptap/extension-bullet-list';
import { mergeAttributes, Node } from '@tiptap/core';
import {
  useEditor,
  EditorContent,
  NodeViewContent,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../atoms/EditorArea.css';
import EditorMenu from '../molecules/Editor/EditorMenu';
import Image from '@tiptap/extension-image';
const CustomBulletList = BulletList.extend({
  addKeyboardShortcuts() {
    return {
      'Mod-l': () => this.editor.commands.toggleBulletList(),
    };
  },
});

const node = Node.create({
  name: 'reactComponent',
  group: 'block',
  content: 'inline*',
  defining: true,
  parseHTML() {
    return [
      {
        tag: 'react-component',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['react-component', mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});

const Component = () => {
  return (
    <NodeViewWrapper className='react-component-with-content'>
      <span className='label' contentEditable={false}>
        Sección
      </span>

      <NodeViewContent className='content' />
    </NodeViewWrapper>
  );
};

const EditorArea = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, node],
    content: `
    <h1>
      Título de la tarea
    </h1>
    <p>
      Bajada del título, una pequeña descripción (contexto breve)
    </p>
    <h1>
      Descripción
    </h1>
    <p>
      Qué es específicamente lo que se necesita que el programa haga
    </p>
    <h1>
      Ejemplos
    </h1>
    <p>
      Ejemplos autogenerados en base a lo que se ingresa en la segunda parte del editor
    </p>
    <h1>
      Explicación de los ejemplos
    </h1>
    <p>
      En caso de ser necesarios
    </p>
      `,
    onUpdate({ editor }) {
      console.log(editor.getJSON());
    },
  });

  return (
    <div>
      <EditorMenu editor={editor}></EditorMenu>
      <EditorContent editor={editor} />
    </div>
  );
};

export default EditorArea;
