import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar'; 
import { useStudentListContext } from '../hooks/student_list_hook';
import { IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const BookList = () => {

    const studentList = useStudentListContext()


    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {studentList.studentBooks.map((value, index) => {
                const labelId = `checkbox-list-secondary-label-${index}`;
                return (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton onClick={() => studentList.removeStudentBook(value)} edge="end" aria-label="delete">
                                <Delete />
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
                );
            })}
        </List>
    );
}