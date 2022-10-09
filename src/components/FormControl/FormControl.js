// styles
import styles from './FormControl.module.css';

// components
import Input from '../Input/Input';

function FormControl ({className, children, renderChildren, inputTitle, inputDescription, changeTitle, changeDescription}) {

    // component
   return   <div className={`${styles.FormControl} || ${className}`}>
                {renderChildren ? children : <><Input
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
                placeholder="Describe your note"/>
                </>}
            </div>
}

export default FormControl;