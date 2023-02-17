import { FC, useEffect, useState } from 'react';
import KeyBtn from '../KeyBtn/KeyBtn';
import keyboardData from '../../assets/keyboardData';
import { KeyContainer, KeyWrapper } from './Keyboard.styled';
import ArrowKeys from '../ArrowKeys/ArrowKeys';

const Keyboard: FC = () => {
  const [currentKey, setCurrentKey] = useState<string | null>(null);
  console.log(currentKey);

  useEffect(() => {
    window.addEventListener('keydown', e => setCurrentKey(e.code));

    return window.removeEventListener('keydown', e => setCurrentKey(e.code));
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', () => setCurrentKey(null));

    return window.removeEventListener('keyup', () => setCurrentKey(null));
  }, []);

  return (
    <KeyContainer>
      <div>
        <KeyWrapper>
          {keyboardData.escRow.map(el => (
            <KeyBtn
              key={el.code}
              system={el.system}
              currentKey={currentKey}
              bgColor={el.color}
              name={el.name}
              code={el.code}
            />
          ))}
        </KeyWrapper>
        <KeyWrapper>
          {keyboardData.numbersRow.map(el => (
            <KeyBtn
              key={el.code}
              system={el.system}
              currentKey={currentKey}
              bgColor={el.color}
              name={el.name}
              code={el.code}
            />
          ))}
        </KeyWrapper>
        <KeyWrapper>
          {keyboardData.firstRow.map(el => (
            <KeyBtn
              key={el.code}
              system={el.system}
              currentKey={currentKey}
              bgColor={el.color}
              name={el.name}
              code={el.code}
            />
          ))}
        </KeyWrapper>
        <KeyWrapper>
          {keyboardData.secondRow.map(el => (
            <KeyBtn
              key={el.code}
              system={el.system}
              currentKey={currentKey}
              bgColor={el.color}
              name={el.name}
              code={el.code}
            />
          ))}
        </KeyWrapper>
        <KeyWrapper>
          {keyboardData.thirdRow.map(el => (
            <KeyBtn
              key={el.code}
              system={el.system}
              currentKey={currentKey}
              bgColor={el.color}
              name={el.name}
              code={el.code}
            />
          ))}
        </KeyWrapper>
        <KeyWrapper>
          {keyboardData.bottomRow.map(el => (
            <KeyBtn
              key={el.code}
              system={el.system}
              currentKey={currentKey}
              bgColor={el.color}
              name={el.name}
              code={el.code}
            />
          ))}
          <ArrowKeys currentKey={currentKey} />
          {/*<ArrowKeyWrapper>*/}
          {/*  {keyboardData.arrows.map(el => (*/}
          {/*    <KeyBtn*/}
          {/*      key={el.code}*/}
          {/*      system={el.system}*/}
          {/*      currentKey={currentKey}*/}
          {/*      bgColor={el.color}*/}
          {/*      name={el.name}*/}
          {/*      icon={el.icon}*/}
          {/*      code={el.code}*/}
          {/*    />*/}
          {/*  ))}*/}
          {/*</ArrowKeyWrapper>*/}
        </KeyWrapper>
      </div>
    </KeyContainer>
  );
};

export default Keyboard;
