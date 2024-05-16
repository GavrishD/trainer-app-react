import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import styles from './navigation.module.scss';

const Navigation = () => {
    return (
        <Box className={styles.sidebar}>
            <nav className={styles.sidebar__nav}>
                <div className={styles.sidebar__title}>
                    <span>Awesome</span>Trainer
                </div>
                <div className={styles.sidebar__menu}>menu</div>
                <List>
                    <ListItem>
                        <button
                            className={`${styles.sidebar__item} ${styles.active}`}
                        >
                            <HomeRoundedIcon />
                            <div>Dashboard</div>
                        </button>
                    </ListItem>
                    <ListItem>
                        <button className={styles.sidebar__item}>
                            <InsertChartRoundedIcon />
                            <div>Income</div>
                        </button>
                    </ListItem>
                    <ListItem>
                        <button className={styles.sidebar__item}>
                            <PeopleOutlineRoundedIcon />
                            <div>Clients</div>
                        </button>
                    </ListItem>
                    <ListItem>
                        <button className={styles.sidebar__item}>
                            <CalendarMonthOutlinedIcon />
                            <div>Training schedule</div>
                        </button>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};

export default Navigation;
