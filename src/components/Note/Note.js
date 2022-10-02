import styles from './Note.module.css';

function Note ({style}) {

    return <div clasName={styles.note} style={style}></div>
}

export default Note;