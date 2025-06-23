
import { useState, useRef } from 'react';
import { Header } from './Header';
import { VideoCard } from './VideoCard';
import { Footer } from './Footer';

interface MainAppProps {
  onLogout: () => void;
}

export const MainApp = ({ onLogout }: MainAppProps) => {
  const [activeTab, setActiveTab] = useState('All');
  const videoRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});

  const videos = [
    {
      id: '1095495803',
      hash: '55eac0fa5a',
      title: '10th Mathematics Part 1',
      description: 'Complete mathematics tutorial for 10th grade students covering fundamental concepts, problem-solving techniques, and exam preparation strategies.',
      category: 'Mathematics',
      width: 1280,
      height: 720
    },
    {
      id: '1095510347',
      hash: 'adbdfa174b',
      title: 'Operating a Computer - Class 2',
      description: 'Basic computer operations and fundamentals for Class 2 students. Learn essential computer skills and digital literacy in an interactive way.',
      category: 'Computer Science',
      width: 640,
      height: 360
    }
  ];

  const filteredVideos = activeTab === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isPlaying={false}
              onPlay={() => {}}
              ref={(el) => {
                if (el) {
                  videoRefs.current[video.id] = el;
                }
              }}
            />
          ))}
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                No videos found in {activeTab}
              </h3>
              <p className="text-gray-500">
                More content will be added soon!
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
