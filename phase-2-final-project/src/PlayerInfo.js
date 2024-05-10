import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlayerInfo() {
    const [player, setPlayer] = useState({});
    const params = useParams();
    const playerID = params;

    useEffect(() => {
        fetch("http://localhost:3001/Teams")
        .then(r => r.json())
        .then((data) => )
        .catch(error => console.error(error));
    }, [playerID]);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Player Info</h1>
            </main>
        </>
    )
};

export default PlayerInfo;