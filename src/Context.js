import { createContext, useState } from "react";
// Create context for managing music-related state
export const MusicContext = createContext();

// Context provider to wrap the entire application
export const ContextProvider = ({ children }) => {
  // State variables
  const [isLoading, setIsLoading] = useState(false);
  const [likedMusic, setLikedMusic] = useState([]);
  const [pinnedMusic, setPinnedMusic] = useState([]);
  const [resultOffset, setResultOffset] = useState(0);

  // Provide state values and setter functions to the context
  return (
    <MusicContext.Provider
      value={{
        isLoading,
        setIsLoading,
        likedMusic,
        setLikedMusic,
        resultOffset,
        setResultOffset,
        pinnedMusic,
        setPinnedMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
