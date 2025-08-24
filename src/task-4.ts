// Task 4: Tuple type

const dimensions: [number, number] = [1920, 1080];

console.log(`Screen resolution: ${dimensions[0]}x${dimensions[1]}`);

dimensions[0] = 2560;
dimensions[1] = 1440;

console.log(`Updated resolution: ${dimensions[0]}x${dimensions[1]}`);

export { dimensions };