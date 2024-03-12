import React, { Dispatch, SetStateAction, createContext, useReducer, useState } from 'react';
import { FormActionType, formStateReducers } from './formReducers.ts';

export interface FormState {
    fisrtName: string;
    lastName: string;
}

export const defaultFormState: FormState = {
    fisrtName: '',
    lastName: '',
};

//
//context

interface FormContextProps {
    formState: FormState;
    dispatch?: Dispatch<FormActionType>;
    init?: boolean;
    setInit?: Dispatch<SetStateAction<boolean>>;
    handleReload?: () => void;
}
export const FormContext = createContext<FormContextProps>({ formState: defaultFormState });

//
// context provider

interface FormContextProviderProps {
    children: React.ReactNode;
}

export default function FormContextProvider({ children }: FormContextProviderProps) {
    const [formState, dispatch] = useReducer(formStateReducers, defaultFormState);
    const [init, setInit] = useState(false);

    function handleReload() {
        setInit(false);
        setTimeout(() => {
            setInit(true);
        }, 1000);
    }

    const value = { init, setInit, formState, dispatch, handleReload };
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
