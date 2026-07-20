const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

const publicDir = path.join(__dirname, 'public');

(async () => {
  try {
    const files = fs.readdirSync(publicDir);
    const heicFiles = files.filter(f => f.toLowerCase().endsWith('.heic'));
    console.log(`Found ${heicFiles.length} HEIC files to convert.`);

    for (const file of heicFiles) {
      console.log(`Converting ${file}...`);
      const inputBuffer = fs.readFileSync(path.join(publicDir, file));
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.8
      });
      
      const newFileName = file.replace(/\.HEIC$/i, '.jpg');
      fs.writeFileSync(path.join(publicDir, newFileName), outputBuffer);
      console.log(`Converted ${file} to ${newFileName}`);
    }
    console.log('All conversions complete.');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
})();
