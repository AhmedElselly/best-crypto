import box from '../../Assets/box.png'
import box1 from '../../Assets/box1.png'
import './style.css';

const Earn = props => {
	return(
		<div className='earn-container'>
			<div className='earn-header'>
				<h1 className='earn-title'>What is Learn to Earn & Play to Earn?</h1>
				<div className='earn-wrapper'>
					<div className='earn-box box-left'>
						<img
							src={box}
							className='earn-box-image'
						/>
						<h4 className='earn-box-title'>Let’s be honest, cryptocurrency modules and courses are found everywhere.</h4>
						<p className='earn-box-paragraph'>
							Every social media influencer and so-called entrepreneurs “lecture” about crypto investments and marketing. But none of these are standard. And most of the time, these crypto modules are costly. This is where BEP-20 Learn to Earn strategy comes in. 
						</p>
					</div>
					<div className='earn-box'>
					<img
							src={box1}
							className='earn-box-image'
						/>
						<h4 className='earn-box-title'>BEP-20 presents our community with the opportunities to learn these investment modules and courses.</h4>
						<p className='earn-box-paragraph'>
						At the end of each course or module, you will earn. With the spirit of inclusiveness and encouraging communities to learn more, the learn-to-earn incentive programs were built. Those who read or watch videos to complete a certain number of modules or unlock badges are rewarded for their hard work with tokens.
						</p>
					</div>
				</div>
			</div>

			{/* Middle section start */}
			<div className='earn-middle'>
				<div className='earn-middle-header'>
					<h1 className='earn-middle-title'>So is BEP-20 <span className='earn-span'>Play to Earn Strategy</span></h1>
					<p className='earn-middle-paragraph'>
					For our gamers, we present an opportunity to play different games with a target in mind. Our gamers can play games and at the completion of tasks, they will be rewarded. Thus, this will allow our users to enjoy different games, simultaneously making good earnings. 
					</p>
				</div>
			</div>
			{/* Middle section end */}
		</div>
	)
}

export default Earn;