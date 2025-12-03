# Installation Guide for Richtor

## Package Size Optimization

This package has been optimized to reduce bundle size by externalizing heavy dependencies as peer dependencies.

## Installation

### 1. Install the package

```bash
npm install richtor
# or
yarn add richtor
# or
pnpm add richtor
```

### 2. Install peer dependencies

```bash
npm install @tiptap/core @tiptap/react @tiptap/pm @tiptap/starter-kit \
  @tiptap/extension-bubble-menu @tiptap/extension-bullet-list \
  @tiptap/extension-character-count @tiptap/extension-code-block-lowlight \
  @tiptap/extension-color @tiptap/extension-highlight \
  @tiptap/extension-image @tiptap/extension-link \
  @tiptap/extension-list-keymap @tiptap/extension-ordered-list \
  @tiptap/extension-placeholder @tiptap/extension-subscript \
  @tiptap/extension-superscript @tiptap/extension-table \
  @tiptap/extension-table-cell @tiptap/extension-table-header \
  @tiptap/extension-table-row @tiptap/extension-text-align \
  @tiptap/extension-text-style @tiptap/extension-underline \
  lucide-react lowlight highlight.js
```

**Or install all TipTap packages at once:**

```bash
npm install @tiptap/{core,react,pm,starter-kit,extension-{bubble-menu,bullet-list,character-count,code-block-lowlight,color,highlight,image,link,list-keymap,ordered-list,placeholder,subscript,superscript,table,table-cell,table-header,table-row,text-align,text-style,underline}} lucide-react lowlight highlight.js
```

### 3. Import styles

```tsx
import 'richtor/styles';
```

### 4. Use the editor

```tsx
import Richtor from 'richtor';

function App() {
  return <Richtor initialContent="<p>Hello World!</p>" />;
}
```

## Why Peer Dependencies?

To keep the package size small, we've externalized:
- **TipTap packages** (~500KB): Core editor functionality
- **Lucide React** (~100KB): Icon library
- **Lowlight/Highlight.js** (~200KB): Syntax highlighting

This reduces the package from **22.9 MB** to **~2 MB** (90% reduction!).

## Bundle Size Comparison

| Version | Unpacked Size | Total Files |
|---------|---------------|-------------|
| Before  | 22.9 MB       | 436 files   |
| After   | ~2 MB         | ~124 files  |

## Tree-shaking

The package is built with ES modules and supports tree-shaking. Only import what you need!
