import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Searchtextfield(props) {

    const top100Films = []
    return (
        <Autocomplete
            disablePortal
            freeSolo
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} size="small" label="Buscar..." />}
        />
    )
}
