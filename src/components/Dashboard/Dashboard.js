import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import LineChartWidget from './LineChartWidget';
import PieChartWidget from './PieChartWidget';
import BarChartWidget from './BarChartWidget';
import TableWidget from './TableWidget';
import TaskListWidget from './TaskListWidget';

const Dashboard = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Main Dashboard</Text>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={[12, 6, 4]}>
          <LineChartWidget />
        </GridItem>
        <GridItem colSpan={[12, 6, 4]}>
          <PieChartWidget />
        </GridItem>
        <GridItem colSpan={[12, 6, 4]}>
          <BarChartWidget />
        </GridItem>
        <GridItem colSpan={[12, 12, 6]}>
          <TableWidget />
        </GridItem>
        <GridItem colSpan={[12, 12, 6]}>
          <TaskListWidget />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
