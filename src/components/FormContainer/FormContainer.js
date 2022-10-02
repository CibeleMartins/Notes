import styles from './FormContainer.modules.css';

function FormContainer ({className}) {
    return <div className={`${styles.FormContainer} || ${className}`}> </div>
}

export default FormContainer;