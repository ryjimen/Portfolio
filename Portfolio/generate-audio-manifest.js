// generate-audio-manifest.js

import fs from 'fs'
import path from 'path'

const folderPath = 'public/audio/'
const outputPath = 'public/audioManifest.json' 

function scanFolder(folder) {
  return fs.readdirSync(folder).map(file => ({
    name: file,
  }));
}

const fileList = scanFolder(folderPath);
fs.writeFileSync(outputPath, JSON.stringify(fileList, null, 2));

console.log('File list generated successfully!');