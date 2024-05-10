import NavBar from "./NavBar";
import React, { useState } from "react";

function AddPlayer() {
    const [newPlayer, setNewPlayer] = useState({
        firstName: "",
        lastName: "",
        position: "",
        ppg: "",
        apg: "",
        rpg: "",
        age: "",
        salary: "",
        imageURL: ""
    });

    function handleChange(e) {
        if (e.target.id === "firstName") {
            setNewPlayer({...newPlayer, firstName: e.target.value});
        } else if (e.target.id === "lastName") {
            setNewPlayer({...newPlayer, lastName: e.target.value});
        } else if (e.target.id === "lastName") {
            setNewPlayer({...newPlayer, lastName: e.target.value});
        } else if (e.target.id === "position") {
            setNewPlayer({...newPlayer, position: e.target.value});
        } else if (e.target.id === "ppg") {
            setNewPlayer({...newPlayer, ppg: e.target.value});
        } else if (e.target.id === "apg") {
            setNewPlayer({...newPlayer, apg: e.target.value});
        } else if (e.target.id === "rpg") {
            setNewPlayer({...newPlayer, rpg: e.target.value});
        } else if (e.target.id === "age") {
            setNewPlayer({...newPlayer, age: e.target.value});
        } else if (e.target.id === "salary") {
            setNewPlayer({...newPlayer, salary: e.target.value});
        } else if (e.target.id === "imageURL") {
            setNewPlayer({...newPlayer, imageURL: e.target.value});
        };
    }
    
    console.log(newPlayer);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <form className="form">
                    <table>
                        <tbody>
                            <tr>
                                <td align="right">First Name: </td>
                                <td align="left"><input id="firstName" type="text" value={newPlayer.firstName} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">Last Name: </td>
                                <td align="left"><input id="lastName" type="text" value={newPlayer.lastName} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">Position: </td>
                                <td align="left"><input id="position" type="text" value={newPlayer.position} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">PPG: </td>
                                <td align="left"><input id="ppg" type="text" value={newPlayer.ppg} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">APG: </td>
                                <td align="left"><input id="apg" type="text" value={newPlayer.apg} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">RPG: </td>
                                <td align="left"><input id="rpg" type="text" value={newPlayer.rpg} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">Age: </td>
                                <td align="left"><input id="age" type="text" value={newPlayer.age} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">Salary: </td>
                                <td align="left"><input id="salary" type="text" value={newPlayer.salary} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">Image URL: </td>
                                <td align="left"><input id="imageURL" type="text" value={newPlayer.imageURL} onChange={handleChange}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button">Submit</button>
                </form>
            </main>
        </>
    )
}

export default AddPlayer