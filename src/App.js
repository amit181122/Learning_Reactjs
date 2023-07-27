import StateComponent from './Components/Hooks/Usestate';
import EffectComponent from './Components/Hooks/Useeffect'
import RefComponent from './Components/Hooks/Useref'
import CallbackComponent from './Components/Hooks/Usecallback'
import MemoComponent from './Components/Hooks/Usememo'
import ParentComponent from './Components/Hooks/Usecontext'
import ReducerComponent from './Components/Hooks/Usereducer'

function App() {
  return (
    <div style={{ textAlign: 'center'}}>
    <h1>Task-1-useSate:</h1>
   <StateComponent/>
    <h1>Task-2-useEffect: </h1>
    <EffectComponent />
    <h1>Task-3-useRef: </h1>
    <RefComponent />
    <h1>Task-4-useCallback: </h1>
    <CallbackComponent />
    <h1>Task-5-useMemo: </h1>
    <MemoComponent />
    <h1>Task-6-useContext: </h1>
    <ParentComponent />
    <h1>Task-7-useReducer: </h1>
    <ReducerComponent />
 </div>
  );
}

export default App;
