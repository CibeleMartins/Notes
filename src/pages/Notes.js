// libs and hooks
import { useState } from 'react';

// styles
import styles from './Notes.module.css';

// components
import FormContainer from '../components/FormContainer/FormContainer';
import Title from '../components/Title/Title';
import FormControl from '../components/FormControl/FormControl';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function Notes () {

    // input title 
    const [titleNote, setTitleNote] = useState('')
    const changeTitleNote = (event)=> setTitleNote(event.target.value) 

    // input description
    const [description, setDescription] = useState('')
    const changeDescription = (event)=> setDescription(event.target.value) 

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
                    <Input
                    placeholder="Title of your note"
                    onChange={(event)=> changeTitleNote(event)}
                    value={titleNote}/>
                    <textarea
                    className={styles.description}
                    value={description}
                    onChange={(event)=> changeDescription(event)}
                    placeholder="Describe your note"></textarea>
                    <Button title="Insert"/>
                </FormControl>
            </FormContainer>
        </>
    )
};


export default Notes;