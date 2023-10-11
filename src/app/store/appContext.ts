import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
    activePage: string;
    setActivePage: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextInterface>(null);