import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl font-bold min-h-screen fixed inset-0">
      404 <span>NOT FOUND</span>
      But don't worry, you can always find your way back{" "}
      <a href="/" className="text-blue-600 underline">
        home
      </a>
      !
    </div>
  );
};

export default NotFound;
