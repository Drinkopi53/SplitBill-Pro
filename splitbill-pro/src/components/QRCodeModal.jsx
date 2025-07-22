import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeModal = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center">
        <h2 className="text-xl font-bold mb-4">Scan QR Code</h2>
        <QRCode value={JSON.stringify(data)} size={256} />
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QRCodeModal;
