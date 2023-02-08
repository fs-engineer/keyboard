import { useEffect, useState } from 'react';
import KeyBtn from '../KeyBtn/KeyBtn';
import keyboardData from '../../assets/keyboardData';

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
    <>
      {Object.keys(keyboardData).map(key => (
        <div key={key}>
          {keyboardData[key].map(el => (
            <KeyBtn
              key={el.code}
              system={el.system}
              currentKey={currentKey}
              bgColor={el.color}
              name={el.name}
              code={el.code}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Keyboard;
