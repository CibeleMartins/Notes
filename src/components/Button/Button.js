import styles from './Button.module.css';


function Button ({title, className, onClick, style, children}) {

    return <button style={style} onClick={onClick} className={`${styles.btn} || ${className}`}>{title}{children}</button>
}

export default Button;