
import { Link } from 'react-router-dom';

const IndividualCountry = ({ country }) => {
  // defensive default values in case some fields are missing
  const name = country?.name ?? "Unknown";
  const capital = country?.capital ?? "—";
  const population = country?.population ?? null;
  const area = country?.area ?? null;
  const flagSrc = country?.flags?.png ?? country?.flag ?? "";

  return (
    <li className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <Link to={`/country/${name}`} className="flex gap-4 p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-700/50">
        <img
          src={flagSrc}
          alt={`Flag of ${name}`}
          className="w-28 h-20 object-cover rounded-md flex-shrink-0"
          loading="lazy"
        />

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">{name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Capital: <span className="font-medium">{capital}</span></p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-1 rounded">
              Population: <strong className="ml-1">{population ? population.toLocaleString() : '—'}</strong>
            </span>
            <span className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-1 rounded">
              Area: <strong className="ml-1">{area ? `${area.toLocaleString()} km²` : '—'}</strong>
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default IndividualCountry;