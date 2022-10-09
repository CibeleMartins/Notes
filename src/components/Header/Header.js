// libs and hooks
import { useNavigate } from 'react-router-dom';

// styles
import styles from './Header.module.css';

// images
import logo from '../../assets/logo.png';
import login from '../../assets/login.svg';
import register from '../../assets/register.svg';

function Header () {

    const navigation = useNavigate();

    return (
        <header
        className={styles.Header}>
            <div>
                <img alt="logo" onClick={()=> navigation('/')} className={styles.Image} src={logo}/>
            </div>

            <div
            className={styles.Links}>
                    <img alt='register' onClick={()=> navigation('/register')} className={styles.Register} src={register}/>
                    <img alt='login' onClick={()=> navigation('/login')} className={styles.Login} src={login}/>
            </div>
        </header>
    )
}

export default Header;