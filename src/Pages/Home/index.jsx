import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Todo List App', description: 'Create a simple todo list application where users can add and remove tasks.', link:'/todoapp' },
  { id: 2, title: 'Counter App', description: 'Build a counter application where users can increment or decrement a counter value.', link:'/counterapp' },
  { id: 3, title: 'Theme Toggle App', description: 'Create a theme toggle application where users can switch between light and dark themes.', link:'/themeapp' },
  { id: 4, title: 'Quiz App', description: 'Develop a quiz application where users can answer multiple-choice questions.', link:'/quizapp' },
  { id: 5, title: 'Weather App', description: 'Build a simple weather application that displays the current weather for a specific location.', link:'/weatherapp' },
  { id: 6, title: 'Random Quote Generator', description: 'Create an app that fetches and displays random quotes from an API.', link:'/quoteapp' },
  { id: 7, title: 'Image Slider App', description: 'Develop an image slider application where users can cycle through a collection of images.', link:'/sliderapp' },
];

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto py-8">
        <h1 className="font-bold mb-8 text-center text-white">mInI wEb ApP StOrE</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 text-base">{project.description}</p>
              </div>
              <div className="px-6 pb-4">
                <Link to={project.link} className="block text-center py-2 px-4 bg-pink-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-pink-600">
                  View App
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
