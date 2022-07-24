import './App.css';
import { configure } from 'mobx';
import { ObserverTodos } from './Pages/ObserverTodos';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './Pages/Welcome';
import {
  OBSERVER_TODOS_PATH,
  REACT_HOOK_FORM_PATH,
  WELCOME_PATH,
} from './Utils/routes';
import { ReactHookForms } from './Pages/ReactHookForms';
configure({ useProxies: 'never' });

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={WELCOME_PATH} element={<Welcome />} />
        <Route path={OBSERVER_TODOS_PATH} element={<ObserverTodos />} />
        <Route path={REACT_HOOK_FORM_PATH} element={<ReactHookForms />} />
      </Routes>
    </div>
  );
}

export default App;
