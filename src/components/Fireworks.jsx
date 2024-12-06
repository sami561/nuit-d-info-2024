import { useEffect, useRef } from "react";

const Fireworks = ({ show }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!show) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = [];

    class Particle {
      constructor(x, y, color, size, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.alpha = 1;
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.alpha -= 0.02; // Fade effect

        // Draw the particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const createFirework = (x, y) => {
      const colors = ["#ff2a68", "#ff9b00", "#ffe100", "#2ae5ff"];
      const numberOfParticles = 100;

      for (let i = 0; i < numberOfParticles; i++) {
        const velocityX = Math.random() * 6 - 3;
        const velocityY = Math.random() * 6 - 3;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 3 + 1;
        particles.push(new Particle(x, y, color, size, velocityX, velocityY));
      }
    };

    const animateFireworks = () => {
      if (!show) return;

      ctx.clearRect(0, 0, width, height); // Clear canvas
      particles.forEach((particle, index) => {
        particle.update();
        if (particle.alpha <= 0) {
          particles.splice(index, 1); // Remove dead particles
        }
      });

      requestAnimationFrame(animateFireworks);
    };

    createFirework(width / 2, height / 2); // Trigger fireworks in the middle of the screen
    animateFireworks();

    return () => {
      particles = []; // Cleanup particles on component unmount
    };
  }, [show]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}
    />
  );
};

export default Fireworks;
