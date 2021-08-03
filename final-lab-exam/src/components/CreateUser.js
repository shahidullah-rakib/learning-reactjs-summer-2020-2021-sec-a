import { useParams } from "react-router";
import { useState } from "react";


const CreateUser = ({ status, onAdd }) => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [contact, setContact] = useState('')
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add an User')
            return
        }

        onAdd({ name, id, contact, username, pass })

        setName('')
        setId('')
        setContact('')
        setUsername('')
        setPass('')

    }

    const { id: eid } = useParams();


    return (
        <>
            <br />
            <h2> This is {status} Employee page  </h2>
            <form onSubmit={onSubmit}>

                Name: <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} /> <br />
                ID: <input
                    type='text'
                    name='id'
                    value={id}
                    onChange={(e) => setId(e.target.value)} /><br />
                Contact: <input
                    type='text'
                    name='contact'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)} /><br />
                User Name: <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} /><br />
                Password: <input
                    type='text'
                    name='pass'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)} /><br />

                <input type='submit' value={status === 'add' ? 'Create' : 'Update'} />
            </form>
        </>
    );
}

export default CreateUser;