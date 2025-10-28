import { useEffect, useState } from "react";
import CakeGraphic from "@/components/CakeGraphic";

const Index = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    // Generate confetti particles
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setConfetti(particles);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-celebration flex items-center justify-center p-4">
      {/* Confetti particles */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full animate-confetti"
            style={{
              left: particle.left,
              top: "-10px",
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 md:gap-16 max-w-4xl mx-auto">
        {/* Curved text */}
        <div className="relative w-full max-w-4xl h-40 md:h-48 px-4">
          <svg viewBox="0 0 900 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <path
                id="curve"
                d="M 50,150 Q 450,20 850,150"
                fill="transparent"
              />
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "hsl(330, 80%, 60%)" }} />
                <stop offset="50%" style={{ stopColor: "hsl(280, 70%, 70%)" }} />
                <stop offset="100%" style={{ stopColor: "hsl(45, 100%, 65%)" }} />
              </linearGradient>
            </defs>
            <text 
              className="font-bold" 
              style={{ 
                fill: "url(#textGradient)",
                fontSize: "clamp(42px, 6.5vw, 72px)",
                fontWeight: "800",
                letterSpacing: "0.02em"
              }}
            >
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Boldog Születésnapot Anna
              </textPath>
            </text>
          </svg>
        </div>

        {/* Cake graphic */}
        <div className="animate-float w-full max-w-2xl">
          <CakeGraphic />
        </div>

        {/* Decorative elements */}
        <div className="flex gap-4 md:gap-8 text-4xl md:text-6xl animate-float" style={{ animationDelay: "0.5s" }}>
          <span className="animate-glow">🎉</span>
          <span className="animate-glow" style={{ animationDelay: "0.3s" }}>🎂</span>
          <span className="animate-glow" style={{ animationDelay: "0.6s" }}>🎈</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
