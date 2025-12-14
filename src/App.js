import React, { useState, useEffect } from 'react';
import Header from './components/header';
import SearchBar from './components/searchbar';
import Hero from './components/hero';
import Loading from './components/loading';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple local course data - no API needed!
    const localCourses = [
      {
        id: 1,
        name: "Web Development Fundamentals",
        category: "Development",
        duration: "12 weeks",
        level: "Beginner",
        description: "Master HTML, CSS, and JavaScript to build modern, responsive websites",
        enrolled: 2847
      },
      {
        id: 2,
        name: "React & Modern JavaScript",
        category: "Development",
        duration: "10 weeks",
        level: "Intermediate",
        description: "Build dynamic web applications with React and ES6+ features",
        enrolled: 1923
      },
      {
        id: 3,
        name: "UI/UX Design Principles",
        category: "Design",
        duration: "8 weeks",
        level: "Beginner",
        description: "Learn design thinking and create beautiful user interfaces",
        enrolled: 1456
      },
      {
        id: 4,
        name: "Data Science with Python",
        category: "Data Science",
        duration: "14 weeks",
        level: "Intermediate",
        description: "Analyze data and build machine learning models with Python",
        enrolled: 2103
      },
      {
        id: 5,
        name: "Digital Marketing Mastery",
        category: "Marketing",
        duration: "6 weeks",
        level: "Beginner",
        description: "Master SEO, social media marketing, and content strategy",
        enrolled: 1678
      },
      {
        id: 6,
        name: "Cloud Architecture with AWS",
        category: "Development",
        duration: "10 weeks",
        level: "Advanced",
        description: "Design scalable cloud solutions with AWS and Azure platforms",
        enrolled: 892
      },
      {
        id: 7,
        name: "Product Management Essentials",
        category: "Business",
        duration: "8 weeks",
        level: "Intermediate",
        description: "Lead product development from ideation to launch",
        enrolled: 1234
      },
      {
        id: 8,
        name: "Mobile App Development",
        category: "Development",
        duration: "12 weeks",
        level: "Intermediate",
        description: "Build native iOS and Android applications with React Native",
        enrolled: 1567
      },
      {
        id: 9,
        name: "Graphic Design Masterclass",
        category: "Design",
        duration: "10 weeks",
        level: "Beginner",
        description: "Master Adobe Creative Suite, typography, and visual composition",
        enrolled: 1891
      },
      {
        id: 10,
        name: "Machine Learning Fundamentals",
        category: "Data Science",
        duration: "16 weeks",
        level: "Advanced",
        description: "Deep dive into neural networks and AI model deployment",
        enrolled: 945
      },
      {
        id: 11,
        name: "Content Marketing Strategy",
        category: "Marketing",
        duration: "7 weeks",
        level: "Intermediate",
        description: "Create compelling content and build audience engagement",
        enrolled: 1423
      },
      {
        id: 12,
        name: "Business Analytics",
        category: "Business",
        duration: "9 weeks",
        level: "Beginner",
        description: "Learn business intelligence and data visualization techniques",
        enrolled: 1755
      }
    ];

    setCourses(localCourses);
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  // Filter courses based on search and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(courses.map(c => c.category))];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <Header />
      
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />

      <Hero 
        courses={filteredCourses}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

    </div>
  );
}

export default App;