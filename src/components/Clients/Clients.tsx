import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { grey } from "@mui/material/colors";
import './style.scss';

const Clients = () => {
    return (
        <section className='clients'>
                    <div className="clients__title">Number of your clients today</div>
                    <div className="clients__number">50</div>
                    <div className="clients__button button">
                        <a href="!#" className='clients__link link'>
                            Clients
                            <ArrowForwardRoundedIcon style={{ color: grey[900] }}/>
                        </a>
                    </div>
                </section>
    )
}

export default Clients;