const fs = require("fs");
const componentStyles = require("./component.scss");
const componentMarkup = require("./component.markup");
const componentIndex = require("./component.index");
const templates = [componentStyles, componentMarkup, componentIndex];

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name");
  process.exit(1);
}

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  if (template.filename) {
    fs.writeFileSync(`${componentDirectory}/${template.filename}`, template.content);
  } else {
    fs.writeFileSync(
      `${componentDirectory}/${componentName}${template.extension}`,
      template.content
    );
  }
});

console.log("Successfully created component under: " + componentDirectory);
