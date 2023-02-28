import React, { FC } from 'react';
import { keyboardData } from '../../assets';
import KeyBtn from '../KeyBtn/KeyBtn';
import { KeyContainer, KeyWrapper } from './ArrowKeys.styled';

type ArrowKeysProps = {
  currentKey: string | null;
};

const ArrowKeys: FC<ArrowKeysProps> = ({ currentKey }) => {
  const topKey = keyboardData.arrows[0];
  const leftKey = keyboardData.arrows[3];
  const bottomKey = keyboardData.arrows[2];
  const rightKey = keyboardData.arrows[1];

  return (
    <KeyContainer>
      <KeyWrapper>
        <KeyBtn
          key={topKey.code}
          system={topKey.system}
          currentKey={currentKey}
          bgColor={topKey.color}
          name={topKey.name}
          icon={topKey.icon}
          code={topKey.code}
        />
      </KeyWrapper>
      <KeyWrapper>
        <KeyBtn
          key={leftKey.code}
          system={leftKey.system}
          currentKey={currentKey}
          bgColor={leftKey.color}
          name={leftKey.name}
          icon={leftKey.icon}
          code={leftKey.code}
        />
        <KeyBtn
          key={bottomKey.code}
          system={bottomKey.system}
          currentKey={currentKey}
          bgColor={bottomKey.color}
          name={bottomKey.name}
          icon={bottomKey.icon}
          code={bottomKey.code}
        />
        <KeyBtn
          key={rightKey.code}
          system={rightKey.system}
          currentKey={currentKey}
          bgColor={rightKey.color}
          name={rightKey.name}
          icon={rightKey.icon}
          code={rightKey.code}
        />
      </KeyWrapper>
    </KeyContainer>
  );
};

export default ArrowKeys;
