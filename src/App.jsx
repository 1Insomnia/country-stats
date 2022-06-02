// React
import { useState } from 'react'

// Components
import Container from './components/layout/Container'
import SearchForm from './components/form/SearchForm'
import StatsList from './components/data/StatsList'

function App() {
  const [dataSet, setDataSet] = useState({})

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
          {Object.values(dataSet).length > 0 && (
            <StatsList testData={dataSet.base} header="Base" />
          )}
        </Container>
      </section>
      <section className="py-8">
        <Container>
          {Object.values(dataSet).length > 0 && (
            <StatsList testData={dataSet.social} header="Social" />
          )}
        </Container>
      </section>
      <section className="py-8">
        <Container>
          {Object.values(dataSet).length > 0 && (
            <StatsList testData={dataSet.economic} header="Economic" />
          )}
        </Container>
      </section>
      <section className="py-8">
        <Container>
          {Object.values(dataSet).length > 0 && (
            <StatsList testData={dataSet.environment} header="Environment" />
          )}
        </Container>
      </section>
      <section className="py-8">
        <Container>
          {Object.values(dataSet).length > 0 && (
            <StatsList testData={dataSet.institutions} header="Institutions" />
          )}
        </Container>
      </section>
    </main>
  )
}

export default App
