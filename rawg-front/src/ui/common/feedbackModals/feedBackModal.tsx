import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

export function FeedbackModal(props: { message: string; success: boolean }) {
    function TransitionTop(props: any) {
        return <Slide {...props} direction="down" />;
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={true}
            TransitionComponent={TransitionTop}
        >
            <Alert severity={props.success ? 'success' : 'error'}>{props.message}</Alert>
        </Snackbar>
    );
}
