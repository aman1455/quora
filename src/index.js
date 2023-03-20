import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>

      <ChakraProvider>
      <ColorModeScript initialColorMode='light'/>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
