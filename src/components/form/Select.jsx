const Select = ({ setCategory }) => {
  const handleChange = e => {
    e.preventDefault()
    setCategory(e.target.value)
  }

  return (
    <div>
      <label htmlFor="input" className="block text-sm text-primary mb-2">
        Category
      </label>
      <select
        className="appearance-none outline-none py-3 px-2 border-2 border-primary block rounded-md w-full mb-6 focus:bg-primary-light"
        onChange={handleChange}
      >
        <option className="block" defaultValue="all" value="all">
          All
        </option>
        <option className="block" value="base">
          Base
        </option>
        <option className="block" value="social">
          Social
        </option>
        <option className="block" value="economic">
          Economic
        </option>
        <option className="block" value="environement">
          Environement
        </option>
        <option className="block" value="institutions">
          Insitutions
        </option>
      </select>
    </div>
  )
}

export default Select
