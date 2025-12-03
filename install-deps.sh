#!/bin/bash

echo "Installing Richtor and its peer dependencies..."

npm install richtor @tiptap/core @tiptap/react @tiptap/pm @tiptap/starter-kit \
  @tiptap/extension-bubble-menu @tiptap/extension-bullet-list \
  @tiptap/extension-character-count @tiptap/extension-code-block-lowlight \
  @tiptap/extension-color @tiptap/extension-highlight \
  @tiptap/extension-image @tiptap/extension-link \
  @tiptap/extension-list-keymap @tiptap/extension-ordered-list \
  @tiptap/extension-placeholder @tiptap/extension-subscript \
  @tiptap/extension-superscript @tiptap/extension-table \
  @tiptap/extension-table-cell @tiptap/extension-table-header \
  @tiptap/extension-table-row @tiptap/extension-text-align \
  @tiptap/extension-text-style @tiptap/extension-underline

echo "✅ Installation complete!"
