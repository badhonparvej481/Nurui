import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set your root folder here
const targetDir = path.resolve(__dirname, '../components/js');

function renameTSXtoJSX(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return;
  }

  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      renameTSXtoJSX(fullPath); // Recursively handle subfolders
    } else if (path.extname(item) === '.tsx') {
      const newPath = path.join(dir, item.replace(/\.tsx$/, '.jsx'));
      fs.renameSync(fullPath, newPath);
      console.log(`✅ Renamed: ${fullPath} → ${newPath}`);
    }
  });
}

renameTSXtoJSX(targetDir);
console.log("🎉 All .tsx files renamed to .jsx!");