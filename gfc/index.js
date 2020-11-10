const fs = require('fs');
const { component, scss, package } = require('./component_templates.js');

const path = process.argv[2].split('/');
if (path.length === 1) {
  path.unshift('components');
}

// grab component name from terminal argument
const [type, name] = path;
if (!name) throw new Error('You must include a component name.');

const dirType = `./src/${type}/`;
const dirComponent = `./src/${type}/${name}/`;

if (!fs.existsSync(dirType)) fs.mkdirSync(dirType);

// throw an error if the file already exists
if (fs.existsSync(dirComponent)) throw new Error('A component with that name already exists.');

// create the folder
fs.mkdirSync(dirComponent);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// Component.tsx
fs.writeFile(`${dirComponent}/${name}.tsx`, component(name), writeFileErrorHandler);

// Component.module.scss
fs.writeFile(`${dirComponent}/${name}.module.scss`, scss(), writeFileErrorHandler);

// package.json
fs.writeFile(`${dirComponent}/package.json`, package(name), writeFileErrorHandler);
