import React from 'react';
import { Buffer } from 'buffer';
import { createRoot } from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import { initContract } from './utils/utils';
global.Buffer = Buffer;

const container = document.getElementById('root');
const root = createRoot(container);

initContract().then(() => {
  root.render(
    <SidebarProvider>
      <CoursesProvider>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartProvider>
      </CoursesProvider>
    </SidebarProvider>
  );
});
