export default function testResult(counts: number): string {
  if (10 <= counts && counts <= 25) {
    return "정상법위예요 ☺️";
  } else {
    return "지속적인 관찰이 필요해요 😵‍💫";
  }
}
