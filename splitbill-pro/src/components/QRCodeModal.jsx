import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { generateReceiptHtml } from '../utils/receipt';

const QRCodeModal = ({ data, onClose }) => {
  const handleGenerateReceipt = () => {
    const receiptHtml = generateReceiptHtml(data);
    const newWindow = window.open();
    newWindow.document.write(receiptHtml);
    newWindow.document.close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center">
        <h2 className="text-xl font-bold mb-4">Scan QR Code</h2>
        <QRCodeSVG value={JSON.stringify(data)} size={256} />
        <div className="mt-6">
          <button
            onClick={handleGenerateReceipt}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Generate Receipt
          </button>
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
