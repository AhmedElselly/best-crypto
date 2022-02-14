import image from '../../Assets/aliens.png';
import './style.css';

const Who = props => {
	return(
		<div className='who-container'>
			<h1 className='who-title'>Who we Are?</h1>
			<p className='who-paragraph'>
			BEP-20 is a community-based network that aims at helping gamers, investors, developers, and other users in making borderless transactions.
			</p>

			{/* <img
				src={image}
				className='who-image'
			/> */}
			<div style={{
				width: '100%',
				height: '50%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 20,
			}}>
				<div style={{
					background: `radial-gradient(circle farthest-corner at center center, transparent 0%, #050505 100%), url(${image})`,
					backgroundSize: '80%',
					backgroundRepeat: 'no-repeat',
					width: '90%',
					height: '100%',
					marginLeft: '230px'
				}}>
				</div>
			</div>
			
			<div className='who-end-container'>
			<div className='who-end'>
				<div className='who-end-left'>
					<span className='who-end-title'>
						Centralized Control of banks
					</span>
					<p className='who-paragraph-1'>If there's a problem that remains an unsolved obstacle for investors, gamers, and developers, it's the Centralized Control of banks and other financial institutions. To overcome this obstacle we have come forward with an all-encompassing solution: Decentralized Finance (DeFi). You can read here <span className='link'>All you need to know about DeFi</span></p>
				</div>
				<div className='who-end-right'>
					<span className='who-end-title'>
						We believe that DeFi will revolutionize finance
					</span>
					<p className='who-paragraph-1'>
						By transactions, savings, exchanging funds, borrowing, and lending an easy and feasible process for everyone. We aim at providing a platform where everyone can make these transactional process in a trustless and premissionless network in a peer-to-peer manner. Our dream is to provide a sustainable and equal platform to everyone, irrespective of their previous financial status.
					</p>
				</div>
			</div>
			</div>

		</div>
	)
}

export default Who;