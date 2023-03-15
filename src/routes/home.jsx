import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export const Home = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <>
      <h2
        onClick={() => {
          navigate('/login');
        }}
      >
        Hello
      </h2>
      <button
        onClick={() => {
          dispatch({
            type: 'AuthOut',
          });
          navigate('/login');
        }}
      >
        Logout
      </button>
    </>
  );
};
