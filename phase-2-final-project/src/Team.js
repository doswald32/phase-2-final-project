import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function Team() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/Bulls")
        .then(r => r.json())
        .then(data => console.log(data))
    }, [])

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
                        <p>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Milwaukee Bucks</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mil.png&h=200&w=200" alt="Bucks logo"/>
                        <p>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Indiana Pacers</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/ind.png&h=200&w=200" alt="Pacers logo"/>
                        <p>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Detroit Pistons</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/det.png&h=200&w=200" alt="Pistons logo"/>
                        <p>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Cleveland Cavaliers</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cle.png&h=200&w=200" alt="Cavaliers logo"/>
                        <p>Click to See Roster</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Team;