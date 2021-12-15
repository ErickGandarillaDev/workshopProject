import { FC } from "react";
import images from "../../assets";
import "./styles.css";

const Home:FC = ()=> {

    const {HomeBackground} = images;


    return (
        <div className="home-container">
            <p className="central-text">
            The way bikes
            </p>
            <p className="central-text">
            should be fixed
            </p>
        </div>
    )
}

export default Home