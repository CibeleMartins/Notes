// styles
import styles from './Header.module.css';

// images
import logo from '../../assets/logo.png';
import login from '../../assets/login.svg';
import register from '../../assets/register.svg';

function Header () {

    return (
        <header
        className={styles.Header}>
            <div>
                <img alt="logo" className={styles.Image} src={logo}/>
            </div>

            <div
            className={styles.Links}>
                    <img alt='register' className={styles.Register} src={register}/>
                    <img alt='login' className={styles.Login} src={login}/>
            </div>
        </header>
    )
}

export default Header;