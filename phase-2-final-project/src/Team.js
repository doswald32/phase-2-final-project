import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { Link, useParams } from "react-router-dom";

function Team() {
    const [roster, setRoster] = useState([]);
    const params = useParams();
    const teamID = params.id;

    useEffect(() => {
        fetch("http://localhost:3001/Teams")
        .then(r => r.json())
        .then(data => setRoster(data))
    }, [])

    function handleRoster(e) {
        console.log(e.target.id);
        if (e.target.id === "bulls-roster") {
            let bullsRoster = roster.filter((team) => setRoster(team.Bulls));
        // } else if (e.target.id === "bucks-roster") {
        //     fetch("http://localhost:3001/Bucks")
        //     .then(r => r.json())
        //     .then(data => setRoster(data))
        // } else if (e.target.id === "pacers-roster") {
        //     fetch("http://localhost:3001/Pacers")
        //     .then(r => r.json())
        //     .then(data => setRoster(data))
        // } else if (e.target.id === "pistons-roster") {
        //     fetch("http://localhost:3001/Pistons")
        //     .then(r => r.json())
        //     .then(data => setRoster(data))
        // } else if (e.target.id === "cavaliers-roster") {
        //     fetch("http://localhost:3001/Cavaliers")
        //     .then(r => r.json())
        //     .then(data => setRoster(data))
        } else {
            console.log("oops");
        }
    };

    console.log(roster);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="team-container">
                    <div className="team">
                        <h2>Chicago Bulls</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&h=200&w=200" alt="Bulls logo"/>
                        <p id="bulls-roster" onClick={handleRoster}>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Milwaukee Bucks</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mil.png&h=200&w=200" alt="Bucks logo"/>
                        <p id="bucks-roster" onClick={handleRoster}>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Indiana Pacers</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/ind.png&h=200&w=200" alt="Pacers logo"/>
                        <p id="pacers-roster" onClick={handleRoster}>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Detroit Pistons</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/det.png&h=200&w=200" alt="Pistons logo"/>
                        <p id="pistons-roster" onClick={handleRoster}>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Cleveland Cavaliers</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cle.png&h=200&w=200" alt="Cavaliers logo"/>
                        <p id="cavaliers-roster" onClick={handleRoster}>Click to See Roster</p>
                    </div>
                </div>
                <div className="roster-container">
                    <ul className="player">{roster.map((player) => {
                        return <li key={player}><Link to={`/playerInfo/${player.id}`}><PlayerCard name={player.name}/></Link></li>
                    })}</ul>
                </div>
            </main>
        </>
    )
}

export default Team;