import { useState } from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import FormControl from '../components/FormControl/FormControl';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';
import styles from './Register.module.css';

function Register () {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfPassword] = useState('');

    return (
        <>
            <FormContainer>

                <FormControl className={styles.removeMt} renderChildren>
                    <Title text="Register"/>
                    <Input 
                    value={name} 
                    onChange={(event)=> setName(event.target.value)}
                    placeholder="Name"/>
                    <Input 
                    value={lastName} 
                    onChange={(event)=> setLastName(event.target.value)}
                    placeholder="Last Name"/>
                    <Input 
                    value={email} 
                    onChange={(event)=> setEmail(event.target.value)}
                    placeholder="E-mail"/>
                    <Input 
                    value={password} 
                    onChange={(event)=> setPassword(event.target.value)}
                    placeholder="Password"/>
                    <Input 
                    value={confirmPassword} 
                    onChange={(event)=> setConfPassword(event.target.value)}
                    placeholder="Confirm Password"/>
                </FormControl>

                <Button title="Log In"/>

            </FormContainer>
        </>
    )
};


export default Register;