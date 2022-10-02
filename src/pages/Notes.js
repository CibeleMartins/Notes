// libs and hooks
import { useState } from 'react';

// components
import FormContainer from '../components/FormContainer/FormContainer';
import Title from '../components/Title/Title';
import FormControl from '../components/FormControl/FormControl';

function Notes () {

    // input title 
    const [titleNote, setTitleNote] = useState('')
    // const changeTitleNote = (event)=> setTitleNote(event.target.value) 
        
    // input description
    const [description, setDescription] = useState('')
    // const changeDescription = (event)=> setDescription(event.target.value) 

    // informations of post it
    const [postIt, setPostIt] = useState([]);

    // generate one position random
    function positionsArrayColors(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function receiveValuesInputs (noteTitle, noteDescription) {

        const notes = [];

        const positionsColors = positionsArrayColors(0, 5);
        const colors = ['#B0E0E6', '#D8BFD8', '#FFE4E1', '#F0FFF0', '#FFE4C4', '#F8F8FF'];
        notes.unshift({id: Math.random(parseFloat()).toString(), title: noteTitle, decribe: noteDescription, color: colors[positionsColors] });
        return setPostIt(prevState => console.log([...prevState, ...notes]));
    }

    function submitForm (event) {

        event.preventDefault();
  
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
            </FormContainer>
        </>
    )
};


export default Notes;