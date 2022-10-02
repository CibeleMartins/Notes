import styles from './FormControl.modules.css';

function FormControl ({className}) {
    return <div className={`${styles.FormControl} || ${className}`}> </div>
}

export default FormControl;