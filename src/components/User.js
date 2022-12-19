import Reac, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function User() {

    const { username} = useParams()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        // fetch users data
        fetch('/users.json').then(data => {
            return data.json()
        }).then(data => {
            setUserData(data[username])
        })
    }, [username])

    return <div>
        <h1>I am a system user ({username}) </h1>
    <p>Name: {userData?.name}</p>
    <p>Age: {userData?.age}</p>
    </div>
}