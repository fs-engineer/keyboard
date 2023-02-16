import { useEffect, useState } from 'react';
import KeyBtn from '../KeyBtn/KeyBtn';
import keyboardData from '../../assets/keyboardData';
import { ArrowKeyContainer, KeyContainer, KeyWrapper } from './Keyboard.styled';

const Keyboard = () => {
  const [currentKey, setCurrentKey] = useState(null);

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
          <ArrowKeyContainer>
            {keyboardData.arrows.map(el => (
              <KeyBtn
                key={el.code}
                system={el.system}
                currentKey={currentKey}
                bgColor={el.color}
                name={el.name}
                icon={el.icon}
                code={el.code}
              />
            ))}
          </ArrowKeyContainer>
        </KeyWrapper>
      </div>
    </KeyContainer>
  );
};

export default Keyboard;
