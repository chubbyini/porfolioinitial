const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgBrandLogo = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="brand-grad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <linearGradient id="bg-grad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#060911" />
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background obsidian tile with smooth rounded corners -->
  <rect width="512" height="512" rx="112" fill="url(#bg-grad)" />
  <rect x="6" y="6" width="500" height="500" rx="106" stroke="url(#brand-grad)" stroke-width="6" stroke-opacity="0.5" />

  <!-- Ambient Glow -->
  <circle cx="256" cy="256" r="180" fill="url(#glow)" />

  <!-- Outer Dial Rings -->
  <circle cx="256" cy="256" r="190" stroke="url(#brand-grad)" stroke-width="8" stroke-opacity="0.9" />
  <circle cx="256" cy="256" r="150" stroke="#FBBF24" stroke-width="3" stroke-dasharray="6 8" stroke-opacity="0.6" />

  <!-- 8 Cardinal & Ordinal Compass Ticks -->
  <line x1="256" y1="76" x2="256" y2="108" stroke="#F59E0B" stroke-width="8" stroke-linecap="round" />
  <line x1="256" y1="404" x2="256" y2="436" stroke="#B45309" stroke-width="8" stroke-linecap="round" />
  <line x1="404" y1="256" x2="436" y2="256" stroke="#D97706" stroke-width="8" stroke-linecap="round" />
  <line x1="76" y1="256" x2="108" y2="256" stroke="#D97706" stroke-width="8" stroke-linecap="round" />
  
  <line x1="360" y1="152" x2="382" y2="130" stroke="#FBBF24" stroke-width="5" stroke-linecap="round" stroke-opacity="0.7" />
  <line x1="152" y1="152" x2="130" y2="130" stroke="#FBBF24" stroke-width="5" stroke-linecap="round" stroke-opacity="0.7" />
  <line x1="360" y1="360" x2="382" y2="382" stroke="#FBBF24" stroke-width="5" stroke-linecap="round" stroke-opacity="0.7" />
  <line x1="152" y1="360" x2="130" y2="382" stroke="#FBBF24" stroke-width="5" stroke-linecap="round" stroke-opacity="0.7" />

  <!-- Four-Point Star Compass Needle (Waymark Star) -->
  <polygon points="256,110 278,240 256,256 234,240" fill="#F59E0B" />
  <polygon points="256,402 278,272 256,256 234,272" fill="#B45309" />
  <polygon points="402,256 272,234 256,256 272,278" fill="#FBBF24" />
  <polygon points="110,256 240,234 256,256 240,278" fill="#D97706" />

  <!-- Core Pivot Ring & Bright Waypoint Pip -->
  <circle cx="256" cy="256" r="28" fill="#090D16" stroke="url(#brand-grad)" stroke-width="6" />
  <circle cx="256" cy="256" r="12" fill="#FFFFFF" />
</svg>`;

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const svgBuffer = Buffer.from(svgBrandLogo);

  // 1. Save raw vector SVG favicon
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgBrandLogo);
  console.log('✓ Wrote public/icon.svg');

  // 2. Generate 32x32 PNG (favicon-32x32.png)
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(publicDir, 'icon.png'), png32);
  console.log('✓ Wrote public/favicon-32x32.png & public/icon.png');

  // 3. Generate 16x16 PNG
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);
  console.log('✓ Wrote public/favicon-16x16.png');

  // 4. Generate multi-resolution ICO file (header + 16x16 + 32x32 + 48x48)
  // Or write high-res 32x32 as favicon.ico (modern browsers accept PNG formatted ICO)
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  
  // Create an authentic ICO file containing 16x16, 32x32, and 48x48 PNG frames
  const frames = [
    { size: 16, buf: png16 },
    { size: 32, buf: png32 },
    { size: 48, buf: png48 },
  ];

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(frames.length, 4); // Number of images

  let offset = 6 + (16 * frames.length);
  const entryBuffers = [];
  const imageBuffers = [];

  for (const f of frames) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(f.size === 256 ? 0 : f.size, 0); // Width
    entry.writeUInt8(f.size === 256 ? 0 : f.size, 1); // Height
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(f.buf.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset of image data
    entryBuffers.push(entry);
    imageBuffers.push(f.buf);
    offset += f.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...entryBuffers, ...imageBuffers]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Wrote public/favicon.ico (multi-resolution 16/32/48)');

  // 5. Generate Apple Touch Icon (180x180)
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);
  console.log('✓ Wrote public/apple-touch-icon.png');

  // 6. Generate Android Web App Icons (192x192 & 512x512)
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), png192);

  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), png512);
  console.log('✓ Wrote public/icon-192.png & public/icon-512.png');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
