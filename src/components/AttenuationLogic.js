// // -----------------This is the result of converting the python code to javascript-----------------

// // const Mol = 0.0289644; // Molar mass of dry air (kg/mol)
// // const R = 8.31432; // Universal gas constant (J/(mol K))

// // // Replace with actual values:
// // const Temp = 273.15; // Temperature in Kelvin
// // const RH = 0.5; // Relative humidity
// // const elev = 0; // Elevation (meters)
// // const h = 0; // Height (meters)
// // const P_e = 0; // Cloud data or precipitation data (provide actual values)

// // // Calculate saturation vapor pressure (P_V)
// // const P_V = e / (1 + 0.622 * (rho / 1000));

// // // Calculate saturation vapor density (SVD)
// // const SVD = (P_V * Mol) / (R * Temp);

// // // Calculate water vapor density (rho)
// // const rho = SVD * RH * 1000;

// // // Gaseous attenuation calculation (ITU-R P.676)
// // function gaseous_attenuation(freq, elev, rho, Press, Temp, h) {
// //   // Replace with actual values or calculations
// //   const p = Press / 1013.25;
// //   const T = Temp - 273.15;
// //   const e = rho * (T + 273.15) / 216.7;

// //   // Rest of the gaseous attenuation calculation
// //   // Make sure to provide actual values for freq, Temp, Press, and other variables.
// // }

// // // Cloud attenuation calculation (ITU-R P.840)
// // function cloud_attenuation(lati, long, elev, freq, P_e) {
// //   // Implement the cloud attenuation calculation here
// //   // Replace with actual calculations using P_e and other data
// // }

// // // Rain attenuation calculation (ITU-R P.618)
// // function rain_attenuation(lati, long, freq, elev, P_e) {
// //   // Implement the rain attenuation calculation here
// //   // Replace with actual calculations using P_e and other data
// // }

// // // Scintillation attenuation calculation (ITU-R P.618)
// // function scintillation_attenuation(lati, long, freq, elev, P_e, dia, eta) {
// //   // Implement the scintillation attenuation calculation here
// //   // Replace with actual calculations using P_e, dia, eta, and other data
// // }

// // // Total atmospheric attenuation calculation (ITU-R P.618)
// // function atmospheric_attenuation(lati, long, freq, elev, P_e, dia, h) {
// //   const gass_loss = gaseous_attenuation(freq, elev, rho, Press, Temp, h);
// //   const cloud_loss = cloud_attenuation(lati, long, elev, freq, P_e);
// //   const rain_loss = rain_attenuation(lati, long, freq, elev, P_e);
// //   const scin_loss = scintillation_attenuation(lati, long, freq, elev, P_e, dia, 0.5);

// //   const total_loss = gass_loss + cloud_loss + rain_loss + scin_loss;
// //   return total_loss;
// // }

// // // Example values, replace with actual values:
// // const lati = 0;
// // const long = 0;
// // const dia = 0;

// // // Calculate attenuations and print the results
// // const gass_loss = gaseous_attenuation(freq, elev, rho, Press, Temp, h);
// // const cloud_loss = cloud_attenuation(lati, long, elev, freq, P_e);
// // const rain_loss = rain_attenuation(lati, long, freq, elev, P_e);
// // const scin_loss = scintillation_attenuation(lati, long, freq, elev, P_e, dia, 0.5);
// // const tot_atm_loss = atmospheric_attenuation(lati, long, freq, elev, P_e, dia, h);

// // console.log("Gaseous Attenuation: ", gass_loss);
// // console.log("Cloud Attenuation: ", cloud_loss);
// // console.log("Rain Attenuation: ", rain_loss);
// // console.log("Scintillation Attenuation: ", scin_loss);
// // console.log("Total Atmospheric Attenuation: ", tot_atm_loss);

// // --------------Gaseous attenuation equation from an open source-------------

