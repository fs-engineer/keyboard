import { Button } from './KeyBtn.styled';
import { useEffect, useState } from 'react';

const KeyBtn = ({ name, code, currentKey }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (code === currentKey) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [code, currentKey]);

  return (
    <Button tabIndex="-1" isActive={isActive} data-code={code} type="button">
      {name}
    </Button>
  );
};

export default KeyBtn;
