import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from "@mantine/core";

const UserLeaderboard: React.FC = () => {
  const [userLeaderboardData, setUserLeaderboardData] = useState<UserData[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/userleaderboard");
        const data = await response.json();
        setUserLeaderboardData(data);
      } catch (error) {
        console.error("Error fetching user leaderboard data:", error);
      }
    };

    fetchData();
  }, []);

  const first4Data = userLeaderboardData.slice(0, 4);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setSelectedUserData(userLeaderboardData);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUserData([]);
  };

  return (
    <div
      style={{ width: "32rem", height: "350px" }}
      className="bg-white shadow-[rgba(0,_0,_0,_0.1)_4px_4px_5px] rounded-md m-4 p-6 relative"
    >
      <h2 className="text-2xl font-semibold mb-4">User leaderboard</h2>
      <div className="max-w-full overflow-y-auto">
        <Table
          style={{ border: "none", borderCollapse: "collapse" }}
          className="max-w-full"
        >
          <thead>
            <tr>
              <th style={{ border: "none" }}>Email</th>
              <th style={{ border: "none" }}>Friends Invited</th>
              <th style={{ border: "none" }}>Country</th>
            </tr>
          </thead>
          <tbody>
            {first4Data.map((row, index) => (
              <tr key={index} className="py-2">
                <td
                  style={{ border: 0 }}
                  className="max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap text-lg"
                >
                  {row.email}
                </td>
                <td style={{ border: 0 }} className="text-lg">
                  {row.friendInvited}
                </td>
                <td style={{ border: 0 }} className="text-lg">
                  {row.country.name}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <div className="absolute bottom-4 left-4">
          <Button
            onClick={handleModalOpen}
            radius="md"
            size="md"
            compact
            style={{ backgroundColor: "#f2f2f2", color: "black" }}
          >
            See leaderboard
          </Button>
        </div>
      </div>
      <Modal
        title="User Leadership"
        size="md"
        opened={isModalOpen}
        onClose={handleModalClose}
      >
        <Table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Friends Invited</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {selectedUserData.map((user, index) => (
              <tr key={index}>
                <td style={{ border: 0 }}>{user.email}</td>
                <td style={{ border: 0 }}>{user.friendInvited}</td>
                <td style={{ border: 0 }}>{user.country.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal>
    </div>
  );
};

export default UserLeaderboard;
