import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {v1} from "uuid";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string)=> void; // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    // @ts-ignore
    const [name, setName] = useState<string> (""); // need to fix any??????
    // @ts-ignore
    const [error, setError] = useState <string>(""); // need to fix any???????

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>)  => { // need to fix any
        setName(e.currentTarget.value); // need to fix
    };
    const addUser = () => {
        v1();
        alert(`Hello` +name+ "!"); // need to fix
    };

    const totalUsers = 0; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
