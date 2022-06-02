const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.api-ninjas.com/v1/country?name=`

const fetchCountry = async country => {
  try {
    // Request
    const res = await fetch(`${BASE_URL}${country}`, {
      headers: {
        'X-Api-Key': API_KEY
      }
    })

    // JSON data
    const [dataset] = await res.json()
    // Exception
    if (!res.ok) throw Error

    const data = {
      base: [
        {
          title: 'Name',
          value: dataset.name
        },
        {
          title: 'Capital',
          value: dataset.capital
        },
        {
          title: 'Iso2',
          value: dataset.iso2
        },
        {
          title: 'Region',
          value: dataset.region
        },
        {
          title: 'Currency',
          value: `${dataset.currency.code} - ${dataset.currency.name}`
        },
        {
          title: 'Surface area',
          value: dataset.surface_area
        }
      ],
      social: [
        {
          title: 'Population',
          value: dataset.population
        },
        {
          title: 'Life expectancy female',
          value: dataset.life_expectancy_female
        },
        {
          title: 'Life expectancy male',
          value: dataset.life_expectancy_male
        },
        {
          title: 'Population density',
          value: dataset.pop_density
        },
        {
          title: 'Fopulation growth',
          value: dataset.pop_growth
        },
        {
          title: 'Fertility',
          value: dataset.fertility
        },
        {
          title: 'Urban population',
          value: dataset.urban_population
        },
        {
          title: 'Urban population growth',
          value: dataset.urban_population_growth
        },
        {
          title: 'Infant mortality',
          value: dataset.infant_mortality
        },
        {
          title: 'Refugees',
          value: dataset.refugees
        },
        {
          title: 'Sex ratio',
          value: dataset.sex_ratio
        }
      ],
      economic: [
        {
          title: 'Unemployment',
          value: dataset.unemployment
        },
        {
          title: 'Employment agriculture',
          value: dataset.employment_agriculture
        },
        {
          title: 'Employment industry',
          value: dataset.employment_industry
        },
        {
          title: 'Employment services',
          value: dataset.employment_services
        },
        {
          title: 'GDP',
          value: dataset.gdp
        },
        {
          title: 'GDP growth',
          value: dataset.gdp_growth
        },
        {
          title: 'GDP growth',
          value: dataset.gdp_per_capital
        },
        {
          title: 'Exports',
          value: dataset.exports
        },
        {
          title: 'Imports',
          value: dataset.imports
        },
        {
          title: 'Tourists',
          value: dataset.tourists
        }
      ],
      environment: [
        {
          title: 'CO2 emissions',
          value: dataset.co2_emissions
        },
        {
          title: 'Forested Area',
          value: dataset.forested_area
        },
        {
          title: 'Threatened species',
          value: dataset.threatened_species
        }
      ],
      institutions: [
        {
          title: 'Post secondary enrollment_female',
          value: dataset.post_secondary_enrollment_female
        },
        {
          title: 'Post secondary enrollment male',
          value: dataset.post_secondary_enrollment_male
        },
        {
          title: 'Primary school enrollment female',
          value: dataset.primary_school_enrollment_female
        },
        {
          title: 'Primary school enrollment male',
          value: dataset.primary_school_enrollment_male
        },
        {
          title: 'Secondary school enrollment female',
          value: dataset.secondary_school_enrollment_female
        },
        {
          title: 'Secondary school enrollment male',
          value: dataset.secondary_school_enrollment_male
        },
        {
          title: 'Snternet users',
          value: dataset.internet_users
        }
      ]
    }

    return {
      data: data,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: error
    }
  }
}
export default fetchCountry
