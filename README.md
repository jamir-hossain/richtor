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

```bash
npm install @jamir-hossain/richtor
# or
yarn add @jamir-hossain/richtor
# or
pnpm add @jamir-hossain/richtor
```

## Usage

### Basic Editor

```tsx
import { Editor } from '@jamir-hossain/richtor';
import '@jamir-hossain/richtor/styles';
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
import { Renderer } from '@jamir-hossain/richtor';
import '@jamir-hossain/richtor/styles';

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

The package includes pre-built CSS that you need to import:

```tsx
import '@jamir-hossain/richtor/styles';
```

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
