
import { useEffect } from "react";
import { useState } from "react";
 import IndividualCountry from "./IndividualCountry";

const CountryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://www.apicountries.com/countries");
      const data = await response.json();
      setData(data || []);
    } catch (err) {
      // keep it simple: log and show empty state
      console.error("Failed to load countries", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const filtered = data.filter((c) => {
    if (!query) return true;
    const name = (c?.name || "").toString().toLowerCase();
    return name.includes(query.toLowerCase());
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">Country List</h2>

        <div className="flex items-center gap-3">
          <input
            aria-label="Search countries"
            className="border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-sm rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Search by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-600 dark:text-slate-300">Loading countries…</div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.length === 0 ? (
            <li className="col-span-full text-center text-slate-600 dark:text-slate-300 py-8">No countries found.</li>
          ) : (
            filtered.map((country) => (
              <IndividualCountry key={country.name ?? country.alpha3Code ?? Math.random()} country={country} />
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default CountryList;