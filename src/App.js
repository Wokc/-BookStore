
import './App.css';

function App() {
  return (
    <div className="app">
        <header className="header">
          <div className="header__logo"><a href='#'>Books</a></div>
              <ul>
                  <li>Biographies</li>
                  <li>Business</li>
                  <li>Education</li>
                  <li>History</li>
                  <li>Children's</li>
                  <li>Classic</li>
              </ul>
        </header>
        <div className="sidebar">
            <div className="sidebar__card"><a href="#"></a></div>
            <div className="sidebar__search"><input type="text" placeholder="Search" /></div>
            <div className="sidebar__profile"></div>
            <div className="sidebar__options"></div>
        </div>
        <div className="catalog">
              <div className="catalog__products">
                    <div className="catalog__header">
                        <h2>New books</h2>
                    </div>
              </div>
        </div>
    </div>
  );
}

export default App;
