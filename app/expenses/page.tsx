"use client";

import LeftPanel from "@/components/left-panel";
import ExpenseHistory  from "@/components/expenseHistory";
import MonthExpenseHistory from "@/components/monthExpenseHistory";
import { useSession } from "next-auth/react";

export default function Expenses() {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Access Denied</div>;
  }

  const Icon1 = () => {
    return (
        <>
        <svg width="30" height="30" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.5789 0.865245C45.4568 0.803699 58.3786 13.6255 58.4401 29.5036C58.5017 45.3815 45.6797 58.3033 29.8018 58.3648C13.9237 58.4264 1.00209 45.6044 0.940541 29.7265C0.878995 13.8484 13.7008 0.926791 29.5789 0.865245ZM29.6346 15.2401C28.543 15.2444 27.644 16.059 27.5051 17.1121L27.4867 17.4047L27.5257 27.4672L17.4633 27.5062C16.2725 27.5108 15.3108 28.4799 15.3154 29.6707C15.3197 30.7624 16.1343 31.6614 17.1874 31.8002L17.48 31.8186L27.5424 31.7796L27.5815 41.842C27.5861 43.0329 28.5552 43.9945 29.746 43.9899C30.8377 43.9857 31.7367 43.1709 31.8755 42.1181L31.8939 41.8253L31.8549 31.7629L41.9173 31.7239C43.1082 31.7193 44.0698 30.7501 44.0652 29.5593C44.061 28.4677 43.2462 27.5687 42.1934 27.4298L41.9006 27.4114L31.8382 27.4504L31.7992 17.388C31.7946 16.1972 30.8254 15.2355 29.6346 15.2401Z" fill="#EDEDED"/>
        </svg>
        </>
    );
};

  return (
      <div className="flex flex-col md:flex-row h-screen">
          <LeftPanel />
          
          {/* Main content with 2 columns on larger screens */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 ml-4 pr-4">
              {/* First Column - Add Expenses and Today's Expense History */}
              <div className="h-screen py-3 pr-2 flex flex-col">
                  <button className="relative w-full bg-gradient-to-tl from-zinc-900 to-green-600 rounded-2xl p-5 text-white text-xl font-medium shadow-l border border-white flex items-center shadow-lg hover:text-green-400 transition duration-300">
                      <span className="flex-grow font-bold text-left">Add Expenses</span>
                      <div className="items-center hover:opacity-75 transition duration-300">
                          <Icon1 />
                      </div>
                  </button>

                  <div className="flex flex-col flex-grow border border-gray-300 rounded-2xl py-4 px-4 mt-3 shadow-xl justify-around">
                      <h1 className="text-2xl font-semibold text-green-900">Today's Expense History</h1>
                      <div className="my-3 pl-5">
                          <div className="flex">
                              <div className="w-2 h-2 rounded-full bg-green-700 mt-2 mr-1"></div><p className="text-sm">Transportation</p>
                          </div>
                          <div className="flex">
                              <div className="w-2 h-2 rounded-full bg-red-600 mt-2 mr-1"></div><p className="text-sm">School</p>
                          </div>
                          <div className="flex">
                              <div className="w-2 h-2 rounded-full bg-blue-900 mt-2 mr-1"></div><p className="text-sm">Food</p>
                          </div>
                          <div className="flex">
                              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-1"></div><p className="text-sm">Online Orders</p>
                          </div>
                          <div className="flex">
                              <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 mr-1"></div><p className="text-sm">Others</p>
                          </div>
                      </div>

                      <div className="h-[200px] overflow-y-scroll rounded-2xl pr-2">
                          <div className="space-y-1">
                              <ExpenseHistory />
                              <ExpenseHistory />
                              <ExpenseHistory />
                              <ExpenseHistory />
                              <ExpenseHistory />
                          </div>
                      </div>

                      <div className="flex justify-between mt-3">
                          <p className="text-2xl font-semibold text-green-900">Total</p>
                          <p className="text-2xl font-bold text-green-900">₱ 1</p>
                      </div>
                  </div>
              </div>

              {/* Second Column - Expenses Breakdown */}
              <div className="py-3 pl-1">
                  <div className="border border-gray-300 rounded-2xl shadow-xl py-3 px-4">
                      <div>
                          <h1 className="text-2xl font-semibold text-green-900">Expenses Breakdown</h1>
                          <h1 className="text-2xl font-semibold text-gray-900">Month of November</h1>
                      </div>

                      <div className="h-[275px] overflow-y-scroll rounded-2xl pr-2">
                          <div className="space-y-1">
                              <MonthExpenseHistory />
                              <MonthExpenseHistory />
                              <MonthExpenseHistory />
                              <MonthExpenseHistory />
                              <MonthExpenseHistory />
                              <MonthExpenseHistory />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}