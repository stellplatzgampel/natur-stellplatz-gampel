import sharp from 'sharp';

const img = sharp('public/images/logo.png');
const { data, info } = await img
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i+1], b = data[i+2];
  // Entfernt ALLE hellen Pixel — weiss UND beige UND creme
  if (r > 180 && g > 170 && b > 150) {
    data[i+3] = 0;
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 }
}).png().toFile('public/images/logo-clean.png');
console.log('Done');
