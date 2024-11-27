import { Link } from "react-router-dom";
function ErrorPage() {
    return (
        <div>
            <h1>Oopsie! Nothing to see here</h1>
            <Link to={'/'}>Back home</Link>
        </div>
    )
}
export default ErrorPage;