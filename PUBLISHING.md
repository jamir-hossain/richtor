# Publishing Guide for Shadcn Rich Editor

This guide will walk you through publishing your package to npm.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/signup) if you don't have one
2. **npm CLI**: Make sure npm is installed (comes with Node.js)

## Step 1: Update Package Information

Before publishing, update the following fields in `package.json`:

```json
{
  "name": "@your-username/shadcn-rich-editor",  // Change to your npm username
  "author": "Your Name <your.email@example.com>",  // Your details
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/shadcn-rich-editor"  // Your repo
  },
  "bugs": {
    "url": "https://github.com/your-username/shadcn-rich-editor/issues"
  },
  "homepage": "https://github.com/your-username/shadcn-rich-editor#readme"
}
```

**Important**: 
- If you want to publish as a **scoped package** (recommended): Use `@your-username/shadcn-rich-editor`
- If you want to publish as an **unscoped package**: Use just `shadcn-rich-editor` (must be unique on npm)

## Step 2: Login to npm

```bash
npm login
```

Enter your npm credentials when prompted.

## Step 3: Build the Package

```bash
npm run build:lib
```

This will:
- Generate TypeScript declarations in `dist/`
- Bundle the library with Vite
- Create both ES modules and UMD formats
- Bundle all CSS into a single file

## Step 4: Test the Package Locally (Optional but Recommended)

Before publishing, test your package locally:

```bash
# In your package directory
npm pack
```

This creates a `.tgz` file. You can install it in another project:

```bash
# In another project
npm install /path/to/your-username-shadcn-rich-editor-1.0.0.tgz
```

## Step 5: Publish to npm

### For First-Time Publishing

```bash
npm publish --access public
```

**Note**: The `--access public` flag is required for scoped packages (@username/package-name) to make them publicly available.

### For Subsequent Updates

1. Update the version in `package.json`:
   ```bash
   npm version patch  # for bug fixes (1.0.0 -> 1.0.1)
   npm version minor  # for new features (1.0.0 -> 1.1.0)
   npm version major  # for breaking changes (1.0.0 -> 2.0.0)
   ```

2. Publish:
   ```bash
   npm publish
   ```

## Step 6: Verify Publication

Visit your package page:
- Scoped: `https://www.npmjs.com/package/@your-username/shadcn-rich-editor`
- Unscoped: `https://www.npmjs.com/package/shadcn-rich-editor`

## Using Your Published Package

Once published, users can install it:

```bash
npm install @your-username/shadcn-rich-editor
```

And use it in their projects:

```tsx
import { Editor, Renderer } from '@your-username/shadcn-rich-editor';
import '@your-username/shadcn-rich-editor/styles';

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

## Package Contents

Your published package will include:
- `dist/shadcn-rich-editor.es.js` - ES module build
- `dist/shadcn-rich-editor.umd.js` - UMD build (for CDN usage)
- `dist/shadcn-rich-editor.css` - Bundled styles
- `dist/*.d.ts` - TypeScript type declarations
- `README.md` - Documentation
- `LICENSE` - MIT license

## Troubleshooting

### Error: Package name already exists
- Change the package name in `package.json` to something unique
- Or use a scoped package: `@your-username/package-name`

### Error: You must be logged in to publish
- Run `npm login` and enter your credentials

### Error: You do not have permission to publish
- Make sure you're logged in with the correct account
- For scoped packages, add `--access public`

### Build fails
- Check that all dependencies are installed: `npm install`
- Ensure TypeScript has no errors: `npx tsc --project tsconfig.lib.json`

## Best Practices

1. **Semantic Versioning**: Follow [semver](https://semver.org/)
   - MAJOR: Breaking changes
   - MINOR: New features (backward compatible)
   - PATCH: Bug fixes

2. **Changelog**: Maintain a CHANGELOG.md file documenting changes

3. **Git Tags**: Tag releases in git
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

4. **CI/CD**: Consider setting up automated publishing with GitHub Actions

5. **Testing**: Always test the package locally before publishing

## Unpublishing (Use with Caution)

If you need to unpublish within 72 hours:

```bash
npm unpublish @your-username/shadcn-rich-editor@1.0.0
```

**Warning**: Unpublishing is discouraged and has restrictions. Use `npm deprecate` instead for older versions.

## Support

For issues with npm publishing, see:
- [npm Documentation](https://docs.npmjs.com/)
- [npm Support](https://www.npmjs.com/support)
