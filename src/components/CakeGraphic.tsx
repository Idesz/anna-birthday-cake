const CakeGraphic = () => {
  const candles = Array.from({ length: 17 }, (_, i) => i);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-glow" />
      
      <div className="relative flex flex-col items-center">
        {/* Candles */}
        <div className="relative z-20 flex justify-center items-end gap-2 md:gap-4 mb-2 px-4">
          {candles.map((i) => (
            <div key={i} className="flex flex-col items-center" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Flame */}
              <div className="relative mb-1">
                <div 
                  className="w-2 h-3 md:w-3 md:h-4 rounded-full animate-glow"
                  style={{
                    background: "radial-gradient(ellipse at center, hsl(45, 100%, 70%) 0%, hsl(35, 100%, 60%) 40%, transparent 70%)",
                    boxShadow: "0 0 10px hsl(45, 100%, 60%), 0 0 20px hsl(35, 100%, 50%)",
                    animationDuration: `${1 + Math.random() * 0.5}s`,
                  }}
                />
              </div>
              {/* Candle stick */}
              <div 
                className="w-1.5 h-8 md:w-2 md:h-12 rounded-t-sm"
                style={{
                  background: `linear-gradient(to right, ${
                    i % 4 === 0 ? 'hsl(330, 70%, 65%)' : 
                    i % 4 === 1 ? 'hsl(200, 70%, 65%)' : 
                    i % 4 === 2 ? 'hsl(45, 90%, 65%)' : 
                    'hsl(280, 70%, 65%)'
                  }, ${
                    i % 4 === 0 ? 'hsl(330, 70%, 55%)' : 
                    i % 4 === 1 ? 'hsl(200, 70%, 55%)' : 
                    i % 4 === 2 ? 'hsl(45, 90%, 55%)' : 
                    'hsl(280, 70%, 55%)'
                  })`,
                  boxShadow: "inset -1px 0 2px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Top cake layer */}
        <div className="relative z-10 w-full">
          {/* Frosting drips */}
          <div className="absolute top-0 left-0 right-0 flex justify-around -mt-1">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-4 md:w-6 h-3 md:h-4 rounded-b-full"
                style={{
                  background: "linear-gradient(to bottom, hsl(330, 85%, 75%), hsl(330, 80%, 65%))",
                }}
              />
            ))}
          </div>

          {/* Top layer */}
          <div 
            className="w-full h-20 md:h-28 rounded-t-[40%] relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(330, 85%, 85%) 0%, hsl(330, 80%, 75%) 50%, hsl(330, 85%, 85%) 100%)",
              boxShadow: "inset 0 -10px 20px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            {/* Decorative dots */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${4 + Math.random() * 4}px`,
                  height: `${4 + Math.random() * 4}px`,
                  background: "hsl(45, 100%, 70%)",
                  left: `${10 + Math.random() * 80}%`,
                  top: `${20 + Math.random() * 60}%`,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              />
            ))}

            {/* Roses */}
            <div className="absolute left-[15%] top-[40%] w-6 h-6 md:w-8 md:h-8 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, hsl(350, 80%, 65%), hsl(350, 70%, 45%))" }} />
            <div className="absolute right-[15%] top-[40%] w-6 h-6 md:w-8 md:h-8 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, hsl(350, 80%, 65%), hsl(350, 70%, 45%))" }} />
            <div className="absolute left-[50%] -translate-x-1/2 top-[60%] w-7 h-7 md:w-9 md:h-9 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, hsl(350, 80%, 65%), hsl(350, 70%, 45%))" }} />
          </div>
        </div>

        {/* Middle layer */}
        <div 
          className="relative z-10 w-[95%] h-16 md:h-20 -mt-2"
          style={{
            background: "linear-gradient(135deg, hsl(200, 80%, 85%) 0%, hsl(200, 75%, 75%) 50%, hsl(200, 80%, 85%) 100%)",
            boxShadow: "inset 0 -8px 15px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          {/* Decorative dots */}
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${3 + Math.random() * 3}px`,
                height: `${3 + Math.random() * 3}px`,
                background: "hsl(45, 100%, 70%)",
                left: `${10 + Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>

        {/* Bottom layer */}
        <div 
          className="relative z-10 w-full h-20 md:h-28 rounded-b-2xl -mt-2"
          style={{
            background: "linear-gradient(135deg, hsl(330, 85%, 85%) 0%, hsl(330, 80%, 75%) 50%, hsl(330, 85%, 85%) 100%)",
            boxShadow: "inset 0 -10px 20px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.3)",
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
                background: "hsl(45, 100%, 70%)",
                left: `${5 + Math.random() * 90}%`,
                top: `${10 + Math.random() * 80}%`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>

        {/* Plate */}
        <div 
          className="w-[110%] h-4 md:h-6 rounded-[50%] -mt-2"
          style={{
            background: "linear-gradient(135deg, hsl(0, 0%, 95%) 0%, hsl(0, 0%, 85%) 50%, hsl(0, 0%, 95%) 100%)",
            boxShadow: "0 5px 20px rgba(0,0,0,0.3), inset 0 2px 5px rgba(255,255,255,0.5)",
          }}
        />
      </div>
    </div>
  );
};

export default CakeGraphic;
