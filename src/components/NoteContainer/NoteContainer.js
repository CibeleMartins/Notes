import styles from './NoteContainer.module.css';


function NoteContainer ({children, className}) {

    return <div className={`${styles.NoteContainer} || ${className}`}>{children}</div>
}


export default NoteContainer;