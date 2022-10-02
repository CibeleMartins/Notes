// libs and hooks
import { useState } from 'react';

// styles
import styles from './Notes.module.css';

// components
import FormContainer from '../components/FormContainer/FormContainer';
import Title from '../components/Title/Title';
import FormControl from '../components/FormControl/FormControl';

function Notes () {

    // // informations of post it
    // const [postIt, setPostIt] = useState([]);

    // generate one position random
    function positionsArrayColors(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function receiveValuesInputs (event, noteTitle, noteDescription) {

        event.preventDefault();
        const notes = [];

        const positionsColors = positionsArrayColors(0, 5)
        const colors = ['#B0E0E6', '#D8BFD8', '#FFE4E1', '#F0FFF0', '#FFE4C4', '#F8F8FF'];
    }
  
    // page
    return (
        <>
            <FormContainer>
                <Title 
                text="Write here all your tasks, goals, concerns and anything else you want! "/>
                <FormControl>
                </FormControl>
            </FormContainer>
        </>
    )
};


export default Notes;