
import { forwardRef } from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Video {
  id: string;
  hash: string;
  title: string;
  description: string;
  category: string;
  width: number;
  height: number;
}

interface VideoCardProps {
  video: Video;
  isPlaying: boolean;
  onPlay: () => void;
}

export const VideoCard = forwardRef<HTMLIFrameElement, VideoCardProps>(
  ({ video, isPlaying, onPlay }, ref) => {
    const vimeoUrl = `https://player.vimeo.com/video/${video.id}?h=${video.hash}&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0`;

    return (
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <CardContent className="p-0">
          {/* Video Section */}
          <div className="relative bg-black">
            <div className="aspect-video relative">
              <iframe
                ref={ref}
                src={vimeoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                title={video.title}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6">
            {/* Title */}
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              {video.title}
            </h2>
            
            {/* Meta Information */}
            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <BookOpen className="h-4 w-4" />
                <span>{video.category}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Educational Content</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-justify">
              {video.description}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
);

VideoCard.displayName = 'VideoCard';
