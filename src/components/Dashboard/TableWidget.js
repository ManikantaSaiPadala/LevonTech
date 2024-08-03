import React, { useState, useEffect } from 'react';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, useColorModeValue } from '@chakra-ui/react';

const TableWidget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock data for table
    setData([
      { name: 'Horizon UI PRO', status: 'Approved', quantity: 2400, date: '24 Jan 2021' },
      { name: 'Horizon UI Free', status: 'Pending', quantity: 1398, date: '15 Feb 2021' },
      { name: 'Weekly Update', status: 'Error', quantity: 9800, date: '28 Mar 2021' }
    ]);
  }, []);

  // Handle color modes
  const bgColor = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg={bgColor}>
      <Text mb={4} color={color}>Check Table</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color={color}>Name</Th>
            <Th color={color}>Status</Th>
            <Th color={color}>Quantity</Th>
            <Th color={color}>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td color={color}>{row.name}</Td>
              <Td color={color}>{row.status}</Td>
              <Td color={color}>{row.quantity}</Td>
              <Td color={color}>{row.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableWidget;
