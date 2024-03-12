import {FormState, defaultFormState} from './FormState.tsx';

const ACTION_SET_FILE_KEY = 'action-set-file-key' as const;
const ACTION_SET_LAST_NAME = 'action-set-last-name' as const;
const ACTION_RESET = 'action-reset' as const;
const ACTION_LOAD_FROM_LOCAL = 'action-load-from-local' as const;


export type FormActionType =
    | {
    type: typeof ACTION_SET_FILE_KEY;
    payload: string;
}
    | {
    type: typeof ACTION_SET_LAST_NAME;
    payload: string;
}
    | {
    type: typeof ACTION_LOAD_FROM_LOCAL;
    payload: string;
}
    | {
    type: typeof ACTION_RESET;
};

export function formStateReducers(widgetState: FormState, widgetAction: FormActionType): FormState {
    switch (widgetAction.type) {
        case ACTION_SET_FILE_KEY:
            return {...widgetState, filekey: widgetAction.payload};

        case ACTION_SET_LAST_NAME:
            return {...widgetState, lastname: widgetAction.payload};

        case ACTION_LOAD_FROM_LOCAL:
            if (typeof window !== 'undefined') {
                const saved = localStorage.getItem(widgetAction.payload) as string;
                const data: FormState = saved ? JSON.parse(saved) : {};
                if (data) {
                    return {...data};
                }
            }

        case ACTION_RESET:
            return defaultFormState;
    }
}
