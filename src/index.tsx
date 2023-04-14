import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { RoomProvider, useOthers } from "./liveblocks.config";
import { LiveObject } from '@liveblocks/client';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <RoomProvider 
      id="my-room-id" 
      initialPresence={{ cursor: null }}
      initialStorage={{
        scientist: new LiveObject({
          firstName: "Marie",
          lastName: "Curie",
        })
      }}
      > 
      <App />
    </RoomProvider>
  </ThemeProvider>,
);
