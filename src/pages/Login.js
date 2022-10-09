import { useState } from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import FormControl from '../components/FormControl/FormControl';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';

import styles from './Login.module.css';

function Login () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <FormContainer>

             

                <FormControl className={styles.removeMt} renderChildren>
                    <Title text="Login"/>
                    <Input 
                    value={email} 
                    onChange={(event)=> setEmail(event.target.value)}
                    placeholder="E-mail"/>
                    <Input 
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