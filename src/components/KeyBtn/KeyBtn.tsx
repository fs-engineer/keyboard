import { FC, ReactNode, useEffect, useState } from 'react';
import { Button } from './KeyBtn.styled';

// interface IRoute {
//   path: string;
//   name: string;
//   icon: ReactNode;
//   layout: string;
// }

type KeyBtnProps = {
  name: string | null;
  code: string;
  currentKey: string | null;
  bgColor: string;
  system: boolean | undefined;
  icon?: ReactNode;
};

const KeyBtn: FC<KeyBtnProps> = ({
  name,
  code,
  currentKey,
  bgColor,
  system,
  icon,
}) => {
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
      tabIndex={-1}
      isActive={isActive}
      type="button"
      data={code}
    >
      {icon && !name ? icon : name}
    </Button>
  );
};

export default KeyBtn;
