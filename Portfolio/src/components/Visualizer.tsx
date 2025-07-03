import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Visualizer: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  const isInitialized = useRef(false);

  var song;
  useEffect(() => {
    // Prevent double initialization in Strict Mode
    if (isInitialized.current) return;
    
    const sketch = (p: p5) => {

      p.setup = () => {
        p.createCanvas(600, 400, p.WEBGL);
      };

      p.draw = () => {
        p.background(250);
        p.normalMaterial();
        p.push();
        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.plane(100);
        p.pop();
      };
    };

    if (canvasRef.current) {
      p5Instance.current = new p5(sketch, canvasRef.current);
      isInitialized.current = true;
    }

    // Cleanup function
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
        isInitialized.current = false;
      }
    };
  }, []); // Empty dependency array

  return <div ref={canvasRef}/>;
};

export default Visualizer;