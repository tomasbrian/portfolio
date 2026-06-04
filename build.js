import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { imageToAscii } from './src/ascii.js';
import { styles } from './src/styles.js';
import { data } from './src/data.js';
import { buildHTML } from './src/template.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🎨 Building portfolio...');

// Generate ASCII art from keyboard image
console.log('  → Converting image to ASCII...');
const asciiArt = await imageToAscii(
  join(__dirname, 'assets/keyboard.png'),
  { cols: 130, bgThreshold: 215 }
);

console.log(`  → ASCII: ${asciiArt.split('\n').length} rows`);

// Build HTML
const html = buildHTML({ styles, asciiArt, data });

// Write output
const outPath = join(__dirname, 'docs/index.html');
writeFileSync(outPath, html, 'utf-8');

const kb = (Buffer.byteLength(html, 'utf-8') / 1024).toFixed(1);
console.log(`  ✓ Written to public/index.html (${kb} KB)`);
