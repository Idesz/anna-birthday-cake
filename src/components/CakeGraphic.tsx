const CakeGraphic = () => {
  const candles = Array.from({ length: 17 }, (_, i) => i);

  return (
    <div className="relative w-full max-w-xl md:max-w-2xl mx-auto px-4">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-glow" />
      
      <div className="relative flex flex-col items-center">
        {/* Candles */}
        <div className="relative z-20 flex justify-center items-end gap-1.5 sm:gap-2 md:gap-3 mb-1 md:mb-2 w-full max-w-[90%]">
          {candles.map((i) => (
            <div key={i} className="flex flex-col items-center flex-1 max-w-[30px]">
              {/* Flame */}
              <div className="relative mb-0.5 md:mb-1">
                <div 
                  className="w-2 h-3 sm:w-2.5 sm:h-4 md:w-3 md:h-5 rounded-full animate-flicker"
                  style={{
                    background: "radial-gradient(ellipse at center, hsl(45, 100%, 80%) 0%, hsl(35, 100%, 65%) 30%, hsl(25, 100%, 50%) 60%, transparent 80%)",
                    boxShadow: "0 0 8px hsl(45, 100%, 60%), 0 0 15px hsl(35, 100%, 50%), 0 0 25px hsl(25, 100%, 40%)",
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${1.2 + Math.random() * 0.6}s`,
                  }}
                />
              </div>
              {/* Candle stick */}
              <div 
                className="w-1 sm:w-1.5 md:w-2 h-6 sm:h-8 md:h-12 rounded-t-sm"
                style={{
                  background: `linear-gradient(to right, ${
                    i % 4 === 0 ? 'hsl(330, 75%, 70%)' : 
                    i % 4 === 1 ? 'hsl(200, 75%, 70%)' : 
                    i % 4 === 2 ? 'hsl(45, 95%, 70%)' : 
                    'hsl(280, 75%, 70%)'
                  }, ${
                    i % 4 === 0 ? 'hsl(330, 75%, 55%)' : 
                    i % 4 === 1 ? 'hsl(200, 75%, 55%)' : 
                    i % 4 === 2 ? 'hsl(45, 95%, 55%)' : 
                    'hsl(280, 75%, 55%)'
                  })`,
                  boxShadow: "inset -1px 0 2px rgba(0,0,0,0.3), inset 1px 0 1px rgba(255,255,255,0.2)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Top cake layer */}
        <div className="relative z-10 w-full">
          {/* Frosting drips */}
          <div className="absolute top-0 left-0 right-0 flex justify-around -mt-0.5 md:-mt-1">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className="w-3 sm:w-4 md:w-6 h-2 sm:h-3 md:h-4 rounded-b-full"
                style={{
                  background: "linear-gradient(to bottom, hsl(330, 85%, 78%), hsl(330, 82%, 68%))",
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          {/* Top layer */}
          <div 
            className="w-full h-16 sm:h-20 md:h-28 rounded-t-[30%] sm:rounded-t-[35%] md:rounded-t-[40%] relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(330, 85%, 88%) 0%, hsl(330, 82%, 76%) 50%, hsl(330, 85%, 88%) 100%)",
              boxShadow: "inset 0 -8px 15px rgba(0,0,0,0.08), inset 0 2px 8px rgba(255,255,255,0.4), 0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            {/* Decorative dots */}
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${3 + Math.random() * 4}px`,
                  height: `${3 + Math.random() * 4}px`,
                  background: "hsl(45, 100%, 72%)",
                  left: `${8 + Math.random() * 84}%`,
                  top: `${15 + Math.random() * 70}%`,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.5)",
                }}
              />
            ))}

            {/* Roses */}
            <div className="absolute left-[12%] top-[35%] w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 rounded-full" 
              style={{ 
                background: "radial-gradient(circle at 35% 35%, hsl(350, 85%, 70%), hsl(350, 80%, 55%), hsl(350, 75%, 40%))",
                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)"
              }} 
            />
            <div className="absolute right-[12%] top-[35%] w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 rounded-full" 
              style={{ 
                background: "radial-gradient(circle at 35% 35%, hsl(350, 85%, 70%), hsl(350, 80%, 55%), hsl(350, 75%, 40%))",
                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)"
              }} 
            />
            <div className="absolute left-1/2 -translate-x-1/2 top-[55%] w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-full" 
              style={{ 
                background: "radial-gradient(circle at 35% 35%, hsl(350, 85%, 70%), hsl(350, 80%, 55%), hsl(350, 75%, 40%))",
                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)"
              }} 
            />
          </div>
        </div>

        {/* Middle layer - perfectly aligned */}
        <div 
          className="relative z-10 w-[98%] h-12 sm:h-16 md:h-20"
          style={{
            marginTop: "-1px",
            background: "linear-gradient(135deg, hsl(200, 82%, 88%) 0%, hsl(200, 78%, 76%) 50%, hsl(200, 82%, 88%) 100%)",
            boxShadow: "inset 0 -6px 12px rgba(0,0,0,0.08), inset 0 2px 6px rgba(255,255,255,0.4), 0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {/* Decorative dots */}
          {[...Array(22)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2.5 + Math.random() * 3.5}px`,
                height: `${2.5 + Math.random() * 3.5}px`,
                background: "hsl(45, 100%, 72%)",
                left: `${8 + Math.random() * 84}%`,
                top: `${15 + Math.random() * 70}%`,
                boxShadow: "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>

        {/* Bottom layer - perfectly aligned */}
        <div 
          className="relative z-10 w-full h-16 sm:h-20 md:h-28 rounded-b-xl sm:rounded-b-2xl"
          style={{
            marginTop: "-1px",
            background: "linear-gradient(135deg, hsl(330, 85%, 88%) 0%, hsl(330, 82%, 76%) 50%, hsl(330, 85%, 88%) 100%)",
            boxShadow: "inset 0 -10px 18px rgba(0,0,0,0.12), inset 0 2px 8px rgba(255,255,255,0.4), 0 8px 25px rgba(0,0,0,0.25)",
          }}
        >
          {/* Decorative dots */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${3 + Math.random() * 4}px`,
                height: `${3 + Math.random() * 4}px`,
                background: "hsl(45, 100%, 72%)",
                left: `${5 + Math.random() * 90}%`,
                top: `${10 + Math.random() * 80}%`,
                boxShadow: "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>

        {/* Plate - perfectly aligned */}
        <div 
          className="w-[105%] h-3 sm:h-4 md:h-6 rounded-[50%]"
          style={{
            marginTop: "-1px",
            background: "linear-gradient(135deg, hsl(0, 0%, 96%) 0%, hsl(0, 0%, 88%) 40%, hsl(0, 0%, 82%) 50%, hsl(0, 0%, 88%) 60%, hsl(0, 0%, 96%) 100%)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3), inset 0 2px 5px rgba(255,255,255,0.6), inset 0 -1px 3px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default CakeGraphic;
