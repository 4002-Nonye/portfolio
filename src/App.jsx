import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import bgRect from './assets/bg-rect.svg'

function App() {
  return (
    <>
      {/* Decorative background */}
      <img src={bgRect} alt='' className='bg' />

      <div className='container'>
        <Nav />
        <Main />
      </div>
    </>
  );
}

export default App;
