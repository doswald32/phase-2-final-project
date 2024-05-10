import NavBar from "./NavBar";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlayerInfo() {
    // const [player, setPlayer] = useState({});
    // const [team, setTeam] = useState("");
    const params = useParams();
    // const playerID = params.id;

    // useEffect(() => {
    //     fetch(`http://localhost:3001/${teamID}/${playerID}`)
    //     .then(r => r.json())
    //     .then(data => setPlayer(data))
    //     .catch(error => console.error(error));
    // }, [playerID, team]);

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