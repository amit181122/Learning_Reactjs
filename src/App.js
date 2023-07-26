import ToggleButton from './Components/Button'
import ConditionalButton from './Components/Conditional'
import Practice from './Components/Task3/Practice1'

function App() {
  return (
    <div style={{ textAlign: 'center'}}>
      <h1>Task-1:</h1>
      <ToggleButton/>
      <h1>Task-2:</h1>
      <ConditionalButton/>
      <h1>Task-3:</h1>
      <Practice/>
    </div>
  );
}

export default App;
