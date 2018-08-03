(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=494)})({494:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(495);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},495:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Lovech.18.08-09-2012 12:29:03
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Lovech",revision:18,standaloneInit:true,baseWidth:596,baseHeight:497,baseScaleFactor:10,entities:{"04":{outlines:[[M,2113,341,Q,2093,341,2079,342,L,2079,357,2025,357,2023,383,1992,383,Q,1990,398,1992,427,1991,446,1963,439,L,1963,483,1916,483,1916,463,1877,463,Q,1876,462,1876,460,1876,458,1876,451,1876,449,1876,447,1876,442,1876,438,1877,433,1871,434,1869,434,1867,433,1865,433,1863,435,1862,437,1862,439,1862,442,1862,444,1863,445,1863,447,1863,448,1863,448,1863,455,1863,459,1863,463,1862,468,L,1848,468,1844,551,Q,1807,549,1787,548,1751,547,1765,581,L,1693,581,Q,1699,605,1675,603,1627,602,1626,602,L,1626,630,1579,630,Q,1535,606,1528,607,1486,612,1484,584,1483,584,1420,585,1383,588,1388,551,L,1337,551,1337,569,Q,1314,559,1314,581,1315,593,1316,614,1317,622,1303,636,1293,648,1298,668,L,1262,668,Q,1251,660,1191,656,1138,653,1126,630,L,1011,630,Q,998,629,990,603,983,575,977,569,955,528,941,517,934,497,921,491,L,900,452,880,452,Q,878,442,877,439,L,864,439,864,457,851,457,Q,851,475,831,492,813,509,799,509,L,623,681,Q,596,716,575,720,555,722,542,733,530,744,512,744,494,745,470,771,L,411,771,Q,411,795,399,810,387,824,387,843,392,853,380,858,365,863,362,865,362,901,351,906,333,913,335,939,336,947,336,951,330,949,315,960,303,968,305,997,306,1014,310,1046,L,312,1730,310,1730,310,1750,Q,323,1748,330,1759,334,1765,339,1774,345,1780,375,1781,376,1783,410,1802,428,1813,429,1834,L,444,1834,Q,456,1816,453,1792,L,476,1792,476,1761,Q,513,1771,507,1725,L,590,1725,Q,590,1729,605,1750,L,748,1750,748,1701,777,1701,777,1673,Q,774,1668,774,1654,L,837,1654,837,1683,942,1683,942,1709,1041,1709,1041,1685,1129,1685,1129,1663,1228,1663,1228,1634,1328,1634,Q,1337,1656,1337,1660,1354,1663,1399,1659,1439,1659,1440,1676,L,1534,1676,Q,1536,1784,1536,2025,L,1556,2025,1556,2098,1588,2098,1588,2134,1631,2135,Q,1659,2135,1670,2152,1678,2163,1781,2162,1780,2157,1780,2152,1780,2128,1796,2129,1792,2115,1810,2111,1829,2108,1824,2092,L,1848,2092,1848,2066,2013,2066,2013,2041,Q,1991,2045,1988,2012,1985,1965,1973,1952,L,1973,1904,Q,1946,1866,1945,1855,1940,1822,1932,1813,1918,1794,1922,1763,1909,1735,1909,1718,1925,1696,1925,1671,1948,1656,1946,1629,1943,1592,1971,1586,1974,1542,1986,1537,2003,1528,2003,1492,2018,1465,2019,1449,2020,1405,2029,1398,2038,1391,2037,1344,2038,1329,2042,1326,2047,1322,2069,1309,2073,1305,2073,1267,L,2073,1265,Q,2074,1248,2083,1239,2093,1231,2093,1212,L,2093,1177,Q,2110,1169,2113,1160,2112,1136,2112,1123,2111,1098,2121,1095,2137,1092,2142,1040,2165,1021,2213,968,2252,948,2287,894,L,2319,894,Q,2320,903,2325,920,L,2448,922,Q,2454,923,2608,920,2616,919,2617,904,2619,889,2640,880,2646,878,2647,822,2648,765,2619,743,L,2618,673,2638,673,2637,625,Q,2616,620,2605,605,2575,571,2560,553,2534,522,2527,491,2517,486,2439,486,2420,485,2407,476,2390,464,2378,461,2378,409,2358,396,2350,366,2334,347,2322,312,2309,295,2307,274,2300,266,2288,254,2293,239,L,2273,239,Q,2273,270,2252,272,2234,272,2226,275,2221,292,2216,295,2182,298,2172,306,2137,310,2129,313,Q,2128,337,2113,341,Z]],label:"Lukovit",shortLabel:"LU",labelPosition:[147.6,110],labelAlignment:[CEN,MID]},"07":{outlines:[[M,3446,823,Q,3431,815,3432,798,3313,813,3295,790,3283,774,3233,775,3165,777,3153,775,3122,753,3099,754,3086,753,3074,742,3061,728,3056,728,3032,725,3011,706,2984,684,2971,679,2971,659,2969,648,L,2942,648,Q,2950,668,2931,684,2907,698,2899,706,2873,710,2865,720,2844,741,2843,742,2767,689,2724,668,2702,657,2672,628,2652,629,2638,625,L,2639,673,2618,673,2620,743,Q,2648,765,2647,822,2646,878,2640,881,2619,889,2617,905,2616,919,2609,920,2454,923,2448,923,L,2326,920,Q,2320,903,2320,894,L,2287,894,Q,2252,948,2213,968,2165,1021,2142,1040,2137,1092,2122,1095,2111,1098,2112,1123,2112,1136,2113,1160,2110,1169,2093,1177,L,2093,1212,Q,2093,1231,2083,1239,2074,1248,2074,1265,L,2074,1267,Q,2073,1305,2069,1309,2047,1322,2043,1326,2038,1329,2038,1344,2038,1391,2029,1398,2020,1405,2020,1449,2018,1465,2003,1493,2003,1528,1986,1537,1974,1542,1972,1586,1943,1592,1947,1629,1948,1656,1925,1671,1925,1696,1909,1718,1909,1735,1923,1764,1918,1794,1932,1813,1940,1822,1945,1855,1946,1866,1973,1904,L,1973,1952,Q,1985,1965,1989,2012,1991,2045,2014,2041,L,2014,2066,1848,2066,1848,2092,1824,2092,Q,1829,2108,1810,2112,1792,2115,1797,2130,1780,2128,1780,2152,1780,2157,1781,2163,1790,2197,1852,2263,1889,2302,1943,2353,L,1943,2395,Q,1968,2411,1968,2479,1968,2549,1980,2564,2023,2614,2028,2624,2040,2648,2040,2701,2040,2758,2016,2761,L,2014,2783,1980,2783,Q,1976,2805,1954,2812,1937,2817,1948,2839,L,1921,2839,Q,1920,2842,1921,2861,1919,2878,1902,2870,1912,2914,1869,2905,1866,2949,1853,2969,1853,3002,1879,3016,1884,3028,1882,3050,1886,3060,1900,3077,L,1900,3101,Q,1912,3112,2014,3189,2088,3245,2125,3286,2144,3307,2173,3340,2202,3363,2257,3360,L,2358,3360,Q,2374,3360,2396,3376,2419,3391,2431,3389,2438,3387,2460,3410,2469,3415,2500,3416,2519,3426,2561,3444,2577,3454,2632,3480,L,2669,3484,Q,2681,3484,2700,3507,2708,3511,2735,3513,2765,3533,2766,3533,2802,3545,2834,3558,2835,3558,2837,3558,2836,3530,2834,3356,L,2833,3342,2810,3342,2810,3270,2781,3270,2781,3226,Q,2767,3207,2763,3195,2762,3160,2759,3149,2732,3130,2732,3118,2732,3076,2656,2999,L,2600,2944,Q,2595,2918,2593,2906,2576,2885,2573,2877,2568,2810,2562,2792,2546,2761,2546,2753,L,2546,2655,Q,2546,2639,2556,2633,2564,2626,2564,2617,2563,2600,2573,2597,2587,2594,2591,2588,L,2591,2541,2851,2541,Q,2864,2579,2924,2575,2990,2569,3001,2581,3020,2602,3086,2602,3122,2602,3177,2599,3180,2603,3182,2619,L,3366,2619,3366,2593,Q,3410,2606,3410,2570,3421,2567,3452,2570,3477,2569,3466,2541,L,3523,2541,3523,2513,3583,2513,3583,2492,3632,2492,3634,2471,3834,2471,Q,3836,2471,3838,2471,3851,2467,3852,2451,3851,2437,3873,2446,3873,2425,3870,2415,3876,2413,3894,2413,3883,2391,3902,2389,3922,2384,3919,2371,L,3922,2180,Q,3944,2179,3942,2151,3939,2131,3961,2143,L,3961,2084,Q,3923,2045,3907,2037,3897,2032,3889,2007,3881,1984,3870,1981,L,3870,1950,3894,1950,3894,1900,3829,1900,Q,3818,1886,3808,1878,3801,1872,3784,1872,3782,1871,3720,1818,L,3681,1818,Q,3686,1834,3656,1858,3649,1864,3625,1896,L,3589,1934,Q,3586,1936,3577,1956,3571,1965,3549,1972,L,3529,1972,Q,3529,1957,3526,1952,3511,1956,3475,1926,3468,1919,3441,1923,3424,1906,3415,1905,3403,1903,3276,1903,3273,1873,3234,1869,3223,1845,3182,1849,3129,1851,3110,1828,3109,1826,3048,1822,3048,1758,3045,1719,L,3045,1663,3072,1663,Q,3075,1640,3098,1625,3122,1605,3128,1596,L,3128,1596,Q,3158,1570,3159,1569,3164,1567,3181,1563,3195,1558,3195,1543,L,3193,1205,3229,1205,3229,1184,Q,3238,1183,3275,1185,3311,1187,3320,1182,L,3320,1021,Q,3321,1018,3323,1014,3331,993,3354,964,3380,932,3382,916,3383,905,3394,902,3403,901,3403,895,3403,887,3403,881,3403,871,3412,866,Q,3430,858,3446,823,Z]],label:"Ugarchin",shortLabel:"UG",labelPosition:[260.2,209.2],labelAlignment:[CEN,MID]},"03":{outlines:[[M,4531,480,Q,4499,470,4466,444,4436,398,4412,395,4401,392,4364,352,4329,313,4300,313,4265,313,4268,334,L,4147,334,Q,4154,367,4106,368,4052,363,4041,364,L,4039,388,4008,388,4008,457,Q,3987,468,3990,478,L,3990,516,Q,3968,515,3966,534,3964,546,3967,576,3966,582,3949,602,3934,619,3943,635,L,3927,635,3927,606,Q,3861,551,3840,540,L,3840,511,3765,511,3765,594,Q,3745,614,3747,658,3748,675,3732,684,3715,692,3716,712,L,3716,794,Q,3692,793,3682,796,3665,799,3675,823,L,3535,823,Q,3495,828,3472,828,3456,827,3446,823,3430,858,3412,866,3403,871,3403,881,3403,887,3403,895,3403,901,3394,902,3383,905,3382,916,3380,932,3354,964,3331,993,3323,1014,3321,1018,3320,1021,L,3320,1182,Q,3311,1187,3275,1185,3238,1183,3229,1184,L,3229,1205,3193,1205,3195,1543,Q,3195,1558,3181,1563,3164,1567,3159,1569,3158,1570,3128,1596,L,3128,1596,Q,3122,1605,3098,1625,3075,1640,3072,1663,L,3045,1663,3045,1719,Q,3048,1758,3048,1822,3109,1826,3110,1828,3129,1851,3182,1849,3223,1845,3234,1869,3273,1873,3276,1903,3403,1903,3415,1905,3424,1906,3441,1923,3468,1919,3475,1926,3511,1956,3526,1952,3529,1957,3529,1972,L,3549,1972,Q,3571,1965,3577,1956,3586,1936,3589,1934,L,3625,1896,Q,3649,1864,3656,1858,3686,1834,3681,1818,L,3720,1818,Q,3782,1871,3784,1872,3801,1872,3808,1878,3818,1886,3829,1900,L,3894,1900,3894,1950,3870,1950,3870,1981,Q,3881,1984,3889,2007,3897,2032,3907,2037,3923,2045,3961,2084,L,3961,2143,Q,3939,2131,3942,2151,3944,2179,3922,2180,L,3919,2371,Q,3922,2384,3902,2389,3883,2391,3894,2413,3876,2413,3870,2415,3873,2425,3873,2446,3851,2437,3852,2451,3851,2467,3838,2471,L,3838,2516,Q,3866,2519,3901,2558,3934,2594,3964,2596,3968,2674,3970,2677,3980,2686,3985,2710,L,4008,2733,Q,4007,2736,4027,2759,4039,2772,4047,2793,4058,2800,4067,2822,4076,2829,4076,2859,4084,2861,4103,2861,L,4103,2884,4221,2884,Q,4255,2885,4247,2836,4270,2842,4271,2810,4271,2778,4298,2788,4291,2763,4303,2745,4317,2721,4318,2705,4346,2690,4343,2685,4343,2660,4375,2665,L,4375,2642,4418,2642,Q,4413,2618,4433,2617,4445,2615,4474,2617,L,4478,2591,Q,4481,2591,4519,2595,4551,2594,4540,2569,L,4612,2569,4612,2591,Q,4620,2594,4640,2594,L,4646,2619,4697,2619,4697,2594,4745,2594,Q,4745,2582,4749,2569,L,4808,2569,Q,4808,2558,4811,2548,4866,2547,4868,2528,L,5034,2528,Q,5048,2525,5058,2524,L,5058,2524,5146,2527,Q,5149,2526,5154,2515,5159,2505,5169,2506,L,5205,2498,Q,5223,2493,5237,2480,5245,2471,5270,2473,5328,2473,5337,2464,L,5337,2405,Q,5321,2403,5298,2380,5277,2359,5277,2349,5277,2299,5315,2298,L,5315,2274,Q,5315,2236,5310,2217,5284,2197,5283,2194,5279,2174,5265,2156,5256,2146,5252,2114,5232,2101,5236,2078,L,5236,1681,5274,1681,5274,1650,5346,1650,Q,5349,1642,5349,1627,L,5411,1627,Q,5427,1597,5427,1526,5440,1526,5445,1524,L,5445,1443,5422,1443,5422,1411,5400,1411,5400,1380,Q,5380,1383,5373,1359,5367,1335,5352,1335,L,5352,1307,Q,5309,1312,5288,1311,5251,1310,5247,1279,5233,1279,5230,1281,L,5216,1281,5216,1259,5171,1259,5170,1239,5130,1238,Q,5136,1216,5112,1212,5082,1205,5079,1199,5067,1178,5022,1167,L,5022,989,5045,989,5045,962,5097,962,Q,5097,945,5099,937,L,5151,937,Q,5148,919,5176,913,5206,907,5205,889,5202,859,5225,850,5244,841,5236,809,L,5259,806,5259,755,5258,746,5256,742,Q,5233,746,5218,731,5195,708,5188,704,5133,682,5134,659,5112,644,5111,630,5106,600,5097,590,5097,561,5087,556,5065,540,5066,520,5066,504,5078,494,5087,485,5085,459,5074,461,5063,463,5057,459,5046,456,5044,455,5040,455,L,4968,455,Q,4963,481,4928,498,4922,518,4906,524,4894,528,4894,547,L,4854,547,4854,576,4827,576,Q,4799,534,4755,547,4737,552,4719,540,4698,527,4679,527,4622,509,4600,509,L,4553,509,Q,4535,481,4531,480,Z]],label:"Lovech",shortLabel:"LO",labelPosition:[447.9,159.9],labelAlignment:[CEN,MID]},"02":{outlines:[[M,5556,137,Q,5521,116,5517,111,5478,107,5470,84,5465,71,5418,64,5418,60,5411,46,L,5385,46,5385,64,Q,5366,66,5337,66,L,5337,93,5295,93,5295,115,5270,115,Q,5272,154,5272,239,L,5248,239,Q,5248,318,5246,331,5242,346,5223,365,5218,385,5207,398,5200,406,5174,419,5163,442,5142,448,5112,452,5102,455,5093,457,5085,459,5087,485,5078,494,5066,504,5066,520,5065,540,5087,556,5097,561,5097,590,5106,600,5111,630,5112,644,5134,659,5133,682,5188,704,5195,708,5218,731,5233,746,5256,742,L,5258,746,5259,755,5259,806,5236,809,Q,5244,841,5225,850,5202,859,5205,889,5206,907,5176,913,5148,919,5151,937,L,5099,937,Q,5097,945,5097,962,L,5045,962,5045,989,5022,989,5022,1167,Q,5067,1178,5079,1199,5082,1205,5112,1212,5136,1216,5130,1238,L,5170,1239,5171,1259,5216,1259,5216,1281,5230,1281,Q,5233,1279,5247,1279,5251,1310,5288,1311,5309,1312,5352,1307,L,5352,1297,5494,1297,5494,1320,Q,5514,1322,5553,1322,5552,1333,5557,1351,L,5599,1351,5599,1326,5651,1326,5651,1292,5689,1292,5689,1272,5718,1272,5718,1140,Q,5712,1079,5757,1057,5784,1044,5829,996,5874,947,5901,934,5905,916,5905,907,L,5905,656,Q,5874,642,5849,620,5823,597,5814,591,5803,584,5772,567,5739,550,5710,523,5680,495,5593,442,5600,260,5586,174,Q,5582,152,5556,137,Z]],label:"Letnitsa",shortLabel:"LE",labelPosition:[553.1,73.2],labelAlignment:[CEN,MID]},"08":{outlines:[[M,1228,1663,L,1130,1663,1130,1686,1041,1686,1041,1710,942,1710,942,1683,837,1683,837,1655,774,1655,Q,774,1668,777,1674,L,777,1701,748,1701,748,1750,605,1750,Q,590,1729,590,1725,L,507,1725,Q,513,1771,476,1761,L,476,1792,453,1792,Q,456,1816,445,1834,L,429,1834,Q,428,1813,410,1802,376,1783,375,1782,345,1780,339,1774,334,1765,331,1759,323,1748,310,1750,L,310,1730,257,1730,257,1706,136,1706,Q,136,1686,134,1678,L,106,1678,109,1710,75,1710,75,1854,Q,75,1920,60,1927,44,1934,44,1983,L,52,2042,Q,62,2051,67,2089,68,2091,68,2094,L,68,2148,Q,100,2150,98,2205,95,2261,122,2264,L,122,2307,Q,129,2309,140,2312,L,325,2312,325,2284,398,2284,398,2258,459,2258,459,2230,493,2230,Q,486,2254,503,2268,513,2275,537,2287,544,2292,555,2315,575,2338,575,2353,575,2366,533,2403,530,2432,524,2439,501,2456,490,2451,490,2469,477,2500,L,459,2500,459,2534,Q,461,2535,503,2581,511,2590,530,2600,544,2611,533,2635,538,2636,599,2639,636,2640,639,2668,686,2670,715,2669,719,2670,719,2715,719,2742,713,2762,L,749,2762,749,2783,Q,767,2774,780,2791,795,2810,801,2810,810,2810,827,2824,843,2840,857,2839,L,858,2860,892,2860,Q,894,2852,894,2833,L,946,2833,Q,951,2860,960,2858,L,960,2906,981,2906,981,2938,1106,2938,1120,2937,1120,2882,1162,2882,1162,2836,Q,1149,2810,1122,2809,L,1122,2780,Q,1104,2766,1104,2763,L,1104,2731,Q,1081,2726,1082,2715,1079,2591,1079,2585,1079,2561,1083,2560,1100,2548,1100,2543,1099,2481,1102,2477,1139,2459,1131,2435,1134,2420,1148,2413,1167,2401,1170,2396,1225,2320,1232,2314,1275,2272,1332,2280,L,1334,2259,1432,2257,1432,2236,Q,1481,2236,1498,2234,L,1498,2215,Q,1506,2213,1521,2214,L,1521,2180,Q,1533,2173,1535,2166,1536,2144,1537,2136,1538,2121,1557,2126,1560,2112,1557,2098,L,1557,2025,1536,2025,Q,1536,1784,1534,1676,L,1440,1676,Q,1439,1659,1400,1659,1354,1663,1337,1660,1337,1656,1329,1634,L,1228,1634,Z]],label:"Yablanitsa",shortLabel:"YA",labelPosition:[80.1,228.6],labelAlignment:[CEN,MID]},"05":{outlines:[[M,1968,2479,Q,1968,2411,1943,2395,L,1943,2353,Q,1889,2302,1852,2263,1790,2197,1781,2163,1678,2163,1671,2152,1659,2135,1631,2136,L,1588,2134,1588,2098,1557,2098,Q,1560,2112,1557,2126,1538,2121,1537,2136,1536,2144,1535,2166,1533,2173,1521,2180,L,1521,2214,Q,1506,2213,1498,2215,L,1498,2234,Q,1481,2236,1432,2236,L,1432,2257,1334,2259,1332,2280,Q,1275,2272,1232,2314,1225,2320,1170,2396,1167,2401,1148,2413,1134,2420,1131,2435,1139,2459,1102,2477,1099,2481,1100,2543,1100,2548,1083,2560,1079,2561,1079,2585,1079,2591,1082,2715,1081,2726,1104,2731,L,1104,2763,Q,1104,2766,1122,2780,L,1122,2809,Q,1149,2810,1162,2836,L,1162,2882,1120,2882,1120,2937,1106,2938,981,2938,981,2906,960,2906,960,2858,Q,951,2860,946,2833,L,894,2833,Q,894,2852,892,2860,L,858,2860,857,2839,Q,843,2840,827,2824,810,2810,801,2810,795,2810,780,2791,767,2774,749,2783,L,749,2762,713,2762,Q,710,2770,706,2776,694,2796,697,2859,698,2918,674,3003,L,674,3094,Q,687,3094,712,3096,L,716,3124,Q,749,3117,772,3142,796,3171,813,3171,L,1130,3171,Q,1137,3193,1179,3191,1205,3189,1205,3231,1205,3294,1179,3285,L,1179,3312,1158,3312,1158,3341,1130,3352,1130,3369,Q,1127,3389,1205,3413,1211,3429,1215,3432,1218,3436,1212,3453,1207,3469,1192,3526,1181,3607,1181,3624,L,1181,3828,Q,1190,3839,1209,3856,1229,3875,1276,3899,L,1276,3933,1251,3933,1251,3966,Q,1222,3958,1224,4009,L,1202,4009,1202,4092,1224,4092,1224,4133,1155,4133,Q,1152,4139,1152,4151,L,1106,4151,1106,4198,1083,4198,1083,4301,1058,4301,1058,4337,Q,1074,4337,1114,4342,1139,4342,1166,4363,L,1238,4363,Q,1249,4363,1265,4378,1282,4393,1296,4393,1314,4394,1362,4391,1402,4390,1413,4402,1429,4422,1528,4422,1534,4422,1626,4420,1639,4400,1650,4388,L,1709,4388,Q,1751,4388,1765,4394,1810,4413,1815,4415,1831,4419,1853,4435,1886,4442,1897,4456,1910,4473,1987,4502,1998,4508,2037,4514,2056,4519,2080,4543,L,2799,4544,Q,2799,4503,2802,4498,2821,4494,2822,4487,L,2822,4463,Q,2822,4444,2834,4434,2840,4430,2846,4426,2849,4414,2851,4387,2870,4379,2874,4354,2874,4322,2879,4319,2895,4318,2903,4266,L,2931,4266,Q,2924,4236,2936,4213,2952,4183,2952,4167,2952,4152,2965,4146,2979,4140,2981,4123,2981,4078,2999,4085,2989,4055,3006,4037,3026,4015,3026,4008,3025,3986,3047,3975,3052,3971,3053,3929,L,3049,3880,3037,3851,Q,3024,3823,3020,3811,3020,3795,3015,3773,3010,3751,2996,3738,2983,3726,2979,3705,2974,3683,2933,3653,2875,3565,2837,3558,2835,3558,2834,3558,2802,3545,2766,3533,2765,3533,2735,3513,2708,3511,2700,3507,2681,3484,2669,3484,L,2632,3480,Q,2577,3454,2561,3444,2519,3426,2500,3416,2469,3415,2460,3410,2438,3387,2431,3389,2419,3391,2396,3376,2374,3360,2358,3360,L,2257,3360,Q,2202,3363,2173,3340,2144,3307,2125,3286,2088,3245,2014,3189,1912,3112,1900,3101,L,1900,3077,Q,1886,3060,1882,3050,1884,3028,1879,3016,1853,3002,1853,2969,1866,2949,1869,2905,1912,2914,1902,2870,1919,2878,1921,2861,1920,2842,1921,2839,L,1948,2839,Q,1937,2817,1954,2812,1976,2805,1980,2783,L,2014,2783,2016,2761,Q,2040,2758,2040,2701,2040,2648,2028,2624,2023,2614,1980,2564,Q,1968,2549,1968,2479,Z]],label:"Teteven",shortLabel:"TE",labelPosition:[186.3,372.3],labelAlignment:[CEN,MID]},"06":{outlines:[[M,4418,2642,L,4375,2642,4375,2665,Q,4343,2660,4343,2685,4346,2690,4318,2705,4317,2721,4303,2745,4291,2763,4298,2788,4271,2778,4271,2810,4270,2842,4247,2836,4255,2885,4221,2884,L,4103,2884,4103,2861,Q,4084,2861,4076,2859,4076,2829,4067,2822,4058,2800,4047,2793,4039,2772,4027,2759,4007,2736,4008,2733,L,3985,2710,Q,3980,2686,3970,2677,3968,2674,3964,2596,3934,2594,3901,2558,3866,2519,3838,2516,L,3838,2471,3634,2471,3632,2492,3583,2492,3583,2513,3523,2513,3523,2541,3466,2541,Q,3477,2569,3452,2570,3421,2567,3410,2570,3410,2606,3366,2593,L,3366,2619,3182,2619,Q,3180,2603,3177,2599,3122,2602,3086,2602,3020,2602,3001,2581,2990,2569,2924,2575,2864,2579,2851,2541,L,2591,2541,2591,2588,Q,2587,2594,2573,2597,2563,2600,2564,2617,2564,2626,2556,2633,2546,2639,2546,2655,L,2546,2753,Q,2546,2761,2562,2792,2568,2810,2573,2877,2576,2885,2593,2906,2595,2918,2600,2944,L,2656,2999,Q,2732,3076,2732,3118,2732,3130,2759,3149,2762,3160,2763,3195,2767,3207,2781,3226,L,2781,3270,2810,3270,2810,3342,2833,3342,2834,3356,Q,2836,3530,2837,3558,2875,3565,2933,3653,2974,3683,2979,3705,2983,3726,2996,3738,3010,3751,3015,3773,3020,3795,3020,3811,3024,3823,3037,3851,L,3049,3880,3053,3929,Q,3052,3971,3047,3975,3025,3986,3026,4008,3026,4015,3006,4037,2989,4055,2999,4085,2981,4078,2981,4123,2979,4140,2965,4146,2952,4152,2952,4167,2952,4183,2936,4213,2924,4236,2931,4266,L,3073,4266,Q,3080,4270,3121,4284,L,3616,4284,Q,3621,4303,3668,4301,3713,4300,3716,4325,3716,4349,3720,4354,3722,4357,3740,4368,3754,4379,3774,4408,3829,4491,3832,4495,3857,4517,3897,4580,3935,4627,4008,4747,4012,4754,4010,4776,4010,4783,4028,4794,4039,4809,4052,4840,4060,4849,4072,4886,4078,4899,4097,4928,L,4133,4928,Q,4142,4914,4139,4904,4234,4904,4275,4902,4283,4901,4297,4884,L,4400,4884,Q,4425,4884,4441,4850,4449,4848,4469,4848,4484,4844,4490,4832,L,4517,4828,Q,4527,4824,4544,4804,4569,4795,4587,4781,L,4615,4781,Q,4610,4739,4622,4691,4636,4638,4635,4603,4634,4563,4645,4508,4656,4450,4657,4421,4656,4354,4631,4330,4583,4300,4537,4267,4488,4234,4487,4189,4473,4187,4467,4177,4464,4171,4465,4151,4444,4141,4444,4098,4444,4051,4467,4060,4467,4032,4467,4017,4468,3990,4480,3983,4497,3972,4489,3909,L,4489,3859,Q,4474,3841,4467,3831,4462,3825,4462,3790,4442,3773,4439,3763,4438,3735,4436,3719,4432,3691,4408,3696,4410,3671,4402,3651,4392,3627,4393,3615,4392,3595,4407,3588,4422,3581,4429,3557,4426,3529,4426,3518,4426,3497,4449,3502,4446,3492,4447,3460,4446,3427,4457,3422,4463,3417,4462,3383,L,4563,3383,Q,4563,3418,4647,3412,4734,3405,4742,3441,L,4902,3441,4902,3414,4998,3414,4998,3386,5099,3386,Q,5088,3372,5086,3366,5040,3323,5025,3299,4986,3255,4973,3225,4971,3219,4971,3158,4973,3147,4973,3111,L,4973,3087,Q,4973,3018,4962,3008,4951,2996,4952,2947,4952,2906,4965,2890,4973,2878,4973,2843,5015,2822,5009,2753,5011,2748,5015,2710,5019,2681,5037,2671,L,5048,2627,Q,5044,2616,5055,2609,5061,2605,5063,2600,L,5058,2524,5058,2524,Q,5048,2525,5034,2528,L,4868,2528,Q,4866,2547,4811,2548,4808,2558,4808,2569,L,4749,2569,Q,4745,2582,4745,2594,L,4697,2594,4697,2619,4646,2619,4640,2594,Q,4620,2594,4612,2591,L,4612,2569,4540,2569,Q,4551,2594,4519,2595,4481,2591,4478,2591,L,4474,2617,Q,4445,2615,4433,2617,Q,4413,2618,4418,2642,Z]],label:"Troyan",shortLabel:"TR",labelPosition:[365.5,346.5],labelAlignment:[CEN,MID]},"01":{outlines:[[M,5220,3572,Q,5188,3519,5151,3459,L,5138,3446,Q,5113,3425,5112,3402,5104,3393,5099,3386,L,4998,3386,4998,3414,4902,3414,4902,3441,4742,3441,Q,4734,3405,4647,3412,4563,3418,4563,3383,L,4462,3383,Q,4463,3417,4457,3422,4446,3427,4447,3460,4446,3492,4449,3502,4426,3497,4426,3518,4426,3529,4429,3557,4422,3581,4407,3588,4392,3595,4393,3615,4392,3627,4402,3651,4410,3671,4408,3696,4432,3691,4436,3719,4438,3735,4439,3763,4442,3773,4462,3790,4462,3825,4467,3831,4474,3841,4489,3859,L,4489,3909,Q,4497,3972,4480,3983,4468,3990,4467,4017,4467,4032,4467,4060,4444,4051,4444,4098,4444,4141,4465,4151,4464,4171,4467,4177,4473,4187,4487,4189,4488,4234,4537,4267,4583,4300,4631,4330,4656,4354,4657,4421,4656,4450,4645,4508,4634,4563,4635,4603,4636,4638,4622,4691,4610,4739,4615,4781,L,5171,4781,Q,5190,4785,5205,4763,5226,4753,5228,4735,L,5261,4735,Q,5254,4710,5288,4710,5320,4709,5310,4684,L,5353,4684,Q,5344,4657,5364,4655,5398,4650,5409,4637,5417,4626,5454,4585,5536,4503,5542,4462,L,5557,4462,5557,4436,5575,4436,Q,5578,4443,5578,4466,5582,4469,5598,4470,5611,4472,5604,4484,L,5640,4484,Q,5639,4490,5647,4508,L,5712,4508,5712,4441,Q,5743,4441,5741,4394,5737,4380,5742,4380,5755,4380,5764,4372,L,5764,4343,Q,5764,4314,5757,4309,5734,4291,5737,4282,5742,4258,5727,4249,5710,4241,5710,4231,5710,4229,5711,4228,5711,4224,5712,4222,5712,4205,5700,4194,5688,4182,5692,4167,5694,4152,5682,4138,5665,4118,5663,4110,5658,4094,5645,4085,5641,4082,5611,4079,5605,4050,5550,4054,5550,4052,5550,4014,5550,3992,5537,3987,5527,3982,5527,3910,5527,3886,5517,3880,5504,3871,5503,3856,5501,3821,5481,3789,5476,3732,5467,3724,5449,3713,5449,3706,5452,3676,5445,3672,5430,3664,5427,3610,5393,3587,5404,3560,L,5274,3560,5274,3572,Z]],label:"Apriltsi",shortLabel:"AP",labelPosition:[507.8,408.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"lovech",type:"maps"}}})});