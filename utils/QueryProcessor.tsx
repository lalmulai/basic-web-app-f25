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

  const largestMatch = q.match(/largest.*?(\d+)[^\d]+(\d+)[^\d]+(\d+)/);
  if (largestMatch) {
    const nums = largestMatch.slice(1, 4).map(Number);
    return String(Math.max(...nums));
  }

  return "";
}
