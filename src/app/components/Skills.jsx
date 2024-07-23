import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { FaReact } from "react-icons/fa";
import { IoServerOutline } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import Typography from "@mui/material/Typography";

export default function Skills() {
  return (
    <>
      <div className="mt-[10%] w-full flex flex-row lg:flex-col justify-center">
        <div className=" flex justify-center w-full">
          <span className="text-center font-semibold lg:font-bold  uppercase tracking-[0.3rem] text-blue-500 text-[25px] mb-[3%]">
            Skills
          </span>
        </div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <FaReact className="text-blue-600 " />{" "}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2 }}
              className="flex justify-start"
            >
              <span className="border border-white bg-white w-[400px] text-gray-700  flex flex-col rounded-md shadow-md p-3">
                <Typography
                  variant="h6"
                  component="span"
                  color={"black"}
                  className="flex text-left text-gray-700 "
                >
                  Frontend Development
                </Typography>
                <p className="flex text-left">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  molestiae commodi facilis minima eum sapiente nam numquam
                  eveniet alias suscipit cum, eius quasi animi corrupti
                  temporibus architecto nobis. Quaerat, dicta.
                </p>
              </span>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <FaNodeJs className="text-green-600 " />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2 }}
              className="flex justify-end"
            >
              <span className="border border-white bg-white w-[400px] text-gray-700 flex flex-col rounded-md shadow-md p-3">
                <Typography
                  variant="h6"
                  component="span"
                  color={"black"}
                  className="flex text-left text-gray-700 "
                >
                  Backend Development
                </Typography>
                <p className="flex text-left">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  molestiae commodi facilis minima eum sapiente nam numquam
                  eveniet alias suscipit cum, eius quasi animi corrupti
                  temporibus architecto nobis. Quaerat, dicta.
                </p>
              </span>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <IoServerOutline className="text-white " />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2 }}
              className="flex justify-start"
            >
              <span className="border border-white bg-white w-[400px] text-gray-700 flex flex-col rounded-md shadow-md p-3">
                <Typography
                  variant="h6"
                  component="span"
                  color={"black"}
                  className="flex text-left text-gray-700 "
                >
                  MERN Development
                </Typography>
                <p className="flex text-left">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  molestiae commodi facilis minima eum sapiente nam numquam
                  eveniet alias suscipit cum, eius quasi animi corrupti
                  temporibus architecto nobis. Quaerat, dicta.
                </p>
              </span>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}
