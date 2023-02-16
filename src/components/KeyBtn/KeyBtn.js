import { Button } from './KeyBtn.styled';
import { useEffect, useState } from 'react';

const KeyBtn = ({ name, code, currentKey, bgColor, system, icon }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (code === currentKey) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [code, currentKey]);

  return (
    <Button
      bgColor={bgColor}
      system={system}
      tabIndex="-1"
      isActive={isActive}
      data-code={code}
      type="button"
    >
      {icon && !name ? icon : name}
    </Button>
  );
};

export default KeyBtn;
