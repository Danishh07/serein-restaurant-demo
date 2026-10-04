import sharp from 'sharp'
for (const w of [800, 1800])
  await sharp('src/assets/hero.jpg').resize(w).webp({ quality: 74 }).toFile(`public/hero-${w}.webp`)