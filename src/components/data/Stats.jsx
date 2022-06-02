import PropTypes from 'prop-types'

const Stats = ({ title, value }) => {
  return (
    <div className="text-center py-6 flex-1 flex items-center justify-between border-b border-gray-3">
      <h3 className="font-light text-sm lg:text-base">{title}</h3>
      <p className="text-lg font-semibold lg:text-xl">{value}</p>
    </div>
  )
}

Stats.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any
}

export default Stats