// 'use strict';
// /*
//     Attenuation by atmospheric gases
//     Reference: Rec. ITU-R P.676-9
//     URL: https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.676-9-201202-S!!PDF-E.pdf
//     License: MIT
// */

// const phi = (rp, rt, a, b, c, d) => {
//     return Math.pow(rp, a) * Math.pow(rt, b) * Math.exp(c * (1 - rp) + d * (1 - rt));
// }

// const airAttenuationLessThan54Ghz = (t, f, p) => {
//     const rp = p / 1013;
//     const rt = 288 / (273 + t);
//     const x1 = phi(rp, rt, 0.0717, -1.8132, 0.0156, -1.6515);
//     const x2 = phi(rp, rt, 0.5146, -4.6368, -0.1921, -5.7416);
//     const x3 = phi(rp, rt, 0.3414, -6.5851, 0.2130, -8.5854);
//     return (7.2 * Math.pow(rt, 2.8) / (f * f + 0.34 * rp * rp * Math.pow(rt, 1.6)) + (0.62 * x3) / (Math.pow(54 - f, 1.16 * x1) + 0.83 * x2)) * Math.pow(f, 2) * Math.pow(rp, 2) * 0.001;
// }

// const airAttenuationLessThan60Ghz = (t, f, p) => {
//     const rp = p / 1013;
//     const rt = 288 / (273 + t);
//     const r54 = 2.192 * phi(rp, rt, 1.8286, 1.9487, 0.4051, 2.8509);
//     const r58 = 12.59 * phi(rp, rt, 1.0045, 3.5610, 0.1588, 1.2834);
//     const r60 = 15.0  * phi(rp, rt, 0.9003, 4.1335, 0.0427, 1.6088);
//     return Math.exp(Math.log(r54) / 24 * (f - 58) * (f - 60) - Math.log(r58) / 8 * (f - 54) * (f - 60) + Math.log(r60) / 12 * (f -54) * (f - 58));
// }

// const airAttenuationLessThan62Ghz = (t, f, p) => {
//     const rp = p / 1013;
//     const rt = 288 / (273 + t);
//     const r60 = 15.0  * phi(rp, rt, 0.9003, 4.1335, 0.0427, 1.6088);
//     const r62 = 14.28  * phi(rp, rt, 0.9886, 3.4176, 0.1827, 1.3429);
//     return r60 + (r62 - r60) * (f - 60) * 0.5;
// }

// const airAttenuationLessThan66Ghz = (t, f, p) => {
//     const rp = p / 1013;
//     const rt = 288 / (273 + t);
//     const r62 = 14.28  * phi(rp, rt, 0.9886, 3.4176, 0.1827, 1.3429);
//     const r64 = 6.819  * phi(rp, rt, 1.4320, 0.6258, 0.3177, 0.5914);
//     const r66 = 1.908  * phi(rp, rt, 2.0717, 4.1404, 0.4910, 4.8718);
//     return Math.exp(Math.log(r62) / 8 * (f - 64) * (f - 66) - Math.log(r64) / 4 * (f - 62) * (f - 66) + Math.log(r66) / 8 * (f - 62) * (f - 64));
// }

// const airAttenuationLessThan120Ghz = (t, f, p) => {
//     const rp = p / 1013;
//     const rt = 288 / (273 + t);
//     const xi4 = phi(rp, rt, -0.0112, 0.0092, -0.1033, -0.0009);
//     const xi5 = phi(rp, rt, 0.2705, -2.7192, -0.3016, -4.1033);
//     const xi6 = phi(rp, rt, 0.2445, -5.9191, 0.0422, -8.0719);
//     const xi7 = phi(rp, rt, -0.1833, 6.5589, -0.2402, 6.131);
//     return (3.02 * 1e-4 * Math.pow(rt, 3.5) +
//             0.283 * Math.pow(rt, 3.8) / (Math.pow(f - 118.75, 2) + 2.91 * Math.pow(rp, 2) * Math.pow(rt, 1.6)) +
//             0.502 * xi6 * (1 - 0.016 * xi7 * (f - 66)) / (Math.pow(f - 66, 1.4346 * xi4) + 1.15 * xi5)) * f * f * rp * rp * 1e-3;
// }

