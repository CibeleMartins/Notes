// libs and hooks
import { useState } from 'react';

// styles
import styles from './FormControl.module.css';

// components
import Input from '../Input/Input';
import Button from '../Button/Button';

function FormControl ({className, children, renderChildren,}) {

    // input title 
     const [titleNote, setTitleNote] = useState('')
    const changeTitleNote = (event)=> setTitleNote(event.target.value) 
    
    // input description
    const [description, setDescription] = useState('')
    const changeDescription = (event)=> setDescription(event.target.value) 

    // contents
    const arrayChildrens = [];
    const arrayInputs = [];

    // conditional for render contents
    if (renderChildren) {

     arrayChildrens.push(children)
    } else {

        arrayInputs.push(<>  <Input
            placeholder="Title of your note"
            onChange={(event)=> changeTitleNote(event)}
            value={titleNote}/>
            <textarea
            className={styles.description}
            value={description}
            onChange={(event)=> changeDescription(event)}
            placeholder="Describe your note"></textarea>
            <Button title="Insert"/>
        </>)
    }

    // component
    return <div className={`${styles.FormControl} || ${className}`}>
            {arrayChildrens}
            {arrayInputs}
    </div>
}

export default FormControl;