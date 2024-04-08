import React from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList, FaCalculator, FaAdjust, FaQuestionCircle, FaCloudSun, FaQuoteRight, FaImages, FaFlag, FaDice } from 'react-icons/fa';

const projects = [
  { id: 1, title: 'Todo List App', description: 'Create a simple todo list application where users can add and remove tasks.', link: '/todoapp', icon: <FaClipboardList /> },
  { id: 2, title: 'Counter App', description: 'Build a counter application where users can increment or decrement a counter value.', link: '/counterapp', icon: <FaCalculator /> },
  { id: 3, title: 'Theme Toggle App', description: 'Create a theme toggle application where users can switch between light and dark themes.', link: '/themeapp', icon: <FaAdjust /> },
  { id: 4, title: 'Flags App', description: 'Display all the Flags with countries name by fetching data from https://countriesnow.space/', link: '/flagsapp', icon: <FaFlag /> },
  { id: 5, title: 'UI lib', description: 'Look into the code, this is showing the highly reusable components', link: '/reuse', icon: <FaImages /> },
  { id: 6, title: 'Image Selector', description: 'A simple app for selecting image from your machine to demo use ref ', link: '/imagepicker', icon: <FaImages /> },
  { id: 7, title: 'Palindrome Checker', description: 'A simple app to check if string is palindrome or not', link: '/palindrome', icon: <FaImages /> },
  { id: 8, title: 'Dice Game', description: 'Random Dice 1v1 game. Highest Number Wins', link: '/dicegame', icon: <FaDice /> },

  { id: 55, title: 'Quiz App', description: 'Develop a quiz application where users can answer multiple-choice questions.', link: '/quizapp', icon: <FaQuestionCircle /> },
  { id: 66, title: 'Weather App', description: 'Build a simple weather application that displays the current weather for a specific location.', link: '/weatherapp', icon: <FaCloudSun /> },
  { id: 77, title: 'Random Quote Generator', description: 'Create an app that fetches and displays random quotes from an API.', link: '/quoteapp', icon: <FaQuoteRight /> },
  { id: 88, title: 'Image Slider App', description: 'Develop an image slider application where users can cycle through a collection of images.', link: '/sliderapp', icon: <FaImages /> },
];

const Home = () => {
  return (
    <div className='container mt-32 mx-auto'>

      <h1 className="font-bold mb-8 text-center text-white">ReactJS Mini App Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                {project.icon && <div className="mr-2">{project.icon}</div>}
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              </div>
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
  );
};

export default Home;
