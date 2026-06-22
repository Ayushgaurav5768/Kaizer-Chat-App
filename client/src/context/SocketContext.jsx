import { createContext, useContext } from 'react';

const SocketContext = createContext();

export function SocketProvider({ children }) {
  return <SocketContext.Provider value={null}>{children}</SocketContext.Provider>;
}

export function useSocket() {
  return useContext(SocketContext);
}
