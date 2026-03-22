'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  url: string;
  title: string;
  posterImage?: string;
  className?: string;
}

/**
 * Parses a YouTube or Vimeo URL and returns the embed URL.
 */
function getEmbedUrl(url: string): string | null {
  // YouTube: various formats
  const ytRegex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const ytMatch = url.match(ytRegex);
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}`;
  }

  // Vimeo: various formats
  const vimeoRegex = /(?:vimeo\.com\/)(\d+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return null;
}

export function VideoPlayer({ url, title, posterImage, className }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className={cn('relative w-full aspect-video bg-navy/10 rounded-xl flex items-center justify-center', className)}>
        <p className="text-steel text-sm">Unsupported video URL</p>
      </div>
    );
  }

  return (
    <div className={cn('relative w-full aspect-video rounded-xl overflow-hidden bg-navy', className)}>
      {playing ? (
        <iframe
          src={`${embedUrl}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2"
          aria-label={`Play video: ${title}`}
        >
          {posterImage ? (
            <Image
              src={posterImage}
              alt={`Thumbnail for ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-slate to-navy" />
          )}
          <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-cyan/90 group-hover:bg-accent-cyan group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-navy ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent">
            <p className="text-white text-sm font-medium text-left">{title}</p>
          </div>
        </button>
      )}
    </div>
  );
}
