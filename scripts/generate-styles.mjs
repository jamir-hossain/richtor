import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve(process.cwd(), 'dist');
mkdirSync(distDir, { recursive: true });

const es = "import './richtor.css';\n";
const umd = "(function(){ /* no-op */ })();\n";

writeFileSync(resolve(distDir, 'styles.es.js'), es, 'utf8');
writeFileSync(resolve(distDir, 'styles.umd.js'), umd, 'utf8');
