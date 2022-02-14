import image8 from '../../Assets/image-8.png'; 
import image1 from '../../Assets/optical-lens.png'; 
import Header from '../../components/Header';
import Who from '../../components/Who';
import './style.css';

const Home = props => {
	return(
		<div className='container'>
			<Header/>
			<Who/>
		</div>
	)
}

export default Home;