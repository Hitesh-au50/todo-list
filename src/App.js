// Importing necessary modules and components
import './App.css';
import TodoList from './Components/TodoList';

// Main App component
function App() {
  return (
    // App container with CSS class
    <div className="Todo-list-container">
      {/* Rendering TodoList component */}
      <TodoList />
    </div>
  );
}

// Exporting the App component
export default App;
