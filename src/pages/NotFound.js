import { changeWindowTitle } from '../components/utils.js';

const NotFound = () => {
  changeWindowTitle("Not found...")

  return (
    <div className="container notfound">
      <h1>
        Page Not Found, Love u chụt chụt
      </h1>
      <p >
        Back to <a href='../'>Home Page</a>
      </p>
    </div>
  )
}

export default NotFound;
