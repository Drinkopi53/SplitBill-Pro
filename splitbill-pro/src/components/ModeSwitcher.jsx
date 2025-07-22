import React from 'react';
import clsx from 'clsx';

const ModeSwitcher = ({ mode, setMode }) => {
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => setMode('evenly')}
        className={clsx(
          'font-bold py-2 px-4 rounded-l transition-colors duration-300',
          mode === 'evenly'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
        )}
      >
        Evenly
      </button>
      <button
        onClick={() => setMode('item')}
        className={clsx(
          'font-bold py-2 px-4 rounded-r transition-colors duration-300',
          mode === 'item'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
        )}
      >
        By Item
      </button>
    </div>
  );
};

export default ModeSwitcher;
