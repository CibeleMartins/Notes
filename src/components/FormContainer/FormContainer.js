import styles from './FormContainer.module.css';

function FormContainer ({className, children, onSubmit}) {
    return <form onSubmit={onSubmit} className={`${styles.FormContainer} || ${className}`}>{children}</form>
}

export default FormContainer;