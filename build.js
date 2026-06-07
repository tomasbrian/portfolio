import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { styles } from './src/styles.js';
import { data } from './src/data.js';
import { buildHTML } from './src/template.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🎨 Building portfolio...');

const html = buildHTML({ styles, data });

const outPath = join(__dirname, 'docs/index.html');
writeFileSync(outPath, html, 'utf-8');

const kb = (Buffer.byteLength(html, 'utf-8') / 1024).toFixed(1);
console.log(`  ✓ Written to docs/index.html (${kb} KB)`);
