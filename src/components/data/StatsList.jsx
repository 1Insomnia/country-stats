import Stats from './Stats'

const StatsList = ({ testData, header }) => {
  return (
    <article>
      <h2 className="text-xl font-bold tracking-tight mb-4">{header}</h2>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
        {testData.map((item, key) => (
          <Stats title={item.title} value={item.value} key={key} />
        ))}
      </div>
    </article>
  )
}

export default StatsList
