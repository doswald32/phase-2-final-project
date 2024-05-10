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
                        <h2>Chicago Bulls</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&h=200&w=200" alt="Bulls logo"/>
                        <p>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Chicago Bulls</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&h=200&w=200" alt="Bulls logo"/>
                        <p>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Chicago Bulls</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&h=200&w=200" alt="Bulls logo"/>
                        <p>Click to See Roster</p>
                    </div>
                    <div className="team">
                        <h2>Chicago Bulls</h2>
                        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&h=200&w=200" alt="Bulls logo"/>
                        <p>Click to See Roster</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Team;