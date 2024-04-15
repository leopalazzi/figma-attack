import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
    activePage: string;
    setActivePage: Dispatch<SetStateAction<string>>;
    onBoardingAnswers: Object;
    setOnBoardingAnswers: Dispatch<SetStateAction<Object>>;
}

export const AppContext = createContext<AppContextInterface>(null);