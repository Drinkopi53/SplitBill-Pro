import React, { useState } from 'react';
import { Plus, X, Edit, Save } from 'lucide-react';

const ItemList = ({ items, setItems, participants }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');
  const [editingPrice, setEditingPrice] = useState('');

  const addItem = () => {
    if (itemName.trim() !== '' && itemPrice.trim() !== '') {
      setItems([
        ...items,
        {
          id: Date.now(),
          name: itemName,
          price: parseFloat(itemPrice),
          assignedTo: [],
        },
      ]);
      setItemName('');
      setItemPrice('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const startEditing = (item) => {
    setEditingId(item.id);
    setEditingName(item.name);
    setEditingPrice(item.price);
  };

  const saveEdit = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, name: editingName, price: parseFloat(editingPrice) }
          : item
      )
    );
    setEditingId(null);
  };

  const assignToParticipant = (itemId, participantId) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          const assignedTo = item.assignedTo.includes(participantId)
            ? item.assignedTo.filter((id) => id !== participantId)
            : [...item.assignedTo, participantId];
          return { ...item, assignedTo };
        }
        return item;
      })
    );
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-4">Items</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter item name"
        />
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          className="w-24 px-3 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Price"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
        >
          <Plus size={20} />
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="bg-white p-3 rounded-md mb-2 shadow">
            <div className="flex justify-between items-center">
              {editingId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    className="flex-grow px-2 py-1 border rounded"
                  />
                  <input
                    type="number"
                    value={editingPrice}
                    onChange={(e) => setEditingPrice(e.target.value)}
                    className="w-24 px-2 py-1 border rounded mx-2"
                  />
                  <button onClick={() => saveEdit(item.id)} className="text-green-500 hover:text-green-700">
                    <Save size={20} />
                  </button>
                </>
              ) : (
                <>
                  <span>
                    {item.name} - ${item.price.toFixed(2)}
                  </span>
                  <div>
                    <button onClick={() => startEditing(item)} className="text-blue-500 hover:text-blue-700 mr-2">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                      <X size={20} />
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-semibold">Assign to:</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {participants.map((participant) => (
                  <label key={participant.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={item.assignedTo.includes(participant.id)}
                      onChange={() => assignToParticipant(item.id, participant.id)}
                    />
                    <span>{participant.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
