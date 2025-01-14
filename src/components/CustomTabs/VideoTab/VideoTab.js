import React from 'react';
import './VideoTab.css'; // Asegúrate de crear este archivo para los estilos personalizados

const VideoTab = () => {
  return (
    <div className="video-tab-container">
      <iframe
        className="video-player"
        src="https://www.youtube.com/embed/daV4wnVpXsk"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTab;