import Body from "./Body";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
