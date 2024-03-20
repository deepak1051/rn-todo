import { useColorScheme } from 'nativewind';
import { createContext } from 'react';

export const themeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <themeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </themeContext.Provider>
  );
};
