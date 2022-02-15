import image17 from '../../Assets/image-17.png';
import Lamp from '../../Assets/svgs/lamp';
import './style.css';

const Eliminating = props => {
	return(
		<div className='el-container'>
			<div className='el-header'>
				<h1>Eliminating the <span className='qoutes'>&ldquo;Winner takes all&rdquo;</span> mindset is our motto!</h1>
			</div>

			<div className='sub-container'>
				<div className='el-left'>
					<div className='left-lamp'></div>
					<h2>No need for third parties and middlemen.</h2>
					<p>
						Backed by blockchain, our initiative has the unwavering capability to eliminate the need for third parties and middlemen. Consequently, it will make the transaction process easy, convenient, flexible, and cheaper. Unlike the cetralized financial system, BEP-20 provides you with a platform where you can self-bank all your transactions using our DeFi.
					</p>
				</div>
				<div className='el-right'>
					<div className='el-image-container'>
						<div className='lamp-container'>
							
						</div>
						<div className='lamp'></div>
						{/* <Lamp className='lamp' /> */}
						<div className='elipse-top-left'></div>
						<div className='elipse-bottom-left'></div>
						<div className='elipse-right'></div>
						<img
							src={image17}
							className='el-image'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Eliminating;