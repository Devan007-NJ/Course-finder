import React from 'react';
import { Clock, Award, TrendingUp, Search } from 'lucide-react';

// CourseCard Component (embedded)
const CourseCard = ({ course, index }) => {
  return (
    <div
      className="course-card rounded-2xl overflow-hidden shadow-lg"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Course Header */}
      <div className="h-3 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500"></div>
      
      <div className="p-6">
        {/* Level Badge */}
        <div className="mb-3">
          <span className={`level-badge level-${course.level.toLowerCase()}`}>
            <Award size={14} />
            {course.level}
          </span>
        </div>

        {/* Course Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          {course.name}
        </h3>

        {/* Category */}
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold mb-3">
          {course.category}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Duration */}
        {course.duration && (
          <div className="flex items-center gap-2 text-gray-700 text-sm mb-4">
            <Clock size={16} className="text-orange-600" />
            <span className="font-medium">{course.duration}</span>
          </div>
        )}

        {/* Enrollment Count */}
        {course.enrolled && (
          <div className="enrollment-badge rounded-lg p-3 flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-amber-700" />
              <span className="text-sm font-semibold text-amber-900">
                {course.enrolled.toLocaleString()} enrolled
              </span>
            </div>
          </div>
        )}

        {/* Enroll Button */}
        <button className="w-full bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold py-3 rounded-xl hover:from-orange-700 hover:to-rose-700 transition-all transform hover:scale-105 shadow-md">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

// CategoryFilter Component (embedded)
const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-badge px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide border-2 ${
                selectedCategory === category
                  ? 'active'
                  : 'bg-white text-orange-800 border-orange-200 hover:border-orange-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// CourseList Component (embedded)
const CourseList = ({ courses }) => {
  if (courses.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
          <Search className="mx-auto text-orange-400 mb-4" size={48} />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </div>
  );
};

// Main Hero Component (combines all three)
const Hero = ({ courses, categories, selectedCategory, setSelectedCategory }) => {
  return (
    <>
      {/* Category Filter Section */}
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Course List Section */}
      <main className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <CourseList courses={courses} />
        </div>
      </main>
    </>
  );
};

export default Hero;