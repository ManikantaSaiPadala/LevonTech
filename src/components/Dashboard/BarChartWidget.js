import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Text } from '@chakra-ui/react';

const BarChartWidget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock data for bar chart
    setData([
      { name: 'Page A', pv: 2400, uv: 2400 },
      { name: 'Page B', pv: 1398, uv: 2210 },
      { name: 'Page C', pv: 9800, uv: 2290 },
      { name: 'Page D', pv: 3908, uv: 2000 },
      { name: 'Page E', pv: 4800, uv: 2181 },
      { name: 'Page F', pv: 3800, uv: 2500 },
      { name: 'Page G', pv: 4300, uv: 2100 }
    ]);
  }, []);

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg="white">
      <Text mb={4}>Bar Chart</Text>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BarChartWidget;
