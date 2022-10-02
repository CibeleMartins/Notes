// components
import Note from '../Note/Note';

// styles
import styles from './NoteContainer.module.css';


function NoteContainer ({className, notes}) {

    return <div className={`${styles.NoteContainer} || ${className}`}>
        {notes.map((n)=> {
            return <Note key={n.id} style={{background: n.color}}>
                <h3>{n.title}</h3>
                <p>{n.describe}</p>
            </Note>
        })}
    </div>
}


export default NoteContainer;