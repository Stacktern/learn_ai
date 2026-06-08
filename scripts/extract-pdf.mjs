import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfPath = path.join(__dirname, '..', 'data science, a comprehensive guide for beginners 1.0.pdf');

const dataBuffer = fs.readFileSync(pdfPath);
const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
const result = await parser.getText();

const text = result.text;
const lines = text.split(/\r?\n/);

const out = [];
out.push('# PDF text dump');
out.push(`# pages=${result.total}`);
out.push('');
out.push('<<<TEXT>>>');
out.push(text);
out.push('<<<END>>>');

const outPath = path.join(__dirname, 'pdf-dump.txt');
fs.writeFileSync(outPath, out.join('\n'), 'utf8');
console.log(`Wrote ${outPath} (${lines.length} lines, ${text.length} chars)`);

await parser.destroy();
