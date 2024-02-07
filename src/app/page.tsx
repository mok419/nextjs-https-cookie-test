"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch('/api/samesite/default', {credentials: "include"});
      setLoading(false); // Set loading to false when fetch is completed
      // Optionally, you can do something with the fetched data here
      
    }
    fetchData();
  }, []);

  // Render loading state while fetching
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        When you visit this site, the image does not appear.
      </h1>
      <a href="https://auth-poc-next.vercel.app/"> Log in here and then come back!</a>
      {!loading && (
        <img
          src="https://auth-poc-next.vercel.app/test-image.png"
          alt="Cookie explanation from online"
          className="dark:invert"
          width={600}
          height={400}
        />
      )}
    </main>
  );
}
