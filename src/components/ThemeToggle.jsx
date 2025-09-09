// src/components/ThemeToggle.jsx
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        delay: 1
      }}
    >
      <motion.button
        onClick={toggleTheme}
        className={`
          relative w-16 h-16 rounded-2xl backdrop-blur-md border-2 
          ${isDark 
            ? 'bg-gradient-to-br from-purple-600/90 to-indigo-700/90 border-purple-400/50 shadow-lg shadow-purple-500/30' 
            : 'bg-gradient-to-br from-yellow-400/90 to-orange-500/90 border-yellow-300/50 shadow-lg shadow-yellow-400/30'
          }
          transition-all duration-500 hover:scale-110 active:scale-95
          group overflow-hidden
        `}
        whileHover={{ 
          rotateY: 15,
          rotateX: 5,
          scale: 1.1
        }}
        whileTap={{ 
          scale: 0.9,
          rotateZ: isDark ? -10 : 10
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background glow effect */}
        <motion.div
          className={`
            absolute inset-0 rounded-2xl blur-xl opacity-60
            ${isDark 
              ? 'bg-gradient-to-br from-purple-400 to-indigo-500' 
              : 'bg-gradient-to-br from-yellow-300 to-orange-400'
            }
          `}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Icon container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ 
              rotateY: 90, 
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              rotateY: 0, 
              opacity: 1,
              scale: 1
            }}
            exit={{ 
              rotateY: -90, 
              opacity: 0,
              scale: 0.5
            }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="relative"
          >
            {isDark ? (
              <Moon 
                className="w-8 h-8 text-white drop-shadow-lg" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
                }}
              />
            ) : (
              <Sun 
                className="w-8 h-8 text-white drop-shadow-lg" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))'
                }}
              />
            )}
          </motion.div>

          {/* Rotating rays for sun */}
          {!isDark && (
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-3 bg-white/60 rounded-full"
                  style={{
                    top: '10%',
                    left: '50%',
                    transformOrigin: '50% 200%',
                    transform: `translateX(-50%) rotate(${i * 45}deg)`
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* Stars for moon */}
          {isDark && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </>
          )}
        </div>

        {/* Ripple effect on click */}
        <motion.div
          className={`
            absolute inset-0 rounded-2xl
            ${isDark 
              ? 'bg-gradient-to-br from-purple-300/30 to-indigo-400/30' 
              : 'bg-gradient-to-br from-yellow-200/30 to-orange-300/30'
            }
          `}
          initial={{ scale: 0, opacity: 0.8 }}
          whileTap={{ 
            scale: 2, 
            opacity: 0,
            transition: { duration: 0.4 }
          }}
        />

        {/* Tooltip */}
        <motion.div
          className={`
            absolute -bottom-12 left-1/2 transform -translate-x-1/2
            px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap
            ${isDark 
              ? 'bg-gray-800/90 text-white border border-gray-700/50' 
              : 'bg-white/90 text-gray-800 border border-gray-200/50'
            }
            backdrop-blur-sm opacity-0 group-hover:opacity-100
            transition-opacity duration-300 pointer-events-none
          `}
        >
          Switch to {isDark ? 'Light' : 'Dark'} Mode
          <div 
            className={`
              absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45
              ${isDark ? 'bg-gray-800/90 border-l border-t border-gray-700/50' : 'bg-white/90 border-l border-t border-gray-200/50'}
            `}
          />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
