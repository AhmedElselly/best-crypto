import logo1 from '../../Assets/Logo-02-1.png';
import logo2 from '../../Assets/Logo-02-2.png';
import Facebook from '../../Assets/facebook.png';
import Instagram from '../../Assets/instagram.png';
import Twitter from '../../Assets/twitter.png';
import Vk from '../../Assets/vk.png';

import './style.css';

const Footer = props => {
	return(
		<div className='footer-container'>
			<div className='footer-up'>
					<div className='footer-left'>
						<img
							src={logo1}
							className='footer-logo-left'
						/>
						<img
							src={logo2}
							className='footer-logo-right'
						/>
					</div>
					<div className='footer-second'>
						<span className='icon'>
							<img
								src={Instagram}
							/>
						</span>
						<span className='icon'>
						<img
								src={Facebook}
							/>
						</span>
						<span className='icon'>
						<img
								src={Twitter}
							/>
						</span>
						<span className='icon'>
						<img
								src={Vk}
							/>
						</span>
					</div>

					<div className='footer-right'>
						<ul className='footer-links'>
							<li className='item'>Who we are</li>
							<li className='item'>Lear to earn and play to earn</li>
							<li className='item'>NFTs</li>
							<li className='item'>Gamefi</li>
							<li className='item'>DeFi</li>
						</ul>
					</div>
				</div>
				<div className='footer-middle'>
					{/* <hr className='footer-hr'/> */}
				</div>
				<div className='footer-end'>
					<div>
						Copright &copy; 2022 BEP-20
					</div>
					<div>
						All rights reserved | Privacy
					</div>
				</div>
		</div>
	)
}

export default Footer;