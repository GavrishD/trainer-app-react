import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import styles from './clients.module.scss';

const Clients = () => {
    return (
        <section className={styles.clients}>
            <div className={styles.clients__title}>
                Number of your clients today
            </div>
            <div className={styles.clients__number}>50</div>
            <div className={styles.clients__button}>
                <a href="!#" className={styles.clients__link}>
                    Clients
                    <ArrowForwardRoundedIcon />
                </a>
            </div>
        </section>
    );
};

export default Clients;
