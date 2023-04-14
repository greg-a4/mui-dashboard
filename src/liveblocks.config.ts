import { LiveObject, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_dev_JZ83De0YICz26eZV6ulOXKbOTwrXgCEEeO7Iia2C8KuikbuXX_lokU3oehOAyZMe",
});

type Presence = {
  cursor: { x: number; y: number } | null;
};

type Storage = {
  scientist: LiveObject<{ firstName: string; lastName: string }>;
};

export const { 
  RoomProvider, 
  useOthers,
  useUpdateMyPresence,
  useStorage, 
} = createRoomContext<Presence, Storage>(client);