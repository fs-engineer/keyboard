import { useEffect, useState } from 'react';
import KeyBtn from '../KeyBtn/KeyBtn';
import keyboardData from '../../assets/keyboardData';

const Keyboard = () => {
  const [currentKey, setCurrentKey] = useState(null);

  const changeCurrentKey = e => {
    setCurrentKey(e.code);
  };

  const resetCurrentKey = e => {
    setCurrentKey(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', e => changeCurrentKey(e));

    return window.removeEventListener('keydown', e => changeCurrentKey(e));
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', () => resetCurrentKey());

    return window.removeEventListener('keyup', () => resetCurrentKey());
  }, []);

  return (
    <>
      {Object.keys(keyboardData).map(key => (
        <div key={key}>
          {keyboardData[key].map(el => (
            <KeyBtn
              key={el.code}
              currentKey={currentKey}
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
