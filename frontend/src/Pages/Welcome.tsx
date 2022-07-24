import { Link } from 'react-router-dom';
import { OBSERVER_TODOS_PATH, REACT_HOOK_FORM_PATH } from '../Utils/routes';

export const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={OBSERVER_TODOS_PATH}>Observer Todo MOBX</Link>
        <Link to={REACT_HOOK_FORM_PATH}>React Hook Form</Link>
      </div>
    </>
  );
};
