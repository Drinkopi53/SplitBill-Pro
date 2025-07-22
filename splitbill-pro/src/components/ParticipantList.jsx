import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const ParticipantList = ({ participants, setParticipants, showToast }) => {
  const [name, setName] = useState('');

  const addParticipant = () => {
    if (name.trim() !== '') {
      setParticipants([...participants, { id: Date.now(), name }]);
      setName('');
      showToast(`Participant "${name}" added.`);
    }
  };

  const removeParticipant = (id) => {
    const participant = participants.find((p) => p.id === id);
    setParticipants(participants.filter((p) => p.id !== id));
    showToast(`Participant "${participant.name}" removed.`);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-4">Participants</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter participant name"
        />
        <button
          onClick={addParticipant}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
        >
          <Plus size={20} />
        </button>
      </div>
      <ul>
        {participants.map((participant) => (
          <li
            key={participant.id}
            className="flex justify-between items-center bg-white p-2 rounded-md mb-2"
          >
            <span>{participant.name}</span>
            <button
              onClick={() => removeParticipant(participant.id)}
              className="text-red-500 hover:text-red-700"
            >
              <X size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;
