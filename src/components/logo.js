import {Link} from 'react-router-dom';
import DSLogo from '../assets/ds_circle_logo.png'

const Logo = ({customSize}) => {

    const size = {
        height:  customSize || 150,
        width: customSize || 150
    };

    return (
        <div className="logo-main">
            <Link to="/">
                <img style={size} alt="daily smarty ui logo big" src={DSLogo} />
            </Link>
        </div>
    )
}

export default Logo;