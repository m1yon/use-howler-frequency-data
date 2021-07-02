# howler-frequency-data

Get byte frequency data from any amount of [Howler.js](https://github.com/goldfire/howler.js#documentation) objects using the Web Audio API.

## 🎉 Features

- React custom hook to get individual byte frequency data for any amount of Howls you send
- requestAnimationFrame callback support
- All written in TypeScript

## 🛠 Installation

Install howler-frequency-data with npm

```bash
  npm install howler-frequency-data
```

## 🎓 Usage/Examples

```tsx
import { Howl } from 'howler';
import { useHowlerFrequencyData } from 'howler-frequency-data';

const App = () => {
  const frequencyData = useHowlerFrequencyData({
    howls: [
      new Howl({
        src: ['audio/audio-sample1.mp3'],
      }),
      new Howl({
        src: ['audio/audio-sample2.mp3'],
      }),
    ],
  });

  // frequency data for audio-sample1.mp3 (updates real-time once audio is played)
  // frequencyData[0] = [0, 0, 0, 0, 0....]

  // frequency data for audio-sample2.mp3 (updates real-time once audio is played)
  // frequencyData[1] = [0, 0, 0, 0, 0....]

  // throw in some logic to write frequencyData to your canvas element

  return <canvas />;
};
```

## 🔊 Demo

A sample project can be found inside the repo under `/example`. It's a simple audio visualizer utilizing howler-frequency-data in combination with the canvas API.

## 🦸‍♂️ Maintainers

- [@m1yon](https://github.com/m1yon)
