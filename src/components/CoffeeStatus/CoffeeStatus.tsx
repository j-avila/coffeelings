import React, { useEffect } from 'react';
import Coffee from '../../assets/coffee.svg?react';
import Amazing from '../../assets/amazing.svg?react';
import Ok from '../../assets/ok.svg?react';
import Tired from '../../assets/tired.svg?react';
import Sad from '../../assets/sad.svg?react';
import Stressed from '../../assets/stressed.svg?react';

interface Props {
  state: string;
}

const CoffeStatus = ({ state }: Props) => {
  const roasts: { [key: string]: JSX.Element } = {
    amazing: <Amazing />,
    ok: <Ok />,
    tired: <Tired />,
    sad: <Sad />,
    stressed: <Stressed />,
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center absolute bubble left-5 top-[-20px]">
        {roasts[state]}
      </div>
      <Coffee />
    </div>
  );
};

export default CoffeStatus;
