# Quick Reference - Publishing to npm

## 🚀 Fast Track (5 Steps)

### 1. Update package.json
```json
{
  "name": "@your-npm-username/shadcn-rich-editor",
  "author": "Your Name <email@example.com>",
  "repository": {
    "url": "https://github.com/your-username/shadcn-rich-editor"
  }
}
```

### 2. Build
```bash
npm run build:lib
```

### 3. Login to npm
```bash
npm login
```

### 4. Publish
```bash
npm publish --access public
```

### 5. Done! 🎉
Your package is now at: `https://npmjs.com/package/@your-username/shadcn-rich-editor`

---

## 📦 Installation (For Users)

```bash
npm install @your-username/shadcn-rich-editor
```

## 💻 Basic Usage

```tsx
import { Editor, Renderer } from '@your-username/shadcn-rich-editor';
import '@your-username/shadcn-rich-editor/styles';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState('');

  return (
    <>
      <Editor
        output="html"
        initialContent={content}
        onContentChange={(value) => setContent(value as string)}
      />
      <Renderer value={content} />
    </>
  );
}
```

---

## 🔄 Update Version

```bash
npm version patch   # 1.0.0 → 1.0.1 (bug fix)
npm version minor   # 1.0.0 → 1.1.0 (new feature)
npm version major   # 1.0.0 → 2.0.0 (breaking change)
npm publish
```

---

## 📋 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Development mode |
| `npm run build:lib` | Build npm package |
| `npm pack` | Test package locally |
| `npm login` | Login to npm |
| `npm publish --access public` | Publish package |

---

## 📁 What Gets Published

✅ Included:
- `dist/` folder (built files)
- `README.md`
- `LICENSE`
- `package.json`

❌ Excluded (via .npmignore):
- `src/` folder
- `node_modules/`
- Config files
- Development files

---

## 🎯 Exported Items

```tsx
// Components
import { Editor, Renderer } from '@your-username/shadcn-rich-editor';

// Types
import type { TiptapEditorProps, TiptapEditorRef } from '@your-username/shadcn-rich-editor';

// Styles
import '@your-username/shadcn-rich-editor/styles';
```

---

## ⚠️ Common Issues

**Package name taken?**
→ Use scoped package: `@username/package-name`

**Permission denied?**
→ Run `npm login` first

**Build fails?**
→ Run `npm install` then `npm run build:lib`

---

## 📚 Full Documentation

- **NPM_PACKAGE_SUMMARY.md** - Complete overview
- **PUBLISHING.md** - Detailed publishing guide
- **README.md** - User documentation
