export default function testResult(counts: number): string {
  if (counts < 15) {
    return "저호흡이에요 😢";
  } else if (15 <= counts && counts <= 20) {
    return "정상이에요 ☺️";
  } else {
    return "과호흡이에요 😵‍💫";
  }
}
