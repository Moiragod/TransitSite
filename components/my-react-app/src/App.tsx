import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import { CarouselItem } from './types';

const App: React.FC = () => {
  // 示例数据
  const carouselItems: CarouselItem[] = [
    {
      title: "The New Claims Center is Available Now",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "Learn More",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
      title: "Enhanced User Experience",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      buttonText: "Get Started",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      buttonText: "Explore Now",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="App">
      <div className="app-container">
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          Carousel Component Demo
        </h1>
        <Carousel items={carouselItems} />
      </div>
    </div>
  );
};

export default App; 