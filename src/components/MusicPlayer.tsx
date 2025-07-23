import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // YouTube API yükleme
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = () => {
      setIsLoaded(true);
    };

    // Scroll event dinleyici
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Sayfanın altından 100px yakına gelince gizle
      if (scrollTop + windowHeight >= docHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    const iframe = document.getElementById('youtube-player') as HTMLIFrameElement;
    if (iframe) {
      const message = isPlaying ? '{"event":"command","func":"pauseVideo","args":""}' : '{"event":"command","func":"playVideo","args":""}';
      iframe.contentWindow?.postMessage(message, '*');
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const iframe = document.getElementById('youtube-player') as HTMLIFrameElement;
    if (iframe) {
      const message = isMuted ? '{"event":"command","func":"unMute","args":""}' : '{"event":"command","func":"mute","args":""}';
      iframe.contentWindow?.postMessage(message, '*');
      setIsMuted(!isMuted);
    }
  };

  return (
      <>
        {/* Hidden YouTube Player */}
        <div className="hidden">
          <iframe
              id="youtube-player"
              width="0"
              height="0"
              src="https://www.youtube.com/embed/NZGHXy1IAHM?enablejsapi=1&autoplay=1&loop=1&playlist=NZGHXy1IAHM&controls=0&showinfo=0&rel=0&modestbranding=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
          ></iframe>
        </div>

        {/* Music Controls */}
        {isVisible && (
            <div className="fixed bottom-6 right-6 z-50 md:opacity-100 opacity-90 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-4 flex items-center space-x-3">
                <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                <button
                    onClick={toggleMute}
                    className="w-8 h-8 text-gray-600 hover:text-purple-500 flex items-center justify-center transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
        )}

        <audio
            ref={audioRef}
            loop
            muted={isMuted}
            preload="metadata"
        >
          {/* Using a public domain romantic instrumental */}
          <source src="https://www.soundjay.com/misc/sounds/romantic-piano.mp3" type="audio/mpeg" />
          <source src="https://www.soundjay.com/misc/sounds/romantic-piano.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </>
  );
};

export default MusicPlayer;
