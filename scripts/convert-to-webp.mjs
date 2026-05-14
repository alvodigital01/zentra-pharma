import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const QUALITY = 85;

// Keep original format – still needed as favicon (browsers require PNG/ICO)
const KEEP_ORIGINAL = new Set(["logozenthra.PNG"]);

// Source files that may reference images
const CODE_FILES = [
  path.join(ROOT, "lib", "content.ts"),
  path.join(ROOT, "app", "layout.tsx"),
  path.join(ROOT, "components", "logo.tsx"),
  path.join(ROOT, "components", "product-mockup.tsx"),
];

function findImages(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(full));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  const images = findImages(PUBLIC_DIR);
  const converted = []; // { oldRel, newRel }

  console.log(`\nConverting ${images.length} images to WebP (quality ${QUALITY})…\n`);

  for (const imgPath of images) {
    const basename = path.basename(imgPath);
    const ext = path.extname(basename);
    const webpPath = imgPath.slice(0, -ext.length) + ".webp";

    try {
      await sharp(imgPath).webp({ quality: QUALITY }).toFile(webpPath);

      const oldRel = "/" + path.relative(PUBLIC_DIR, imgPath).replace(/\\/g, "/");
      const newRel = "/" + path.relative(PUBLIC_DIR, webpPath).replace(/\\/g, "/");
      converted.push({ oldRel, newRel });

      if (!KEEP_ORIGINAL.has(basename)) {
        fs.unlinkSync(imgPath);
        console.log(`  ✓  ${oldRel}  →  ${newRel}`);
      } else {
        console.log(`  ✓  ${oldRel}  →  ${newRel}  (original kept for favicon)`);
      }
    } catch (err) {
      console.error(`  ✗  ${basename}: ${err.message}`);
    }
  }

  // Update code references
  console.log("\nUpdating code references…\n");

  for (const filePath of CODE_FILES) {
    if (!fs.existsSync(filePath)) continue;

    let src = fs.readFileSync(filePath, "utf8");
    let changed = false;

    for (const { oldRel, newRel } of converted) {
      // Escape special regex chars in the path
      const escaped = oldRel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(escaped, "g");
      if (re.test(src)) {
        src = src.replace(new RegExp(escaped, "g"), newRel);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, src, "utf8");
      console.log(`  updated  ${path.relative(ROOT, filePath)}`);
    }
  }

  console.log("\nDone.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
