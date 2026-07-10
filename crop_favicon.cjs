const { Jimp } = require('jimp');

async function makeCircle() {
  const image = await Jimp.read('public/old-favicon.png');
  const size = Math.min(image.bitmap.width, image.bitmap.height);
  
  // Crop to a square first
  image.cover({ w: size, h: size });
  
  // Apply a circle mask
  image.circle({ radius: size / 2, x: size / 2, y: size / 2 });
  
  await image.write('public/circle-favicon.png');
  console.log('Successfully created circle-favicon.png');
}

makeCircle().catch(console.error);
