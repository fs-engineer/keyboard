import theme from '../assets/theme';

const keyboardData = {
  escRow: [
    {
      code: 'Escape',
      name: 'Esc',
      color: theme.background.white,
      system: true,
    },
  ],

  firstRow: [
    { code: 'Tab', name: 'Tab', color: theme.background.white, system: true },
    { code: 'KeyQ', name: 'q', color: theme.background.pink },
    { code: 'KeyW', name: 'w', color: theme.background.yellow },
    { code: 'KeyE', name: 'e', color: theme.background.green },
    { code: 'KeyR', name: 'r', color: theme.background.cyan },
    { code: 'KeyT', name: 't', color: theme.background.cyan },
    { code: 'KeyY', name: 'y', color: theme.background.blue },
    { code: 'KeyU', name: 'u', color: theme.background.blue },
    { code: 'KeyI', name: 'i', color: theme.background.green },
    { code: 'KeyO', name: 'o', color: theme.background.yellow },
    { code: 'KeyP', name: 'p', color: theme.background.pink },
    {
      code: 'BracketLeft',
      name: '[',
      color: theme.background.pink,
      system: true,
    },
    {
      code: 'BracketRight',
      name: ']',
      color: theme.background.pink,
      system: true,
    },
    {
      code: 'Backslash',
      name: '\x5c',
      color: theme.background.pink,
      system: true,
    },
  ],
  secondRow: [
    {
      code: 'CapsLock',
      name: 'CapsLock',
      color: theme.background.white,
      system: true,
    },
    { code: 'KeyA', name: 'a', color: theme.background.pink },
    { code: 'KeyS', name: 's', color: theme.background.yellow },
    { code: 'KeyD', name: 'd', color: theme.background.green },
    { code: 'KeyF', name: 'f', color: theme.background.cyan },
    { code: 'KeyG', name: 'g', color: theme.background.cyan },
    { code: 'KeyH', name: 'h', color: theme.background.blue },
    { code: 'KeyJ', name: 'j', color: theme.background.blue },
    { code: 'KeyK', name: 'k', color: theme.background.green },
    { code: 'KeyL', name: 'l', color: theme.background.yellow },
    { code: 'Semicolon', name: ';', color: theme.background.pink },
    { code: 'Quote', name: "'", color: theme.background.pink },
    {
      code: 'Enter',
      name: 'Enter',
      color: theme.background.white,
      system: true,
    },
  ],
  thirdRow: [
    {
      code: 'ShiftLeft',
      name: 'Shift',
      color: theme.background.white,
      system: true,
    },
    { code: 'KeyZ', name: 'z', color: theme.background.pink },
    { code: 'KeyX', name: 'x', color: theme.background.yellow },
    { code: 'KeyC', name: 'c', color: theme.background.green },
    { code: 'KeyV', name: 'v', color: theme.background.cyan },
    { code: 'KeyB', name: 'b', color: theme.background.cyan },
    { code: 'KeyN', name: 'n', color: theme.background.blue },
    { code: 'KeyM', name: 'm', color: theme.background.blue },
    { code: 'Comma', name: ',', color: theme.background.green },
    { code: 'Period', name: '.', color: theme.background.yellow },
    { code: 'Slash', name: '/', color: theme.background.pink },
    {
      code: 'ShiftRight',
      name: 'Shift',
      color: theme.background.white,
      system: true,
    },
  ],
  bottomRow: [
    {
      code: 'ControlLeft',
      name: 'control',
      color: theme.background.white,
      system: true,
    },
    {
      code: 'AltLeft',
      name: 'Option',
      color: theme.background.white,
      system: true,
    },
    {
      code: 'MetaLeft',
      name: 'Command',
      color: theme.background.white,
      system: true,
    },
    {
      code: 'Space',
      name: 'Space',
      color: theme.background.white,
      system: true,
    },
    {
      code: 'MetaRight',
      name: 'Command',
      color: theme.background.white,
      system: true,
    },
    {
      code: 'AltRight',
      name: 'Option',
      color: theme.background.white,
      system: true,
    },
  ],
  arrows: [
    {
      code: 'ArrowUp',
      name: 'up',
      color: theme.background.white,
      system: true,
    },
    {
      code: 'ArrowRight',
      name: 'right',
      color: theme.background.white,
      system: true,
    },
    {
      code: 'ArrowDown',
      name: 'down',
      color: theme.background.white,
      system: true,
    },
    {
      code: 'ArrowLeft',
      name: 'left',
      color: theme.background.white,
      system: true,
    },
  ],
};

export default keyboardData;
