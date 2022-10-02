

// components
import FormContainer from '../components/FormContainer/FormContainer';
import Title from '../components/Title/Title';
import FormControl from '../components/FormControl/FormControl';
import Input from '../components/Input/Input';


function Notes () {

    return (
        <>
            <FormContainer>
                <Title 
                text="Write here all your tasks, goals, concerns and anything else you want! "/>
                <FormControl>
                    <Input/>
                </FormControl>
            </FormContainer>
        </>
    )
};


export default Notes;