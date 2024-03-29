import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect( () =>{
        const url = `http://localhost:4000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    },[])
    return (
        <div>
            <h2>Update: {user.name}</h2>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdateUser;