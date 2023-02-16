import { FC, ReactNode, useEffect, useState } from 'react';
import { Button } from './KeyBtn.styled';

// interface IRoute {
//   path: string;
//   name: string;
//   icon: ReactNode;
//   layout: string;
// }

interface IKeyBtnProps {
  name: string | null;
  code: string;
  currentKey: string;
  bgColor: string;
  system: boolean;
  icon: ReactNode;
}

const KeyBtn: FC<IKeyBtnProps> = ({
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

  // @ts-ignore
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
