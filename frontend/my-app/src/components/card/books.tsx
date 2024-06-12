import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Book } from '../../interfaces/IBooks';
import { Add, Person } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { useStudentListContext } from '../../hooks/student_list_hook';
import { useSnackbar } from 'notistack';




export const BookCard = ({ book }: { book: Book }) => {
    //* Impliment useStudentListContext Hook
    const studentList = useStudentListContext()

    const { enqueueSnackbar } = useSnackbar();

    return (
        <Card elevation={0}  >
            <CardMedia
                component="img"
                height="200"
                image={book.coverPhotoURL}
                alt={book.title}
            />
            <CardHeader
                title={book.title}
                titleTypographyProps={{
                    variant: 'h6',
                    fontSize: '18px'
                }}
                subheader={
                    <Grid container  >
                        <Grid xs={12} sm={12} md={12} >

                            <Typography>Reading Level: <b> {book.readingLevel} </b></Typography>

                        </Grid>
                        <Grid pr={1} md={.8} xs={.8}>

                            <Typography >
                                by
                            </Typography>

                        </Grid>
                        <Grid pl={1} md={9} xs={9} justifyContent={'center'} alignContent={'center'}  >

                            <Typography >
                                <b> {book.author}</b>
                            </Typography>

                        </Grid>
                    </Grid>

                }
            />
            <CardActions >
                <Button onClick={() => {
                    studentList.addStudentBook(book)

                 }} variant='outlined' endIcon={<Add />} aria-label="add to List">
                    ADD
                </Button>
            </CardActions>

        </Card>
    );
}