export function calculateHexagramNumber(lines: number[]): number {
  // Convert to binary (0 for broken, 1 for solid)
  const binary = lines.map(line => line === 7 || line === 9 ? 1 : 0);
  
  // Convert binary array to decimal number (1-64)
  const decimal = parseInt(binary.join(''), 2);
  
  // Return a number between 1 and 64
  return (decimal % 64) + 1;
}