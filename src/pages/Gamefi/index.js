import image from '../../Assets/gamefi.png';
import image1 from '../../Assets/data.png';
import clock from '../../Assets/on-time.png';
import dollar from '../../Assets/dollar.png';
import gameController from '../../Assets/game.png';
import Footer from '../../components/Footer';

import './style.css';
import Top from '../../Assets/svgs/top';
import planet from '../../Assets/planet.png';


const Gamefi = props => {
	return(
		<div className='gamefi-container'>
			<div className='gamefi-header'>
				<img
					src={image}
					className='gamefi-header-image'
				/>
			</div>

			<div className='gamefi-middle'>
				<div className='gamefi-middle-wrapper'>
					<div className='gamefi-paragraph-top-center'>
						<p>
						As a gamer, you probably have earned multiple collectibles and awards before. But have you ever exchanged them for real-world spending? Never, right? Well, we are here to solve this mystery of gamers. It has been a long time dream of game that time spent playing games can earn them valued items in the real world. This is where our GameFi comes into play. This became a reality with the latest innovation of GameFi.
						</p>					
					</div>
					<div className='gamefi-middle-m'>
						<div className='gamefi-middle-left'>
							<h1 className='gamefi-middle-title'>
							<span className='gamefi-span'>Our GameFi Strategy</span> allows users to turn game points and collectibles into real-world spending! 
							</h1>
							<p className='gamefi-paragraph-left-center'>
							Given the unattained dreams of gamers worldwide, GameFi came into play to make those dreams real and achievable. By combining the power of the blockchain, Gaming, DeFi, and NFTs, an incredible innovation called GameFi came into existence. It incorporates a reward system for game players who complete a certain number of levels, attain a certain score, or take the lead position on a leaderboard.
							</p>
							<p className='gamefi-paragraph-left-bottom'>
							Play to Earn is the most common GameFi of the day! ( Link back to All You Need to Know About Play to Earn )
							</p>
							<h1 className='gamefi-middle-subtitle'>
							The most common GameFI is the play-to-earn. 
							</h1>
							<p className='gamefi-paragraph-left-verybottom'>
							Certain GameFis also allow major DeFi services like lending and borrowing, yield farming, NFT rewards, cryptocurrency exchanges, etc.
							</p>
						</div>
						<div className='gamefi-middle-right'>
							<img
								src={image1}
								className='gamefi-image-middle'
							/>
						</div>
					</div>
				</div>
				<div className='gamefi-middle-bottom'>
					<h1 className='gamefi-middle-bottom-title'>BEP-20 GameFi will allow our gamers to:</h1>

					<div className='allows-container'>
						<div className='allow'>
							<img
								src={clock}
								className='gamefi-icon'
							/>
							<p>
							Real-time rewards, collectibles, and milestones.
							</p>
						</div>
						<div className='allow'>
							<img
								src={dollar}
								className='gamefi-icon'
							/>
							<p>
							Real-time rewards, collectibles, and milestones.
							</p>
						</div>
						<div className='allow'>
							{/* <GameController className='gamefi-icon'/> */}
							<img
								src={gameController}
								className='gamefi-icon'
							/>
							<p>
							Real-time rewards, collectibles, and milestones.
							</p>
						</div>
						<div className='allow'>
							
							<Top className='gamefi-icon'/>
							<p>
							Real-time rewards, collectibles, and milestones.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='gamefi-bottom'>
				<img
					src={planet}
					className='gamefi-bottom-image'
				/>
				<div className='gamefi-bottom-paragraph'>
					<p>
					In unique cases where GameFi incorporates a DAO, it becomes a global community of gamers. These gamers would earn rewards for playing and vote on next-level changes or new types of games to introduce in the system. As a result, the gamers community will have a platform where they can achieve their dreams and enhance their skills
					</p>
				</div>
			</div>
			
			<Footer/>
		</div>
	)
}

export default Gamefi;