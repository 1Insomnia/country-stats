// React
import { useState } from "react";

// Components
import Container from "./components/layout/Container";
import SearchForm from "./components/form/SearchForm";
import Test from "./components/data/Test";

function App() {
  const [dataSet, setDataSet] = useState({});

  return (
    <main>
      <section className="py-8 bg-primary">
        <Container>
          <h1 className="text-xl font-bold tracking-tight text-light">
            Country API
          </h1>
        </Container>
      </section>
      <section className="py-8">
        <Container>
          <SearchForm setDataSet={setDataSet} />
        </Container>
      </section>
      <section className="py-8">
        <Container>
          <Test dataSet={dataSet} />
        </Container>
      </section>
    </main>
  );
}

export default App;
