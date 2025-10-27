export default function QueryProcessor(query: string): string {


  const q = query.toLowerCase().trim();


  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("What is your AndrewID")) {
    return "lalmulai";
  }

  if (query.toLowerCase().includes("name")) {
    return "lujain";
  }

  if (query.toLowerCase().includes("name")) {
    return "Lujain";
  }

  const plusMatch = q.match(/what is (\d+)\s+plus\s+(\d+)\??/);
  if (plusMatch) {
    const a = parseInt(plusMatch[1]);
    const b = parseInt(plusMatch[2]);
    return String(a + b);
  }

  const minusMatch = q.match(/what is (\d+)\s+minus\s+(\d+)\??/);
  if (minusMatch) {
    const a = parseInt(minusMatch[1]);
    const b = parseInt(minusMatch[2]);
    return String(a - b);
  }

  const multiplyMatch = q.match(/what is (\d+)\s+(?:multiplied by|times)\s+(\d+)\??/);
  if (multiplyMatch) {
    const a = parseInt(multiplyMatch[1]);
    const b = parseInt(multiplyMatch[2]);
    return String(a * b);
  }

  const largestMatch = q.match(/largest.*?(\d+)[^\d]+(\d+)[^\d]+(\d+)/);
  if (largestMatch) {
    const nums = largestMatch.slice(1, 4).map(Number);
    return String(Math.max(...nums));
  }

  const squareCubeMatch = q.match(/both a square and a cube.*?([\d,\s]+)/);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(",").map(n => parseInt(n.trim()));
    const result = numbers.filter(n => {
      const root = Math.round(Math.pow(n, 1/6));
      return root ** 6 === n;
    });
    return result.join(", ");
  }


  const primesMatch = q.match(/which of the following numbers are primes.*?([\d,\s]+)/);
  if (primesMatch) {
    const numbers = primesMatch[1].split(",").map(n => parseInt(n.trim()));
    const result = numbers.filter(n => {
      if (n < 2) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    });
    return result.join(", ");
  }


  return "";
}
