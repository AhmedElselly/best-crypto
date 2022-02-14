import image8 from '../../Assets/image-8.png'; 
import './style.css';

const Home = props => {
	return(
		<div className='container'>
			<div className='top-right-image'>
				<img
					src={image8}
					className='image'
				/>
			</div>
		</div>
	)
}

export default Home;