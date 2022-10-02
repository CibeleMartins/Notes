import styles from './Note.module.css';

function Note ({style, children}) {

    return <div className={styles.note} style={style}>{children}</div>
}

export default Note;