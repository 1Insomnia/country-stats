// React
import PropTypes from 'prop-types'
import { useState } from 'react'
// Lib
import fetcher from '../../lib/fetcher'
// Components
import Button from './Button'

const SearchForm = ({ setDataSet }) => {
  const [input, setInput] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    e.stopPropagation()
    // Clear input
    setInput('')
    const { data, error } = await fetcher(input)
    if (!error) {
      setDataSet(data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input" className="block text-sm text-primary mb-2">
        Country name
      </label>
      <input
        aria-label="search input"
        type="search"
        name="input"
        id="input"
        className="appearance-none outline-none py-3 px-2 border-2 border-primary block rounded-md w-full mb-6 focus:bg-primary-light"
        onChange={handleChange}
        value={input}
      />
      <Button />
    </form>
  )
}

SearchForm.propTypes = {
  setDataSet: PropTypes.elementType
}

export default SearchForm
