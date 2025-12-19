function revealSantaRoute(routes: string[][]): string[] {
  const validRoutes = [...routes[0]];
  let pendingRoutes = routes.slice(1);
  let finished = false;
  while (!finished) {
    const nextRouteIndex = pendingRoutes.findIndex(
      (route) => route[0] === validRoutes.at(-1)
    );
    if (nextRouteIndex > -1) {
      validRoutes.push(pendingRoutes[nextRouteIndex][1]);
      pendingRoutes.splice(nextRouteIndex, 1);
    } else {
      finished = true;
    }
  }
  return validRoutes;
}

const reveal1 = revealSantaRoute([
  ["MEX", "CAN"],
  ["UK", "GER"],
  ["CAN", "UK"],
]);
// → ['MEX', 'CAN', 'UK', 'GER']
console.log(reveal1);

const reveal2 = revealSantaRoute([
  ["USA", "BRA"],
  ["JPN", "PHL"],
  ["BRA", "UAE"],
  ["UAE", "JPN"],
  ["CMX", "HKN"],
]);
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']
console.log(reveal2);

const reveal3 = revealSantaRoute([
  ["STA", "HYD"],
  ["ESP", "CHN"],
]);
// → ['STA', 'HYD']
console.log(reveal3);

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 340
  ops: 3887
*/
