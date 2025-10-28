import { useEffect, useState } from "react";
import birthdayCake from "@/assets/birthday-cake.jpg";

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
        <div className="relative w-full max-w-3xl h-32 md:h-40 px-4">
          <svg viewBox="0 0 800 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <path
                id="curve"
                d="M 50,110 Q 400,30 750,110"
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
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: "700"
              }}
            >
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Boldog Születésnapot Anna
              </textPath>
            </text>
          </svg>
        </div>

        {/* Cake image */}
        <div className="relative animate-float">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-glow" />
          <img
            src={birthdayCake}
            alt="Születésnapi torta 17 gyertyával"
            className="relative w-full max-w-2xl h-auto rounded-3xl shadow-2xl"
            loading="eager"
          />
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
