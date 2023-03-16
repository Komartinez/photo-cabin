import { useRef } from "react";
import './Photo.css';

const Photo = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const capture = () => {
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, 640, 480);
    };

    navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });

    return (
        <div>
          <video className="prePhoto" ref={videoRef} />
          <button className="takePhoto" onClick={capture}>Take a photo</button>
          <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
        </div>
      );
}

export default Photo;