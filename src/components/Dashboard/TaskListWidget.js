import React, { useState, useEffect } from 'react';
import { Box, Text, Checkbox, Stack, useColorModeValue } from '@chakra-ui/react';

const TaskListWidget = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Mock data for tasks
    setTasks([
      { id: 1, title: 'Landing Page Design', completed: true },
      { id: 2, title: 'Dashboard Builder', completed: false },
      { id: 3, title: 'Multiple App Design', completed: false },
      { id: 4, title: 'Illustrations', completed: true },
      { id: 5, title: 'Promotional LP', completed: false }
    ]);
  }, []);

  // Handle color modes
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg={bgColor}>
      <Text mb={4} color={textColor}>Tasks</Text>
      <Stack spacing={3}>
        {tasks.map((task) => (
          <Checkbox key={task.id} isChecked={task.completed} colorScheme="teal">
            {task.title}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};

export default TaskListWidget;
