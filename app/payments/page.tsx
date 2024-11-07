"use client";

import LeftPanel from "@/components/left-panel";
import { useState } from "react";
import { useSession } from "next-auth/react";

// Calendar Component
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daySet, setDaySet] = useState(0);
  const { data: session, status } = useSession();

  // Get the current month and year
  const month = currentDate.toLocaleString("default", { month: "long" }).toUpperCase();
  const year = currentDate.getFullYear();

  // Array of all months for the dropdown
  const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  // Array of day names
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Calculate the days in the current month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const daysOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
    return {
      number: i + 1,
      dayName: dayNames[date.getDay()]
    };
  });

  // Group days into sets of 7 (for a week view)
  const daySets = [];
  for (let i = 0; i < daysOfMonth.length; i += 7) {
    daySets.push(daysOfMonth.slice(i, i + 7));
  }

  // Handle month change from dropdown
  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = months.indexOf(event.target.value);
    const newDate = new Date(currentDate.getFullYear(), newMonth, 1);
    setCurrentDate(newDate);
    setDaySet(0);
  };

  // Handle year change
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(event.target.value);
    const newDate = new Date(newYear, currentDate.getMonth(), 1);
    setCurrentDate(newDate);
    setDaySet(0);
  };

  // Generate array of years (current year ± 10 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  // Handle previous and next set navigation
  const handlePrevSet = () => {
    setDaySet((prev) => Math.max(prev - 1, 0));
  };

  const handleNextSet = () => {
    setDaySet((prev) => Math.min(prev + 1, daySets.length - 1));
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Access Denied</div>;
  }

  return (
    <div className="calendar p-6">
      <div className="header mb-6">
        <h6 className="text-gray-600 text-sm">SCHEDULE</h6>
        <div className="flex items-center gap-4 mb-4">
          {/* Month Dropdown */}
          <select 
            value={month}
            onChange={handleMonthChange}
            className="px-4 py-2 border rounded-md"
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          {/* Year Dropdown */}
          <select
            value={year}
            onChange={handleYearChange}
            className="px-4 py-2 border rounded-md"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Current Date (live) */}
      <div className="live-date text-xl font-semibold mb-4">
        <p>Today: {currentDate.toDateString()}</p>
      </div>

      {/* Buttons for Days of the Month */}
      <div className="day-buttons mb-6">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={handlePrevSet} 
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            &lt; Prev
          </button>
          <button 
            onClick={handleNextSet} 
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            Next &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {daySets[daySet]?.map((day) => (
            <button 
              key={day.number} 
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400 flex flex-col items-center"
            >
              <span className="text-lg">{day.number}</span>
              <span className="text-xs mt-1">{day.dayName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Payments Component
export default function Payments() {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Access Denied</div>;
  }

  return (
    <div className="flex flex-row h-screen">
      {/* Left Panel */}
      <div className="w-[320px] flex-shrink-0"> {/* Fixed width and prevent shrinking */}
        <LeftPanel />
      </div>

      {/* Payments Div */}
      <div className="flex-1 h-full flex flex-col overflow-hidden"> {/* Take remaining width and flex */}
        <Calendar />

        <div className="flex-1 flex flex-row overflow-hidden">
          {/* Left Section */}
          <div className="flex-1 border-2 border-red-500 overflow-y-auto p-4">
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
            <h2 className="text-xl font-bold mb-4">Left Section</h2>
            <p>Content for the left section goes here.</p>
          </div>

          {/* Right Section */}
          <div className="flex-1 border-2 border-red-500 overflow-hidden p-4 flex flex-col">
  {/* Payment History Section */}
  <div className="mb-4">
    <h2 className="text-xl font-bold mb-2">Payment History</h2>
    <p>Month of September</p>
  </div>

  {/* Content Section that takes remaining height */}
  <div className="flex-1 flex flex-col overflow-y-auto">
    {/* Repeating Sections */}
    <div className="flex flex-col space-y-4">
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Left Section</h2>
        <p>Content for the left section goes here.</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
