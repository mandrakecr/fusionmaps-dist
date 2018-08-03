(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=398)})({398:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(399);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},399:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Kyzylorda.17.04-26-2016 07:57:04
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Kyzylorda",revision:17,standaloneInit:true,baseWidth:600,baseHeight:535,baseScaleFactor:10,entities:{"KZ.QO.AR":{outlines:[[M,2427,360,Q,2398,310,2357,312,2315,314,2307,290,2298,253,2285,232,2253,168,2229,130,2210,101,2190,80,2183,75,2178,70,2154,52,2130,46,2099,39,2056,41,2018,43,1994,44,1986,44,1980,44,1958,44,1899,40,1844,36,1826,36,1817,36,1789,49,1757,63,1748,79,1747,79,1747,80,1745,83,1745,86,1736,114,1716,155,1695,198,1689,227,1668,314,1640,383,1623,434,1597,528,1593,538,1589,560,1586,577,1567,603,1549,628,1546,633,1543,637,1470,635,1397,631,1365,628,1355,626,1333,613,1314,602,1300,605,1292,606,1272,593,1265,589,1248,585,L,1219,583,Q,1187,586,1183,605,1180,618,1184,666,1184,672,1185,679,1186,693,1185,712,1183,730,1185,754,1186,778,1176,803,1165,827,1165,835,1165,845,1172,857,1181,870,1183,875,1182,880,1181,887,1179,887,1126,888,1094,889,1074,887,1023,881,984,940,938,1008,910,1034,900,1043,863,1069,833,1090,821,1108,803,1133,684,1287,605,1389,555,1489,530,1539,500,1594,458,1668,430,1698,419,1711,408,1735,395,1757,366,1768,348,1775,313,1780,282,1785,267,1794,255,1801,216,1806,190,1810,176,1839,163,1868,129,1947,129,1960,115,2003,101,2045,101,2055,103,2103,99,2120,94,2139,73,2170,81,2170,153,2228,229,2290,260,2307,262,2309,264,2310,268,2317,278,2330,292,2349,303,2355,309,2359,350,2393,355,2396,374,2407,392,2416,401,2423,410,2430,443,2459,457,2467,489,2495,523,2524,535,2531,546,2537,579,2567,584,2570,606,2583,626,2596,630,2603,641,2626,676,2646,720,2673,730,2682,749,2699,776,2725,799,2747,829,2768,849,2782,880,2806,907,2826,931,2840,945,2848,974,2880,997,2906,1019,2916,1022,2917,1024,2919,1074,2965,1098,2984,1123,3004,1137,3011,1152,3018,1178,3046,1202,3073,1225,3086,1260,3106,1315,3155,1370,3205,1397,3221,1407,3226,1417,3232,1419,3230,1453,3201,1456,3200,1458,3197,1470,3184,1485,3156,1495,3136,1519,3111,1526,3103,1531,3098,1548,3080,1552,3074,1572,3044,1615,2996,1634,2973,1649,2955,1668,2932,1676,2921,1686,2906,1751,2827,1761,2815,1770,2803,1798,2764,1817,2730,1819,2726,1879,2638,1894,2616,1901,2580,1904,2559,1904,2535,1904,2487,1903,2480,1901,2441,1888,2437,1872,2432,1861,2406,1854,2391,1849,2381,1844,2371,1842,2368,L,1841,2367,Q,1804,2327,1793,2295,1786,2273,1786,2223,1786,2210,1812,2211,1824,2211,1841,2212,1847,2212,1855,2212,1855,2203,1854,2197,L,1853,2155,Q,1846,2154,1841,2151,1819,2141,1811,2117,1809,2110,1796,2088,1787,2075,1787,2058,1787,2044,1787,2043,1788,2043,1796,2036,1805,2023,1812,2020,1822,2015,1839,2016,1840,2016,1841,2016,1855,2016,1858,2013,L,1858,1919,1926,1917,Q,1930,1917,1945,1918,1961,1917,1964,1912,1982,1886,1990,1886,1992,1886,1994,1887,1999,1888,2006,1893,2019,1903,2017,1920,2014,1933,2036,1954,2052,1954,2065,1940,2078,1926,2089,1926,2107,1926,2123,1933,2140,1940,2141,1940,2144,1940,2153,1933,2161,1927,2170,1928,L,2170,1919,Q,2170,1916,2155,1896,2140,1877,2140,1857,2140,1839,2161,1801,2184,1761,2189,1748,2192,1739,2205,1724,2205,1711,2205,1703,2206,1689,2208,1686,2216,1666,2222,1661,2224,1636,2224,1621,2234,1603,2242,1587,2263,1545,2275,1522,2277,1517,2278,1511,2282,1495,2281,1465,2280,1425,2285,1408,2285,1405,2286,1404,2291,1395,2301,1379,2310,1360,2307,1347,2313,1327,2323,1310,2332,1297,2332,1286,2332,1283,2331,1278,2329,1269,2323,1258,2314,1241,2314,1220,2314,1170,2357,1106,2382,1070,2431,1003,2443,983,2454,955,2458,946,2461,937,2480,889,2485,879,2508,829,2519,817,2537,801,2575,801,2582,801,2601,808,2604,803,2645,779,2692,751,2705,722,L,2705,722,Q,2673,705,2661,701,2647,697,2641,694,2629,690,2623,683,2621,680,2620,679,2615,672,2609,668,2553,635,2566,567,2566,560,2565,556,2562,523,2541,504,2523,487,2489,449,Q,2455,411,2427,360,Z]],label:"Aral",shortLabel:"AR",labelPosition:[138.9,163.4],labelAlignment:[CEN,MID]},"KZ.QO.KR":{outlines:[[M,3247,1012,Q,3232,1012,3223,1011,3217,1009,3209,1002,3200,994,3198,993,3177,985,3169,983,3164,982,3148,970,3126,954,3122,952,3115,947,3098,944,3073,939,3060,934,3036,926,3008,905,2979,883,2969,875,2906,812,2888,794,2875,782,2855,776,2855,794,2867,813,2879,833,2879,846,L,2875,885,Q,2875,903,2880,911,2886,922,2894,942,2894,945,2895,947,L,2891,1010,Q,2891,1039,2898,1050,2904,1061,2905,1112,2905,1113,2904,1139,2903,1156,2905,1168,2905,1175,2915,1192,2924,1209,2924,1216,L,2921,1276,Q,2921,1301,2931,1322,2940,1343,2939,1377,2938,1407,2950,1432,2961,1459,2961,1476,2961,1498,2946,1509,2931,1518,2931,1543,L,2934,1567,Q,2934,1574,2926,1594,2921,1605,2911,1630,2911,1645,2897,1699,2894,1707,2885,1761,2879,1796,2861,1823,2861,1827,2860,1842,2859,1855,2851,1864,2846,1869,2827,1893,2816,1904,2814,1923,2813,1933,2813,1954,2812,1968,2813,1994,2813,2037,2813,2039,L,2813,2076,Q,2808,2084,2805,2090,2798,2100,2798,2112,2798,2119,2814,2150,2832,2184,2845,2195,2853,2201,2870,2237,2886,2271,2886,2277,2886,2292,2862,2321,2832,2359,2831,2362,2825,2373,2821,2381,2799,2424,2783,2444,2770,2448,2761,2451,2746,2458,2747,2473,L,2747,2572,Q,2747,2582,2734,2625,L,2734,2630,2736,2728,Q,2735,2761,2727,2775,2721,2782,2720,2792,2717,2799,2717,2810,2717,2855,2734,2887,2750,2918,2750,2921,2750,2926,2740,2953,2721,3e3,2672,3115,2662,3139,2651,3165,2638,3196,2629,3221,2608,3271,2599,3296,2590,3319,2582,3344,2572,3373,2563,3405,2562,3407,2561,3410,2557,3426,2543,3455,2526,3493,2523,3508,2519,3523,2506,3566,2497,3600,2494,3617,2481,3658,2481,3671,2479,3677,2472,3700,2465,3720,2462,3735,2462,3736,2459,3759,2457,3772,2449,3788,2446,3795,2446,3812,2446,3829,2440,3838,2434,3846,2411,3886,2406,3891,2402,3904,2402,3904,2401,3906,2398,3913,2393,3915,2374,3917,2366,3919,2356,3922,2348,3944,2340,3967,2337,3968,2327,3974,2320,3988,2317,3992,2316,3996,2309,4004,2305,4008,2282,4023,2273,4052,2268,4065,2241,4086,2237,4090,2218,4095,2217,4095,2216,4095,2195,4100,2192,4101,2174,4112,2169,4144,2175,4154,2187,4184,2201,4212,2216,4216,2218,4216,2221,4216,2238,4216,2273,4219,2278,4219,2332,4204,2389,4188,2401,4185,2409,4184,2433,4175,2453,4167,2464,4167,2485,4167,2496,4159,2507,4151,2525,4151,L,2601,4154,Q,2621,4154,2625,4153,2630,4152,2656,4143,2663,4140,2680,4141,2697,4140,2709,4132,2722,4123,2738,4123,2753,4122,2772,4119,2791,4115,2808,4111,2824,4105,2831,4104,2942,4110,3013,4107,3047,4104,3066,4104,L,3068,3963,Q,3069,3946,3069,3937,3069,3917,3068,3905,3066,3892,3059,3875,3053,3859,3053,3852,3053,3831,3058,3818,3066,3800,3069,3784,3069,3770,3073,3762,3079,3752,3083,3743,3084,3739,3084,3722,3084,3707,3087,3699,3086,3669,3087,3654,3088,3628,3094,3619,3107,3600,3107,3547,3106,3509,3115,3471,3126,3420,3128,3404,3151,3294,3151,3262,3151,3228,3140,3209,3134,3200,3131,3185,3131,3175,3131,3168,3131,3165,3131,3162,3132,3140,3137,3115,3140,3099,3144,3080,3158,3024,3165,2997,3165,2984,3173,2955,3181,2925,3181,2905,3181,2899,3187,2889,3193,2880,3193,2873,3192,2853,3197,2850,3198,2848,3213,2848,3225,2848,3233,2854,3242,2861,3265,2864,3276,2866,3287,2875,3293,2880,3307,2897,3316,2908,3329,2914,3352,2925,3356,2927,3394,2949,3409,2949,3421,2949,3436,2933,3452,2915,3456,2913,3471,2907,3470,2890,3469,2873,3480,2866,3496,2855,3517,2828,3538,2803,3552,2780,3677,2564,3677,2555,3677,2547,3670,2535,3663,2521,3662,2519,3658,2504,3653,2497,3646,2488,3642,2481,L,3642,2460,Q,3644,2460,3650,2463,3656,2465,3664,2465,3677,2465,3684,2449,3691,2436,3691,2422,3672,2384,3672,2367,L,3675,2342,Q,3675,2331,3666,2318,3658,2308,3658,2292,3658,2290,3658,2288,3663,2262,3663,2257,3663,2252,3654,2224,3644,2195,3644,2184,3644,2170,3633,2141,3622,2113,3622,2099,L,3625,2050,Q,3625,2031,3620,2011,3614,1991,3614,1951,3614,1909,3624,1894,3632,1879,3632,1849,3632,1817,3598,1740,3575,1690,3484,1537,3475,1505,3442,1476,3398,1437,3390,1426,3379,1410,3368,1366,3356,1321,3339,1295,3342,1267,3327,1228,3310,1182,3308,1157,3306,1138,3298,1117,3289,1096,3287,1083,3286,1072,3278,1050,3271,1026,3269,1011,Q,3261,1011,3247,1012,Z,M,3290,1749,Q,3276,1773,3280,1799,3282,1819,3272,1836,3240,1890,3182,1878,3112,1865,3109,1795,L,3141,1794,Q,3142,1792,3143,1792,3146,1790,3150,1790,3154,1789,3157,1790,L,3157,1784,3169,1784,Q,3173,1742,3171,1700,3180,1694,3190,1695,3195,1696,3198,1701,L,3205,1703,3206,1699,Q,3209,1699,3211,1699,3257,1685,3280,1724,L,3299,1729,Q,3295,1739,3290,1749,Z]],label:"Karmakshy",shortLabel:"KR",labelPosition:[315.5,238.5],labelAlignment:[CEN,MID]},"KZ.QO.KZ":{outlines:[[M,2769,780,Q,2750,790,2727,791,2685,793,2678,805,2671,816,2642,816,2631,816,2617,815,2607,813,2603,812,2601,811,2601,808,2582,801,2575,801,2537,801,2519,817,2508,829,2485,879,2480,889,2461,937,2458,946,2454,955,2443,983,2431,1003,2382,1070,2357,1106,2314,1170,2314,1220,2314,1241,2323,1258,2329,1269,2331,1278,2332,1283,2332,1286,2332,1297,2323,1310,2313,1327,2307,1347,2310,1360,2301,1379,2291,1395,2286,1404,2285,1405,2285,1408,2280,1425,2281,1465,2282,1495,2278,1511,2277,1517,2275,1522,2263,1545,2242,1587,2234,1603,2224,1621,2224,1636,2222,1661,2216,1666,2208,1686,2206,1689,2205,1703,2205,1711,2205,1724,2192,1739,2189,1748,2184,1761,2161,1801,2140,1839,2140,1857,2140,1877,2155,1896,2170,1916,2170,1919,L,2170,1928,Q,2161,1927,2153,1933,2144,1940,2141,1940,2140,1940,2123,1933,2107,1926,2089,1926,2078,1926,2065,1940,2052,1954,2036,1954,2014,1933,2017,1920,2019,1903,2006,1893,1999,1888,1994,1887,1992,1886,1990,1886,1982,1886,1964,1912,1961,1917,1945,1918,1930,1917,1926,1917,L,1858,1919,1858,2013,Q,1855,2016,1841,2016,1840,2016,1839,2016,1822,2015,1812,2020,1805,2023,1796,2036,1788,2043,1787,2043,1787,2044,1787,2058,1787,2075,1796,2088,1809,2110,1811,2117,1819,2141,1841,2151,1846,2154,1853,2155,L,1854,2197,Q,1855,2203,1855,2212,1847,2212,1841,2212,1824,2211,1812,2211,1786,2210,1786,2223,1786,2273,1793,2295,1804,2327,1841,2367,L,1842,2368,Q,1844,2371,1849,2381,1854,2391,1861,2406,1872,2432,1888,2437,1901,2441,1903,2480,1904,2487,1904,2535,1904,2559,1901,2580,1894,2616,1879,2638,1819,2726,1817,2730,1798,2764,1770,2803,1761,2815,1751,2827,1686,2906,1676,2921,1668,2932,1649,2955,1634,2973,1615,2996,1572,3044,1552,3074,1548,3080,1531,3098,1526,3103,1519,3111,1495,3136,1485,3156,1470,3184,1458,3197,1456,3200,1453,3201,1419,3230,1417,3232,1469,3263,1486,3294,1493,3307,1521,3330,1550,3355,1565,3375,1582,3399,1649,3463,1700,3513,1724,3567,1746,3593,1793,3654,1845,3723,1861,3743,1871,3752,1890,3787,1913,3825,1919,3835,1926,3845,1954,3869,1979,3891,1990,3910,2006,3943,2042,3986,2101,4058,2105,4063,L,2166,4140,Q,2167,4141,2169,4144,2174,4112,2192,4101,2195,4100,2216,4095,2217,4095,2218,4095,2237,4090,2241,4086,2268,4065,2273,4052,2282,4023,2305,4008,2309,4004,2316,3996,2317,3992,2320,3988,2327,3974,2337,3968,2340,3967,2348,3944,2356,3922,2366,3919,2374,3917,2393,3915,2398,3913,2401,3906,2402,3904,2402,3904,2406,3891,2411,3886,2434,3846,2440,3838,2446,3829,2446,3812,2446,3795,2449,3788,2457,3772,2459,3759,2462,3736,2462,3735,2465,3720,2472,3700,2479,3677,2481,3671,2481,3658,2494,3617,2497,3600,2506,3566,2519,3523,2523,3508,2526,3493,2543,3455,2557,3426,2561,3410,2562,3407,2563,3405,2572,3373,2582,3344,2590,3319,2599,3296,2608,3271,2629,3221,2638,3196,2651,3165,2662,3139,2672,3115,2721,3e3,2740,2953,2750,2926,2750,2921,2750,2918,2734,2887,2717,2855,2717,2810,2717,2799,2720,2792,2721,2782,2727,2775,2735,2761,2736,2728,L,2734,2630,Q,2733,2628,2733,2626,2733,2625,2734,2625,2747,2582,2747,2572,L,2747,2473,Q,2746,2458,2761,2451,2770,2448,2783,2444,2799,2424,2821,2381,2825,2373,2831,2362,2832,2359,2862,2321,2886,2292,2886,2277,2886,2271,2870,2237,2853,2201,2845,2195,2832,2184,2814,2150,2798,2119,2798,2112,2798,2100,2805,2090,2808,2084,2813,2076,L,2813,2039,Q,2813,2037,2813,1994,2812,1968,2813,1954,2813,1933,2814,1923,2816,1904,2827,1893,2846,1869,2851,1864,2859,1855,2860,1842,2861,1827,2861,1823,2879,1796,2885,1761,2894,1707,2897,1699,2911,1645,2911,1630,2921,1605,2926,1594,2934,1574,2934,1567,L,2931,1543,Q,2931,1518,2946,1509,2961,1498,2961,1476,2961,1459,2950,1432,2938,1407,2939,1377,2940,1343,2931,1322,2921,1301,2921,1276,L,2924,1216,Q,2924,1209,2915,1192,2905,1175,2905,1168,2903,1156,2904,1139,2905,1113,2905,1112,2904,1061,2898,1050,2891,1039,2891,1010,L,2895,947,Q,2894,945,2894,942,2886,922,2880,911,2875,903,2875,885,L,2879,846,Q,2879,833,2867,813,2855,794,2855,776,2834,769,2804,769,Q,2786,769,2769,780,Z]],label:"Kazaly",shortLabel:"KZ",labelPosition:[232.4,245.6],labelAlignment:[CEN,MID]},"KZ.QO.SY":{outlines:[[M,5242,1703,Q,5222,1706,5193,1704,5151,1701,5144,1701,5132,1701,5102,1699,5068,1698,5051,1695,L,4654,1695,Q,4642,1682,4612,1682,4577,1684,4560,1684,4539,1683,4513,1676,4488,1671,4458,1670,4440,1671,4431,1671,4416,1670,4405,1664,4399,1661,4386,1648,4374,1637,4367,1634,4354,1628,4339,1608,4324,1587,4312,1581,4299,1578,4274,1555,4244,1525,4232,1518,4173,1479,4157,1443,4130,1391,4129,1389,4113,1361,4096,1361,4077,1360,4032,1359,4007,1359,3985,1353,3946,1342,3909,1326,3896,1353,3888,1365,3877,1378,3873,1384,3867,1392,3867,1405,3867,1432,3873,1447,3879,1467,3882,1499,3885,1534,3895,1560,3902,1580,3902,1608,L,3900,1842,Q,3900,1863,3893,1883,3884,1903,3884,1911,L,3887,1950,Q,3886,1991,3880,2007,3871,2024,3868,2036,3865,2051,3865,2076,3865,2121,3874,2139,3883,2158,3883,2214,3883,2246,3873,2275,3863,2303,3863,2369,3863,2384,3861,2411,3861,2436,3865,2465,3866,2479,3875,2504,3883,2526,3882,2545,3880,2566,3887,2584,3898,2614,3898,2618,3900,2625,3909,2651,3913,2665,3916,2677,3917,2682,3917,2686,3917,2707,3915,2745,3913,2751,3904,2753,3893,2755,3892,2758,3887,2768,3877,2770,3866,2771,3861,2771,L,3861,2808,Q,3880,2820,3929,2842,L,3929,2857,Q,3917,2854,3918,2864,3919,2878,3909,2881,3902,2884,3887,2882,3870,2881,3865,2882,3851,2884,3825,2900,3800,2915,3788,2915,L,3787,2931,Q,3787,2946,3807,2966,3827,2988,3829,2995,3831,3013,3831,3040,3833,3063,3849,3088,3856,3100,3861,3115,3861,3117,3861,3119,3862,3122,3866,3149,3869,3170,3878,3192,3886,3209,3886,3225,3886,3240,3879,3273,3872,3304,3872,3311,3872,3330,3876,3365,3877,3393,3866,3407,3850,3422,3851,3462,3852,3486,3856,3552,L,3856,3616,Q,3856,3636,3854,3655,3854,3671,3859,3692,3866,3722,3868,3755,3869,3779,3866,3832,3864,3888,3875,3966,3886,4041,3884,4077,3896,4069,3909,4059,3972,4016,3995,4016,4002,4016,4007,4019,4010,4006,4022,4e3,L,4048,3985,Q,4058,3977,4072,3965,4082,3957,4094,3952,4110,3946,4122,3910,4128,3890,4146,3861,4170,3820,4211,3770,4223,3755,4244,3727,4262,3704,4273,3694,4280,3688,4285,3671,4292,3653,4298,3647,4302,3640,4340,3607,4342,3606,4353,3584,4364,3563,4372,3556,4402,3530,4416,3523,4426,3517,4432,3501,4436,3484,4439,3477,4443,3466,4459,3462,4468,3459,4485,3456,4542,3441,4549,3438,4561,3430,4561,3398,4561,3386,4551,3376,4540,3364,4539,3356,4542,3315,4553,3306,4561,3298,4561,3270,4561,3229,4550,3212,4540,3196,4497,3165,L,4469,3147,Q,4468,3146,4462,3134,4460,3132,4459,3130,4454,3125,4448,3123,4430,3121,4421,3116,4420,3116,4419,3115,4403,3107,4406,3085,L,4342,3085,Q,4346,3099,4341,3115,4338,3126,4333,3137,4318,3168,4299,3168,4287,3168,4269,3157,4262,3152,4264,3143,4266,3132,4266,3129,4266,3122,4263,3115,4259,3110,4251,3105,4232,3094,4229,3088,4221,3073,4218,3055,4217,3047,4217,3021,4216,2980,4201,2966,4188,2955,4173,2934,4158,2914,4158,2911,4158,2899,4173,2901,4173,2891,4173,2884,4173,2874,4178,2868,4184,2858,4195,2850,4202,2844,4202,2834,4202,2821,4188,2811,4165,2798,4163,2796,4151,2784,4144,2778,4135,2769,4132,2763,4130,2761,4130,2759,4121,2737,4120,2696,4117,2637,4114,2625,4111,2609,4102,2594,4089,2574,4085,2564,4076,2540,4074,2497,4077,2482,4098,2440,4120,2398,4129,2398,4133,2398,4144,2411,4153,2423,4171,2418,4198,2411,4217,2432,4224,2439,4236,2439,4244,2439,4260,2438,4269,2439,4279,2445,4288,2451,4295,2451,L,4295,2469,Q,4294,2482,4281,2492,4265,2503,4262,2509,L,4235,2557,Q,4229,2568,4217,2603,4204,2644,4204,2656,4204,2674,4219,2696,4236,2721,4254,2723,4271,2725,4302,2725,4329,2728,4346,2741,4388,2774,4404,2796,4428,2832,4427,2887,4423,2892,4427,2924,4436,2962,4458,2962,4466,2962,4494,2924,4507,2897,4535,2893,4534,2891,4534,2889,4534,2877,4566,2856,4581,2846,4606,2831,4612,2825,4634,2793,4640,2787,4640,2773,4639,2744,4639,2743,4639,2715,4647,2696,4650,2690,4669,2678,4683,2669,4677,2656,4678,2643,4702,2617,4723,2592,4728,2592,4729,2592,4754,2607,4784,2625,4809,2641,4815,2645,4830,2659,4833,2660,4843,2662,4852,2665,4855,2668,4871,2684,4896,2684,4926,2684,4940,2667,4954,2651,4959,2615,4959,2610,4969,2592,4978,2575,4977,2569,4977,2565,4977,2561,4978,2528,4974,2498,L,4985,2480,Q,4988,2474,4989,2468,4989,2465,4990,2434,4999,2413,5002,2402,5009,2384,5008,2370,5007,2355,5010,2343,5013,2336,5023,2315,5028,2303,5032,2280,5036,2260,5040,2253,5048,2242,5058,2221,5066,2198,5072,2189,5076,2182,5092,2180,5101,2178,5125,2176,5135,2174,5154,2175,5176,2176,5185,2176,5192,2175,5202,2169,5213,2165,5218,2165,L,5248,2165,Q,5248,2165,5267,2164,5288,2163,5296,2169,5317,2180,5333,2199,5339,2204,5349,2219,5356,2228,5368,2231,5392,2235,5419,2230,5417,2228,5420,2221,5436,2186,5437,2164,5435,2149,5440,2136,5442,2131,5452,2114,5454,2111,5467,2098,5478,2084,5478,2074,5478,2059,5458,2035,5436,2013,5433,2008,5429,2e3,5417,1971,5410,1954,5395,1941,5364,1914,5363,1913,5355,1903,5354,1876,5353,1863,5348,1828,5342,1799,5344,1786,5348,1741,5334,1722,Q,5312,1691,5242,1703,Z]],label:"Syrdariya",shortLabel:"SY",labelPosition:[463.2,216.1],labelAlignment:[CEN,MID]},"KZ.QO.ZL":{outlines:[[M,3575,1143,Q,3522,1134,3475,1106,3398,1059,3384,1053,3346,1034,3327,1026,3294,1011,3276,1011,3274,1011,3269,1011,3271,1026,3278,1050,3286,1072,3287,1083,3289,1096,3298,1117,3306,1138,3308,1157,3310,1182,3327,1228,3342,1267,3339,1295,3356,1321,3368,1366,3379,1410,3390,1426,3398,1437,3442,1476,3475,1505,3484,1537,3575,1690,3598,1740,3632,1817,3632,1849,3632,1879,3624,1894,3614,1909,3614,1951,3614,1991,3620,2011,3625,2031,3625,2050,L,3622,2099,Q,3622,2113,3633,2141,3644,2170,3644,2184,3644,2195,3654,2224,3663,2252,3663,2257,3663,2262,3658,2288,3658,2290,3658,2292,3658,2308,3666,2318,3675,2331,3675,2342,L,3672,2367,Q,3672,2384,3691,2422,3691,2436,3684,2449,3677,2465,3664,2465,3656,2465,3650,2463,3644,2460,3642,2460,L,3642,2481,Q,3646,2488,3653,2497,3658,2504,3662,2519,3663,2521,3670,2535,3677,2547,3677,2555,3677,2564,3552,2780,3538,2803,3517,2828,3496,2855,3480,2866,3469,2873,3470,2890,3471,2907,3456,2913,3452,2915,3436,2933,3421,2949,3409,2949,3394,2949,3356,2927,3352,2925,3329,2914,3316,2908,3307,2897,3293,2880,3287,2875,3276,2866,3265,2864,3242,2861,3233,2854,3225,2848,3213,2848,3198,2848,3197,2850,3192,2853,3193,2873,3193,2880,3187,2889,3181,2899,3181,2905,3181,2925,3173,2955,3165,2984,3165,2997,3158,3024,3144,3080,3140,3099,3137,3115,3132,3140,3131,3162,3131,3165,3131,3168,3131,3175,3131,3185,3134,3200,3140,3209,3151,3228,3151,3262,3151,3294,3128,3404,3126,3420,3115,3471,3106,3509,3107,3547,3107,3600,3094,3619,3088,3628,3087,3654,3086,3669,3087,3699,3084,3707,3084,3722,3084,3739,3083,3743,3079,3752,3073,3762,3069,3770,3069,3784,3066,3800,3058,3818,3053,3831,3053,3852,3053,3859,3059,3875,3066,3892,3068,3905,3069,3917,3069,3937,3069,3946,3068,3963,L,3066,4104,Q,3088,4101,3091,4100,3090,4099,3090,4099,L,3091,4099,Q,3102,4100,3147,4110,3198,4121,3209,4125,3213,4126,3243,4129,3265,4130,3273,4140,3283,4149,3310,4149,3326,4150,3357,4149,3363,4150,3393,4148,3421,4148,3432,4155,3449,4164,3464,4166,3474,4167,3505,4166,3518,4166,3536,4173,3558,4182,3572,4185,3599,4189,3650,4185,3725,4185,3736,4179,3740,4178,3833,4115,3842,4108,3884,4077,3886,4041,3875,3966,3864,3888,3866,3832,3869,3779,3868,3755,3866,3722,3859,3692,3854,3671,3854,3655,3856,3636,3856,3616,L,3856,3552,Q,3852,3486,3851,3462,3850,3422,3866,3407,3877,3393,3876,3365,3872,3330,3872,3311,3872,3304,3879,3273,3886,3240,3886,3225,3886,3209,3878,3192,3869,3170,3866,3149,3862,3122,3861,3119,3861,3117,3861,3115,3856,3100,3849,3088,3833,3063,3831,3040,3831,3013,3829,2995,3827,2988,3807,2966,3787,2946,3787,2931,L,3788,2915,Q,3800,2915,3825,2900,3851,2884,3865,2882,3870,2881,3887,2882,3902,2884,3909,2881,3919,2878,3918,2864,3917,2854,3929,2857,L,3929,2842,Q,3880,2820,3861,2808,L,3861,2771,Q,3866,2771,3877,2770,3887,2768,3892,2758,3893,2755,3904,2753,3913,2751,3915,2745,3917,2707,3917,2686,3917,2682,3916,2677,3913,2665,3909,2651,3900,2625,3898,2618,3898,2614,3887,2584,3880,2566,3882,2545,3883,2526,3875,2504,3866,2479,3865,2465,3861,2436,3861,2411,3863,2384,3863,2369,3863,2303,3873,2275,3883,2246,3883,2214,3883,2158,3874,2139,3865,2121,3865,2076,3865,2051,3868,2036,3871,2024,3880,2007,3886,1991,3887,1950,L,3884,1911,Q,3884,1903,3893,1883,3900,1863,3900,1842,L,3902,1608,Q,3902,1580,3895,1560,3885,1534,3882,1499,3879,1467,3873,1447,3867,1432,3867,1405,3867,1392,3873,1384,3877,1378,3888,1365,3896,1353,3909,1326,3894,1319,3880,1312,3821,1278,3781,1257,3726,1216,3694,1194,Q,3634,1153,3575,1143,Z]],label:"Zhalagash",shortLabel:"ZL",labelPosition:[349.1,338.6],labelAlignment:[CEN,MID]},"KZ.QO.ZN":{outlines:[[M,5809,3674,Q,5803,3673,5798,3671,5787,3663,5781,3661,5770,3656,5755,3633,5751,3627,5741,3599,5732,3571,5732,3565,5732,3558,5735,3554,5740,3547,5743,3540,L,5743,3523,Q,5735,3522,5693,3510,5654,3498,5643,3496,5621,3493,5600,3471,5577,3448,5556,3444,5556,3415,5556,3314,5541,3317,5522,3339,5504,3358,5490,3357,5480,3356,5474,3361,5469,3365,5465,3379,5464,3381,5456,3396,5452,3405,5452,3415,5449,3444,5441,3456,5435,3466,5424,3467,5413,3466,5408,3467,5384,3467,5370,3470,5344,3473,5331,3484,5291,3519,5263,3555,5247,3577,5219,3623,5196,3657,5176,3698,5144,3759,5144,3781,5144,3805,5153,3815,5162,3824,5162,3837,5162,3857,5149,3877,5134,3900,5133,3910,L,5133,4002,Q,5133,4094,5145,4143,5147,4148,5148,4152,5152,4237,5149,4266,5148,4272,5150,4285,5150,4296,5143,4300,5134,4306,5066,4340,4944,4396,4891,4415,L,4891,4437,Q,4893,4444,4900,4457,4905,4469,4906,4480,4906,4493,4914,4502,4921,4512,4923,4519,4925,4527,4923,4543,4922,4560,4923,4565,4924,4571,4931,4583,4938,4596,4938,4604,L,4935,4641,Q,4935,4662,4953,4689,4955,4693,4958,4712,4961,4731,4962,4734,4969,4744,4968,4760,4968,4781,4969,4784,4970,4793,4981,4808,4985,4813,4984,4834,4984,4860,4970,4870,4948,4880,4930,4891,4914,4900,4895,4916,4875,4934,4866,4939,4836,4957,4785,4999,4733,5045,4711,5060,L,4711,5107,Q,4711,5133,4706,5172,4702,5210,4702,5227,4703,5254,4688,5280,4685,5286,4682,5292,L,4712,5292,Q,4717,5297,4727,5298,4731,5298,4748,5298,4775,5298,4821,5278,4837,5269,4850,5254,4869,5231,4875,5225,4885,5215,4904,5203,4924,5189,4937,5176,4943,5171,4959,5148,4977,5127,4992,5117,5005,5110,5029,5097,5050,5083,5062,5067,5070,5054,5093,5034,5118,5012,5129,5009,5155,5e3,5189,4971,5210,4954,5257,4912,5368,4816,5382,4800,5393,4786,5415,4776,5436,4765,5451,4748,5470,4725,5481,4718,5481,4717,5520,4698,5573,4671,5666,4608,5700,4584,5742,4566,5760,4556,5766,4531,5768,4519,5768,4505,5768,4500,5760,4482,5751,4463,5750,4459,5749,4456,5749,4441,5750,4427,5746,4421,5745,4419,5719,4388,5706,4371,5706,4350,5706,4330,5719,4297,5729,4268,5744,4244,5747,4239,5779,4203,5782,4199,5781,4182,5781,4172,5781,4165,L,5779,4165,Q,5779,4161,5778,4156,5777,4148,5773,4140,5766,4126,5766,4125,5766,4115,5774,4086,5781,4056,5781,4039,5800,4037,5818,4055,5837,4073,5836,4090,L,5857,4090,Q,5854,3961,5879,3925,5889,3911,5886,3882,5881,3852,5881,3840,5892,3829,5915,3814,5925,3807,5925,3785,L,5925,3784,Q,5924,3769,5912,3748,5898,3725,5883,3720,5863,3716,5849,3711,5845,3709,5837,3695,5829,3681,5822,3677,Q,5816,3674,5809,3674,Z]],label:"Zhanakorgan",shortLabel:"ZN",labelPosition:[537.1,430.6],labelAlignment:[CEN,MID]},"KZ.QO.SH":{outlines:[[M,5125,2176,Q,5101,2178,5092,2180,5076,2182,5072,2189,5066,2198,5058,2221,5048,2242,5040,2253,5036,2260,5032,2280,5028,2303,5023,2315,5013,2336,5010,2343,5007,2355,5008,2370,5009,2384,5002,2402,4999,2413,4990,2434,4989,2465,4989,2468,4988,2474,4985,2480,L,4974,2498,Q,4978,2528,4977,2561,4977,2565,4977,2569,4978,2575,4969,2592,4959,2610,4959,2615,4954,2651,4940,2667,4926,2684,4896,2684,4871,2684,4855,2668,4852,2665,4843,2662,4833,2660,4830,2659,4815,2645,4809,2641,4784,2625,4754,2607,4729,2592,4728,2592,4723,2592,4702,2617,4678,2643,4677,2656,4683,2669,4669,2678,4650,2690,4647,2696,4639,2715,4639,2743,4639,2744,4640,2773,4640,2787,4634,2793,4612,2825,4606,2831,4581,2846,4566,2856,4534,2877,4534,2889,4534,2891,4535,2893,4507,2897,4494,2924,4466,2962,4458,2962,4436,2962,4427,2924,4423,2892,4427,2887,4428,2832,4404,2796,4388,2774,4346,2741,4329,2728,4302,2725,4271,2725,4254,2723,4236,2721,4219,2696,4204,2674,4204,2656,4204,2644,4217,2603,4229,2568,4235,2557,L,4262,2509,Q,4265,2503,4281,2492,4294,2482,4295,2469,L,4295,2451,Q,4288,2451,4279,2445,4269,2439,4260,2438,4244,2439,4236,2439,4224,2439,4217,2432,4198,2411,4171,2418,4153,2423,4144,2411,4133,2398,4129,2398,4120,2398,4098,2440,4077,2482,4074,2497,4076,2540,4085,2564,4089,2574,4102,2594,4111,2609,4114,2625,4117,2637,4120,2696,4121,2737,4130,2759,4130,2761,4132,2763,4135,2769,4144,2778,4151,2784,4163,2796,4165,2798,4188,2811,4202,2821,4202,2834,4202,2844,4195,2850,4184,2858,4178,2868,4173,2874,4173,2884,4173,2891,4173,2901,4158,2899,4158,2911,4158,2914,4173,2934,4188,2955,4201,2966,4216,2980,4217,3021,4217,3047,4218,3055,4221,3073,4229,3088,4232,3094,4251,3105,4259,3110,4263,3115,4266,3122,4266,3129,4266,3132,4264,3143,4262,3152,4269,3157,4287,3168,4299,3168,4318,3168,4333,3137,4338,3126,4341,3115,4346,3099,4342,3085,L,4406,3085,Q,4403,3107,4419,3115,4420,3116,4421,3116,4430,3121,4448,3123,4454,3125,4459,3130,4460,3132,4462,3134,4468,3146,4469,3147,L,4497,3165,Q,4540,3196,4550,3212,4561,3229,4561,3270,4561,3298,4553,3306,4542,3315,4539,3356,4540,3364,4551,3376,4561,3386,4561,3398,4561,3430,4549,3438,4542,3441,4485,3456,4468,3459,4459,3462,4443,3466,4439,3477,4436,3484,4432,3501,4426,3517,4416,3523,4402,3530,4372,3556,4364,3563,4353,3584,4342,3606,4340,3607,4302,3640,4298,3647,4292,3653,4285,3671,4280,3688,4273,3694,4262,3704,4244,3727,4223,3755,4211,3770,4170,3820,4146,3861,4128,3890,4122,3910,4110,3946,4094,3952,4082,3957,4072,3965,4058,3977,4048,3985,L,4022,4e3,Q,4010,4006,4007,4019,4011,4022,4013,4027,4022,4044,4029,4051,L,4063,4085,Q,4076,4103,4093,4124,4107,4144,4122,4175,4131,4195,4154,4225,4177,4256,4181,4270,4184,4284,4208,4307,4231,4329,4240,4336,4311,4375,4349,4416,4398,4471,4431,4563,4450,4616,4491,4706,4523,4784,4526,4852,L,4560,4852,Q,4567,4848,4598,4828,4625,4812,4644,4804,4652,4800,4683,4769,4714,4740,4716,4740,4721,4740,4728,4742,L,4728,4888,Q,4711,4922,4711,4993,L,4711,5060,Q,4733,5045,4785,4999,4836,4957,4866,4939,4875,4934,4895,4916,4914,4900,4930,4891,4948,4880,4970,4870,4984,4860,4984,4834,4985,4813,4981,4808,4970,4793,4969,4784,4968,4781,4968,4760,4969,4744,4962,4734,4961,4731,4958,4712,4955,4693,4953,4689,4935,4662,4935,4641,L,4938,4604,Q,4938,4596,4931,4583,4924,4571,4923,4565,4922,4560,4923,4543,4925,4527,4923,4519,4921,4512,4914,4502,4906,4493,4906,4480,4905,4469,4900,4457,4893,4444,4891,4437,L,4891,4415,Q,4944,4396,5066,4340,5134,4306,5143,4300,5150,4296,5150,4285,5148,4272,5149,4266,5152,4237,5148,4152,5147,4148,5145,4143,5133,4094,5133,4002,L,5133,3910,Q,5134,3900,5149,3877,5162,3857,5162,3837,5162,3824,5153,3815,5144,3805,5144,3781,5144,3759,5176,3698,5196,3657,5219,3623,5247,3577,5263,3555,5291,3519,5331,3484,5344,3473,5370,3470,5384,3467,5408,3467,5413,3466,5424,3467,5435,3466,5441,3456,5449,3444,5452,3415,5452,3405,5456,3396,5464,3381,5465,3379,5469,3365,5474,3361,5480,3356,5490,3357,5504,3358,5522,3339,5541,3317,5556,3314,5555,3236,5555,3115,5554,2937,5553,2665,5532,2663,5488,2665,5477,2665,5470,2653,5463,2640,5460,2637,L,5441,2616,Q,5434,2609,5416,2586,5399,2565,5389,2556,5362,2533,5360,2527,5358,2523,5358,2492,5358,2472,5361,2466,5365,2456,5384,2450,5398,2444,5399,2425,5397,2403,5397,2395,5397,2380,5401,2336,5406,2293,5405,2280,5404,2260,5419,2230,5392,2235,5368,2231,5356,2228,5349,2219,5339,2204,5333,2199,5317,2180,5296,2169,5288,2163,5267,2164,5248,2165,5248,2165,L,5218,2165,Q,5213,2165,5202,2169,5192,2175,5185,2176,5176,2176,5154,2175,Q,5135,2174,5125,2176,Z]],label:"Shieli",shortLabel:"SH",labelPosition:[478.1,361.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"kyzylorda",type:"maps"}}})});