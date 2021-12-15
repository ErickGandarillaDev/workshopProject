import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import images from "../assets";
import { loadingSelector } from "../redux/ui/selectors";
import { logOutSuccess } from "../redux/user/actions";
import { userTokenSelector } from "../redux/user/selectors";
import "./styles.css";

const Layout:FC = ({children})=> {

    const{LogoEnroute} = images;
    const tokenUser = useSelector(userTokenSelector);
    const loading = useSelector(loadingSelector);

    const dispatch = useDispatch();

    const logOut = () =>{
        dispatch(
            logOutSuccess()
        )
    }
    
    return ( 
        <div className="bikes-container">
            {loading ? <div className="loader-container">
            <p>Loading ...</p>
            </div> : null}
            <header className="bikes-header">
                <ul className="header-leftMenu"> 

                    {tokenUser?<div>
                    <li className="clickable"> 
                        <Link to="/addbike">
                            Add Bike
                        </Link>
                    </li>
                    </div>:null}
                    {tokenUser?<div>
                    <li className="clickable"> 
                        <Link to="/summary">
                            Summary
                        </Link>
                    </li>
                    </div>:null}
                </ul>

                <div className="header-centralMenu">
                    <Link to="/">
                    <img className="enroute-logo clickable" src={LogoEnroute}></img>
                    </Link>
                </div>
                
                <ul className="header-rightMenu">
                    <li className="clickable" onClick={logOut}>
                        <Link to={!tokenUser?"/login":"/"}>
                            {!tokenUser?"Log in/ Sign In": "Log Out"}
                        </Link>
                    </li>
                </ul>
            </header>
            <div className="bikes-content">
                {children} 
            </div>
            <div className="bikes-footer">
                
                <div className="footer-left"> 
                <p> Technical Support </p>
                <p> +52 6181275770 </p>
                <p> Contact </p>
                <p> erick.gandarilla@enroutesystems.com</p>


                </div>
                <div>
                   
                </div>
                <div className="footer-right">
                Enroute workshop 
                </div>
            </div>
        </div>
    )
}

export default Layout

