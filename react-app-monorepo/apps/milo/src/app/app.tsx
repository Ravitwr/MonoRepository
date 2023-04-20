import './app.scss';
import { PetToys } from '@pets-mono-repo/pet-toys';
import { AwesomeButton } from '@pets-mono-repo/awesome-button';

export function App() {
  const miloToys = ['Ball', 'Socks', 'Stuffed Hedgehog', 'Frisbee', 'Stuffed Dino']
  return (
    <>
      <div className="header">
        <h1 className="title"> Welcome Milo 👋 </h1>
        <img className="pet-pic" src={'../assets/milo.jpg'} alt="milo" />
      </div>
      <PetToys toys={miloToys} />
    </>
  );
}

export default App;