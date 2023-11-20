export function convertResult(parameter: number): string {
  if (parameter == 2) {
    return "100K-130K";
  } else if (parameter == 1) {
    return "85K-100K";
  } else {
    return "30K-85K";
  }
}
