import logo1 from '../../Assets/Logo-02-1.png';
import logo2 from '../../Assets/Logo-02-2.png';
import './style.css';

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
					<li className='item'>Who are We</li>
					<li className='item'>Learn To Earn</li>
					<li className='item'>NFTs</li>
					<li className='item'>Gamefi</li>
					<li className='item'>DeFi</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;