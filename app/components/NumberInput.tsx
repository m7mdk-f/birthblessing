import React, { SetStateAction, useState } from 'react';

const NumberInput = ({ number, setnumber }: { number: number, setnumber: React.Dispatch<SetStateAction<number>> }) => {

  return (
    <div className="inline-block relative my-2">
      <input
        type="number"
        inputMode="numeric"
        value={number.toLocaleString('en-US', { useGrouping: false })}
        onChange={(e) => {
          const num = (e.target as HTMLInputElement).value.trim();
          if (num) {
            setnumber(parseInt(num, 10));
          }
        }}
        className="border border-gray-300 rounded text-2xl p-2 text-center w-32 font-sans"
      />
      <button
        onClick={() => setnumber(number + 1)}
        className="absolute inset-y-0.5 text-2xl pr-3 right-0.5 bg-white"
      >
        +
      </button>
      <button
        onClick={() => {
          number > 1 && setnumber(number - 1);
        }}
        className="absolute inset-y-0.5 pl-2.5 text-3xl left-0.5 bg-white"
      >
        -
      </button>
    </div>
  );
};

export default NumberInput;
