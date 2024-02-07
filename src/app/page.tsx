"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://auth-poc-next.vercel.app/test-image.png', {
          credentials: 'include' // Include credentials (cookies) in the request
        });
        if (response.ok) {
          setImageLoaded(true);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        When you visit this site, the image does not appear.
      </h1>
      <a href="https://auth-poc-next.vercel.app/"> Log in here and then come back!</a>
        <img
          src="https://auth-poc-next.vercel.app/test-image.png"
          alt="Cookie explanation from online"
          className="dark:invert"
          width={600}
          height={400}
        />
    </main>
  );
}
