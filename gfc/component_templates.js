exports.component = (name) => `import React from 'react';
import cn from 'classnames';

import s from './${name}.module.scss';

interface I${name}Props {}

const ${name}: React.FC<I${name}Props> = () => {
  return (
    <div className={s.root}>
      Hello, I am a ${name} component.
    </div>
  );
};

export default ${name};
`;

exports.scss = () => `.root {
  background: red;
}
`;

exports.package = (name) => `{
  "main": "${name}.tsx"
}
`;
