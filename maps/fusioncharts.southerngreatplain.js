(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=214)})({214:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(215);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},215:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.SouthernGreatPlain.18.08-13-2012 03:01:42
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"SouthernGreatPlain",revision:18,standaloneInit:true,baseWidth:600,baseHeight:416,baseScaleFactor:10,entities:{"01":{outlines:[[M,2731,732,Q,2712,756,2690,770,2685,774,2678,777,2670,781,2645,791,2635,795,2614,798,2577,805,2561,832,2559,839,2556,845,2554,850,2550,850,2484,870,2414,876,2392,878,2368,870,2342,861,2331,845,2325,835,2310,825,2305,822,2297,824,2279,829,2272,863,2262,910,2243,951,2231,980,2198,992,2187,997,2170,990,2158,961,2159,956,2158,949,2157,941,2154,928,2154,917,2139,918,2129,921,2119,925,2108,925,2099,925,2094,921,2048,894,2007,859,1977,835,1944,815,1909,795,1871,780,1837,765,1830,743,1827,734,1826,727,1822,703,1821,679,1819,666,1798,669,1771,672,1744,665,1740,665,1740,657,1740,652,1741,648,1785,563,1710,514,1680,494,1634,489,1597,487,1562,473,1553,470,1545,466,1525,504,1504,545,1502,549,1501,553,1498,588,1483,614,1463,644,1426,644,1399,644,1368,631,1364,628,1358,635,1352,645,1341,649,1336,652,1334,658,1327,687,1305,695,1260,711,1215,727,1177,743,1140,746,1118,747,1112,723,1102,676,1124,631,1139,601,1163,575,1170,569,1170,560,1167,526,1190,523,1201,521,1195,505,1183,473,1136,453,1130,450,1129,442,1129,410,1112,392,1102,383,1088,385,1043,390,999,400,976,406,964,420,932,454,917,499,913,509,910,521,906,540,894,550,877,566,862,548,858,542,849,538,795,514,790,569,790,573,790,577,788,611,773,627,767,632,760,637,754,639,746,640,719,638,696,652,691,656,684,659,674,663,665,671,650,687,619,700,603,707,597,704,556,676,510,654,468,634,422,641,418,641,414,641,411,641,408,641,388,673,372,706,367,720,366,736,361,775,388,806,402,822,406,846,406,850,405,854,389,893,392,941,395,973,398,1006,402,1048,398,1091,331,1146,316,1209,316,1214,312,1218,297,1232,286,1247,306,1249,314,1262,320,1269,324,1276,330,1284,337,1296,357,1330,368,1368,371,1376,377,1380,391,1392,405,1402,430,1420,431,1456,431,1464,428,1470,421,1481,425,1502,426,1510,429,1518,430,1526,433,1533,438,1546,455,1556,462,1561,470,1561,508,1563,513,1605,518,1653,505,1695,485,1757,440,1808,411,1843,380,1880,360,1904,312,1902,257,1901,231,1928,224,1933,218,1941,213,1946,213,1953,213,1977,214,2001,217,2038,227,2071,228,2076,228,2080,231,2101,238,2120,244,2136,247,2151,248,2160,251,2165,282,2223,302,2285,312,2314,314,2341,320,2386,320,2405,319,2457,319,2508,319,2527,316,2547,305,2607,274,2659,269,2666,267,2675,264,2681,259,2687,249,2700,254,2730,255,2741,259,2751,269,2780,286,2809,292,2817,298,2822,314,2840,324,2865,327,2872,330,2874,339,2879,333,2894,324,2912,326,2943,327,2954,330,2964,343,3001,313,3015,307,3018,303,3022,285,3043,274,3029,257,3007,244,2981,238,2968,217,2977,212,2978,207,2980,153,2997,180,3046,185,3053,189,3059,210,3086,209,3117,189,3117,169,3117,162,3117,158,3121,138,3145,121,3172,153,3176,177,3191,213,3212,218,3247,227,3292,209,3315,197,3330,182,3343,153,3370,118,3387,77,3407,59,3425,54,3429,52,3435,28,3489,66,3534,L,66,3535,Q,77,3538,90,3540,94,3541,97,3544,133,3571,160,3616,166,3623,167,3632,176,3670,180,3711,180,3715,183,3721,193,3742,189,3774,166,3791,158,3813,156,3818,152,3821,139,3833,143,3861,152,3926,120,3978,117,3984,115,3989,108,4019,135,4045,169,4074,166,4117,176,4108,200,4117,238,4129,258,4107,265,4101,272,4097,307,4080,337,4059,348,4050,361,4046,371,4042,381,4046,404,4053,431,4060,439,4062,446,4065,470,4070,494,4075,502,4048,500,4011,497,3970,520,3960,539,3950,565,3937,569,3936,571,3930,573,3916,583,3910,625,3882,633,3828,636,3808,639,3789,648,3742,692,3735,701,3734,705,3737,719,3746,735,3762,749,3776,746,3804,743,3827,750,3845,766,3879,811,3881,826,3881,841,3886,860,3895,873,3898,882,3900,885,3905,890,3912,906,3910,956,3907,1002,3892,1036,3881,1060,3850,1084,3821,1105,3789,1150,3721,1222,3718,1231,3718,1235,3714,1249,3705,1276,3700,1282,3698,1285,3698,1324,3694,1348,3677,1353,3674,1358,3673,1365,3670,1368,3666,1392,3639,1415,3608,1447,3562,1500,3547,1518,3540,1531,3529,1535,3524,1535,3520,1535,3493,1545,3479,1550,3473,1552,3465,1553,3444,1560,3431,1577,3401,1591,3369,1620,3298,1712,3312,1720,3313,1727,3318,1736,3322,1751,3319,1760,3318,1768,3317,1791,3314,1809,3301,1836,3283,1870,3273,1874,3271,1879,3270,1901,3266,1924,3267,L,1924,3265,Q,1925,3260,1921,3254,1910,3240,1905,3226,1897,3193,1893,3158,1886,3110,1869,3062,1850,3015,1835,2966,1833,2959,1838,2952,1850,2936,1877,2936,1886,2936,1891,2939,1912,2950,1925,2943,1946,2945,1952,2929,1960,2908,1949,2896,1936,2885,1910,2884,1905,2884,1900,2882,1894,2879,1890,2875,1881,2868,1874,2860,1860,2841,1876,2823,1890,2809,1905,2800,1934,2786,1963,2775,1969,2773,1973,2772,1980,2769,1987,2767,2007,2758,2036,2776,2044,2782,2050,2779,2091,2765,2128,2740,2143,2729,2157,2727,2190,2722,2225,2728,2233,2730,2242,2730,2250,2680,2306,2662,2340,2649,2343,2626,2344,2619,2347,2617,2357,2612,2352,2595,2349,2587,2343,2583,2318,2570,2325,2532,2328,2510,2335,2492,2345,2461,2340,2430,2332,2377,2313,2327,2306,2310,2289,2303,2282,2302,2280,2305,2253,2366,2210,2421,2178,2375,2159,2322,2146,2287,2153,2249,2163,2201,2193,2165,2222,2133,2256,2103,2289,2078,2313,2041,2333,2114,2392,2161,2396,2164,2401,2165,2416,2171,2424,2182,2439,2199,2474,2192,2470,2130,2518,2106,2545,2092,2555,2064,2557,2058,2560,2055,2576,2046,2564,2017,2546,1966,2546,1915,2546,1849,2580,1788,2587,1774,2590,1741,2590,1733,2594,1726,2604,1707,2589,1687,2563,1658,2533,1631,2518,1616,2538,1601,2557,1585,2577,1560,2583,1554,2583,1549,2594,1501,2621,1471,2646,1444,2676,1416,2684,1409,2685,1399,2680,1398,2676,1398,2640,1392,2674,1373,2663,1357,2647,1351,2607,1338,2573,1324,2566,1321,2561,1317,2542,1294,2526,1266,2539,1262,2549,1256,2605,1222,2656,1183,2676,1167,2695,1152,2700,1147,2709,1146,2728,1143,2741,1132,2776,1099,2803,1060,2847,1001,2890,942,2867,942,2843,944,2803,946,2764,942,2755,942,2752,925,2748,883,2771,870,2779,867,2785,860,2805,840,2825,805,2827,799,2823,794,2788,754,2740,736,Q,2735,734,2731,732,Z]],label:"Bács-Kiskun",shortLabel:"BK",labelPosition:[126.5,225.3],labelAlignment:[CEN,MID]},"02":{outlines:[[M,4806,150,Q,4792,163,4780,180,4766,200,4742,207,4738,209,4734,208,4700,202,4677,166,4676,161,4673,157,4655,101,4648,38,4640,55,4632,71,4621,91,4604,99,4566,144,4530,190,4524,197,4520,204,4517,209,4513,210,4500,212,4490,215,4456,224,4434,244,4430,248,4428,253,4425,260,4421,263,4400,282,4370,286,4340,289,4322,306,4315,311,4315,316,4315,340,4329,360,4348,386,4366,413,4370,419,4366,423,4355,443,4339,459,4315,483,4298,515,4307,531,4315,545,4319,553,4320,560,4319,565,4318,570,4315,577,4312,577,4295,584,4283,594,4260,613,4243,638,4233,656,4220,657,4176,656,4131,644,4102,637,4078,648,4051,661,4049,689,4046,731,4056,775,4058,782,4052,791,4051,795,4047,796,4029,806,4008,825,4003,830,4004,835,4022,881,4044,927,4046,934,4047,941,4046,965,4044,987,4042,992,4041,997,4035,1024,4007,1024,3964,1024,3929,1038,3923,1040,3919,1040,3898,1043,3880,1048,3873,1051,3866,1054,3846,1064,3809,1061,3802,1059,3796,1055,3752,1025,3714,1011,3679,997,3667,1020,3657,1040,3652,1051,3640,1081,3595,1072,3591,1071,3587,1071,3580,1071,3571,1071,3547,1069,3537,1089,3532,1102,3528,1116,3525,1123,3520,1128,3516,1134,3509,1140,3472,1167,3437,1194,3406,1219,3412,1257,3413,1266,3416,1272,3431,1311,3458,1346,L,3460,1345,Q,3472,1352,3482,1360,3541,1404,3547,1480,3547,1495,3554,1504,3570,1491,3602,1491,3606,1492,3611,1491,3649,1482,3690,1477,3715,1474,3725,1484,3730,1488,3737,1488,3785,1489,3803,1522,3793,1551,3780,1571,3761,1602,3755,1632,3745,1686,3747,1741,3750,1796,3743,1852,3738,1887,3728,1922,3725,1937,3733,1943,3737,1946,3740,1953,3754,1979,3790,2003,3796,2006,3799,2010,3816,2034,3820,2065,3820,2069,3820,2073,3812,2124,3833,2141,3860,2161,3894,2177,3899,2179,3902,2185,3908,2201,3898,2205,3895,2208,3892,2214,3878,2238,3864,2263,3847,2293,3833,2311,3806,2346,3796,2375,3792,2384,3792,2397,3792,2423,3768,2444,3751,2459,3738,2476,3731,2486,3725,2495,3721,2500,3721,2508,3717,2556,3731,2586,3742,2608,3725,2623,3721,2628,3721,2635,3721,2643,3724,2645,3776,2670,3832,2691,3880,2710,3928,2713,3943,2714,3959,2699,3979,2679,3993,2662,3998,2656,4005,2650,4029,2633,4062,2638,4073,2638,4087,2646,4103,2656,4110,2675,4119,2697,4148,2697,4152,2698,4155,2706,4161,2721,4152,2733,4148,2738,4145,2744,4141,2751,4137,2756,4133,2762,4130,2767,4118,2783,4111,2802,4097,2834,4111,2871,4115,2885,4123,2890,4128,2895,4136,2902,4141,2908,4148,2909,4181,2912,4182,2952,4183,2973,4194,2983,4199,2981,4203,2979,4227,2963,4267,2947,4273,2946,4276,2946,4317,2940,4346,2960,4358,2967,4379,2970,4383,2970,4387,2970,4396,2970,4403,2969,4414,2966,4427,2963,4461,2957,4498,2949,4507,2947,4537,2947,4564,2947,4578,2957,4595,2971,4624,2979,4632,2981,4633,2984,4639,2994,4656,2994,4676,2993,4697,3003,4732,3017,4775,3014,4787,3014,4797,3010,4830,2998,4848,2973,4889,2919,4933,2870,4948,2851,4980,2853,5019,2855,5048,2841,5052,2840,5052,2816,5052,2789,5056,2761,5063,2725,5062,2689,5060,2631,5080,2601,5098,2576,5118,2552,5138,2527,5169,2505,5188,2509,5210,2505,5226,2500,5251,2494,5258,2491,5264,2488,5284,2479,5294,2451,5303,2425,5310,2397,5312,2391,5314,2385,5316,2363,5316,2341,5316,2305,5301,2276,5285,2246,5260,2219,5241,2199,5233,2172,5229,2160,5230,2144,5231,2121,5243,2114,5250,2111,5256,2109,5261,2104,5267,2098,5282,2079,5287,2056,5299,2e3,5301,1929,5301,1926,5302,1921,5305,1915,5309,1909,5343,1870,5400,1850,5425,1840,5471,1839,5475,1839,5480,1840,5490,1843,5502,1840,5507,1839,5510,1834,5523,1814,5531,1802,5534,1796,5537,1789,5562,1737,5601,1695,5648,1641,5704,1593,5736,1566,5749,1529,5752,1523,5742,1509,5736,1502,5731,1498,5725,1495,5718,1492,5688,1475,5664,1451,5660,1448,5662,1440,5667,1389,5664,1337,5664,1332,5664,1328,5660,1305,5660,1281,5660,1273,5656,1270,5649,1264,5654,1250,5657,1246,5657,1242,5657,1216,5677,1202,5705,1187,5731,1168,5767,1143,5807,1123,5858,1098,5880,1068,5872,1045,5871,1020,5870,1016,5869,1010,5862,987,5867,980,5886,948,5914,931,5936,918,5953,901,5937,901,5922,901,5893,901,5868,893,5822,878,5780,880,5715,882,5649,901,5581,921,5565,877,5544,816,5478,815,5458,815,5439,811,5376,799,5311,790,5261,782,5214,767,5193,760,5174,740,5147,712,5124,680,5090,632,5093,579,5094,562,5124,546,5182,518,5233,483,5228,478,5223,477,5217,474,5213,470,5197,451,5199,429,5202,399,5210,368,5217,344,5203,331,5166,296,5113,280,5031,256,4946,241,4925,236,4908,225,Q,4857,190,4806,150,Z]],label:"Békés",shortLabel:"BE",labelPosition:[468.2,152.6],labelAlignment:[CEN,MID]},"03":{outlines:[[M,3459,1347,Q,3435,1413,3396,1436,3389,1440,3382,1443,3359,1454,3318,1447,3276,1441,3245,1461,3239,1464,3233,1467,3204,1487,3160,1494,3129,1498,3114,1485,3109,1479,3102,1474,3096,1467,3091,1461,3085,1457,3079,1450,3051,1420,3033,1389,3e3,1393,2986,1424,2981,1433,2980,1440,2977,1481,2987,1519,2990,1528,2989,1533,2983,1564,2969,1583,2966,1587,2962,1587,2921,1600,2918,1566,2914,1525,2874,1495,2871,1492,2867,1491,2858,1488,2853,1492,2847,1496,2840,1501,2830,1511,2822,1521,2816,1527,2810,1530,2803,1534,2798,1539,2785,1544,2765,1540,2760,1539,2758,1533,2750,1502,2739,1464,2737,1457,2734,1448,2725,1407,2685,1399,2684,1409,2676,1416,2646,1444,2621,1471,2594,1501,2583,1549,2583,1554,2577,1560,2557,1585,2538,1601,2518,1616,2533,1631,2563,1658,2589,1687,2604,1707,2594,1726,2590,1733,2590,1741,2587,1774,2580,1788,2546,1849,2546,1915,2546,1966,2564,2017,2576,2046,2560,2055,2557,2058,2555,2064,2545,2092,2518,2106,2470,2130,2474,2192,2439,2199,2424,2182,2416,2171,2401,2165,2396,2164,2392,2161,2333,2114,2313,2041,2289,2078,2256,2103,2222,2133,2193,2165,2163,2201,2153,2249,2146,2287,2159,2322,2178,2375,2210,2421,2253,2366,2280,2305,2282,2302,2289,2303,2306,2310,2313,2327,2332,2377,2340,2430,2345,2461,2335,2492,2328,2510,2325,2532,2318,2570,2343,2583,2349,2587,2352,2595,2357,2612,2347,2617,2344,2619,2343,2626,2340,2649,2306,2662,2250,2680,2242,2730,2233,2730,2225,2728,2190,2722,2157,2727,2143,2729,2128,2740,2091,2765,2050,2779,2044,2782,2036,2776,2007,2758,1987,2767,1980,2769,1973,2772,1969,2773,1963,2775,1934,2786,1905,2800,1890,2809,1876,2823,1860,2841,1874,2860,1881,2868,1890,2875,1894,2879,1900,2882,1905,2884,1910,2884,1936,2885,1949,2896,1960,2908,1952,2929,1946,2945,1925,2943,1912,2950,1891,2939,1886,2936,1877,2936,1850,2936,1838,2952,1833,2959,1835,2966,1850,3015,1869,3062,1886,3110,1893,3158,1897,3193,1905,3226,1910,3240,1921,3254,1925,3260,1924,3265,L,1924,3267,Q,2e3,3267,2068,3308,2092,3322,2108,3343,2139,3387,2171,3410,2193,3425,2220,3423,2228,3421,2235,3421,2251,3421,2251,3410,2251,3386,2255,3362,2255,3357,2256,3353,2259,3339,2267,3333,2274,3330,2280,3333,L,2290,3338,Q,2301,3336,2309,3336,2313,3335,2316,3336,2321,3337,2324,3339,2332,3340,2345,3338,2385,3326,2409,3291,2413,3287,2417,3286,2436,3278,2456,3280,2523,3282,2590,3298,2622,3306,2655,3319,2662,3322,2669,3321,2707,3318,2741,3307,2754,3302,2762,3307,2781,3315,2799,3321,2849,3339,2900,3335,2914,3335,2941,3325,2950,3322,2962,3326,2980,3332,2994,3353,3023,3390,3058,3411,3089,3429,3119,3414,3153,3397,3185,3375,3212,3357,3248,3353,3276,3350,3300,3339,3317,3332,3342,3329,3358,3326,3372,3321,3377,3318,3382,3317,3411,3311,3421,3312,3430,3314,3436,3317,3469,3326,3494,3335,3501,3338,3502,3341,3508,3350,3525,3348,3533,3346,3537,3342,3543,3337,3550,3333,3570,3321,3590,3309,3623,3287,3660,3271,3699,3256,3738,3256,3778,3256,3814,3273,3821,3275,3826,3283,3829,3287,3830,3292,3834,3308,3844,3319,3861,3337,3884,3348,3909,3357,3932,3349,3991,3326,4032,3278,4062,3243,4090,3205,4114,3175,4150,3154,4154,3152,4157,3150,4165,3144,4171,3137,4185,3120,4182,3093,4179,3060,4175,3029,4171,2997,4191,2984,4192,2983,4194,2983,4183,2973,4182,2952,4181,2912,4148,2909,4141,2908,4136,2902,4128,2895,4123,2890,4115,2885,4111,2871,4097,2834,4111,2802,4118,2783,4130,2767,4133,2762,4137,2756,4141,2751,4145,2744,4148,2738,4152,2733,4161,2721,4155,2706,4152,2698,4148,2697,4119,2697,4110,2675,4103,2656,4087,2646,4073,2638,4062,2638,4029,2633,4005,2650,3998,2656,3993,2662,3979,2679,3959,2699,3943,2714,3928,2713,3880,2710,3832,2691,3776,2670,3724,2645,3721,2643,3721,2635,3721,2628,3725,2623,3742,2608,3731,2586,3717,2556,3721,2508,3721,2500,3725,2495,3731,2486,3738,2476,3751,2459,3768,2444,3792,2423,3792,2397,3792,2384,3796,2375,3806,2346,3833,2311,3847,2293,3864,2263,3878,2238,3892,2214,3895,2208,3898,2205,3908,2201,3902,2185,3899,2179,3894,2177,3860,2161,3833,2141,3812,2124,3820,2073,3820,2069,3820,2065,3816,2034,3799,2010,3796,2006,3790,2003,3754,1979,3740,1953,3737,1946,3733,1943,3725,1937,3728,1922,3738,1887,3743,1852,3750,1796,3747,1741,3745,1686,3755,1632,3761,1602,3780,1571,3793,1551,3803,1522,3785,1489,3737,1488,3730,1488,3725,1484,3715,1474,3690,1477,3649,1482,3611,1491,3606,1492,3602,1491,3570,1491,3554,1504,3547,1495,3547,1480,3541,1404,3482,1360,Q,3467,1358,3459,1347,Z]],label:"Csongrád",shortLabel:"CS",labelPosition:[301.4,238.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"southerngreatplain",type:"maps"}}})});