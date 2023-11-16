import logo from './logo.svg';
import './App.css';

//component
import Header from "./components/header";
import TodoForm from './components/todoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
