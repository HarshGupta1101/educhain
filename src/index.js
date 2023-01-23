import React from 'react';
import { createRoot } from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import getConfig from './config.js';
import * as nearAPI from 'near-api-js';

// Initializing contract
async function initContract() {
  const nearConfig = getConfig(process.env.NODE_ENV || 'testnet');

  // Initializing connection to the NEAR TestNet
  const near = await nearAPI.connect({
    deps: {
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    },
    ...nearConfig,
  });

  // Needed to access wallet
  const walletConnection = new nearAPI.WalletConnection(near);

  // Load in account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = {
      accountId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
    };
  }

  return { currentUser, nearConfig, walletConnection, near };
}

const container = document.getElementById('root');
const root = createRoot(container);

window.nearInitPromise = initContract().then(
  ({ contract, currentUser, nearConfig, walletConnection, near }) => {
    root.render(
      <SidebarProvider>
        <CoursesProvider>
          <CartProvider>
            <React.StrictMode>
              <App
                contract={contract}
                currentUser={currentUser}
                nearConfig={nearConfig}
                wallet={walletConnection}
                near = {near}
              />
            </React.StrictMode>
          </CartProvider>
        </CoursesProvider>
      </SidebarProvider>
    );
  }
);
