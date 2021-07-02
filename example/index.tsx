import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Howl } from 'howler';
import { useHowlerFrequencyData } from '../.';

const App = () => {
  // initalize our Howls
  const howls = [
    new Howl({
      src: [
        'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3',
      ],
    }),
  ];

  // here's where the magic happens!
  const frequencyData = useHowlerFrequencyData({
    howls,

    // we can use the onRafLoop callback function to do whatever we want
    // we're drawing our frequencyData array to a canvas element here
    onRafLoop: () => draw(frequencyData[0]),
  });

  // initialize canvas ref and canvas context
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [
    canvasContext,
    setCanvasContext,
  ] = React.useState<CanvasRenderingContext2D | null>(null);

  // when our canvas ref is defined, connect our canvas ref to our canvas context
  React.useEffect(() => {
    if (canvasRef.current) setCanvasContext(canvasRef.current.getContext('2d'));
  }, [canvasRef]);

  // simple draw method to draw our frequencyData to a canvas
  const draw = (data: Uint8Array) => {
    if (canvasContext && canvasRef.current) {
      canvasContext.clearRect(
        0, // x
        0, // y
        canvasRef.current.width, // width
        canvasRef.current.height // height
      );

      const space = canvasRef.current.width / data.length;

      data.forEach((value, i) => {
        canvasContext.beginPath();
        canvasContext.moveTo(space * i, canvasRef.current?.height || 0); // x, y
        canvasContext.lineTo(
          space * i,
          (canvasRef.current?.height || 0) - value
        ); // x, y
        canvasContext.stroke();
      });
    }
  };

  return (
    <>
      <canvas ref={canvasRef} width="500" height="500" />
      <button onClick={() => howls.forEach(sound => sound.play())}>play</button>
      <button onClick={() => howls.forEach(sound => sound.pause())}>
        pause
      </button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
