import './Homepage.css';
import Logo from './SIPLogo.png';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/action');
    };

    return (
        <div className="homepage">
            <img src={Logo} alt="SIP Logo" className="logo" />
            <div className='welcome'>
                <h2>Welcome <br/> to </h2>
                <h1>SIP Abacus<br/> The Bead App</h1>
            </div>
            <button className='button' onClick={handleContinue}>Continue</button>
        </div>
    );
}

export default Homepage;
