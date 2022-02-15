import image from '../../Assets/image-15.png';
import './style.css';

const Mission = props => {
	return(
		<div className='mission-container'>
			<div className='mission-left'>
				<img
					src={image}
					className='mission-image'
				/>
			</div>
			<div className='mission-right'>
				<h2 className='mission-title'>BEP-20 has the mission</h2>
				<p className='mission-paragraph'>
				to offer a diverse platform for developers and gamers where they can Learn to Earn. Our Learn to Earn mission will enable gamers and developers to equip themselves with the growing technology, simultaneously making good earnings. 
				</p>
				<h1 className='mission-subtitle'>
				Our mission is to facilitate developers with the inevitable opportunity of “Learn to Earn.” 
				</h1>
				<p className='mission-paragraph mt-20'>
				BEP-20 community presents all the available facilities for developers to learn new technology trends and make handsome earnings out of them. With equal benefits and power, these users will be able to make borderless transactions and can carry out self-banking through our DeFi system. 
				</p>
			</div>
		</div>
	)
}

export default Mission;