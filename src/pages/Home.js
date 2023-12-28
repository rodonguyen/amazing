import {changeWindowTitle} from '../components/utils.js';
import Projects from './Projects.js';

const Home = () => {
	changeWindowTitle(window.location.pathname)

  return (
    <>
      <div className="container">
          <h1 className="xlarge text-align-left">Hello World!</h1>
          <p>Here lies the Amazing things I created with code (ok... "Amazing" might be a bit exaggerated)</p>
          <p>Check them out 👇👇👇</p>
          <br/>
          <Projects/>
      </div>
    </>
  );
};

export default Home;
