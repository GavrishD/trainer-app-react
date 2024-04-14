import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';
import Income from '../Income/Income';
import Clients from '../Clients/Clients';

import styles from './dashboard.module.scss';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <Schedule />

            <div className={styles.blocks}>
                <Income />
                <Clients />
            </div>
        </div>
    );
};

export default Dashboard;
