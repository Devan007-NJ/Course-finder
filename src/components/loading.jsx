import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-600"></div>
        <p className="mt-4 text-xl font-semibold text-orange-900">Loading courses...</p>
      </div>
    </div>
  );
};

export default Loading;