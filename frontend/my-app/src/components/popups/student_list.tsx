import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Badge, Divider, Grid } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useStudentListContext } from '../../hooks/student_list_hook';
import { BookList } from '../lists_student_book_list';


export default function StudentListModal() {
    const studentList = useStudentListContext()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen} size="large" aria-label="show 4 new mails" sx={(theme) => ({
                color: theme.palette.info.main,
                fontWeight: '500'
            })}>
                <Badge badgeContent={studentList.studentBooks.length} color="error">
                    Student List
                </Badge>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={(theme) => ({
                    position: 'absolute' as 'absolute',
                    top: '0%',
                    right: '0%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    pt: 2,
                    px: 4,
                    pb: 3,
                    width: "50vw",
                    height: "100vh",
                    [theme.breakpoints.down('md')]: {
                        width: "70vw",
                    },
                    [theme.breakpoints.down('sm')]: {
                        width: "90vw",
                    }
                })}>
                    <Grid>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <h2>Student List</h2>
                            </Grid>
                            <Grid item>
                                <Button endIcon={
                                    <Close />
                                } onClick={handleClose} color="inherit">
                                    Close
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Divider />
                    <BookList />
                </Box>
            </Modal>
        </div>
    );
}