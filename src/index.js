import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react'
import {themes} from './styles/themes.js'
import Auth0Provider from './Auth0provider.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <ChakraProvider theme={themes}>
            <App/>
          </ChakraProvider>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </Auth0Provider>
);

