module.exports = (componentName) => ({
  content: `export { default } from "./${componentName}";`,
  filename: `index.ts`
});
