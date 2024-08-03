import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Text } from '@chakra-ui/react';

const LineChartWidget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    setData([
      { name: 'Jan', uv: 4000, pv: 2400 },
      { name: 'Feb', uv: 3000, pv: 1398 },
      { name: 'Mar', uv: 2000, pv: 9800 },
      { name: 'Apr', uv: 2780, pv: 3908 },
      { name: 'May', uv: 1890, pv: 4800 },
      { name: 'Jun', uv: 2390, pv: 3800 },
      { name: 'Jul', uv: 3490, pv: 4300 },
    ]);
  }, []);

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg="white">
      <Text mb={4}>Line Chart</Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LineChartWidget;
