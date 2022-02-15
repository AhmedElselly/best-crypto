import logo1 from '../../Assets/Logo-02-1.png';
import logo2 from '../../Assets/Logo-02-2.png';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return(
		<div className="Navbar">
			<div className="nav-left">
				<div className="badge">
					<img src={logo1} width={53} height={50}/>
					<img src={logo2} width={175} height={40}/>
				</div>
			</div>
			<div className="nav-right">
				<ul className='navbar-list'>
					<Link to='/' className='item'>Who are We</Link>
					<Link to='/earn' className='item'>Learn To Earn</Link>
					<Link to='/' className='item'>NFTs</Link>
					<Link to='/gamefi' className='item'>Gamefi</Link>
					<Link to='/' className='item'>DeFi</Link>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;