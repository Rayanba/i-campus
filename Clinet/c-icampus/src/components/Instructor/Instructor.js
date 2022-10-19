import { Link } from "react-router-dom"

function Instructor  () {
    return (
        <section>
            <h1>Instructors Page</h1>
            <br />
            <p>You must have been assigned an Instructor role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Instructor
