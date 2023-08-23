import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { Button, Modal, SegmentedControl } from "@mantine/core";

const Traffic: React.FC = () => {
  const [data, setData] = useState<TrafficData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayOption, setDisplayOption] = useState<string>("source");
  const [top5Data, setTop5Data] = useState<TrafficData[]>([]);

  useEffect(() => {
    fetch("/api/traffic")
      .then((response) => response.json())
      .then((responseData: TrafficData[]) => {
        setData(responseData);
        setTop5Data(responseData.slice(0, 6));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDisplayOptionChange = (value: string) => {
    setDisplayOption(value);
  };
  const segmentedControlStyles = {
    root: {
      backgroundColor: 'white', // Set the background color of the SegmentedControl
    },
    control: {
      margin: '5px', // Add margin to each butto
      border: 'none',
      outline: 'none', // Remove the blue outline on focus
    },
    controlActive: {
      backgroundColor: '#f0f0f0', // Set the background color for the selected button
    },
  };
  return (
    <div className="bg-white shadow-[rgba(0,_0,_0,_0.1)_4px_4px_5px] rounded-md m-4 p-6 pt-2 relative" style={{ width: "32rem", height: "350px" }}>
      <div style={{ width: "100%", height: 300 }}>
        {/* Keep your existing styling here */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Traffic</h2>
          <SegmentedControl
            fullWidth
            radius={4}
            size="sm"
            value={displayOption}
            onChange={handleDisplayOptionChange}
            data={[
              { label: "Source", value: "source" },
              { label: "City", value: "city" },
            ]}
            transitionDuration={0}
            styles={segmentedControlStyles}
          />
        </div>
        {/* End of existing styling */}
        <ResponsiveContainer width="100%" height={"85%"}>
          <BarChart
            data={
              displayOption === "source"
                ? top5Data.map((item) => ({
                    name: item.source,
                    value: item.traffic,
                    label: item.source,
                  }))
                : top5Data.map((item) => ({
                    name: item.topCity.city,
                    value: item.topCity.count,
                    label: item.topCity.city,
                  }))
            }
            layout="vertical"
            barCategoryGap="17%"
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis type="number" display={"none"} />
            <YAxis dataKey="name" type="category" display={"none"} />

            <Bar dataKey="value" fill="#fff5c2" radius={6}>
              <LabelList dataKey="label" position="insideLeft" fill="black" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute bottom-4 left-4">
        <Button
          onClick={handleModalOpen}
          radius="md"
          size="md"
          compact
          style={{ backgroundColor: "#f2f2f2", color: "black" }}
        >
          See traffic sources
        </Button>
      </div>
      <Modal
        title="Traffic sources"
        size="md"
        opened={isModalOpen}
        onClose={handleModalClose}
      >
        {/* Render the remaining data in a custom table */}
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center">Source</th>
              <th className="px-4 py-2 text-center">Traffic</th>
              <th className="px-4 py-2 text-center">City</th>
              <th className="px-4 py-2 text-center">City Traffic</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-center">{item.source}</td>
                <td className="px-4 py-2 text-center">{item.traffic}</td>
                <td className="px-4 py-2 text-center">{item.topCity.city}</td>
                <td className="px-4 py-2 text-center">{item.topCity.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default Traffic;
