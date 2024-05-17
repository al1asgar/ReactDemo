import { Link } from "react-router-dom";

function Contact(){
    return(
        <div> 
            This is Contact Page
            <Link to={"/"}> Home </Link>
        </div>
    )
}

export default Contact;