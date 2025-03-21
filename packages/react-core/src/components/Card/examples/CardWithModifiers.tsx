import { Fragment, useState } from 'react';
import { Card, CardTitle, CardBody, CardFooter, Checkbox } from '@patternfly/react-core';

export const CardWithModifiers: React.FunctionComponent = () => {
  const mods = ['isCompact', 'isLarge', 'isFullHeight', 'isPlain'];
  const [modifiers, setModifiers] = useState({});

  return (
    <Fragment>
      <div style={{ marginBottom: '12px' }}>
        {mods.map((mod) => (
          <Checkbox
            id={mod}
            key={mod}
            label={mod}
            isChecked={modifiers[mod]}
            onChange={(_event, checked) => {
              modifiers[mod] = checked;
              setModifiers({ ...modifiers });
            }}
          />
        ))}
      </div>
      <div style={{ height: '15rem' }}>
        <Card {...modifiers}>
          <CardTitle>Title</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </Fragment>
  );
};
