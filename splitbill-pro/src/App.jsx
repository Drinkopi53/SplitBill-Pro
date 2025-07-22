import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BillForm from './components/BillForm';
import ModeSwitcher from './components/ModeSwitcher';
import ParticipantList from './components/ParticipantList';
import ItemList from './components/ItemList';
import ResultPanel from './components/ResultPanel';
import QRCodeModal from './components/QRCodeModal';
import Toast from './components/Toast';
import { QrCode } from 'lucide-react';

function App() {
  const [totalBill, setTotalBill] = useState(() => {
    const saved = localStorage.getItem('totalBill');
    return saved ? JSON.parse(saved) : 0;
  });
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('mode');
    return saved ? JSON.parse(saved) : 'evenly';
  });
  const [participants, setParticipants] = useState(() => {
    const saved = localStorage.getItem('participants');
    return saved ? JSON.parse(saved) : [];
  });
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('items');
    return saved ? JSON.parse(saved) : [];
  });
  const [splitResult, setSplitResult] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('totalBill', JSON.stringify(totalBill));
    localStorage.setItem('mode', JSON.stringify(mode));
    localStorage.setItem('participants', JSON.stringify(participants));
    localStorage.setItem('items', JSON.stringify(items));
  }, [totalBill, mode, participants, items]);

  useEffect(() => {
    if (mode === 'evenly' && participants.length > 0) {
      const amount = totalBill / participants.length;
      const result = participants.map((p) => ({ ...p, amount }));
      setSplitResult(result);
    } else if (mode === 'item') {
      const result = participants.map((p) => {
        const amount = items.reduce((acc, item) => {
          if (item.assignedTo.includes(p.id)) {
            return acc + item.price / item.assignedTo.length;
          }
          return acc;
        }, 0);
        return { ...p, amount };
      });
      setSplitResult(result);
    } else {
      setSplitResult(null);
    }
  }, [totalBill, participants, items, mode]);

  const showToast = (message) => {
    setToastMessage(message);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <BillForm totalBill={totalBill} setTotalBill={setTotalBill} />
        <ModeSwitcher mode={mode} setMode={setMode} />
        <ParticipantList
          participants={participants}
          setParticipants={setParticipants}
          showToast={showToast}
        />
        {mode === 'item' && (
          <ItemList
            items={items}
            setItems={setItems}
            participants={participants}
          />
        )}
        <ResultPanel splitResult={splitResult} />
        {splitResult && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowQRCode(true)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mx-auto"
            >
              <QrCode className="mr-2" />
              Show QR Code
            </button>
          </div>
        )}
        {showQRCode && (
          <QRCodeModal
            data={{
              amount: totalBill,
              itemName: 'Split Bill',
              date: new Date().toLocaleDateString(),
              companyName: 'SplitBill Pro',
              split: splitResult,
            }}
            onClose={() => setShowQRCode(false)}
          />
        )}
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        )}
      </main>
    </div>
  );
}

export default App;
