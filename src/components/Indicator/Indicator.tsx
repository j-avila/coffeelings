/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

interface Props {
  state: string;
  action: any;
  isSelected: boolean;
}

const colors = {
  base: '#D29573',
  half: '#D9A17E',
  amazing: '#BE7261',
  ok: '#9F5754',
  tired: '#7D4448',
  sad: '#683842',
  stressed: '#492233',
};

const Indicator = ({ state, action, isSelected }: Props) => {
  const [tooltip, setTootip] = useState(false);
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(colors[state as keyof typeof colors]);
  }, [color]);

  return (
    <figure
      className="relative w-[42px] h-[42px] hover:scale-110 transition-transform duration-200"
      style={{ backgroundColor: color }}
      onClick={() => action('roast', state)}
      onMouseEnter={() => setTootip(true)}
      onMouseLeave={() => setTootip(false)}
    >
      <>
        {tooltip && (
          <span
            className="absolute right-[-200%] text-start bg-half p-4 rounded-xl w-[80px] hover:scale-110 transition-transform duration-200"
            onClick={() => action('roast', state)}
          >
            {state}
          </span>
        )}
        {isSelected && (
          <i className="flex justify-center pt-2 align-middle opacity-10 fa-solid fa-mug-hot"></i>
        )}
      </>
    </figure>
  );
};

export default Indicator;
