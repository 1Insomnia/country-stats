import PropTypes from "prop-types";

const Stats = ({ title, value }) => {
  return (
    <div className="text-center p-4 bg-primary text-light rounded-md flex-1">
      <h3 className="text-xs mb-1">{title}</h3>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
};

export default Stats;
