import image8 from '../../Assets/image-8.png'; 
import image1 from '../../Assets/optical-lens.png'; 
import Eliminating from '../../components/Eliminating';
import Header from '../../components/Header';
import Mission from '../../components/Mission';
import Unify from '../../components/Unify';
import Who from '../../components/Who';
import './style.css';

const Home = props => {
	return(
		<div className='container'>
			<Header/>
			<Who/>
			<Eliminating/>
			<Unify/>
			<Mission/>
		</div>
	)
}

export default Home;