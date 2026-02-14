import React from "react";

type ImageTextBlockProps = {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
};

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({ imageSrc, imageAlt, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', paddingLeft: 16, paddingRight: 16, boxSizing: 'border-box', width: '100%' }}>
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '24px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)', objectFit: 'cover' }}
      />
      <div style={{ maxWidth: 600, marginTop: 32, fontFamily: 'monospace', fontSize: 16, color: '#222', textAlign: 'center' }}>
        {children}
      </div>
    </div>
  );
};

export default ImageTextBlock; 