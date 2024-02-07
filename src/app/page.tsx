"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      await fetch('/api/samesite/default');
      // Optionally, you can do something with the fetched data here
    }
    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        When you visit this site you will receive two default cookies.
      </h1>
      <img
              src="https://auth-poc-next.vercel.app/test-image.png"
              alt="Cookie explanation from online"
              className="dark:invert"
              width={600}
              height={400}
            />
            <h2>The image above is from another domain, which checks if you sent a cookie!</h2>
            <a href="https://auth-poc-next.vercel.app"> You can only request from the other domain if your cookie is sent!</a>
            <br/>
            <br/>

            <a href="/example"> Check this page for Samesite None cookie</a>
    
    
            
    </main>
  );
}
