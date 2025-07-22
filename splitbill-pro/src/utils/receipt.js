export const generateReceiptHtml = (data) => {
  const { amount, itemName, date, companyName } = data;
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Struk Tagihan</title>
        <style>
          body { font-family: sans-serif; margin: 2em; }
          .receipt-container { border: 1px solid #ccc; padding: 20px; width: 300px; margin: auto; }
          .header { text-align: center; margin-bottom: 20px; }
          .item { display: flex; justify-content: space-between; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="receipt-container">
          <div class="header">
            <h2>${companyName}</h2>
            <p>Struk Tagihan Pembayaran</p>
          </div>
          <div>
            <div class="item">
              <span>Tanggal:</span>
              <span>${date}</span>
            </div>
            <div class="item">
              <span>Barang/Jasa:</span>
              <span>${itemName}</span>
            </div>
            <div class="item">
              <span>Jumlah:</span>
              <span>${amount}</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
