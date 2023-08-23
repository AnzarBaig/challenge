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
import useCountryFlag from "@/app/hooks/useCountryFlag";

const SignupLocation: React.FC = () => {
  const [data, setData] = useState<SignUpLocation[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayOption, setDisplayOption] = useState<string>("country");
  const [top5Data, setTop5Data] = useState<SignUpLocation[]>([]);

  useEffect(() => {
    fetch("/api/signuplocations")
      .then((response) => response.json())
      .then((responseData: SignUpLocation[]) => {
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
      backgroundColor: "white",
    },
    control: {
      margin: "5px",
      border: "none",
      outline: "none",
    },
    controlActive: {
      backgroundColor: "#f0f0f0",
    },
  };

  return (
    <div
      className="bg-white shadow-[rgba(0,_0,_0,_0.1)_4px_4px_5px] rounded-md m-4 p-6 pt-2 relative"
      style={{ width: "32rem", height: "350px" }}
    >
      <div style={{ width: "100%", height: 300 }}>
        {/* Keep your existing styling here */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Signup Locations</h2>
          <SegmentedControl
            fullWidth
            radius={4}
            size="sm"
            value={displayOption}
            onChange={handleDisplayOptionChange}
            data={[
              { label: "Country", value: "country" },
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
              displayOption === "country"
                ? top5Data.map((item) => ({
                    name: item.country,
                    value: item.signupCount,
                    label: item.country,
                  }))
                : top5Data.map((item) => ({
                    name: item.topCity.city,
                    value: item.topCity.signupCount,
                    label: item.topCity.city,
                  }))
            }
            layout="vertical"
            barCategoryGap="17%"
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis type="number" display={"none"} />
            <YAxis dataKey="name" type="category" display={"none"} />

            <Bar dataKey="value" fill="#fff5c2" radius={6} label="hehe">
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
          See all countries
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
              <th className="px-4 py-2 text-center">Country</th>
              <th className="px-4 py-2 text-center">Country Signup Count</th>
              <th className="px-4 py-2 text-center">City</th>
              <th className="px-4 py-2 text-center">City Signup Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-center">{item.country}</td>
                <td className="px-4 py-2 text-center">{item.signupCount}</td>
                <td className="px-4 py-2 text-center">{item.topCity.city}</td>
                <td className="px-4 py-2 text-center">{item.topCity.signupCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default SignupLocation;
