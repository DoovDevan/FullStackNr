import './HomePage.css';
import videoBg from '../helpers/videos/video-2.mp4';
function HomePage() {
  return (
    <div className="home-container">
      <video src={videoBg} autoPlay loop muted />
      <h1>Business Await</h1>
      <p>what are you waiting for?</p>
    </div>
  );
}
export default HomePage;
