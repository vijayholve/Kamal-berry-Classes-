import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("topic");

  return (
    <div className="w-full max-w-md mx-auto mt-5">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 w-1/2 text-center ${
    activeTab === "topic" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
  }`}
          onClick={() => setActiveTab("topic")}
        >
          Topic
        </button>
        <button
          className={`px-4 py-2 w-1/2 text-center ${
    activeTab === "description" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
  }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
      </div>

      <div className="p-4 border rounded-b-lg">
        {activeTab === "topic" ? (
          <p>This is the Topic content.</p>
        ) : (
          <p>This is the Description content.</p>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
