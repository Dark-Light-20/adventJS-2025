/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const toTimestamp = (value) =>
    new Date(
      value
        .replaceAll("*", "-")
        .replace("@", "T")
        .replaceAll("|", ":")
        .replace("NP", "")
        .trim()
    );
  const fromTimestamp = toTimestamp(fromTime);
  const takeOffTimestamp = toTimestamp(takeOffTime);

  return Math.floor((takeOffTimestamp - fromTimestamp) / 1000);
}

const takeoff = "2025*12*25@00|00|00 NP";

// from December 24, 2025, 23:59:30, 30 seconds before takeoff
const time1 = timeUntilTakeOff("2025*12*24@23|59|30 NP", takeoff);
console.log(time1);
// 30

// exactly at takeoff time
const time2 = timeUntilTakeOff("2025*12*25@00|00|00 NP", takeoff);
console.log(time2);
// 0

// 12 seconds after takeoff
const time3 = timeUntilTakeOff("2025*12*25@00|00|12 NP", takeoff);
console.log(time3);
// -12

/* 
  Score: ★★★★★★★★ (3 bonus stars for solving it today!)
  Points: 240
  ops: 3195
*/
