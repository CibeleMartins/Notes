// libs and hooks
import { useState } from 'react';

// styles
import styles from './Notes.module.css';

// components
import FormContainer from '../components/FormContainer/FormContainer';
import Title from '../components/Title/Title';
import FormControl from '../components/FormControl/FormControl';

function Notes () {

    // informations of post it
    const [postIt, setPostIt] = useState([]);

    // generate one position random
    function positionsArrayColors(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
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