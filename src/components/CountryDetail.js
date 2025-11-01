import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.apicountries.com/countries`);
        const data = await response.json();
        console.log("country Info is", data);
       const countryData = data.filter(c => c.name === name)[0];
        setCountry(countryData);
      } catch (err) {
        setError('Failed to load country details');
        console.error('Error fetching country:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-slate-600 dark:text-slate-300">Loading country details...</div>
      </div>
    );
  }

  if (error || !country) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-red-600 dark:text-red-400 mb-4">{error || 'Country not found'}</p>
        <Link to="/" className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300">
          ← Back to Country List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 mb-6">
        ← Back to Country List
      </Link>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name}`}
              className="w-full md:w-72 h-48 object-cover rounded-lg shadow-md"
            />

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">{country.name}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Capital:</span> {country.capital || '—'}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Population:</span>{' '}
                    {country.population?.toLocaleString() || '—'}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Area:</span>{' '}
                    {country.area ? `${country.area.toLocaleString()} km²` : '—'}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Region:</span> {country.region || '—'}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Subregion:</span> {country.subregion || '—'}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Languages:</span>{' '}
                    {country.languages?.map(lang => lang.name).join(', ') || '—'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Additional Information</h2>
          <p className="text-slate-600 dark:text-slate-300">
            <span className="font-semibold">Demonym:</span> {country.demonym || '—'}
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            <span className="font-semibold">Timezones:</span>{' '}
            {country.timezones?.join(', ') || '—'}
          </p>
        </div>

        <div className="p-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Currencies</h2>
            <ul className="list-disc list-inside">
              {country.currencies?.map(currency => (
                <li key={currency.code} className="text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">{currency.name}</span> ({currency.code})
                </li>
              )) || '—'}
            </ul>   
        </div>

        <p className="p-6">
            <span className="font-semibold text-slate-900 dark:text-slate-100">Native Name:</span> {country.nativeName || '—'}
        </p>

        <div className="p-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Border Countries</h2>
            {country.borders?.length ? (
              <ul className="list-disc list-inside">
                {country.borders.map(border => (
                  <li key={border} className="text-slate-600 dark:text-slate-300">
                    {border}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-600 dark:text-slate-300">No border countries</p>
            )}
        </div>

      </div>
    </div>
  );
};

export default CountryDetail;