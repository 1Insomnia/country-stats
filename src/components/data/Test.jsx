// React
import PropTypes from "prop-types";
// Components
import Stats from "./Stats";

const Test = ({ dataSet }) => {
  const { name, capital, iso2, surface_area, population, population_density } =
    dataSet;

  return (
    Object.values(dataSet).length > 0 && (
      <div className="py-8">
        <h2 className="text-xl font-bold tracking-tight mb-4">{name}</h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          <Stats title="name" value={name} />
          <Stats title="capital" value={capital} />
          <Stats title="iso2" value={iso2} />
          <Stats title="population" value={population * 1000} />
          <Stats title="surface area" value={surface_area * 1000} />
          <Stats title="pop density" value={population_density} />
        </div>
      </div>
    )
  );
};

Test.propTypes = {
  dataSet: PropTypes.object,
};

export default Test;
