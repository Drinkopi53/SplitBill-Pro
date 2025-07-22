# SplitBill Pro

SplitBill Pro is a web application that helps you split bills with your friends easily. You can split bills evenly or by item, and the application will calculate how much each person owes.

## Features

- **Even Split:** Split the bill evenly among all participants.
- **Split by Item:** Assign items to participants and split the bill accordingly.
- **Participant Management:** Add, remove, and edit participant names.
- **Item Management:** Add, remove, and edit items and their prices.
- **QR Code Sharing:** Share the split result with a QR code.
- **Data Persistence:** Your data is saved in your browser's local storage, so you can continue where you left off.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/SplitBill-Pro.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```sh
   npm run dev
   ```

## Usage

1. **Enter the total bill amount.**
2. **Choose a split mode:** "Evenly" or "By Item".
3. **Add participants.**
4. **If you chose "By Item", add items and assign them to participants.**
5. **The result will be displayed automatically.**
6. **You can share the result with a QR code.**

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- [qrcode.react](https://github.com/zpao/qrcode.react)
- [clsx](https://github.com/lukeed/clsx)
