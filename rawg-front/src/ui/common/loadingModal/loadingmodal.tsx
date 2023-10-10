import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export function LoadingBackdrop() {
    return (
        <Backdrop open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
