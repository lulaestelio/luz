import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  angle: number;
  speed: number;
}

export const CherryParticles: React.FC<{
  triggerBurst?: (x: number, y: number) => void;
}> = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const spawnCherries = (clientX: number, clientY: number) => {
    const emojis = ['🍒', '✨', '❤️', '💋', '🍒'];
    const newParticles: Particle[] = [];
    const count = 7;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2);
      newParticles.push({
        id: Date.now() + Math.random() * 1000,
        x: clientX,
        y: clientY,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        angle,
        speed: 50 + Math.random() * 60,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 1000);
  };

  // Expose global event listener for cherry bursts
  React.useEffect(() => {
    const handleCherryEvent = (e: CustomEvent<{ x: number; y: number }>) => {
      spawnCherries(e.detail.x, e.detail.y);
    };

    window.addEventListener('cherry-burst' as any, handleCherryEvent);
    return () => {
      window.removeEventListener('cherry-burst' as any, handleCherryEvent);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => {
          const deltaX = Math.cos(particle.angle) * particle.speed;
          const deltaY = Math.sin(particle.angle) * particle.speed - 30; // Float upwards slightly

          return (
            <motion.div
              key={particle.id}
              initial={{ opacity: 1, scale: 0.6, x: particle.x, y: particle.y }}
              animate={{
                opacity: 0,
                scale: 1.3,
                x: particle.x + deltaX,
                y: particle.y + deltaY,
                rotate: Math.random() * 180 - 90,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute text-2xl"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              {particle.emoji}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export const triggerCherryBurst = (e: React.MouseEvent) => {
  const customEvent = new CustomEvent('cherry-burst', {
    detail: { x: e.clientX, y: e.clientY },
  });
  window.dispatchEvent(customEvent);
};
