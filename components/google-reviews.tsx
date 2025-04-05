'use client';

import { useEffect } from 'react';

function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.setAttribute('data-use-service-core', 'true');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div
        className="elfsight-app-4642266f-15a0-4a09-b4d9-cd41eede64ff"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

export default GoogleReviews;
