import NavBar from "./NavBar";

function AddPlayer() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <form>
                    <label>First Name: </label>
                    <input type="text"/>
                    <label>Last Name: </label>
                    <input type="text"/>
                    <label>Position: </label>
                    <input type="text"/>
                    <label>PPPG: </label>
                    <input type="text"/>
                    <label>APG: </label>
                    <input type="text"/>
                    <label>RPG: </label>
                    <input type="text"/>
                    <label>Age: </label>
                    <input type="text"/>
                    <label>Salary: </label>
                    <input type="text"/>
                    <label>Image URL: </label>
                    <input type="text"/>
                    <br/>
                    <button>Submit</button>
                </form>
            </main>
        </>
    )
}

export default AddPlayer