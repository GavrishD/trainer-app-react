import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import styles from './header.module.scss';

const Header = () => {
    // const { accountName } = useCustomHook();
    const accountNameTest = 'friend';
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>Hi, {accountNameTest}!</div>
            <div className={styles.header__user}>
                <PersonOutlineRoundedIcon />
            </div>
        </header>
    );
};

export default Header;
