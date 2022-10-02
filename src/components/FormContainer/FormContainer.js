import styles from './FormContainer.modules.css';

function FormContainer ({className, children}) {
    return <div className={`${styles.FormContainer} || ${className}`}>{children}</div>
}

export default FormContainer;