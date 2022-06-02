// React
import { useState } from 'react'

// Components
import Container from './components/layout/Container'
import SearchForm from './components/form/SearchForm'
import StatsList from './components/data/StatsList'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  const [dataSet, setDataSet] = useState({})

  return (
    <>
      <Header />
      <main className="min-h-screen">
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
              <StatsList
                testData={dataSet.institutions}
                header="Institutions"
              />
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
