// styles
import styles from './Header.module.css';

// components
import Button from '../Button/Button';

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
                <Button
                className={styles.Btn}>
                    <img className={styles.Register} src={register}/>
                </Button>
                <Button
                className={styles.Btn}>
                    <img className={styles.Login} src={login}/>
                </Button>
            </div>
        </header>
    )
}

export default Header;