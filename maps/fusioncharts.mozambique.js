(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=10)})({10:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(11);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},11:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Mozambique.20.10-30-2012 06:49:17
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Mozambique",revision:20,standaloneInit:true,baseWidth:300,baseHeight:500,baseScaleFactor:10,entities:{10:{outlines:[[M,844,2219,Q,833,2213,817,2214,815,2207,814,2196,810,2191,812,2185,814,2178,810,2178,783,2177,755,2178,755,2207,755,2235,755,2238,756,2242,757,2250,764,2254,767,2275,758,2285,749,2296,745,2305,732,2317,734,2337,735,2343,736,2350,737,2353,740,2358,745,2367,754,2373,753,2395,754,2419,755,2422,759,2429,760,2432,765,2440,766,2445,774,2451,775,2454,779,2459,780,2461,784,2467,785,2480,784,2495,784,2505,779,2515,776,2526,765,2531,749,2532,733,2532,733,2566,733,2600,737,2614,731,2621,715,2622,705,2629,699,2633,693,2635,690,2662,690,2687,690,2699,691,2710,693,2721,695,2726,706,2725,706,2732,705,2740,703,2747,700,2752,700,2755,689,2760,686,2768,686,2788,689,2800,690,2804,690,2807,689,2818,693,2827,697,2835,705,2840,711,2844,717,2850,720,2853,725,2853,736,2857,743,2856,748,2856,750,2860,757,2862,757,2867,758,2876,759,2882,761,2894,765,2900,771,2913,767,2919,761,2927,752,2937,745,2940,746,2952,748,2965,737,2969,735,2970,727,2973,724,2977,718,2980,710,2983,700,2992,701,3008,696,3018,694,3025,694,3027,693,3034,691,3038,692,3058,687,3072,684,3080,682,3084,668,3087,655,3088,645,3089,639,3096,627,3102,620,3109,615,3115,615,3117,615,3138,616,3160,617,3171,617,3182,617,3185,618,3189,618,3201,618,3212,610,3216,607,3231,600,3239,595,3245,594,3246,592,3251,588,3255,588,3260,588,3272,589,3285,590,3293,587,3299,604,3297,616,3308,629,3311,634,3316,639,3321,647,3321,655,3337,664,3346,672,3355,680,3356,688,3361,700,3361,718,3360,737,3359,750,3352,746,3348,759,3347,766,3338,797,3337,825,3338,829,3330,830,3328,836,3322,838,3321,845,3315,847,3315,879,3315,910,3314,926,3312,940,3311,956,3310,970,3310,976,3310,978,3306,979,3303,979,3300,980,3291,980,3285,980,3278,982,3274,985,3261,998,3262,1008,3263,1011,3255,1013,3246,1011,3240,1008,3235,1007,3233,995,3217,989,3204,987,3200,984,3198,980,3194,979,3191,977,3186,975,3185,966,3176,964,3168,964,3158,957,3153,954,3150,953,3146,950,3141,951,3135,953,3123,943,3121,934,3121,923,3116,914,3116,914,3110,913,3093,912,3074,905,3071,903,3062,903,3059,902,3052,895,3050,885,3048,878,3047,866,3046,854,3041,855,3030,855,3024,856,3018,858,3010,867,3006,878,3002,877,2983,874,2976,866,2971,855,2965,858,2952,872,2952,881,2948,892,2946,898,2944,910,2943,913,2941,922,2939,926,2936,940,2929,948,2923,958,2917,962,2909,964,2904,964,2902,965,2889,966,2875,967,2860,958,2852,954,2848,952,2842,946,2834,948,2822,949,2815,954,2811,960,2805,970,2799,976,2795,980,2792,987,2784,995,2779,998,2777,999,2770,1005,2759,1004,2747,1003,2736,1003,2725,1003,2690,1002,2655,1e3,2639,990,2634,981,2624,975,2618,964,2607,956,2599,951,2595,940,2587,943,2584,946,2582,948,2580,951,2578,960,2571,965,2562,970,2557,972,2556,980,2550,983,2545,986,2540,987,2535,989,2525,990,2510,991,2504,986,2503,966,2485,971,2457,983,2455,993,2454,1002,2449,1010,2444,1016,2441,1028,2442,1035,2442,1043,2447,1062,2446,1080,2445,1080,2437,1080,2430,1079,2425,1078,2420,1079,2412,1079,2403,1085,2389,1095,2382,1105,2375,1096,2357,1094,2338,1073,2327,1070,2310,1071,2292,1072,2270,1068,2250,1066,2241,1065,2232,1065,2230,1061,2222,1059,2216,1048,2213,1038,2212,1028,2211,1015,2210,1003,2203,998,2200,993,2198,987,2196,981,2194,975,2192,965,2197,963,2205,958,2208,952,2211,943,2213,933,2216,923,2222,917,2234,898,2240,893,2241,888,2243,882,2246,870,2245,862,2244,852,2241,850,2240,848,2235,Q,847,2228,844,2219,Z]],label:"Manica",shortLabel:"MN",labelPosition:[82.9,274.9],labelAlignment:[CEN,MID]},11:{outlines:[[M,534,4563,Q,526,4582,550,4589,567,4590,591,4592,592,4585,591,4578,590,4556,590,4535,589,4535,580,4536,573,4537,565,4541,559,4544,553,4546,Q,540,4550,534,4563,Z]],label:"Maputo (City)",shortLabel:"MT",labelPosition:[68.6,456.4],labelAlignment:[LFT,MID],labelConnectors:[[M,686,4564,L,562,4564]]},"01":{outlines:[[M,2793,371,Q,2783,376,2780,379,2778,382,2771,384,2761,404,2744,407,2734,415,2728,417,2718,421,2708,421,2693,420,2681,423,2674,425,2671,431,2670,436,2666,440,2659,448,2652,453,2632,453,2618,456,2613,457,2608,458,2589,471,2576,487,2570,496,2561,497,2554,497,2547,503,2541,507,2538,509,2532,514,2521,516,2513,517,2506,519,2489,515,2478,519,2458,526,2436,523,2418,521,2410,531,2406,537,2396,541,2385,543,2379,547,2375,550,2363,551,2357,553,2351,554,2345,554,2338,555,2325,557,2309,563,2301,566,2291,571,2287,573,2284,575,2283,588,2281,604,2277,607,2275,609,2270,618,2263,624,2259,628,2259,634,2258,653,2266,664,2269,670,2272,673,2275,681,2277,687,2278,709,2277,724,2272,733,2269,737,2261,749,2260,764,2257,772,2253,774,2250,775,2246,777,2237,779,2231,785,2228,787,2225,791,2212,798,2207,803,2184,812,2166,817,2158,819,2152,819,2149,820,2146,820,2142,839,2143,854,2143,862,2144,869,2146,884,2131,881,2120,879,2120,887,2121,911,2123,939,2123,943,2124,947,2124,950,2124,952,2124,957,2123,960,2122,961,2121,962,2117,959,2113,966,2095,972,2083,991,2076,998,2073,1012,2078,1043,2069,1065,2067,1074,2067,1079,2066,1089,2068,1099,2086,1102,2089,1087,2100,1072,2113,1068,2122,1056,2135,1049,2140,1046,2143,1045,2156,1044,2168,1044,2177,1044,2186,1045,2199,1054,2207,1061,2208,1072,2207,1079,2205,1088,2201,1092,2195,1098,2188,1109,2182,1117,2179,1122,2173,1131,2166,1133,2153,1133,2148,1136,2117,1133,2113,1154,2125,1151,2125,1162,2134,1176,2156,1177,2161,1177,2165,1180,2174,1189,2173,1199,2172,1204,2175,1208,2174,1233,2179,1247,2178,1269,2190,1278,2194,1280,2196,1286,2198,1290,2201,1293,2208,1299,2206,1312,2205,1322,2213,1325,2224,1331,2225,1337,2226,1345,2228,1352,2267,1352,2306,1352,2313,1352,2316,1350,2323,1348,2326,1348,2333,1347,2335,1343,2348,1338,2355,1336,2363,1334,2371,1333,2373,1333,2376,1333,2381,1332,2386,1332,2389,1332,2393,1332,2403,1331,2413,1329,2413,1325,2412,1321,2415,1311,2417,1308,2421,1304,2423,1303,2427,1301,2432,1298,2437,1296,2443,1294,2456,1290,2471,1287,2485,1283,2494,1272,2508,1262,2518,1256,2527,1248,2541,1246,2550,1244,2553,1243,2557,1243,2562,1238,2566,1235,2568,1232,2571,1227,2581,1227,2602,1227,2623,1226,2638,1224,2651,1223,2655,1223,2658,1221,2665,1214,2668,1212,2679,1206,2685,1198,2690,1191,2691,1190,2696,1186,2701,1179,2706,1174,2708,1173,2714,1171,2717,1168,2729,1161,2743,1162,2759,1163,2769,1174,2776,1181,2782,1185,2785,1200,2798,1198,2803,1197,2808,1197,2832,1197,2851,1197,2851,1179,2851,1162,2851,1151,2851,1140,2851,1133,2855,1121,2857,1110,2857,1107,2858,1093,2859,1079,2860,1064,2849,1054,2840,1042,2841,1029,2841,1023,2843,1017,2851,1008,2860,1004,2868,999,2869,992,2871,985,2878,983,2885,972,2890,964,2890,957,2888,954,2882,946,2874,939,2870,934,2870,924,2871,902,2869,879,2862,866,2853,861,2847,854,2843,853,2838,851,2839,844,2840,838,2844,835,2850,832,2851,830,2859,822,2856,807,2854,801,2849,796,2840,788,2839,777,2838,768,2838,759,2838,751,2838,742,2838,709,2841,672,2841,668,2842,664,2843,641,2846,625,2848,619,2848,617,2848,568,2848,519,2848,499,2848,479,2847,470,2856,469,2867,462,2875,458,2881,453,2882,451,2885,444,2886,442,2895,436,2894,427,2893,415,2884,411,2880,409,2874,403,2875,386,2882,381,2888,377,2891,376,2899,374,2899,364,2902,350,2893,344,2884,334,2876,333,2870,332,2863,331,2858,330,2856,333,2840,334,2830,341,2825,343,2824,344,2816,356,2808,361,2802,363,2801,364,Q,2797,367,2793,371,Z]],label:"Cabo Delgado",shortLabel:"CD",labelPosition:[252.3,88.6],labelAlignment:[CEN,MID]},"07":{outlines:[[M,2156,547,Q,2152,547,2148,547,2131,549,2117,569,2115,581,2105,589,2101,592,2096,600,2094,603,2090,609,2083,618,2079,625,2074,632,2066,635,2056,639,2046,642,2042,643,2038,643,2006,644,1967,642,1966,640,1956,641,1949,636,1940,636,1930,635,1918,625,1887,624,1848,625,1843,627,1841,632,1839,639,1834,644,1835,653,1823,657,1789,659,1755,659,1748,659,1740,658,1733,657,1727,655,1723,653,1716,649,1708,634,1693,629,1688,628,1685,624,1684,623,1678,621,1671,616,1663,611,1641,600,1622,590,1614,586,1606,581,1602,578,1597,576,1587,570,1580,564,1572,557,1565,555,1560,554,1555,553,1544,552,1541,560,1539,566,1538,572,1538,577,1537,581,1535,587,1525,594,1513,598,1500,598,1474,597,1443,600,1441,602,1437,606,1434,609,1430,610,1419,612,1408,612,1360,612,1313,612,1312,607,1306,608,1302,611,1296,617,1295,623,1294,634,1293,658,1293,682,1292,695,1284,704,1281,707,1278,710,1275,713,1272,716,1265,723,1261,734,1259,739,1257,744,1257,747,1252,752,1249,764,1243,769,1242,776,1239,780,1237,799,1231,810,1230,826,1236,837,1238,841,1241,849,1252,857,1254,869,1255,874,1257,879,1258,883,1259,887,1267,904,1265,924,1264,945,1270,964,1275,975,1272,989,1268,1016,1262,1036,1260,1042,1259,1047,1258,1052,1257,1057,1255,1070,1263,1079,1269,1088,1272,1096,1279,1102,1283,1106,1287,1111,1289,1115,1292,1121,1293,1122,1304,1129,1307,1140,1308,1143,1308,1147,1308,1149,1309,1151,1312,1162,1317,1172,1320,1178,1322,1183,1333,1190,1338,1193,1345,1197,1348,1198,1362,1197,1360,1204,1363,1207,1371,1213,1386,1226,1402,1242,1412,1251,1422,1263,1425,1268,1434,1280,1437,1284,1440,1292,1442,1297,1444,1304,1445,1313,1446,1322,1447,1326,1448,1329,1451,1341,1463,1353,1469,1358,1478,1369,1485,1379,1495,1390,1498,1394,1502,1400,1514,1419,1532,1434,1538,1443,1546,1454,1549,1458,1552,1460,1556,1463,1561,1470,1568,1481,1577,1492,1581,1501,1589,1515,1590,1520,1591,1527,1592,1536,1588,1539,1587,1541,1584,1546,1582,1549,1577,1553,1570,1559,1566,1567,1562,1573,1557,1581,1554,1586,1547,1592,1541,1594,1537,1601,1534,1608,1536,1616,1539,1625,1541,1637,1542,1639,1544,1646,1547,1654,1548,1661,1548,1664,1548,1667,1548,1677,1548,1689,1565,1689,1578,1693,1595,1694,1602,1698,1609,1701,1618,1701,1632,1702,1643,1701,1648,1690,1647,1684,1646,1672,1651,1665,1658,1654,1670,1648,1683,1638,1695,1633,1707,1623,1718,1615,1726,1610,1736,1602,1754,1589,1762,1576,1765,1568,1770,1562,1773,1558,1777,1556,1791,1549,1799,1538,1806,1527,1812,1523,1816,1516,1820,1513,1825,1508,1827,1506,1830,1488,1839,1480,1852,1477,1857,1473,1861,1465,1868,1465,1888,1464,1908,1462,1917,1452,1923,1450,1926,1449,1929,1445,1935,1437,1945,1436,1965,1433,1974,1423,1984,1416,1989,1413,1994,1409,1996,1405,2009,1394,2023,1391,2031,1385,2037,1382,2049,1369,2063,1368,2083,1371,2086,1386,2127,1387,2166,1384,2184,1376,2192,1362,2198,1351,2208,1351,2218,1351,2228,1352,2226,1345,2225,1337,2224,1331,2213,1325,2205,1322,2206,1312,2208,1299,2201,1293,2198,1290,2196,1286,2194,1280,2190,1278,2178,1269,2179,1247,2174,1233,2175,1208,2172,1204,2173,1199,2174,1189,2165,1180,2161,1177,2156,1177,2134,1176,2125,1162,2125,1151,2113,1154,2117,1133,2148,1136,2153,1133,2166,1133,2173,1131,2179,1122,2182,1117,2188,1109,2195,1098,2201,1092,2205,1088,2207,1079,2208,1072,2207,1061,2199,1054,2186,1045,2177,1044,2168,1044,2156,1044,2143,1045,2140,1046,2135,1049,2122,1056,2113,1068,2100,1072,2089,1087,2086,1102,2068,1099,2066,1089,2067,1079,2067,1074,2069,1065,2078,1043,2073,1012,2076,998,2083,991,2095,972,2113,966,2117,959,2121,962,2122,961,2123,960,2124,957,2124,952,2124,950,2124,947,2123,943,2123,939,2121,911,2120,887,2120,879,2131,881,2146,884,2144,869,2143,862,2143,854,2142,839,2146,820,2149,820,2152,819,2158,819,2166,817,2184,812,2207,803,2212,798,2225,791,2228,787,2231,785,2237,779,2246,777,2250,775,2253,774,2257,772,2260,764,2261,749,2269,737,2272,733,2277,724,2278,709,2277,687,2275,681,2272,673,2269,670,2266,664,2258,653,2259,634,2259,628,2263,624,2270,618,2275,609,2277,607,2281,604,2283,588,2284,575,2275,580,2268,572,2263,565,2255,563,2247,560,2238,554,2236,553,2231,549,Q,2194,547,2156,547,Z]],label:"Niassa",shortLabel:"NI",labelPosition:[168.2,104.9],labelAlignment:[CEN,MID]},"06":{outlines:[[M,2798,1198,Q,2785,1200,2782,1185,2776,1181,2769,1174,2759,1163,2743,1162,2729,1161,2717,1168,2714,1171,2708,1173,2706,1174,2701,1179,2696,1186,2691,1190,2690,1191,2685,1198,2679,1206,2668,1212,2665,1214,2658,1221,2655,1223,2651,1223,2638,1224,2623,1226,2602,1227,2581,1227,2571,1227,2568,1232,2566,1235,2562,1238,2557,1243,2553,1243,2550,1244,2541,1246,2527,1248,2518,1256,2508,1262,2494,1272,2485,1283,2471,1287,2456,1290,2443,1294,2437,1296,2432,1298,2427,1301,2423,1303,2421,1304,2417,1308,2415,1311,2412,1321,2413,1325,2413,1329,2403,1331,2393,1332,2389,1332,2386,1332,2381,1332,2376,1333,2373,1333,2371,1333,2363,1334,2355,1336,2348,1338,2335,1343,2333,1347,2326,1348,2323,1348,2316,1350,2313,1352,2306,1352,2267,1352,2228,1352,2218,1351,2208,1351,2198,1351,2192,1362,2184,1376,2166,1384,2127,1387,2086,1386,2083,1371,2063,1368,2049,1369,2037,1382,2031,1385,2023,1391,2009,1394,1996,1405,1994,1409,1989,1413,1984,1416,1974,1423,1965,1433,1945,1436,1935,1437,1929,1445,1926,1449,1923,1450,1917,1452,1908,1462,1888,1464,1868,1465,1861,1465,1857,1473,1852,1477,1839,1480,1830,1488,1827,1506,1825,1508,1820,1513,1816,1516,1812,1523,1806,1527,1799,1538,1791,1549,1777,1556,1773,1558,1770,1562,1774,1562,1778,1563,1782,1563,1786,1564,1811,1564,1835,1565,1844,1565,1853,1568,1859,1569,1865,1569,1895,1569,1925,1570,1933,1572,1935,1579,1940,1576,1943,1584,1949,1596,1954,1603,1971,1604,1977,1613,1983,1625,1988,1630,1997,1646,2008,1645,2018,1644,2028,1644,2049,1642,2070,1644,2073,1653,2073,1657,2086,1659,2093,1658,2101,1658,2103,1664,2109,1674,2118,1675,2122,1676,2126,1679,2135,1686,2142,1691,2154,1692,2163,1693,2172,1703,2183,1714,2200,1718,2207,1723,2221,1729,2233,1735,2246,1742,2243,1759,2241,1772,2251,1773,2259,1777,2265,1780,2273,1784,2277,1788,2293,1791,2300,1795,2319,1805,2327,1811,2332,1813,2333,1814,2337,1818,2341,1822,2345,1827,2345,1834,2346,1847,2345,1854,2344,1862,2347,1867,2350,1877,2350,1882,2351,1897,2353,1911,2357,1918,2357,1919,2358,1924,2359,1929,2359,1938,2365,1943,2366,1991,2366,2040,2366,2055,2368,2069,2374,2083,2381,2089,2385,2091,2388,2093,2394,2101,2395,2107,2395,2111,2400,2112,2403,2121,2409,2125,2422,2119,2433,2116,2438,2115,2442,2113,2450,2108,2453,2106,2463,2097,2473,2094,2479,2093,2484,2088,2495,2085,2503,2085,2510,2079,2511,2078,2518,2073,2524,2065,2536,2059,2546,2052,2553,2048,2559,2045,2573,2041,2578,2037,2585,2030,2596,2022,2602,2017,2606,2014,2610,2e3,2623,1994,2626,1984,2636,1981,2641,1970,2642,1959,2647,1945,2646,1932,2646,1922,2650,1914,2651,1912,2652,1910,2659,1899,2670,1894,2687,1880,2696,1872,2703,1865,2706,1855,2721,1843,2726,1832,2729,1825,2735,1820,2738,1812,2740,1811,2750,1803,2754,1800,2761,1793,2767,1788,2787,1770,2796,1754,2798,1740,2808,1738,2812,1737,2816,1735,2832,1728,2837,1712,2840,1704,2836,1703,2826,1693,2819,1686,2814,1682,2814,1677,2819,1665,2827,1655,2838,1645,2844,1640,2851,1634,2852,1630,2862,1621,2866,1612,2869,1606,2876,1602,2884,1594,2887,1584,2885,1584,2885,1577,2885,1569,2896,1572,2898,1537,2898,1502,2898,1495,2899,1489,2901,1481,2888,1480,2872,1479,2856,1479,2857,1462,2865,1454,2871,1448,2872,1437,2873,1430,2875,1427,2878,1419,2879,1417,2891,1400,2879,1395,2869,1388,2861,1388,2846,1386,2841,1379,2834,1370,2829,1363,2828,1349,2829,1339,2837,1327,2839,1314,2839,1308,2840,1302,2843,1277,2843,1252,2844,1241,2848,1232,2852,1223,2852,1212,2851,1204,2851,1197,2832,1197,2808,1197,Q,2803,1197,2798,1198,Z]],label:"Nampula",shortLabel:"NA",labelPosition:[241.4,159.3],labelAlignment:[CEN,MID]},"08":{outlines:[[M,983,1417,Q,974,1417,965,1418,952,1419,943,1409,938,1403,924,1403,921,1399,915,1397,906,1392,898,1386,889,1380,884,1373,877,1366,871,1359,868,1349,862,1335,856,1328,847,1315,842,1310,832,1296,821,1294,806,1293,800,1290,793,1293,784,1296,778,1301,774,1304,770,1305,764,1307,758,1310,736,1322,713,1328,693,1332,675,1343,651,1347,630,1357,621,1361,612,1366,608,1369,602,1371,592,1374,580,1379,577,1381,573,1381,549,1382,525,1381,497,1380,473,1387,450,1393,425,1406,410,1410,392,1416,371,1423,349,1438,347,1442,341,1445,318,1455,295,1471,282,1474,273,1477,264,1480,250,1481,233,1482,215,1483,210,1483,205,1483,197,1482,193,1489,189,1491,186,1493,169,1503,150,1506,140,1507,133,1514,121,1520,112,1530,104,1536,90,1535,83,1535,70,1541,51,1542,33,1542,24,1564,26,1584,27,1591,28,1597,31,1604,38,1607,41,1609,45,1612,49,1616,51,1622,54,1629,57,1633,59,1638,60,1639,69,1647,72,1657,73,1660,73,1664,72,1678,74,1689,75,1695,75,1702,75,1717,76,1732,79,1738,82,1745,86,1752,93,1751,101,1749,101,1757,100,1778,101,1799,101,1803,108,1804,115,1806,123,1806,149,1807,173,1816,195,1815,210,1818,216,1819,223,1819,233,1819,243,1823,260,1824,270,1823,282,1812,283,1799,300,1797,307,1805,307,1822,313,1829,317,1832,321,1833,335,1834,338,1836,355,1838,368,1842,382,1845,398,1845,406,1850,415,1850,421,1861,430,1862,441,1870,446,1879,448,1883,452,1885,457,1889,458,1891,465,1896,472,1902,478,1908,486,1913,492,1916,493,1917,501,1924,515,1923,526,1922,538,1921,551,1921,550,1937,581,1937,610,1938,617,1938,618,1942,625,1960,653,1958,663,1958,666,1966,675,1973,680,1975,684,1982,687,1985,685,1998,703,1996,710,1995,718,1994,745,1992,755,2007,763,2017,761,2035,760,2048,758,2062,736,2072,739,2100,741,2111,747,2118,753,2126,754,2130,767,2129,779,2123,784,2110,792,2107,799,2103,805,2097,809,2093,814,2090,825,2076,832,2067,835,2064,836,2057,841,2041,850,2029,854,2022,854,2010,854,1999,863,1993,868,1990,871,1985,875,1978,880,1972,883,1967,885,1960,887,1949,900,1948,918,1947,935,1945,936,1933,948,1934,956,1934,963,1937,974,1939,980,1947,986,1955,990,1960,995,1966,1003,1966,1010,1972,1016,1974,1021,1975,1021,1982,1034,2004,1049,2014,1064,2019,1069,2029,1071,2034,1078,2036,1083,2042,1093,2041,1101,2042,1106,2046,1117,2049,1122,2055,1125,2058,1130,2058,1143,2064,1153,2070,1165,2072,1167,2076,1174,2080,1179,2084,1196,2086,1201,2091,1205,2095,1206,2097,1207,2101,1210,2105,1219,2116,1225,2123,1231,2130,1236,2139,1247,2158,1252,2175,1253,2180,1255,2183,1261,2191,1269,2199,1275,2206,1275,2215,1274,2222,1283,2221,1286,2228,1289,2235,1290,2243,1290,2247,1295,2254,1302,2263,1304,2266,1306,2269,1312,2278,1323,2280,1328,2281,1331,2284,1335,2286,1338,2289,1340,2290,1341,2292,1342,2293,1342,2295,1345,2301,1350,2308,1353,2278,1354,2245,1355,2235,1356,2230,1357,2223,1360,2220,1367,2207,1366,2190,1365,2187,1365,2182,1362,2183,1358,2183,1347,2183,1338,2180,1323,2175,1305,2167,1298,2145,1300,2120,1300,2110,1301,2100,1302,2088,1296,2082,1291,2078,1279,2067,1275,2059,1268,2055,1262,2052,1257,2045,1243,2025,1228,2007,1217,1996,1203,1990,1200,1989,1195,1984,1186,1982,1178,1972,1172,1967,1170,1962,1167,1953,1161,1940,1158,1928,1144,1924,1140,1920,1128,1922,1125,1911,1125,1900,1125,1888,1124,1877,1123,1866,1122,1851,1116,1846,1112,1843,1101,1836,1091,1827,1090,1793,1090,1765,1096,1758,1103,1750,1107,1746,1111,1738,1115,1728,1127,1725,1130,1713,1131,1709,1130,1702,1131,1694,1131,1684,1135,1671,1138,1663,1148,1663,1150,1663,1159,1658,1168,1651,1178,1643,1180,1642,1186,1639,1192,1637,1194,1634,1199,1626,1196,1607,1191,1602,1192,1588,1189,1584,1189,1579,1190,1554,1187,1523,1178,1512,1173,1494,1167,1489,1159,1478,1152,1472,1152,1452,1152,1439,1144,1424,1143,1419,1140,1418,1137,1416,1134,1413,1130,1407,1120,1408,1106,1410,1090,1416,Q,1036,1417,983,1417,Z]],label:"Tete",shortLabel:"TE",labelPosition:[69.6,170],labelAlignment:[CEN,MID]},"09":{outlines:[[M,1786,1564,Q,1782,1563,1778,1563,1774,1562,1770,1562,1765,1568,1762,1576,1754,1589,1736,1602,1726,1610,1718,1615,1707,1623,1695,1633,1683,1638,1670,1648,1658,1654,1651,1665,1646,1672,1647,1684,1648,1690,1643,1701,1632,1702,1618,1701,1609,1701,1602,1698,1595,1694,1578,1693,1565,1689,1548,1689,1547,1700,1547,1712,1543,1721,1534,1727,1534,1735,1529,1742,1528,1776,1527,1814,1524,1819,1522,1823,1519,1831,1515,1837,1511,1844,1505,1847,1497,1850,1493,1857,1489,1863,1487,1867,1479,1881,1463,1887,1459,1889,1455,1890,1440,1897,1430,1910,1405,1912,1380,1912,1382,1922,1389,1934,1392,1940,1391,1952,1390,1958,1391,1965,1393,1974,1385,1978,1380,1980,1375,1980,1351,1982,1357,2010,1360,2018,1366,2024,1374,2032,1382,2048,1384,2054,1385,2060,1385,2069,1386,2077,1386,2081,1387,2085,1388,2093,1391,2099,1394,2107,1392,2124,1387,2129,1384,2135,1383,2137,1380,2143,1379,2147,1375,2150,1372,2152,1371,2157,1370,2167,1365,2182,1365,2187,1366,2190,1367,2207,1360,2220,1357,2223,1356,2230,1355,2235,1354,2245,1353,2278,1350,2308,1351,2310,1353,2312,1363,2327,1369,2352,1378,2362,1384,2369,1390,2376,1395,2376,1405,2379,1408,2389,1417,2397,1425,2400,1429,2412,1438,2419,1441,2421,1445,2423,1450,2425,1456,2429,1477,2433,1488,2452,1496,2466,1501,2471,1504,2474,1506,2477,1510,2486,1515,2497,1520,2507,1527,2513,1533,2521,1536,2524,1542,2530,1547,2539,1560,2553,1571,2559,1574,2561,1578,2562,1584,2564,1587,2572,1590,2580,1591,2582,1595,2591,1602,2600,1607,2606,1606,2615,1605,2626,1606,2635,1617,2635,1628,2634,1636,2623,1648,2617,1657,2612,1656,2595,1655,2582,1662,2574,1667,2568,1669,2564,1676,2554,1687,2547,1692,2544,1696,2537,1703,2530,1710,2524,1718,2514,1728,2505,1738,2498,1743,2490,1748,2483,1752,2477,1755,2459,1746,2454,1743,2447,1744,2442,1753,2432,1758,2422,1761,2415,1773,2409,1783,2403,1793,2404,1813,2405,1833,2405,1840,2404,1843,2400,1848,2395,1848,2392,1850,2385,1854,2381,1862,2375,1865,2372,1870,2362,1877,2358,1882,2348,1890,2346,1903,2343,1913,2339,1921,2336,1927,2333,1944,2317,1968,2314,1986,2307,1991,2298,2002,2290,2008,2286,2030,2286,2045,2281,2054,2269,2062,2266,2074,2263,2081,2258,2092,2257,2098,2253,2125,2245,2145,2241,2158,2236,2170,2234,2177,2232,2181,2231,2185,2230,2190,2229,2206,2225,2221,2221,2237,2218,2253,2214,2258,2213,2263,2212,2280,2208,2296,2203,2300,2202,2303,2201,2315,2197,2321,2194,2325,2192,2327,2188,2334,2181,2343,2176,2350,2165,2363,2163,2377,2161,2381,2154,2383,2150,2386,2147,2391,2139,2398,2134,2404,2130,2409,2125,2403,2121,2400,2112,2395,2111,2395,2107,2394,2101,2388,2093,2385,2091,2381,2089,2374,2083,2368,2069,2366,2055,2366,2040,2366,1991,2365,1943,2359,1938,2359,1929,2358,1924,2357,1919,2357,1918,2353,1911,2351,1897,2350,1882,2350,1877,2347,1867,2344,1862,2345,1854,2346,1847,2345,1834,2345,1827,2341,1822,2337,1818,2333,1814,2332,1813,2327,1811,2319,1805,2300,1795,2293,1791,2277,1788,2273,1784,2265,1780,2259,1777,2251,1773,2241,1772,2243,1759,2246,1742,2233,1735,2221,1729,2207,1723,2200,1718,2183,1714,2172,1703,2163,1693,2154,1692,2142,1691,2135,1686,2126,1679,2122,1676,2118,1675,2109,1674,2103,1664,2101,1658,2093,1658,2086,1659,2073,1657,2073,1653,2070,1644,2049,1642,2028,1644,2018,1644,2008,1645,1997,1646,1988,1630,1983,1625,1977,1613,1971,1604,1954,1603,1949,1596,1943,1584,1940,1576,1935,1579,1933,1572,1925,1570,1895,1569,1865,1569,1859,1569,1853,1568,1844,1565,1835,1565,Q,1811,1564,1786,1564,Z]],label:"Zambezia",shortLabel:"ZM",labelPosition:[176.5,209.8],labelAlignment:[CEN,MID]},"05":{outlines:[[M,1289,2235,Q,1286,2228,1283,2221,1274,2222,1275,2215,1275,2206,1269,2199,1261,2191,1255,2183,1253,2180,1252,2175,1247,2158,1236,2139,1231,2130,1225,2123,1219,2116,1210,2105,1207,2101,1206,2097,1205,2095,1201,2091,1196,2086,1179,2084,1174,2080,1167,2076,1165,2072,1153,2070,1143,2064,1130,2058,1125,2058,1122,2055,1117,2049,1106,2046,1101,2042,1093,2041,1083,2042,1078,2036,1071,2034,1069,2029,1064,2019,1049,2014,1034,2004,1021,1982,1021,1975,1016,1974,1010,1972,1003,1966,995,1966,990,1960,986,1955,980,1947,974,1939,963,1937,956,1934,948,1934,936,1933,935,1945,918,1947,900,1948,887,1949,885,1960,883,1967,880,1972,875,1978,871,1985,868,1990,863,1993,854,1999,854,2010,854,2022,850,2029,841,2041,836,2057,835,2064,832,2067,825,2076,814,2090,809,2093,805,2097,799,2103,792,2107,784,2110,779,2123,767,2129,754,2130,755,2155,755,2178,783,2177,810,2178,814,2178,812,2185,810,2191,814,2196,815,2207,817,2214,833,2213,844,2219,847,2228,848,2235,850,2240,852,2241,862,2244,870,2245,882,2246,888,2243,893,2241,898,2240,917,2234,923,2222,933,2216,943,2213,952,2211,958,2208,963,2205,965,2197,975,2192,981,2194,987,2196,993,2198,998,2200,1003,2203,1015,2210,1028,2211,1038,2212,1048,2213,1059,2216,1061,2222,1065,2230,1065,2232,1066,2241,1068,2250,1072,2270,1071,2292,1070,2310,1073,2327,1094,2338,1096,2357,1105,2375,1095,2382,1085,2389,1079,2403,1079,2412,1078,2420,1079,2425,1080,2430,1080,2437,1080,2445,1062,2446,1043,2447,1035,2442,1028,2442,1016,2441,1010,2444,1002,2449,993,2454,983,2455,971,2457,966,2485,986,2503,991,2504,990,2510,989,2525,987,2535,986,2540,983,2545,980,2550,972,2556,970,2557,965,2562,960,2571,951,2578,948,2580,946,2582,943,2584,940,2587,951,2595,956,2599,964,2607,975,2618,981,2624,990,2634,1e3,2639,1002,2655,1003,2690,1003,2725,1003,2736,1004,2747,1005,2759,999,2770,998,2777,995,2779,987,2784,980,2792,976,2795,970,2799,960,2805,954,2811,949,2815,948,2822,946,2834,952,2842,954,2848,958,2852,967,2860,966,2875,965,2889,964,2902,964,2904,962,2909,958,2917,948,2923,940,2929,926,2936,922,2939,913,2941,910,2943,898,2944,892,2946,881,2948,872,2952,858,2952,855,2965,866,2971,874,2976,877,2983,878,3002,867,3006,858,3010,856,3018,855,3024,855,3030,854,3041,866,3046,878,3047,885,3048,895,3050,902,3052,903,3059,903,3062,905,3071,912,3074,913,3093,914,3110,914,3116,923,3116,934,3121,943,3121,953,3123,951,3135,950,3141,953,3146,954,3150,957,3153,964,3158,964,3168,966,3176,975,3185,977,3186,979,3191,980,3194,984,3198,987,3200,989,3204,995,3217,1007,3233,1008,3235,1011,3240,1013,3246,1011,3255,1008,3263,998,3262,985,3261,982,3274,980,3278,980,3285,980,3291,979,3300,979,3303,978,3306,998,3305,1018,3307,1023,3307,1028,3309,1046,3315,1058,3321,1073,3323,1076,3312,1081,3304,1080,3297,1080,3289,1087,3286,1091,3275,1098,3270,1103,3265,1104,3263,1110,3251,1118,3247,1170,3245,1218,3245,1236,3245,1257,3245,1256,3233,1253,3225,1253,3194,1252,3167,1250,3162,1250,3160,1254,3143,1238,3132,1222,3121,1204,3104,1199,3092,1188,3090,1181,3068,1182,3050,1183,3025,1183,3e3,1183,2996,1183,2992,1198,2990,1196,2980,1195,2967,1195,2955,1194,2936,1197,2920,1214,2917,1225,2918,1245,2919,1262,2910,1265,2906,1267,2904,1270,2893,1279,2888,1285,2885,1287,2884,1295,2874,1299,2867,1306,2856,1315,2847,1320,2843,1323,2840,1327,2836,1335,2831,1343,2827,1351,2818,1357,2812,1358,2810,1363,2799,1375,2792,1386,2791,1390,2787,1393,2783,1396,2775,1400,2759,1412,2753,1415,2749,1418,2747,1432,2739,1442,2731,1453,2723,1465,2717,1474,2705,1487,2699,1497,2694,1500,2682,1503,2671,1513,2670,1525,2668,1536,2671,1549,2675,1551,2662,1569,2641,1593,2636,1597,2635,1600,2635,1603,2635,1606,2635,1605,2626,1606,2615,1607,2606,1602,2600,1595,2591,1591,2582,1590,2580,1587,2572,1584,2564,1578,2562,1574,2561,1571,2559,1560,2553,1547,2539,1542,2530,1536,2524,1533,2521,1527,2513,1520,2507,1515,2497,1510,2486,1506,2477,1504,2474,1501,2471,1496,2466,1488,2452,1477,2433,1456,2429,1450,2425,1445,2423,1441,2421,1438,2419,1429,2412,1425,2400,1417,2397,1408,2389,1405,2379,1395,2376,1390,2376,1384,2369,1378,2362,1369,2352,1363,2327,1353,2312,1351,2310,1350,2308,1346,2303,1341,2292,1340,2290,1338,2289,1335,2286,1331,2284,1328,2281,1323,2280,1312,2278,1306,2269,1304,2266,1302,2263,1295,2254,1290,2247,Q,1290,2243,1289,2235,Z]],label:"Sofala",shortLabel:"SO",labelPosition:[122,262.8],labelAlignment:[CEN,MID]},"03":{outlines:[[M,1268,3300,Q,1263,3280,1256,3257,1257,3250,1257,3245,1236,3245,1218,3245,1170,3245,1118,3247,1110,3251,1104,3263,1103,3265,1098,3270,1091,3275,1087,3286,1080,3289,1080,3297,1081,3304,1076,3312,1073,3323,1058,3321,1046,3315,1028,3309,1023,3307,1018,3307,998,3305,978,3306,976,3310,970,3310,956,3310,940,3311,926,3312,910,3314,879,3315,847,3315,845,3315,838,3321,836,3322,830,3328,829,3330,825,3338,797,3337,766,3338,770,3357,768,3372,762,3379,760,3380,756,3382,755,3387,745,3389,743,3394,737,3403,737,3410,738,3422,741,3430,744,3444,748,3451,757,3461,765,3461,779,3462,781,3470,791,3483,796,3494,799,3503,798,3517,797,3542,796,3567,796,3577,793,3583,791,3588,790,3595,786,3617,787,3642,787,3650,788,3657,790,3667,796,3675,801,3680,803,3684,817,3696,824,3703,829,3707,833,3712,840,3721,848,3724,854,3726,854,3727,855,3733,860,3733,872,3738,875,3745,878,3750,884,3754,887,3768,894,3773,902,3784,904,3790,909,3802,917,3811,923,3814,925,3815,931,3821,937,3830,945,3840,944,3855,943,3866,942,3877,941,3884,940,3888,940,3915,941,3943,942,3993,937,4047,935,4052,934,4056,930,4066,928,4084,926,4087,928,4095,932,4109,945,4125,961,4143,957,4168,955,4180,969,4179,976,4174,985,4176,999,4178,1022,4179,1033,4182,1028,4203,1022,4210,1011,4215,1006,4223,1008,4235,1009,4239,1009,4243,1010,4259,1010,4275,1009,4290,1020,4306,1026,4303,1032,4299,1037,4297,1040,4295,1053,4280,1073,4273,1086,4268,1100,4267,1104,4267,1108,4265,1122,4261,1138,4262,1154,4263,1170,4262,1179,4259,1183,4255,1187,4251,1193,4248,1211,4238,1228,4230,1235,4227,1241,4221,1247,4215,1247,4213,1251,4201,1255,4199,1263,4196,1265,4191,1268,4185,1268,4183,1269,4178,1272,4174,1281,4162,1288,4155,1290,4147,1294,4142,1294,4129,1297,4125,1299,4120,1300,4115,1303,4107,1307,4102,1309,4099,1311,4096,1321,4085,1324,4075,1328,4068,1330,4065,1340,4057,1342,4048,1343,4044,1344,4040,1348,4022,1338,4017,1312,4015,1288,4014,1285,4002,1285,3990,1285,3983,1286,3980,1290,3969,1293,3965,1301,3955,1304,3943,1305,3939,1306,3935,1311,3924,1317,3919,1321,3905,1329,3896,1331,3887,1334,3882,1334,3867,1337,3862,1339,3851,1340,3845,1341,3833,1345,3822,1347,3817,1353,3810,1357,3806,1359,3804,1364,3788,1363,3775,1363,3766,1362,3757,1346,3747,1349,3727,1350,3710,1350,3697,1350,3682,1357,3669,1358,3619,1355,3572,1345,3563,1333,3561,1326,3560,1320,3559,1312,3552,1312,3545,1313,3525,1312,3505,1310,3491,1305,3487,1307,3466,1299,3447,1294,3429,1289,3418,1285,3412,1285,3410,1281,3387,1283,3362,1284,3349,1280,3337,1279,3333,1276,3327,1274,3320,1272,3312,Q,1269,3305,1268,3300,Z],[M,1334,3416,Q,1330,3422,1330,3432,1330,3450,1329,3467,1329,3475,1337,3480,1342,3487,1356,3484,1358,3477,1358,3470,1358,3445,1361,3413,1365,3410,1371,3399,1374,3392,1370,3385,1355,3382,1338,3383,Q,1335,3397,1334,3416,Z]],label:"Inhambane",shortLabel:"IN",labelPosition:[109.5,369],labelAlignment:[CEN,MID]},"02":{outlines:[[M,647,3321,Q,639,3321,634,3316,629,3311,616,3308,604,3297,587,3299,586,3302,583,3305,578,3309,577,3317,576,3322,575,3327,572,3338,566,3343,564,3345,560,3353,550,3355,542,3362,536,3368,527,3374,524,3377,521,3380,515,3387,501,3395,487,3411,461,3425,458,3429,455,3431,442,3443,430,3462,425,3467,421,3470,416,3474,412,3479,404,3487,398,3497,392,3506,379,3517,367,3528,351,3542,351,3547,347,3550,345,3551,337,3557,325,3563,317,3572,314,3579,313,3580,306,3589,306,3602,306,3616,309,3627,310,3631,310,3635,310,3650,311,3665,316,3667,316,3672,317,3684,317,3690,317,3697,319,3700,318,3710,322,3711,333,3722,335,3732,337,3744,337,3750,338,3755,339,3758,340,3761,341,3765,343,3775,352,3778,359,3787,359,3800,367,3819,358,3828,351,3835,347,3843,353,3850,352,3857,350,3868,356,3875,362,3881,361,3890,362,3902,365,3904,370,3908,374,3915,378,3925,386,3931,392,3957,390,3980,396,3984,397,3985,403,3990,406,3996,411,4004,413,4007,424,4015,424,4020,425,4045,424,4070,424,4075,427,4078,428,4087,431,4093,435,4109,449,4118,450,4149,450,4180,450,4194,449,4208,448,4222,453,4233,451,4247,451,4260,461,4262,470,4265,475,4267,478,4269,491,4270,495,4275,504,4283,509,4288,511,4300,517,4306,524,4314,523,4325,522,4339,522,4353,522,4361,522,4370,532,4372,536,4374,547,4376,551,4379,574,4382,592,4377,600,4372,602,4371,612,4368,611,4358,615,4346,615,4335,615,4330,615,4325,617,4313,623,4309,642,4306,655,4310,664,4313,666,4318,666,4337,669,4346,672,4354,675,4354,686,4355,697,4356,704,4356,710,4358,739,4367,740,4407,753,4398,764,4391,778,4386,790,4384,815,4373,840,4374,857,4364,878,4362,890,4357,896,4351,900,4346,908,4346,922,4343,933,4340,942,4337,947,4329,963,4321,975,4321,986,4315,998,4311,1003,4310,1008,4309,1014,4308,1020,4306,1009,4290,1010,4275,1010,4259,1009,4243,1009,4239,1008,4235,1006,4223,1011,4215,1022,4210,1028,4203,1033,4182,1022,4179,999,4178,985,4176,976,4174,969,4179,955,4180,957,4168,961,4143,945,4125,932,4109,928,4095,926,4087,928,4084,930,4066,934,4056,935,4052,937,4047,942,3993,941,3943,940,3915,940,3888,941,3884,942,3877,943,3866,944,3855,945,3840,937,3830,931,3821,925,3815,923,3814,917,3811,909,3802,904,3790,902,3784,894,3773,887,3768,884,3754,878,3750,875,3745,872,3738,860,3733,855,3733,854,3727,854,3726,848,3724,840,3721,833,3712,829,3707,824,3703,817,3696,803,3684,801,3680,796,3675,790,3667,788,3657,787,3650,787,3642,786,3617,790,3595,791,3588,793,3583,796,3577,796,3567,797,3542,798,3517,799,3503,796,3494,791,3483,781,3470,779,3462,765,3461,757,3461,748,3451,744,3444,741,3430,738,3422,737,3410,737,3403,743,3394,745,3389,755,3387,756,3382,760,3380,762,3379,768,3372,770,3357,766,3338,759,3347,746,3348,750,3352,737,3359,718,3360,700,3361,688,3361,680,3356,672,3355,664,3346,Q,655,3337,647,3321,Z]],label:"Gaza",shortLabel:"GA",labelPosition:[62.8,385.2],labelAlignment:[CEN,MID]},"04":{outlines:[[M,666,4318,Q,664,4313,655,4310,642,4306,623,4309,617,4313,615,4325,615,4330,615,4335,615,4346,611,4358,612,4368,602,4371,600,4372,592,4377,574,4382,551,4379,547,4376,536,4374,532,4372,522,4370,522,4361,522,4353,522,4339,523,4325,524,4314,517,4306,511,4300,509,4288,504,4283,495,4275,491,4270,478,4269,475,4267,470,4265,461,4262,451,4260,450,4265,450,4270,450,4278,449,4285,446,4309,447,4335,448,4360,449,4385,449,4388,449,4391,L,449,4392,Q,448,4397,448,4403,447,4413,445,4424,435,4425,425,4425,428,4448,427,4465,427,4470,425,4475,421,4488,422,4503,423,4520,423,4538,423,4543,423,4548,436,4549,440,4553,444,4555,444,4560,445,4567,447,4573,450,4579,452,4581,462,4589,460,4603,459,4615,458,4628,458,4648,455,4667,439,4671,442,4688,443,4694,442,4700,440,4714,450,4716,458,4718,463,4723,470,4731,469,4745,469,4749,470,4753,470,4757,470,4760,471,4765,472,4768,476,4780,476,4788,476,4794,485,4793,497,4792,506,4796,509,4798,513,4799,528,4800,538,4805,542,4807,545,4808,550,4809,555,4809,581,4810,608,4810,626,4810,645,4807,645,4774,646,4745,648,4734,647,4728,646,4720,649,4717,647,4696,663,4696,667,4690,670,4683,672,4678,674,4676,681,4660,675,4648,673,4643,665,4642,656,4630,638,4634,631,4635,628,4638,621,4643,621,4653,616,4668,600,4666,590,4664,587,4655,584,4641,585,4625,585,4618,586,4610,587,4607,588,4603,590,4598,591,4592,567,4590,550,4589,526,4582,534,4563,540,4550,553,4546,559,4544,565,4541,573,4537,580,4536,589,4535,590,4535,590,4533,590,4530,590,4515,601,4506,607,4504,608,4503,611,4500,617,4498,622,4486,629,4482,635,4478,638,4478,647,4477,652,4471,662,4446,682,4434,690,4425,700,4424,710,4423,720,4424,726,4425,729,4420,732,4407,740,4407,739,4367,710,4358,704,4356,697,4356,686,4355,675,4354,672,4354,669,4346,Q,666,4337,666,4318,Z]],label:"Maputo",shortLabel:"MP",labelPosition:[53.6,447.3],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"mozambique",type:"maps"}}})});