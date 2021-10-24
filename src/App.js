import './App.css';
import Left from './components/left/left';
import Mid from './components/mid/mid';
import Right from './components/right/right';
function App() {
  return (
    <>
    <div className="body-wrap">
        <div className="goodreads-wrap">
          working
            <Left></Left>
            <Mid></Mid>
            <Right></Right>
        </div>
    </div>
    </>
  );
}

export default App;
