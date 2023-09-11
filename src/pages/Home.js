import {changeWindowTitle} from '../components/utils.js';

const Home = () => {
	changeWindowTitle(window.location.pathname)

  return (
    <>
      {/* content block 1: A little introduction */}
      <div className="container">
          <h1 className="xlarge text-align-left">Hello World!</h1>
          <p>Here lies the Amazing things I created with code (ok... Amazing might be a bit exaggerated :)</p>
          <p>Check them out on the navigation bar or the top right burger menu if you're using smartphone! There's one at the moment.</p>
      </div>
    </>
  );
};

export default Home;
