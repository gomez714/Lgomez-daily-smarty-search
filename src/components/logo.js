import {Link} from 'react-router-dom';
import DSLogo from '../assets/ds_circle_logo.png'

const Logo = ({customSize}) => {

    const size = {
        height:  customSize || 105,
        width: customSize || 105
    };

    return (
        <div className="logo-main">
            <Link to="/">
                <img style={size} alt="daily smarty ui image logo big" src={DSLogo} />
            </Link>
        </div>
    )
}

export default Logo;