import sharp from 'sharp';

const img = sharp('public/images/logo.png');
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

// Weisse Pixel transparent machen
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i+1], b = data[i+2];
  if (r > 220 && g > 220 && b > 220) {
    data[i+3] = 0; // Alpha = 0 (transparent)
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 }
}).png().toFile('public/images/logo-transparent.png');

console.log('Fertig: logo-transparent.png');
