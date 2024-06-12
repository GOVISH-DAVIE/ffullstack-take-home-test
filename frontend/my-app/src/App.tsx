
import './App.css';
import { CircularProgress, Container, Grid, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import { InputSearch } from './components/form/search';
import { QueryContext } from './context/rQuery';
import { ElloTheme } from './context/theme';
import { useQuery, gql } from '@apollo/client';
import { Book } from './interfaces/IBooks';
import { BookCard } from './components/card/books';
import { ElloAppBar } from './components/menu/app_bar';
import { FilterChips } from './components/form/chip';
import useFilter from './hooks/filter';
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import { Add, Delete } from '@mui/icons-material';
import React from 'react';
import { useStudentListContext } from './hooks/student_list_hook';

function App() {
  const filterhook = useFilter()
  const studentList = useStudentListContext()

  const GET_BOOKS = gql`
  query Books {
    books {
       title
       author
       coverPhotoURL
       readingLevel
   }
}`
  const { loading, error, data } = useQuery(GET_BOOKS)


  if (loading) return <Grid container display={'flex'} alignContent={'center'} justifyContent={'center'} pt={2}   >
    <CircularProgress /> </Grid>
    ;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <QueryContext>

      <SnackbarProvider maxSnack={3}>

        <ElloTheme>
          <ElloAppBar />
          <Container>


            <Grid container display={'flex'} alignContent={'center'} justifyContent={'center'} pt={2}   >

              <Grid item xs={12}>
                <InputSearch books={data.books as Book[]} />

              </Grid>
              <Grid pb={2} item xs={12} sx={(theme) => ({
                height: filterhook.booksList.length > 0 ? '70vh' : '0vh',
                overflow: 'scroll',
                scrollbarWidth: 'thin',
                backgroundColor: theme.palette.primary.light + '30',
                pb: filterhook.booksList.length > 0 ? 2 : 0
              })}>
                {
                  filterhook.booksList.length > 0 ?
                    filterhook.booksList.map((value, index) => {
                      const labelId = `checkbox-list-secondary-label-${index}`;

                      return <ListItem
                        key={index}
                        secondaryAction={
                          <IconButton onClick={() => {
                            studentList.addStudentBook(value)

                          }} edge="end" aria-label="Add">
                            <Add sx={(theme) => ({
                              color: theme.palette.primary.dark
                            })} />
                          </IconButton>
                        }

                      >
                        <ListItemButton>
                          <ListItemAvatar>
                            <img
                              height={100}
                              width={100}
                              alt={value.title}
                              src={value.coverPhotoURL}
                              style={{
                                marginRight: "10px"
                              }}
                            />
                          </ListItemAvatar>
                          <ListItemText id={labelId} primary={`Line item ${value.title}`}
                            secondary={<React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.caption"
                              >By: <b>{value.author}</b>
                              </Typography>
                              <br />
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body1"
                                color="text.caption"
                              > Reading Level: <b>{value.readingLevel}</b>
                              </Typography>
                            </React.Fragment>}

                          />
                        </ListItemButton>
                      </ListItem>
                    }) : ''
                }


              </Grid>
              <Grid my={1} display={'flex'} flexDirection={'column'} alignContent={'center'} justifyContent={'center'} item xs={12}>
                <Typography textAlign={'center'} alignContent='center' fontWeight={600} variant='h5'>
                  Filter BY Reading Level:
                </Typography>
                <Grid my={1} display={'flex'} flexWrap={'wrap'} wrap='wrap' flexDirection={'row'} alignContent={'center'} justifyContent={'center'} item xs={10}>

                  <FilterChips filtersBooks={(data.books as Book[]).map(e => e.readingLevel).filter((value, index) => (data.books as Book[]).map(e => e.readingLevel).indexOf(value) === index)} />
                </Grid>
              </Grid>

            </Grid>
            <Grid sx={{
              overflowX: 'scroll',
              overflow: 'scroll',
              whiteSpace: 'nowrap',

            }}>


              {

                (data.books as Book[]).filter(filter => filterhook.filter.length === 0 ? [] : filterhook.filter.includes(filter.readingLevel)).map((book: Book) => {
                  return (
                    <Grid display={'inline-block'} p={1} item sm={3} md={2.5} xs={10}>
                      <BookCard book={book} />
                    </Grid>

                  )
                })
              }

            </Grid>
            {/* </Grid> */}
            <Grid pl={2} pt={2} container display={'flex'} flexDirection={'row'} justifyContent={'start'} alignContent={'center'}>
              <Grid item xs={12}>
                <Typography fontWeight={600} variant='h4'>
                  All the Books

                </Typography>
              </Grid>
              {

                (data.books as Book[]).map((book: Book) => {
                  return (
                    <Grid p={1} item sm={4} md={2.5} xs={10}>
                      <BookCard book={book} />
                    </Grid>

                  )
                })
              }



            </Grid>

          </Container>

        </ElloTheme>
      </SnackbarProvider>
    </QueryContext>
  );
}

export default App;
