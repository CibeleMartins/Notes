

// styles
import styles from './FormControl.module.css';

// components
import Input from '../Input/Input';
import Button from '../Button/Button';

function FormControl ({className, children, renderChildren, inputTitle, inputDescription, changeTitle, changeDescription}) {

    // contents
    const arrayChildrens = [];
    const arrayInputs = [];

    // conditional for render contents
    if (renderChildren) {
        arrayChildrens.push(children)

    } else {

        arrayInputs.push(<>  <Input
            placeholder="Title of your note"
            onChange={(event)=> changeTitle(event.target.value)}
            value={inputTitle}/>
            <textarea
            style={{width: '50%',
                height: '100px',
                border: 'none',
                outline: 'none',
                borderRadius: '10px',
                padding: '10px'}}
            value={inputDescription}
            onChange={(event)=> changeDescription(event.target.value)}
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