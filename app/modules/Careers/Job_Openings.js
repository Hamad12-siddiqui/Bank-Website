<<<<<<< HEAD
"use client";
=======
'use client'
>>>>>>> 74d55151f564b13ccd443984d8ae05aa95b5a507
import React, { useState } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { JobsData } from "../../constant/Jobopening.js";
import { Drawer, Button } from "rizzui";

const Job_Openings = () => {
<<<<<<< HEAD
  const [drawerState, setDrawerState] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job); // jis job ka button click hua wo store ho jayegi
    setDrawerState(true);
  };

=======
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const handleOpenDrawer = (job) => {
    setSelectedJob(job);
    setDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedJob(null);
  };
>>>>>>> 74d55151f564b13ccd443984d8ae05aa95b5a507
  return (
    <div className="flex justify-center items-center mt-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl text-white space-y-6 text-center sm:text-start">
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#CAFF33]">
          Job Openings
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-[#B3B3B3] max-w-3xl">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry.
        </p>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {JobsData.jobs.map((job, index) => (
            <div
              key={index}
              className="text-white bg-[#1C1C1C] p-6 border border-[#262626] rounded-2xl flex flex-col h-full"
            >
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-medium">{job.title}</h3>

              {/* Location & Department */}
              <div className="flex flex-wrap text-[#B3B3B3] mt-4 gap-2">
                <p className="text-xs sm:text-sm md:text-base py-2 px-4 border border-[#262626] bg-black rounded-full">
                  Location: {job.location}
                </p>
                <p className="text-xs sm:text-sm md:text-base py-2 px-4 border border-[#262626] bg-black rounded-full">
                  Department: {job.department}
                </p>
              </div>

              {/* About This Job */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mt-6">
                About This Job
              </h3>
              <p className="text-sm sm:text-base text-[#B3B3B3] mt-3">
                {job.description}
              </p>

              {/* Requirements */}
              <div className="mt-4 flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white">
                  Requirements & Qualifications
                </h3>
                <div className="mt-3 space-y-3">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <BiMessageRounded className="text-[#B3B3B3] h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-[#B3B3B3]">
                        {req}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <div>
                <button
<<<<<<< HEAD
                  onClick={() => handleApplyClick(job)}
                  className="mt-6 bg-[#CAFF33] text-black px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-[#b8ff00] transition text-sm sm:text-base"
=======
                  className="mt-6 bg-[#CAFF33] text-black px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-[#b8ff00] transition text-sm sm:text-base"
                  onClick={() => handleOpenDrawer(job)}
>>>>>>> 74d55151f564b13ccd443984d8ae05aa95b5a507
                >
                  {job.apply}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    {/* Drawer */}
    {drawerOpen && selectedJob && (
      <div
        className="fixed top-0 right-0 h-full w-96 bg-[#1C1C1C] shadow-lg z-50 transition-transform duration-300"
        style={{ transform: drawerOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#262626]">
          <h3 className="text-lg font-bold text-[#CAFF33]">{selectedJob.title}</h3>
          <button
            className="text-white text-xl px-2 py-1 hover:text-[#CAFF33]"
            onClick={handleCloseDrawer}
            aria-label="Close Drawer"
          >
            &times;
          </button>
        </div>
        <div className="p-6 text-white overflow-y-auto h-[calc(100%-64px)]">
          <p className="text-sm text-[#B3B3B3] mb-2">Location: <span className="text-white">{selectedJob.location}</span></p>
          <p className="text-sm text-[#B3B3B3] mb-4">Department: <span className="text-white">{selectedJob.department}</span></p>
          <h4 className="text-base font-semibold mb-2 text-[#CAFF33]">Description</h4>
          <p className="mb-4 text-sm">{selectedJob.description}</p>
          <h4 className="text-base font-semibold mb-2 text-[#CAFF33]">Requirements</h4>
          <ul className="list-disc pl-5 text-sm space-y-2">
            {selectedJob.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
          <button className=" text-white bg-[#CAFF33] px-10 py-4 rounded-lg mt-4 flex mx-auto">
            Apply Now 
          </button>
        </div>
      </div>
    )}
    </div>
  );
};

export default Job_Openings;
