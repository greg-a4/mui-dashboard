import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Button from '@mui/material/Button'
import Dashboard from './Dashboard';
import { LiveObject } from "@liveblocks/client";
import { RoomProvider, useOthers, useUpdateMyPresence, useStorage } from "./liveblocks.config";


export default function App() {
  const others = useOthers();
  const updateMyPresence = useUpdateMyPresence();
  const scientist = useStorage((root) => root.scientist);

  if (scientist == null) {
    return <div>Loading...</div>;
  }

  return ( 
    <div style={{ width: "100vw", height: "100vh" }}
      onPointerMove={(e) =>
        updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } })
      }
      onPointerLeave={() => updateMyPresence({ cursor: null })}
    >
      <p>There are {others.length} other users with you in the room.</p>
      {others.map(({ connectionId, presence }) =>
        presence.cursor ? (
          <Cursor
            key={connectionId}
            x={presence.cursor.x}
            y={presence.cursor.y}
          />
        ) : null
      )}
      <input value={scientist.firstName} />
      <input value={scientist.lastName} />
      <Dashboard />
    </div>
  );
}
interface CursorProps {
  x: number;
  y: number;
}

// Basic cursor component
function Cursor({ x, y }: CursorProps) {
  return (
    <img
      style={{
        position: "absolute",
        transform: `translate(${x}px, ${y}px)`,
      }}
      src="https://liveblocks.io/images/cursor.svg"
    />
  );
}
