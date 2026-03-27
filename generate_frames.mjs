import fs from 'fs';
import path from 'path';

// This script will generate placeholder 1px transparent webp images 
// or base64 files so that the scroll sequence logic doesn't throw 404s.
const publicDir = path.join(process.cwd(), 'public', 'sequence');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// A simple 1x1 transparent webp base64
const transparentWebpBase64 = "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
const buffer = Buffer.from(transparentWebpBase64, 'base64');

for (let i = 0; i < 120; i++) {
  fs.writeFileSync(path.join(publicDir, `frame_${i}.webp`), buffer);
}

console.log('Successfully generated 120 dummy sequence frames!');
