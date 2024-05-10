import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import PlayerList from "./PlayerList";
import { Link } from "react-router-dom";

function Team() {
    const [roster, setRoster] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/Teams")
        .then(r => r.json())
        .then(data => setRoster(data))
    }, []);

    function handleRoster(e) {
        if (roster.length === 1) {
            if (e.target.id === "bulls-roster") {
                roster.filter((team) => setRoster(team.Bulls));
            } else if (e.target.id === "bucks-roster") {
                roster.filter((team) => setRoster(team.Bucks));
            } else if (e.target.id === "pacers-roster") {
                roster.filter((team) => setRoster(team.Pacers));
            } else if (e.target.id === "pistons-roster") {
                roster.filter((team) => setRoster(team.Pistons));
            } else if (e.target.id === "cavaliers-roster") {
                roster.filter((team) => setRoster(team.Cavaliers));
            } else {
                console.log("oops");
            }} else {
                fetch("http://localhost:3001/Teams")
                .then(r => r.json())
                .then((data) => {
                    if (e.target.id === "bulls-roster") {
                        data.filter((team) => setRoster(team.Bulls))
                    } else if (e.target.id === "bucks-roster") {
                        data.filter((team) => setRoster(team.Bucks))
                    } else if (e.target.id === "pacers-roster") {
                        data.filter((team) => setRoster(team.Pacers))
                    } else if (e.target.id === "pistons-roster") {
                        data.filter((team) => setRoster(team.Pistons))
                    } else if (e.target.id === "cavaliers-roster") {
                        data.filter((team) => setRoster(team.Cavaliers))
                    } else {
                        console.log("oops!");
                    };
                });
            } 
    };

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
                        return <li key={player.id}><Link to={`/playerInfo/${player.id}`}><PlayerList name={player.name}/></Link></li>
                    })}</ul>
                </div>
            </main>
        </>
    )
}

export default Team;