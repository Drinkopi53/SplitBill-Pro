import React from 'react';

const BillForm = ({ totalBill, setTotalBill }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="totalBill" className="block text-sm font-medium text-gray-700">
            Total Bill
          </label>
          <input
            type="number"
            id="totalBill"
            value={totalBill}
            onChange={(e) => setTotalBill(parseFloat(e.target.value))}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="0.00"
          />
        </div>
      </form>
    </div>
  );
};

export default BillForm;
