export function convertResult(parameter: number): string {
  if (parameter == 130) {
    return "100K-130K";
  } else if (parameter == 85) {
    return "85K-100K";
  } else {
    return "30K-85K";
  }
}
