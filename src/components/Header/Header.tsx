import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__title">Hi, friend!</div>
            <div className="header__user"><PersonOutlineRoundedIcon /></div>
        </header>
    )
}

export default Header;