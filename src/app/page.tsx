"use client";

import { useState } from 'react';

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Function to handle button click and load the image
  const handleButtonClick = () => {
    setImageLoaded(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        When you visit this site, the image does not appear.
      </h1>
      <a href="https://auth-poc-next.vercel.app/"> Log in here and then come back!</a>
      {/* Render the image only if the button has been clicked */}
      {imageLoaded && (
        <img
          src="https://auth-poc-next.vercel.app/test-image.png"
          alt="Cookie explanation from online"
          className="dark:invert"
          width={600}
          height={400}
        />
      )}
      {/* Button to load the image */}
      {!imageLoaded && (
        <button onClick={handleButtonClick}>Load Image</button>
      )}
    </main>
  );
}
