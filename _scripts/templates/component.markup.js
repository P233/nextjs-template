module.exports = (componentName) => ({
  content: `import React from "react";
import clsx from "clsx";
import css from "./${componentName}.module.scss";

export type ${componentName}Props = {
  children: React.ReactNode;
  className?: string;
}

const ${componentName} = ({ className, children }: ${componentName}Props) => {
  return (
    <div className={clsx(css.${componentName}, className)}>{children}</div>
  );
};

export default ${componentName};
`,
  extension: `.tsx`
});
