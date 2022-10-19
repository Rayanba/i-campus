import { useNavigate } from "react-router-dom";



function Missing () {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div className="flexGrow">
            <button onClick={goBack}>Go Back</button>
            </div>
        </article>
    )
}

export default Missing
