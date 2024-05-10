import NavBar from "./NavBar";

function AddPlayer() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <form className="form">
                    <table>
                        <tr>
                            <td align="right">First Name: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <td align="right">Last Name: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <td align="right">Position: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <td align="right">PPPG: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <td align="right">APG: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <td align="right">RPG: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <td align="right">Age: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <td align="right">Salary: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <td align="right">Image URL: </td>
                            <td align="left"><input type="text"/></td>
                        </tr>
                        <tr>
                            <button className="button">Submit</button>
                        </tr>
                    </table>
                </form>
            </main>
        </>
    )
}

export default AddPlayer