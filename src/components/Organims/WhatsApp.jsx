import React, { useState, useEffect } from "react";
import LeftMenu from "../Molecules/LeftMenu";
import ChatDetail from "../Molecules/ChatDetail";
import LoadingScreen from "../Molecules/LoadingScreen";

function WhatsApp() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 7;
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);

  return (
    <>
      {loading ? (
        <LoadingScreen progress={progress} />
      ) : (
        // main app container
        <div className="flex-1 flex overflow-hidden">
          {/* LeftMenu */}
          <div className="bg-[#111a21] w-80 h-full">
            <LeftMenu />
          </div>

          {/* ChatDetail */}
          <div className="bg-[#222f35] flex-1 h-full">
            <ChatDetail />
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsApp;
