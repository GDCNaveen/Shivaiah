
import { GraduationCap } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const tabs = ['All', 'Mathematics', 'Science', 'Social', 'Telugu', 'English', 'Computer Science'];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Brand Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-wide">
              Algot Academy
            </h1>
          </div>
        </div>
      </div>
      
      {/* Tabs Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto py-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex space-x-1 min-w-max" style={{ touchAction: 'pan-x pinch-zoom' }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  style={{ minWidth: 'fit-content' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
