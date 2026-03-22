'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Play, Clock, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VideoPlayer } from './VideoPlayer';
import type { VideoEntry, VideoCategory } from '@/data/videos';
import { videoCategories } from '@/data/videos';

interface VideoGalleryProps {
  videos: VideoEntry[];
  className?: string;
  columns?: 2 | 3;
}

export function VideoGallery({ videos, className, columns = 3 }: VideoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | 'All'>('All');
  const [activeVideo, setActiveVideo] = useState<VideoEntry | null>(null);

  const filteredVideos =
    activeCategory === 'All'
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const close = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    if (!activeVideo) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeVideo, close]);

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  };

  const categoryBadgeColors: Record<VideoCategory, string> = {
    Webinar: 'bg-purple-100 text-purple-700',
    'Product Demo': 'bg-blue-100 text-blue-700',
    'Case Study': 'bg-green-100 text-green-700',
    Culture: 'bg-amber-100 text-amber-700',
  };

  function formatDate(dateStr: string): string {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <>
      {/* Category Filter */}
      <div className="flex items-center gap-3 flex-wrap mb-8">
        <button
          onClick={() => setActiveCategory('All')}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition',
            activeCategory === 'All'
              ? 'bg-navy text-white'
              : 'bg-cloud text-steel hover:bg-navy/10'
          )}
        >
          All
        </button>
        {videoCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition',
              activeCategory === cat
                ? 'bg-navy text-white'
                : 'bg-cloud text-steel hover:bg-navy/10'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className={cn(`grid gap-6 ${gridCols[columns]}`, className)}>
        {filteredVideos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveVideo(video)}
            className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-navy via-slate to-navy overflow-hidden">
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-accent-cyan/90 group-hover:bg-accent-cyan group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-navy ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-navy/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <span
                className={cn(
                  'inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-2',
                  categoryBadgeColors[video.category]
                )}
              >
                {video.category}
              </span>
              <h3 className="text-lg font-semibold text-navy mb-2 line-clamp-2 group-hover:text-accent-cyan transition-colors">
                {video.title}
              </h3>
              <p className="text-steel text-sm mb-3 line-clamp-2">
                {video.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-steel/60">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(video.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Play className="w-12 h-12 text-steel/30 mx-auto mb-4" />
          <p className="text-steel text-lg">No videos in this category.</p>
          <button
            onClick={() => setActiveCategory('All')}
            className="mt-4 text-accent-cyan font-medium hover:underline"
          >
            View all videos
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy/95 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-label={`Video player: ${activeVideo.title}`}
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            aria-label="Close video player"
          >
            <X className="size-6" />
          </button>

          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoPlayer
              url={activeVideo.url}
              title={activeVideo.title}
              posterImage={activeVideo.posterImage}
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg font-semibold">
                {activeVideo.title}
              </h3>
              <p className="text-white/60 text-sm mt-1 max-w-2xl mx-auto">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
