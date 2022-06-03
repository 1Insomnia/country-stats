// React
import { useState } from 'react'

// Components
import Container from './components/layout/Container'
import SearchForm from './components/form/SearchForm'
import StatsList from './components/data/StatsList'
import Select from './components/form/Select'
//
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  const [dataSet, setDataSet] = useState([])
  const [category, setCategory] = useState('all')
  const result =
    category === 'all'
      ? dataSet
      : dataSet.filter(item => item.category === category)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-8">
          <Container>
            <div className="mb-8">
              <SearchForm setDataSet={setDataSet} />
            </div>
            <div>
              <Select setCategory={setCategory} />
            </div>
          </Container>
        </section>
        <section className="py-8">
          <Container>
            {result.length > 0 &&
              result.map((item, index) => (
                <StatsList
                  testData={item.data}
                  header={item.category}
                  key={index}
                  activeCategory={category}
                />
              ))}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
