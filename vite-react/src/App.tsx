import './App.css'
import FormContextProvider, {FormContext} from "./context/form/FormState.tsx";
import Form from "./components/Form";
import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useContext} from "react";
import ResponsiveAppBar from "./components/navbar";

function Layout() {
    const { init} = useContext(FormContext);

    return (
        <Grid container sx={{height: '100vh'}}>
            <Grid item xs={6} sx={{backgroundColor: 'rgba(120, 115, 122, 0.1)'}}>
                <Grid item xs={6}>
                    <ResponsiveAppBar/>
                </Grid>

                <Form/>
            </Grid>

            <Grid item xs={6}>
                {init && (<Outlet/>)}
            </Grid>
        </Grid>
    )
}

export default function App() {
    return (
        <FormContextProvider>
            <Layout/>
        </FormContextProvider>
    );
}
