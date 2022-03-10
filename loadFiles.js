const fs = require("fs");
const path = require("path");

function readFilesSync(dir) {
  const files = [];

  fs.readdirSync(dir).forEach((filename) => {
    const name = path.parse(filename).name;
    const ext = path.parse(filename).ext;
    const filepath = path.resolve(dir, filename);
    const stat = fs.statSync(filepath);
    const isFile = stat.isFile();
    const contents = fs.readFileSync(filepath, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      return data;
    });

    if (isFile) {
      files.push({ name: name, contents: contents });
    }
  });
  return files;
}

const quickSort = (a, b) => {
  if (a.rank < b.rank) {
    return 1;
  } else if (a.rank > b.rank) {
    return -1;
  } else {
    return 0;
  }
};

const filterRecipies = (filterText, files) => {
  const reg = RegExp(filterText, "gi");
  const matches = [];
  files.map((obj, i) => {
    const { name, contents } = obj;
    const found = contents.match(reg);
    if (found) {
      matches.push({ rank: found.length, fileName: name });
    }
  });
  return matches.slice(0, 10).sort(quickSort);
};

const loadFileDetails = (filename) => {
  const fullPathToFile = path.join(__dirname, `/recipies/${filename}.txt`);
  return fs.readFileSync(fullPathToFile, "utf8");
};

exports.readFilesSync = readFilesSync;
exports.filterRecipies = filterRecipies;
exports.loadFileDetails = loadFileDetails;
