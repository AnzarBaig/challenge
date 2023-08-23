import React from "react";
import { BiSolidCaretDownSquare, BiSolidCaretUpSquare } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";

const ZootoolsInsights: React.FC = () => {
  function getChangeInSignUps(): number {
    // Some API Call... and calculation based on the data
    // This function can also be made a hook as well
    // As this is for demo purpose only, I am not making a static API for this component
    return -5;
  }

  return (
    <div className="mx-2 md:mx-20 p-4">
      <div className="bg-white shadow-[rgba(0,_0,_0,_0.1)_4px_4px_5px] rounded-md p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Half */}
          <div>
            <div className="font-bold text-4xl">Zootools Insights</div>
            <div className="text-xl">Making analytics simple and actionable</div>
            <div className="text-xl font-bold pt-4 pb-2">Summary</div>
            <div className="text-sm flex items-center">
              <BiSolidCaretDownSquare className="text-red-500 text-4xl mr-1" />
              <strong className="text-black">
                Signups are slowing down.&nbsp;
              </strong>{" "}
              {getChangeInSignUps()}% new than last week
            </div>
            <div className="text-sm flex items-center">
              <BiSolidCaretUpSquare className="text-green-500 text-4xl mr-1" />
              <strong className="text-black">80%&nbsp;</strong> of your signups were
              invited by other members.
            </div>
            
            <div className="text-sm flex items-center my-1">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center mx-1 mr-2"
                style={{ backgroundColor: "#ffe24d" }}
              >
                <HiOutlineLightBulb className="h-6 w-6 text-black" />
              </div>
              <strong className="text-black">80%&nbsp;</strong> of your signups were
              invited by a friend
            </div>

            <div className="text-sm flex items-center my-2">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center mx-1 mr-2"
                style={{ backgroundColor: "#ffe24d" }}
              >
                <HiOutlineLightBulb className="h-6 w-6 text-black" />
              </div>
              <strong className="text-black">80%&nbsp;</strong> of your signups were
              invited by a friend
            </div>
          </div>

          {/* Right Half */}
          <div className="flex flex-col justify-center">
            <div className="text-xl font-bold py-2">Recommendation</div>
            <div className="text-sm font-bold mb-8">
              Make sure to promote and <a href="URL_TO_FORM" target="_blank" rel="noopener noreferrer">
                <u>Share your form</u>
              </a>
            </div>
            <div className="text-sm font-bold">
              Congrats! This is huge. Keep giving rewards for your users.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        {" "}
        {/* Add margin-top to separate the chart */}
        {/* Include the chart or data visualization for Zootools */}
      </div>
    </div>
  );
};

export default ZootoolsInsights;