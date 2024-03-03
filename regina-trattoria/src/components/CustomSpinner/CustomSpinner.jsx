import Spinner from 'react-bootstrap/Spinner';
import './CustomSpinner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomSpinner = () => {
  return (
    <>
      <div className='div__spinner--container d-flex justify-content-center'>
        <Spinner animation="border" variant="warning" className='div__spinner' />
      </div>
    </>
  )
}

export default CustomSpinner;