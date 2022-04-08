
import Card from './component/UserCard';
import CountButton from "./component/CountButton";
import Main from './component/Main'

function App() {
  return (
    <div >
      <Card/>
      <CountButton step={2}/>
      <Main/>
    </div>
  );
}

export default App;
