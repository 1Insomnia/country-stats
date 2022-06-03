import Stats from './Stats'

const StatsList = ({ testData, header, activeCategory }) => {
  return (
    <article>
      <h2 className="text-xl font-bold tracking-tight mb-4">{header}</h2>
      <div className="flex flex-col gap-4 mb-8">
        {testData.map((item, key) => (
          <Stats
            title={item.title}
            value={item.value}
            key={key}
            activeCategory={activeCategory}
          />
        ))}
      </div>
    </article>
  )
}

export default StatsList
