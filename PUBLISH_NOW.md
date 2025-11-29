# 🚀 Ready to Publish!

Your package is **ready to publish** to npm! Follow these steps:

## ✅ What's Done

- [x] Code pushed to GitHub: https://github.com/jamir-hossain/richtor
- [x] Package built successfully (`dist/` folder created)
- [x] Package name: `richtor`
- [x] Version: `1.0.0`
- [x] All documentation updated

## 📦 Publish to npm (3 Steps)

### Step 1: Login to npm

```bash
npm login
```

**You'll be asked for:**
- Username: (your npm username)
- Password: (your npm password)
- Email: (your npm email)
- One-time password: (if you have 2FA enabled)

### Step 2: Verify Package

Optional but recommended - check what will be published:

```bash
npm pack --dry-run
```

This shows you what files will be included in the package.

### Step 3: Publish!

```bash
npm publish
```

**Note:** Since this is an unscoped package, you don't need the `--access public` flag!

## 🎉 After Publishing

Your package will be available at:
- **npm**: https://www.npmjs.com/package/richtor
- **GitHub**: https://github.com/jamir-hossain/richtor

## 📥 Installation (For Users)

Once published, anyone can install it:

```bash
npm install richtor
```

## 💻 Usage Example

```tsx
import { Editor, Renderer } from 'richtor';
import 'richtor/styles';
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

## 🔄 Future Updates

To publish updates:

1. Make your changes
2. Update version: `npm version patch` (or `minor`/`major`)
3. Build: `npm run build:lib`
4. Commit and push to GitHub
5. Publish: `npm publish`

## ⚠️ Important Notes

- **First time publishing?** You need an npm account at https://www.npmjs.com/signup
- **Package name taken?** Change the name in `package.json` to something unique
- **Scoped packages** (@username/package) require `--access public` flag
- **Unscoped packages** (just `richtor`) don't need the flag but name must be globally unique

## 🆘 Troubleshooting

**Error: You must be logged in**
→ Run `npm login` first

**Error: Package name already exists**
→ Change the name in `package.json` or use a different scope

**Error: 403 Forbidden**
→ Add `--access public` flag for scoped packages

**Build fails**
→ Run `npm run build:lib` to rebuild

## 📊 Package Info

- **Name**: richtor
- **Version**: 1.0.0
- **Size**: ~780 KB (196 KB gzipped)
- **License**: MIT
- **Repository**: https://github.com/jamir-hossain/richtor

---

**Ready? Run the commands above to publish your package!** 🚀