// const airAttenuationLessThan350Ghz = (t, f, p) => {
//     const rp = p / 1013;
//     const rt = 288 / (273 + t);
//     const xi = -0.00306 * phi(rp, rt, 3.211, -14.94, 1.583, -16.37);
//     return (3.02 * 1e-4 / (1 + 1.9 * 1e-5 * Math.pow(f, 1.5)) +
//             0.283 * Math.pow(rt, 0.3) / (Math.pow(f - 118.75, 2) + 2.91 * rp * rp * Math.pow(rt, 1.6)))
//             * f * f * rp * rp * Math.pow(rt, 3.5) * 1e-3 + xi;
// }

// const GetAirAttenuation = (frequency, temperature, pressure) => {
//     if ((frequency <= 0) || (frequency > 350)) {
//         throw "Frequency Not Supported";
//     }
//     if (frequency <= 54) {
//         return airAttenuationLessThan54Ghz(temperature, frequency, pressure);
//     }
//     if (frequency <= 60) {
//         return airAttenuationLessThan60Ghz(temperature, frequency, pressure);
//     }
//     if (frequency <= 62) {
//         return airAttenuationLessThan62Ghz(temperature, frequency, pressure);
//     }
//     if (frequency <= 66) {
//         return airAttenuationLessThan66Ghz(temperature, frequency, pressure);
//     }
//     if (frequency <= 120) {
//         return airAttenuationLessThan120Ghz(temperature, frequency, pressure);
//     }
//     return airAttenuationLessThan350Ghz(temperature, frequency, pressure);
// }

// const GetWaterAttenuation = (frequency, temperature, pressure, density) => {
//     const f = frequency;
//     const rp = pressure / 1013;
//     const rt = 288 / (273 + temperature);
//     const eta1 = 0.955 * rp * Math.pow(rt, 0.68) + 0.006 * density;
//     const eta2 = 0.735 * rp * Math.pow(rt, 0.5) + 0.0353 * Math.pow(rt, 4) * density;
//     let g = (f, fi) => {
//         return 1 + Math.pow((f - fi) / (f + fi), 2);
//     }
//     return (
//         3.98 * eta1 * Math.exp(2.23 * (1 - rt)) / (Math.pow(f - 22.235, 2) + 9.42 * Math.pow(eta1, 2)) * g(f, 22) +
//         11.96 * eta1 * Math.exp(0.7 * (1 - rt)) / (Math.pow(f - 183.32, 2) + 11.14 * Math.pow(eta1, 2)) +
//         0.081 * eta1 * Math.exp(6.44 * (1 - rt)) / (Math.pow(f - 321.226, 2) + 6.29 * Math.pow(eta1, 2)) +
//         3.66 * eta1 * Math.exp(1.6 * (1 - rt) / (Math.pow(f - 325.153, 2) + 9.22 * Math.pow(eta1, 2))) +
//         25.37 * eta1 * Math.exp(1.09 * (1 - rt)) / (Math.pow(f - 380, 2)) +
//         17.4 * eta1 * Math.exp(1.46 * (1 - rt)) / Math.pow(f - 448, 2) +
//         844.6 * eta1 * Math.exp(0.17 * (1 - rt)) / Math.pow(f - 557, 2) * g(f, 557) +
//         290 * eta1 * Math.exp(0.41 * (1 - rt)) / Math.pow(f - 752, 2) * g(f, 752) +
//         8.3328 * 1e4 * eta2 * Math.exp(0.99 * (1 - rt)) / Math.pow(f - 1780, 2) * g(f, 1780)
//     ) * Math.pow(f, 2) * Math.pow(rt, 2.5) * density * 1e-4;
// }

// module.exports = {
//     GetAirAttenuation,
//     GetWaterAttenuation
// }
