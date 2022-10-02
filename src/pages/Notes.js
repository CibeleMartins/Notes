// libs and hooks
import { useState } from 'react';

// components
import FormContainer from '../components/FormContainer/FormContainer';
import Title from '../components/Title/Title';
import FormControl from '../components/FormControl/FormControl';
import Button from '../components/Button/Button'
import NoteContainer from '../components/NoteContainer/NoteContainer';

function Notes () {

    // input title 
    const [titleNote, setTitleNote] = useState('')  
    // input description
    const [description, setDescription] = useState('')

    // informations of post it
    const [postIt, setPostIt] = useState([]);

    // generate one position random
    function positionsArrayColors(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const submitForm = (event)=> {

        event.preventDefault();

        const notes = [];

        const positionsColors = positionsArrayColors(0, 5);
        const colors = ['#B0E0E6', '#D8BFD8', '#FFE4E1', '#F0FFF0', '#FFE4C4', '#F8F8FF'];
        notes.unshift({id: Math.random(parseFloat()).toString(), title: titleNote, describe: description, color: colors[positionsColors]});
        setPostIt(prevState => [...prevState, ...notes]);
  
    }

    // page
    return (
        <>
            <FormContainer onSubmit={submitForm} >
                <Title 
                text="Write here all your tasks, goals, concerns and anything else you want! "/>
                <FormControl 
                changeTitle={setTitleNote}
                changeDescription={setDescription}
                inputTitle={titleNote}
                inputDescription={description}>
                </FormControl>

                <Button title="Insert"/>
            </FormContainer>

            <NoteContainer notes={postIt}/>
        </>
    )
};


export default Notes;