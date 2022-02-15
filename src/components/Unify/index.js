import image from '../../Assets/fire.png';
import './style.css';

const Unify = props => {
	return(
		<div className='uni-container'>
			<div className='wrapper'>
				<div className='uni-left'>
					<h1 className='uni-title'>
					<span className='span'>To Unify</span> Gamers, Developers, and Investors Under a Unanimous and Diverse Platform, we Offer Blockchain Tools Like:
					</h1>
					<div className='buttons'>
						<div className='btn'>DApps</div>
						<div className='btn'>Remix</div>
						<div className='btn'>Metamask</div>
						<div className='btn'>Smart Contracts</div>
						<div className='btn'>Solidity</div>
						<div className='btn'>Truffle & many more</div>
						<div className='btn'>Geth</div>
						<div className='btn'>Ganache</div>
					</div>
				</div>
				<div className='uni-right'>
					<div className='uni-image-container'>
						<img
							src={image}
							className='uni-image'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Unify;