import sharp from 'sharp';

const CHARS = ' .,:;i1tfLCG08%#@';

export async function imageToAscii(imagePath, { cols = 120, bgThreshold = 210 } = {}) {
  const image = sharp(imagePath);
  const meta = await image.metadata();
  const rows = Math.floor(cols * (meta.height / meta.width) * 0.48);

  const { data, info } = await image
    .resize(cols, rows)
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const lines = [];

  for (let r = 0; r < info.height; r++) {
    let line = '';
    for (let c = 0; c < info.width; c++) {
      const px = data[r * info.width + c];
      // white bg removal — pixels above threshold become space
      const inv = px > bgThreshold ? 0 : 255 - Math.floor(px * 0.6);
      const idx = Math.floor((inv / 255) * (CHARS.length - 1));
      line += CHARS[idx];
    }
    lines.push(line);
  }

  return lines.join('\n');
}
