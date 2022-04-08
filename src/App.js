
import Card from './component/UserCard';
import CountButton from "./component/CountButton";

function App() {
  return (
    <div >
      <Card/>
      <CountButton step={2}/>
    </div>
  );
}

export default App;
