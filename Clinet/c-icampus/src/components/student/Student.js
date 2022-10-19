import { Link } from "react-router-dom"


function Student () {
    return (
        <section >
            <h1>Students Page</h1>
            <br />
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Student;