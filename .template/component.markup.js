module.exports = (componentName) => ({
  content: `import React from "react";
import clsx from "clsx";
import css from "./${componentName}.module.scss";

type ${componentName}Props = {
  className?: string;
}

const ${componentName} = ({ className }: ${componentName}Props) => {
  return (
    <div className={clsx(css.${componentName}, className)}></div>
  );
};

export default ${componentName};
`,
  extension: `.tsx`
});
