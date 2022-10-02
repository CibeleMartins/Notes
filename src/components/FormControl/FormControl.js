import styles from './FormControl.module.css';

function FormControl ({className, children}) {
    return <div className={`${styles.FormControl} || ${className}`}>{children}</div>
}

export default FormControl;