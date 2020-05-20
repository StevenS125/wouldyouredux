import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Example = (props) => {
  const [rSelected, setRSelected] = useState(null);

  return (
    <div>
      <p>Selected: {rSelected}</p>  
      <ButtonGroup>
  <Button color="primary" onClick={() => setRSelected(props.optOne)} active={rSelected === 1}>{props.optOne}</Button>
        <Button color="primary" onClick={() => setRSelected(props.optTwo)} active={rSelected === 2}>{props.optTwo}</Button>
      </ButtonGroup>
      <Button>Submit Anser</Button>
    </div>
  );
}

export default Example;