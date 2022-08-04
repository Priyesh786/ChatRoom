import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
    {console.log("User is ---> ",user)}
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
