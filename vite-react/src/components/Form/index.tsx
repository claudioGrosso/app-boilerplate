import { useContext } from 'react';
import { FormContext } from '../../context/form/FormState.tsx';

import {Button, ButtonGroup, Grid, MenuItem, TextField, Typography} from '@mui/material';

const backgroundColorSx = {
    backgroundColor: '#fff',
};

export default function Form() {
    const {
        formState: { firstName, lastName },
        dispatch,
        handleReload,
        setInit
    } = useContext(FormContext);

    function handleSave() {
        const parsedFormData = {
            firstName: firstName,
            lastName: lastName,
        };
        const key = `form-${firstName}-${lastName}`;
        localStorage.setItem(key, JSON.stringify(parsedFormData));
    }

    return (
        <Grid container padding={1} spacing={3}>
            {/* booking data */}
            <h1>Clod App!</h1>
            <Grid item container>
                <Grid item container spacing={1}>
                    <Grid item>
                        <Typography variant="h5" component="h5">
                            Booking
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="space-between" spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                sx={backgroundColorSx}
                                type="text"
                                variant="outlined"
                                color="secondary"
                                label="firstName"
                                onChange={(e) => {
                                    dispatch && dispatch({ type: 'action-set-file-key', payload: e.target.value });
                                }}
                                value={firstName ?? ''}
                                fullWidth
                                inputProps={{ style: { textTransform: 'uppercase' } }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                sx={backgroundColorSx}
                                type="text"
                                variant="outlined"
                                color="secondary"
                                label="Last Name"
                                onChange={(e) => dispatch && dispatch({ type: 'action-set-last-name', payload: e.target.value })}
                                value={lastName ?? ''}
                                fullWidth
                                inputProps={{ style: { textTransform: 'uppercase' } }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>



            <Grid item container spacing={1} justifyContent="space-around">
                <Grid item container spacing={1}>
                    <Grid item>
                        <ButtonGroup variant="outlined">
                            <Button color="success" onClick={() => setInit && setInit(true)}>
                                Init
                            </Button>

                            <Button color="secondary" onClick={handleReload}>
                                Reload
                            </Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item>
                        <Button
                            variant="outlined"
                            color="warning"
                            onClick={() => {
                                dispatch && dispatch({ type: 'action-reset' });
                                setInit && setInit(false);
                            }}
                        >
                            Reset
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={handleSave}>
                            Save in LocalStorage
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            {/* saved data */}
            <Grid item container direction="column">
                <Grid item>
                    <Typography variant="h5" component="h5">
                        Saved Data
                    </Typography>
                </Grid>

                <Grid item>
                    <TextField
                        sx={backgroundColorSx}
                        style={{ minWidth: '200px' }}
                        select
                        id="data-select"
                        value=""
                        label="Select Data"
                        onChange={(e) => {
                            e.preventDefault();
                            dispatch && dispatch({ type: 'action-load-from-local', payload: e.target.value });
                        }}
                    >
                        {Object.keys(localStorage)?.map((key) => (
                            <MenuItem value={key} key={key}>
                                {key}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        </Grid>
    );
}
