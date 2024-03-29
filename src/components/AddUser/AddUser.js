import React, { useRef } from 'react';

const AddUser = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {name, email};
        
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added the user.')
                //--------clean the fild------
                e.target.reset();
            }
        })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Please Add Add User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder="name" />
                <input type="email" name="" id="" ref={emailRef} placeholder="email" />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;