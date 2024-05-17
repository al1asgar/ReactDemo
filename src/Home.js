import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            This is a Home page Component
            <Link to={"/contact"}>Contact Link</Link>
        </div>
    );
}

export default Home;