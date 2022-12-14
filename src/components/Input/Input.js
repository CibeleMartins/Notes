import styles from './Input.module.css';

function Input ({className, onChange, placeholder, value, type}) {

    return <input
    type={type}
    value={value} 
    onChange={onChange} 
    className={`${styles.entered} || ${className}`}
    placeholder={placeholder} ></input>
}

export default Input;