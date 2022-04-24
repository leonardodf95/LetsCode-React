import UserProvider from './context/UserContext'
// import Card from "./component/UserCard";
// import {useUser} from './context/UserContext';
import Container from './component/UserContainer';

function App() {

  // const {user} = useUser()
  // console.log('app', user);

  return (
    <UserProvider>
      <Container/>              
    </UserProvider>
  );
}

export default App;
