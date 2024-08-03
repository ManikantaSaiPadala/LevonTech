import axios from 'axios';

const lineChartData = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    
];

const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    
];

const tableData = [
    { name: 'Item 1', progress: '50%', quantity: 200, date: '2024-01-01' },
    { name: 'Item 2', progress: '75%', quantity: 150, date: '2024-02-01' },
    
];

const taskList = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: true },
    
];

// Mock API responses
axios.get = jest.fn((url) => {
    switch (url) {
        case '/api/lineChartData':
            return Promise.resolve({ data: lineChartData });
        case '/api/pieChartData':
            return Promise.resolve({ data: pieChartData });
        case '/api/tableData':
            return Promise.resolve({ data: tableData });
        case '/api/taskList':
            return Promise.resolve({ data: taskList });
        default:
            return Promise.reject(new Error('Not found'));
    }
});
