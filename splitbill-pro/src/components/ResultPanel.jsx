import React from 'react';

const ResultPanel = ({ splitResult }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-4">Result</h2>
      {splitResult ? (
        <ul>
          {splitResult.map((participant) => (
            <li key={participant.id} className="flex justify-between items-center mb-2">
              <span>{participant.name}</span>
              <span className="font-bold">${participant.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          Enter the bill details and add participants to see the result.
        </p>
      )}
    </div>
  );
};

export default ResultPanel;
