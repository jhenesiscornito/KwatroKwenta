"use client";

import LeftPanel from "@/components/left-panel";
import { useState, useEffect } from "react";
import { getServerSession } from "next-auth";
import { Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Calendar Component
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daySet, setDaySet] = useState(0);
  const [session, setSession] = useState<Session | null>(null);  // Specify the type here

  // Get the current month and year
  const month = currentDate.toLocaleString("default", { month: "long" }).toUpperCase();
  const year = currentDate.getFullYear();

  useEffect(() => {
    // Fetch the session on component mount
    const fetchSession = async () => {
      const sessionData = await getServerSession(authOptions);
      setSession(sessionData);  // No more type error here
    };

    fetchSession();
  }, []);

  // Calculate the days in the current month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const daysOfMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Group days into sets of 7 (for a week view)
  const daySets = [];
  for (let i = 0; i < daysOfMonth.length; i += 7) {
    daySets.push(daysOfMonth.slice(i, i + 7));
  }

  // Handle previous and next set navigation
  const handlePrevSet = () => {
    setDaySet((prev) => Math.max(prev - 1, 0));
  };

  const handleNextSet = () => {
    setDaySet((prev) => Math.min(prev + 1, daySets.length - 1));
  };

  return (
    <div className="calendar p-6">
      <div className="header mb-6">
        <h6 className="text-gray-600 text-sm">SCHEDULE</h6>
        <h3 className="text-3xl font-semibold">{month} {year}</h3>
      </div>

      {/* Current Date (live) */}
      <div className="live-date text-xl font-semibold mb-4">
        <p>Today: {currentDate.toDateString()}</p>
      </div>

      {/* Buttons for Days of the Month */}
      <div className="day-buttons mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevSet} className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
            &lt; Prev
          </button>
          <button onClick={handleNextSet} className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
            Next &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {daySets[daySet]?.map((day) => (
            <button key={day} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400">
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Payments Component
export default function Payments() {
  return (
    <div className="flex flex-row">
      {/* Left Panel */}
      <div>
        <LeftPanel />
      </div>

      {/* Payments Div */}
      <div className="w-full max-w-full h-screen border-2 border-red-500">
        <Calendar />
      </div>
    </div>
  );
}
