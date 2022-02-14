import image8 from '../../Assets/image-8.png'; 
import image1 from '../../Assets/optical-lens.png'; 
import './style.css';

const Header = props => {
	return(
		<div className='container'>
			<div className='top-right-image'>
				<img
					src={image8}
					className='image'
				/>
			</div>
			<div className='header'>
				<div className='left'>
					<div>
						<h1 className='title'>best <span className='crypto'>crypto</span> <span className='token'>token</span></h1>
					</div>
					<p className='leverage'>Leverage on any tokens with a protocol trusted with billions for its price execution, super low fees and reliability.</p>
					<div className='buttons'>
						<button className='btn-left'>button1</button>
						<button className='btn-right'>button2</button>
					</div>
				</div>
				<div className='right'>
					<img
						src={image1}
						className='optical-img'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header;