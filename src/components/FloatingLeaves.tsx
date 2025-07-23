import React from 'react';

const FloatingLeaves: React.FC = () => {
  const leaves = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 20 + Math.random() * 15,
    size: 0.3 + Math.random() * 1.2,
    type: Math.floor(Math.random() * 3), // Different leaf types
  }));

  const getLeafColor = (type: number) => {
    const colors = [
      'text-rose-300',
      'text-purple-300', 
      'text-amber-300'
    ];
    return colors[type];
  };

  const getLeafShape = (type: number) => {
    if (type === 0) {
      // Heart shape
      return (
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      );
    } else if (type === 1) {
      // Flower petal
      return (
        <path
          d="M12 2C8 2 5 5 5 9c0 2.5 1.5 4.5 3.5 6L12 22l3.5-7c2-1.5 3.5-3.5 3.5-6 0-4-3-7-7-7z"
          fill="currentColor"
          fillOpacity="0.6"
        />
      );
    } else {
      // Leaf shape
      return (
        <path
          d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 12 17 10c8-2 10.83-7.4 12.12-12.16l-1.06-.82C26.1 1.83 25 8 17 8z"
          fill="currentColor"
          fillOpacity="0.5"
        />
      );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute opacity-40"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `scale(${leaf.size})`,
          }}
        >
          <div className="animate-float-gentle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={getLeafColor(leaf.type)}
            >
              {getLeafShape(leaf.type)}
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;