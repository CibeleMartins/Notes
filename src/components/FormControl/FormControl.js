import styles from './FormControl.modules.css';

function FormControl ({className, children}) {
    return <div className={`${styles.FormControl} || ${className}`}>{children}</div>
}

export default FormControl;