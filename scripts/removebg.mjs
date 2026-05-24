import fs from 'fs';
import FormData from 'form-data';
import fetch from 'node-fetch';

const form = new FormData();
form.append('image_file', fs.createReadStream('public/images/logo.png'));
form.append('size', 'auto');

const res = await fetch('https://api.remove.bg/v1.0/removebg', {
  method: 'POST',
  headers: { 'X-Api-Key': 'DEIN_KEY' },
  body: form
});

if (res.ok) {
  const buf = await res.buffer();
  fs.writeFileSync('public/images/logo-nobg.png', buf);
  console.log('Gespeichert: logo-nobg.png');
} else {
  console.error(await res.text());
}
