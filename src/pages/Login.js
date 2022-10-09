// libs and hooks
import { useState } from 'react';

// database
import database from '../services/database';

// components
import FormContainer from '../components/FormContainer/FormContainer';
import FormControl from '../components/FormControl/FormControl';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';

// styles
import styles from './Login.module.css';

function Login () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event)=> {

        event.preventDefault();

        database.post('login',{
        email: email,
        password: password
       }).then((response)=> {
        console.log(response)
       }).catch((error)=> {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
       })
    }

    return (
        <>
            <FormContainer onSubmit={login}>

                <FormControl className={styles.removeMt} renderChildren>
                    <Title text="Login"/>
                    <Input 
                    value={email} 
                    onChange={(event)=> setEmail(event.target.value)}
                    placeholder="E-mail"/>
                    <Input 
                    type="password"
                    value={password} 
                    onChange={(event)=> setPassword(event.target.value)}
                    placeholder="Password"/>
                </FormControl>

                <Button title="Log In"/>

            </FormContainer>
        </>
    )
};


export default Login;