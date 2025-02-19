# WiFi QR Code Generator

This project is a web application that allows users to generate QR codes for easy WiFi access. Simply enter your network name (SSID) and password, and get a QR code that allows users to connect to your WiFi with a quick scan. Perfect for homes, cafes, and offices.

## Features

- Generate QR codes for WiFi access
- Print WiFi login cards with QR codes
- Responsive design for various devices
- Local storage to save SSID and password

## Technologies Used

- React
- TypeScript
- Vite
- CSS Modules
- ESLint

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Chucky22Mendoza/qr-wifi.git
   cd qr-wifi
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the development server, run:
```sh
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` to see the application in action.

### Building for Production

To build the application for production, run:
```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` directory.

### Linting

To lint the code, run:
```sh
npm run lint
# or
yarn lint
```

## Project Structure

```
qr-wifi/
├── .gitignore
├── .qodo/
│   └── history.sqlite
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   │   ├── Advice/
│   │   │   ├── Advice.module.css
│   │   │   └── index.tsx
│   │   ├── Card/
│   │   │   ├── Card.module.css
│   │   │   └── index.tsx
│   │   ├── Footer/
│   │   │   ├── footer.module.css
│   │   │   └── index.tsx
│   │   ├── Form/
│   │   │   ├── Form.module.css
│   │   │   └── index.tsx
│   │   └── PreviewQR/
│   │       └── index.tsx
│   ├── config/
│   │   └── config.ts
│   ├── domain/
│   │   └── SSID.ts
│   ├── index.css
│   ├── lib/
│   │   └── wifi.ts
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Made with ❤️ by [Jesús Mendoza Verduzco](https://github.com/Chucky22Mendoza)

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [QR Code API](https://api.qrserver.com/)