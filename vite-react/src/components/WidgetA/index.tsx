import {useContext} from "react";
import {FormContext} from "../../context/form/FormState.tsx";

export default function WidgetA()  {
/*
    const {
        init,
        formState: { firstName, lastName },
    } = useContext(FormContext);
*/

    return (
        <>
            <h2>WidgetA!</h2>
            <div>
{/*                <div>{firstName}</div>
                <div>{lastName}</div>*/}
            </div>
        </>
    )
};