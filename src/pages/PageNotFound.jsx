
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        
        <h1 className="text-8xl md:text-9xl font-bold text-gray-300 mb-4">
          404
        </h1>

        
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The page you're looking for doesn't exist.
          </p>
        </div>

        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;