const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">About Countries Explorer</h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Welcome to Countries Explorer, your comprehensive guide to countries around the world. 
          This application provides detailed information about different nations, including their flags, 
          capitals, populations, and geographical data.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
          <li>Browse comprehensive information about countries worldwide</li>
          <li>Search functionality to quickly find specific countries</li>
          <li>Detailed view for each country with additional information</li>
          <li>Responsive design for both desktop and mobile devices</li>
        </ul>
      </div>
    </div>
  );
};

export default About;