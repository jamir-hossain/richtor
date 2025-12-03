# Shadcn Rich Editor

A beautiful and feature-rich WYSIWYG editor built with [Tiptap](https://tiptap.dev/) and [shadcn/ui](https://ui.shadcn.com/). Perfect for React applications that need a powerful content editor with a modern UI.

## Features

✨ **Rich Text Editing** - Bold, italic, underline, strikethrough, code, and more  
🎨 **Text Formatting** - Headings, lists, blockquotes, code blocks with syntax highlighting  
🖼️ **Media Support** - Images and YouTube video embeds with resizing  
📊 **Tables** - Full table support with easy manipulation  
🎯 **Text Alignment** - Left, center, right, and justify  
🌈 **Color Customization** - Text color and highlight color pickers  
🔗 **Links** - Easy link insertion and editing  
💾 **Multiple Output Formats** - HTML or JSON  
📱 **Responsive** - Works great on all screen sizes  
♿ **Accessible** - Built with accessibility in mind  

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
npm install @tiptap/core @tiptap/react @tiptap/pm @tiptap/starter-kit lucide-react lowlight highlight.js
```

### 3. Import styles

```tsx
import 'richtor/style';
```

## Usage

### Basic Editor

```tsx
import { Editor } from 'richtor';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState('');

  return (
    <Editor
      output="html"
      placeholder={{
        paragraph: 'Start typing...',
        imageCaption: 'Enter image caption...',
      }}
      initialContent={content}
      onContentChange={(value) => setContent(value as string)}
    />
  );
}
```

### Renderer Component

To display the editor content in read-only mode:

```tsx
import { Renderer } from 'richtor';

function DisplayContent({ htmlContent }: { htmlContent: string }) {
  return <Renderer value={htmlContent} />;
}
```

## API Reference

### Editor Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `output` | `'html' \| 'json'` | `'html'` | Output format for content |
| `initialContent` | `Content` | `undefined` | Initial content to load |
| `placeholder` | `{ paragraph?: string; imageCaption?: string }` | `{}` | Placeholder text |
| `onContentChange` | `(value: Content) => void` | `undefined` | Callback when content changes |
| `readonly` | `boolean` | `false` | Make editor read-only |
| `disabled` | `boolean` | `false` | Disable editor |
| `hideMenuBar` | `boolean` | `false` | Hide the menu bar |
| `hideStatusBar` | `boolean` | `false` | Hide the status bar |
| `hideBubbleMenu` | `boolean` | `false` | Hide the bubble menu |
| `contentMinHeight` | `string \| number` | `undefined` | Minimum content height |
| `contentMaxHeight` | `string \| number` | `undefined` | Maximum content height |
| `containerClass` | `string` | `undefined` | Custom container class |
| `menuBarClass` | `string` | `undefined` | Custom menu bar class |
| `contentClass` | `string` | `undefined` | Custom content class |

### Renderer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | HTML content to render |
| `ssr` | `boolean` | `false` | Use server-side rendering |

## Styling

**Styles are automatically included** when you import the components! No manual CSS import needed.

### Manual CSS Import (Optional)

If your bundler doesn't automatically process CSS imports, you can manually import:

```tsx
import 'richtor/styles';
// or
import 'richtor/dist/richtor.css';
```

### Customization

The editor uses CSS variables for theming. You can customize the appearance by overriding these variables in your own CSS.

## Peer Dependencies

This package requires the following peer dependencies:

- `react` >= 18.0.0
- `react-dom` >= 18.0.0

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub repository](https://github.com/jamir-hossain/richtor/issues).
