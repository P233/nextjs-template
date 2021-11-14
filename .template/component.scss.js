module.exports = (componentName) => ({
  content: `@use "styles/common" as *;

.${componentName} {

}
`,
  extension: `.module.scss`
});
