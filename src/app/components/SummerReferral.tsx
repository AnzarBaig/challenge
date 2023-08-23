import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { SegmentedControl, Loader } from '@mantine/core'; // Import Loader from Mantine
import { BiGroup } from 'react-icons/bi';

type SignupData = {
  datetime: string;
  totalSignups: number;
};

const CustomTooltip = ({ active, payload, label, position }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const date = new Date(label);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();

    return (
      <div className="custom-tooltip" style={{ left: position.x, top: position.y }}>
        <div className="tooltip-content">
          <div className="tooltip-value">
            <div className='tooltip-date'>{data.totalSignups}</div> signups
          </div>
          <div className="tooltip-label">{`${month} ${day}`}</div>
        </div>
        <div className="tooltip-arrow" />
      </div>
    );
  }

  return null;
};


const SummerReferral: React.FC = () => {
  const [data, setData] = useState<SignupData[]>([]);
  const [timeInterval, setTimeInterval] = useState<string>('30d');
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/signups/${timeInterval}`);
        setData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [timeInterval]);

  const chartData = data.map((entry) => ({
    name: new Date(entry.datetime).toLocaleDateString(),
    totalSignups: entry.totalSignups,
  }));

  const timeIntervalOptions = [
    { label: '1h', value: '1h' },
    { label: '24h', value: '24h' },
    { label: '30d', value: '30d' },
    { label: '60d', value: '60d' },
  ];

  // Define custom styles for the SegmentedControl
  const segmentedControlStyles = {
    root: {
      backgroundColor: 'white', // Set the background color of the SegmentedControl
    },
    control: {
      margin: '5px', // Add margin to each button
      backgroundColor: '#f8f9fa', // Set the background color for unselected buttons
      border: 'none',
      borderRadius: '0.75rem',
      outline: 'none', // Remove the blue outline on focus
    },
    controlActive: {
      backgroundColor: '#e2e3e8', // Set the background color for the selected button
    },
  };
  let [posData, setposData] = useState<any>({});
  return (
    <div className="mx-10 p-4">
      <div className="flex justify-between items-center m-10 mb-4">
        {loading ? null : (
          <div className="font-bold text-2xl">Summer referral competition</div>
        )}
        {loading ? null : (
          <SegmentedControl
            fullWidth
            radius={12}
            size="sm"
            value={timeInterval}
            onChange={setTimeInterval}
            data={timeIntervalOptions}
            color=""
            transitionDuration={0}
            styles={segmentedControlStyles}
            className="shadow-[rgba(0,_0,_0,_0.3)_0px_3px_5px]"
          />
        )}
      </div>
      <div className="bg-white shadow-[rgba(0,_0,_0,_0.1)_4px_4px_5px] rounded-md m-10 p-4 relative">
        {loading ? null : (
          <div className="absolute top-7 left-7 text-xl font-bold z-10">
            <div className="font-bold text-4xl flex items-center">
              100,000 <BiGroup className="ml-2" />
            </div>
            <div className=" font-normal text-2xl">Participants</div>
          </div>
        )}
        <div className="w-full">
          {loading ? (
            <div className="w-full flex justify-center items-center">
              <Loader color="yellow" size="lg" variant="bars" />
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={chartData} barCategoryGap="27%">
                <rect x={0} y={0} width="100%" height="100%" fill="#ffffff" />
                <CartesianGrid vertical={false} strokeOpacity={0.5} strokeWidth={0.4} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  content={<CustomTooltip />}
                  isAnimationActive={false}
                  position={{ x: posData.x - 50, y: posData.y - 85 }}
                />
                <Bar
                  dataKey="totalSignups"
                  fill="#fed500"
                  radius={20}
                  onMouseOver={(data) => {
                    setposData(data);
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummerReferral;
