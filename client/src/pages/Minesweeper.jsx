import profilePic from '../../public/images/propic.jpg';
import Minesweeper from '../components/Minesweeper';
import '../App.css';
import '../minesweeper.css';

export default function About () {
  return (
    <div>
      <h1>Minesweeper</h1>

      <p className="separator-line"></p>

      <img className="profile-picture" src={profilePic} alt="Profile"  />

      <div className="separator-line"></div>

      <p className='portfolio-bio'>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>

 





      <div className='grid-wrapper'>  
      <div className='white-box'>
      <Minesweeper />
</div>
</div>



 


      <div className="separator-line"></div>


    </div>
  );
}
