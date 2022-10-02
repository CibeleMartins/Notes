import styles from './FormContainer.module.css';

function FormContainer ({className, children, onSubmit}) {
    return <div onSubmit={onSubmit} className={`${styles.FormContainer} || ${className}`}>{children}</div>
}

export default FormContainer;