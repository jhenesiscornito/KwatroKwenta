"use client";

import React from "react";

interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gradient-to-r from-[#018053] to-black p-8 shadow-xl relative h-2/2 w-[45%] rounded-xl">
        <button className="absolute top-4 right-4" onClick={onClose}>
        <svg width="30" height="30" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M29.5 0.75C 45.378 0.75 58.25 13.6218 58.25 29.5C58.25 45.378 45.378 58.25 29.5 58.25C13.6218 58.25 0.75 45.378 0.75 29.5C0.75 13.6218 13.6218 0.75 29.5 0.75ZM39.6496 19.3503L39.4078 19.1415C38.6574 18.5848 37.6276 18.5779 36.8703 19.1209L36.6004 19.3503L29.5 26.4496L22.3997 19.3503L22.1579 19.1415C21.4075 18.5848 20.3777 18.5779 19.6204 19.1209L19.3503 19.3503L19.1415 19.5921C18.5848 20.3425 18.5779 21.3723 19.1209 22.1296L19.3503 22.3997L26.4496 29.5L19.3503 36.6004L19.1415 36.8422C18.5848 37.5925 18.5779 38.6224 19.1209 39.3796L19.3503 39.6496L19.5921 39.8583C20.3425 40.4152 21.3723 40.4221 22.1296 39.879L22.3997 39.6496L29.5 32.5504L36.6004 39.6496L36.8422 39.8583C37.5925 40.4152 38.6224 40.4221 39.3796 39.879L39.6496 39.6496L39.8583 39.4078C40.4152 38.6574 40.4221 37.6276 39.879 36.8703L39.6496 36.6004L32.5504 29.5L39.6496 22.3997L39.8583 22.1579C40.4152 21.4075 40.4221 20.3777 39.879 19.6204L39.6496 19.3503Z"
            fill="white"
            />
        </svg>
        </button>
        <h3 className="text-white mb-4 text-xl font-bold">Add Expenses</h3>

        {/* Input box for Amount */}
        <div className="mb-6">
          <input
            type="number"
            className="overflow-hidden w-full h-[60px] bg-transparent text-white text-6xl font-bold font-['Poppins'] text-center focus:outline-none appearance-none box-border hide-scrollbar"
            placeholder="₱00.00"
          />
        </div>

        {/* Categories and Add Note */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
          {/* Categories Dropdown */}
          <div className="w-full sm:w-[180px] mb-4 sm:mb-0">
            <div className="w-full h-[50px] bg-gradient-to-r from-[#018053] to-black rounded-[10px] shadow border border-[#ececec]">
              <select className="w-full h-full bg-green-950 text-[#ececec] text-[18px] font-medium font-['Poppins'] border-none rounded-[10px] pl-3 focus:outline-none">
                <option value="Transportation">Transportation</option>
                <option value="School">School</option>
                <option value="Food">Food</option>
                <option value="Online orders">Online orders</option>
              </select>
            </div>
          </div>

          {/* Add Note Input Box */}
          <div className="flex-1">
            <div className="w-full h-[50px] bg-transparent text-[#ececec]/70 text-[18px] font-medium font-['Poppins'] border border-white rounded-[10px] p-3 resize-none focus:outline-none">
              <textarea
                className="w-full h-full bg-transparent text-white text-[18px] font-medium font-['Poppins'] resize-none focus:outline-none overflow-y-scroll expense-history"
                placeholder="Add note..."
              />
            </div>
          </div>
        </div>

        {/* Add to Expense Button */}
        <div className="mt-6">
          <button className="w-full h-[50px] bg-white hover:bg-gradient-to-r from-[#018053] to-black hover:text-white text-green-950 text-[18px] font-medium font-['Poppins'] rounded-[10px] shadow border border-[#ececec] transition duration-300">
            Add to expenses
          </button>
        </div>

        {/* Close Button */}
      </div>
    </div>
  );
};

export default AddExpenseModal;