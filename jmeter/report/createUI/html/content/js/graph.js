/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1499.0, "minX": 0.0, "maxY": 34766.0, "series": [{"data": [[0.0, 1499.0], [0.1, 1499.0], [0.2, 1499.0], [0.3, 1631.0], [0.4, 1631.0], [0.5, 1641.0], [0.6, 1641.0], [0.7, 1641.0], [0.8, 1641.0], [0.9, 1641.0], [1.0, 1738.0], [1.1, 1738.0], [1.2, 1738.0], [1.3, 1755.0], [1.4, 1755.0], [1.5, 1760.0], [1.6, 1760.0], [1.7, 1760.0], [1.8, 1769.0], [1.9, 1769.0], [2.0, 1771.0], [2.1, 1771.0], [2.2, 1771.0], [2.3, 1806.0], [2.4, 1806.0], [2.5, 1834.0], [2.6, 1834.0], [2.7, 1834.0], [2.8, 1874.0], [2.9, 1874.0], [3.0, 1916.0], [3.1, 1916.0], [3.2, 1916.0], [3.3, 1932.0], [3.4, 1932.0], [3.5, 1938.0], [3.6, 1938.0], [3.7, 1938.0], [3.8, 1996.0], [3.9, 1996.0], [4.0, 2000.0], [4.1, 2000.0], [4.2, 2000.0], [4.3, 2029.0], [4.4, 2029.0], [4.5, 2084.0], [4.6, 2084.0], [4.7, 2084.0], [4.8, 2096.0], [4.9, 2096.0], [5.0, 2127.0], [5.1, 2127.0], [5.2, 2127.0], [5.3, 2193.0], [5.4, 2193.0], [5.5, 2207.0], [5.6, 2207.0], [5.7, 2207.0], [5.8, 2208.0], [5.9, 2208.0], [6.0, 2225.0], [6.1, 2225.0], [6.2, 2225.0], [6.3, 2228.0], [6.4, 2228.0], [6.5, 2238.0], [6.6, 2238.0], [6.7, 2238.0], [6.8, 2240.0], [6.9, 2240.0], [7.0, 2242.0], [7.1, 2242.0], [7.2, 2242.0], [7.3, 2242.0], [7.4, 2242.0], [7.5, 2254.0], [7.6, 2254.0], [7.7, 2254.0], [7.8, 2261.0], [7.9, 2261.0], [8.0, 2271.0], [8.1, 2271.0], [8.2, 2271.0], [8.3, 2279.0], [8.4, 2279.0], [8.5, 2283.0], [8.6, 2283.0], [8.7, 2283.0], [8.8, 2289.0], [8.9, 2289.0], [9.0, 2295.0], [9.1, 2295.0], [9.2, 2295.0], [9.3, 2299.0], [9.4, 2299.0], [9.5, 2322.0], [9.6, 2322.0], [9.7, 2322.0], [9.8, 2325.0], [9.9, 2325.0], [10.0, 2332.0], [10.1, 2332.0], [10.2, 2332.0], [10.3, 2335.0], [10.4, 2335.0], [10.5, 2355.0], [10.6, 2355.0], [10.7, 2355.0], [10.8, 2360.0], [10.9, 2360.0], [11.0, 2378.0], [11.1, 2378.0], [11.2, 2378.0], [11.3, 2386.0], [11.4, 2386.0], [11.5, 2390.0], [11.6, 2390.0], [11.7, 2390.0], [11.8, 2392.0], [11.9, 2392.0], [12.0, 2393.0], [12.1, 2393.0], [12.2, 2393.0], [12.3, 2394.0], [12.4, 2394.0], [12.5, 2396.0], [12.6, 2396.0], [12.7, 2396.0], [12.8, 2401.0], [12.9, 2401.0], [13.0, 2402.0], [13.1, 2402.0], [13.2, 2402.0], [13.3, 2410.0], [13.4, 2410.0], [13.5, 2447.0], [13.6, 2447.0], [13.7, 2447.0], [13.8, 2450.0], [13.9, 2450.0], [14.0, 2456.0], [14.1, 2456.0], [14.2, 2456.0], [14.3, 2467.0], [14.4, 2467.0], [14.5, 2472.0], [14.6, 2472.0], [14.7, 2472.0], [14.8, 2479.0], [14.9, 2479.0], [15.0, 2490.0], [15.1, 2490.0], [15.2, 2490.0], [15.3, 2491.0], [15.4, 2491.0], [15.5, 2491.0], [15.6, 2491.0], [15.7, 2491.0], [15.8, 2496.0], [15.9, 2496.0], [16.0, 2510.0], [16.1, 2510.0], [16.2, 2510.0], [16.3, 2510.0], [16.4, 2510.0], [16.5, 2516.0], [16.6, 2516.0], [16.7, 2516.0], [16.8, 2522.0], [16.9, 2522.0], [17.0, 2523.0], [17.1, 2523.0], [17.2, 2523.0], [17.3, 2533.0], [17.4, 2533.0], [17.5, 2549.0], [17.6, 2549.0], [17.7, 2549.0], [17.8, 2559.0], [17.9, 2559.0], [18.0, 2586.0], [18.1, 2586.0], [18.2, 2586.0], [18.3, 2588.0], [18.4, 2588.0], [18.5, 2594.0], [18.6, 2594.0], [18.7, 2594.0], [18.8, 2612.0], [18.9, 2612.0], [19.0, 2635.0], [19.1, 2635.0], [19.2, 2635.0], [19.3, 2667.0], [19.4, 2667.0], [19.5, 2675.0], [19.6, 2675.0], [19.7, 2675.0], [19.8, 2679.0], [19.9, 2679.0], [20.0, 2688.0], [20.1, 2688.0], [20.2, 2688.0], [20.3, 2690.0], [20.4, 2690.0], [20.5, 2691.0], [20.6, 2691.0], [20.7, 2691.0], [20.8, 2706.0], [20.9, 2706.0], [21.0, 2719.0], [21.1, 2719.0], [21.2, 2719.0], [21.3, 2747.0], [21.4, 2747.0], [21.5, 2755.0], [21.6, 2755.0], [21.7, 2755.0], [21.8, 2757.0], [21.9, 2757.0], [22.0, 2759.0], [22.1, 2759.0], [22.2, 2759.0], [22.3, 2762.0], [22.4, 2762.0], [22.5, 2770.0], [22.6, 2770.0], [22.7, 2770.0], [22.8, 2782.0], [22.9, 2782.0], [23.0, 2794.0], [23.1, 2794.0], [23.2, 2794.0], [23.3, 2798.0], [23.4, 2798.0], [23.5, 2832.0], [23.6, 2832.0], [23.7, 2832.0], [23.8, 2854.0], [23.9, 2854.0], [24.0, 2855.0], [24.1, 2855.0], [24.2, 2855.0], [24.3, 2867.0], [24.4, 2867.0], [24.5, 2869.0], [24.6, 2869.0], [24.7, 2869.0], [24.8, 2879.0], [24.9, 2879.0], [25.0, 2881.0], [25.1, 2881.0], [25.2, 2881.0], [25.3, 2886.0], [25.4, 2886.0], [25.5, 2889.0], [25.6, 2889.0], [25.7, 2889.0], [25.8, 2901.0], [25.9, 2901.0], [26.0, 2909.0], [26.1, 2909.0], [26.2, 2909.0], [26.3, 2909.0], [26.4, 2909.0], [26.5, 2917.0], [26.6, 2917.0], [26.7, 2917.0], [26.8, 2921.0], [26.9, 2921.0], [27.0, 2924.0], [27.1, 2924.0], [27.2, 2924.0], [27.3, 2939.0], [27.4, 2939.0], [27.5, 2954.0], [27.6, 2954.0], [27.7, 2954.0], [27.8, 2958.0], [27.9, 2958.0], [28.0, 2963.0], [28.1, 2963.0], [28.2, 2963.0], [28.3, 2973.0], [28.4, 2973.0], [28.5, 2978.0], [28.6, 2978.0], [28.7, 2978.0], [28.8, 2998.0], [28.9, 2998.0], [29.0, 3002.0], [29.1, 3002.0], [29.2, 3002.0], [29.3, 3011.0], [29.4, 3011.0], [29.5, 3013.0], [29.6, 3013.0], [29.7, 3013.0], [29.8, 3017.0], [29.9, 3017.0], [30.0, 3021.0], [30.1, 3021.0], [30.2, 3021.0], [30.3, 3036.0], [30.4, 3036.0], [30.5, 3043.0], [30.6, 3043.0], [30.7, 3043.0], [30.8, 3056.0], [30.9, 3056.0], [31.0, 3083.0], [31.1, 3083.0], [31.2, 3083.0], [31.3, 3083.0], [31.4, 3083.0], [31.5, 3086.0], [31.6, 3086.0], [31.7, 3086.0], [31.8, 3096.0], [31.9, 3096.0], [32.0, 3114.0], [32.1, 3114.0], [32.2, 3114.0], [32.3, 3122.0], [32.4, 3122.0], [32.5, 3123.0], [32.6, 3123.0], [32.7, 3123.0], [32.8, 3125.0], [32.9, 3125.0], [33.0, 3191.0], [33.1, 3191.0], [33.2, 3191.0], [33.3, 3200.0], [33.4, 3200.0], [33.5, 3213.0], [33.6, 3213.0], [33.7, 3213.0], [33.8, 3217.0], [33.9, 3217.0], [34.0, 3264.0], [34.1, 3264.0], [34.2, 3264.0], [34.3, 3264.0], [34.4, 3264.0], [34.5, 3287.0], [34.6, 3287.0], [34.7, 3287.0], [34.8, 3288.0], [34.9, 3288.0], [35.0, 3326.0], [35.1, 3326.0], [35.2, 3326.0], [35.3, 3339.0], [35.4, 3339.0], [35.5, 3363.0], [35.6, 3363.0], [35.7, 3363.0], [35.8, 3383.0], [35.9, 3383.0], [36.0, 3395.0], [36.1, 3395.0], [36.2, 3395.0], [36.3, 3403.0], [36.4, 3403.0], [36.5, 3409.0], [36.6, 3409.0], [36.7, 3409.0], [36.8, 3420.0], [36.9, 3420.0], [37.0, 3449.0], [37.1, 3449.0], [37.2, 3449.0], [37.3, 3491.0], [37.4, 3491.0], [37.5, 3500.0], [37.6, 3500.0], [37.7, 3500.0], [37.8, 3503.0], [37.9, 3503.0], [38.0, 3542.0], [38.1, 3542.0], [38.2, 3542.0], [38.3, 3557.0], [38.4, 3557.0], [38.5, 3585.0], [38.6, 3585.0], [38.7, 3585.0], [38.8, 3597.0], [38.9, 3597.0], [39.0, 3642.0], [39.1, 3642.0], [39.2, 3642.0], [39.3, 3642.0], [39.4, 3642.0], [39.5, 3649.0], [39.6, 3649.0], [39.7, 3649.0], [39.8, 3665.0], [39.9, 3665.0], [40.0, 3687.0], [40.1, 3687.0], [40.2, 3687.0], [40.3, 3703.0], [40.4, 3703.0], [40.5, 3725.0], [40.6, 3725.0], [40.7, 3725.0], [40.8, 3738.0], [40.9, 3738.0], [41.0, 3741.0], [41.1, 3741.0], [41.2, 3741.0], [41.3, 3793.0], [41.4, 3793.0], [41.5, 3825.0], [41.6, 3825.0], [41.7, 3825.0], [41.8, 3868.0], [41.9, 3868.0], [42.0, 3888.0], [42.1, 3888.0], [42.2, 3888.0], [42.3, 3921.0], [42.4, 3921.0], [42.5, 3927.0], [42.6, 3927.0], [42.7, 3927.0], [42.8, 3940.0], [42.9, 3940.0], [43.0, 3957.0], [43.1, 3957.0], [43.2, 3957.0], [43.3, 4007.0], [43.4, 4007.0], [43.5, 4007.0], [43.6, 4007.0], [43.7, 4007.0], [43.8, 4011.0], [43.9, 4011.0], [44.0, 4045.0], [44.1, 4045.0], [44.2, 4045.0], [44.3, 4049.0], [44.4, 4049.0], [44.5, 4098.0], [44.6, 4098.0], [44.7, 4098.0], [44.8, 4099.0], [44.9, 4099.0], [45.0, 4108.0], [45.1, 4108.0], [45.2, 4108.0], [45.3, 4115.0], [45.4, 4115.0], [45.5, 4127.0], [45.6, 4127.0], [45.7, 4127.0], [45.8, 4136.0], [45.9, 4136.0], [46.0, 4159.0], [46.1, 4159.0], [46.2, 4159.0], [46.3, 4160.0], [46.4, 4160.0], [46.5, 4175.0], [46.6, 4175.0], [46.7, 4175.0], [46.8, 4194.0], [46.9, 4194.0], [47.0, 4199.0], [47.1, 4199.0], [47.2, 4199.0], [47.3, 4208.0], [47.4, 4208.0], [47.5, 4233.0], [47.6, 4233.0], [47.7, 4233.0], [47.8, 4237.0], [47.9, 4237.0], [48.0, 4262.0], [48.1, 4262.0], [48.2, 4262.0], [48.3, 4270.0], [48.4, 4270.0], [48.5, 4277.0], [48.6, 4277.0], [48.7, 4277.0], [48.8, 4283.0], [48.9, 4283.0], [49.0, 4318.0], [49.1, 4318.0], [49.2, 4318.0], [49.3, 4388.0], [49.4, 4388.0], [49.5, 4391.0], [49.6, 4391.0], [49.7, 4391.0], [49.8, 4395.0], [49.9, 4395.0], [50.0, 4483.0], [50.1, 4483.0], [50.2, 4483.0], [50.3, 4506.0], [50.4, 4506.0], [50.5, 4508.0], [50.6, 4508.0], [50.7, 4508.0], [50.8, 4550.0], [50.9, 4550.0], [51.0, 4563.0], [51.1, 4563.0], [51.2, 4563.0], [51.3, 4564.0], [51.4, 4564.0], [51.5, 4566.0], [51.6, 4566.0], [51.7, 4566.0], [51.8, 4569.0], [51.9, 4569.0], [52.0, 4639.0], [52.1, 4639.0], [52.2, 4639.0], [52.3, 4660.0], [52.4, 4660.0], [52.5, 4660.0], [52.6, 4660.0], [52.7, 4660.0], [52.8, 4667.0], [52.9, 4667.0], [53.0, 4668.0], [53.1, 4668.0], [53.2, 4668.0], [53.3, 4811.0], [53.4, 4811.0], [53.5, 4814.0], [53.6, 4814.0], [53.7, 4814.0], [53.8, 4845.0], [53.9, 4845.0], [54.0, 4918.0], [54.1, 4918.0], [54.2, 4918.0], [54.3, 4925.0], [54.4, 4925.0], [54.5, 5006.0], [54.6, 5006.0], [54.7, 5006.0], [54.8, 5014.0], [54.9, 5014.0], [55.0, 5037.0], [55.1, 5037.0], [55.2, 5037.0], [55.3, 5379.0], [55.4, 5379.0], [55.5, 5390.0], [55.6, 5390.0], [55.7, 5390.0], [55.8, 5422.0], [55.9, 5422.0], [56.0, 5628.0], [56.1, 5628.0], [56.2, 5628.0], [56.3, 5633.0], [56.4, 5633.0], [56.5, 5761.0], [56.6, 5761.0], [56.7, 5761.0], [56.8, 5778.0], [56.9, 5778.0], [57.0, 5806.0], [57.1, 5806.0], [57.2, 5806.0], [57.3, 5917.0], [57.4, 5917.0], [57.5, 6271.0], [57.6, 6271.0], [57.7, 6271.0], [57.8, 6282.0], [57.9, 6282.0], [58.0, 6361.0], [58.1, 6361.0], [58.2, 6361.0], [58.3, 6368.0], [58.4, 6368.0], [58.5, 6654.0], [58.6, 6654.0], [58.7, 6654.0], [58.8, 6720.0], [58.9, 6720.0], [59.0, 6902.0], [59.1, 6902.0], [59.2, 6902.0], [59.3, 7142.0], [59.4, 7142.0], [59.5, 7279.0], [59.6, 7279.0], [59.7, 7279.0], [59.8, 7344.0], [59.9, 7344.0], [60.0, 7349.0], [60.1, 7349.0], [60.2, 7349.0], [60.3, 7431.0], [60.4, 7431.0], [60.5, 7494.0], [60.6, 7494.0], [60.7, 7494.0], [60.8, 7502.0], [60.9, 7502.0], [61.0, 7509.0], [61.1, 7509.0], [61.2, 7509.0], [61.3, 7635.0], [61.4, 7635.0], [61.5, 7820.0], [61.6, 7820.0], [61.7, 7820.0], [61.8, 7822.0], [61.9, 7822.0], [62.0, 7823.0], [62.1, 7823.0], [62.2, 7823.0], [62.3, 8412.0], [62.4, 8412.0], [62.5, 8568.0], [62.6, 8568.0], [62.7, 8568.0], [62.8, 8577.0], [62.9, 8577.0], [63.0, 9457.0], [63.1, 9457.0], [63.2, 9457.0], [63.3, 9565.0], [63.4, 9565.0], [63.5, 9762.0], [63.6, 9762.0], [63.7, 9762.0], [63.8, 9789.0], [63.9, 9789.0], [64.0, 9997.0], [64.1, 9997.0], [64.2, 9997.0], [64.3, 10170.0], [64.4, 10170.0], [64.5, 10219.0], [64.6, 10219.0], [64.7, 10219.0], [64.8, 10317.0], [64.9, 10317.0], [65.0, 10343.0], [65.1, 10343.0], [65.2, 10343.0], [65.3, 10526.0], [65.4, 10526.0], [65.5, 10749.0], [65.6, 10749.0], [65.7, 10749.0], [65.8, 11593.0], [65.9, 11593.0], [66.0, 11818.0], [66.1, 11818.0], [66.2, 11818.0], [66.3, 11824.0], [66.4, 11824.0], [66.5, 12002.0], [66.6, 12002.0], [66.7, 12002.0], [66.8, 12370.0], [66.9, 12370.0], [67.0, 12608.0], [67.1, 12608.0], [67.2, 12608.0], [67.3, 12670.0], [67.4, 12670.0], [67.5, 12899.0], [67.6, 12899.0], [67.7, 12899.0], [67.8, 12915.0], [67.9, 12915.0], [68.0, 13183.0], [68.1, 13183.0], [68.2, 13183.0], [68.3, 13299.0], [68.4, 13299.0], [68.5, 13311.0], [68.6, 13311.0], [68.7, 13311.0], [68.8, 13577.0], [68.9, 13577.0], [69.0, 13635.0], [69.1, 13635.0], [69.2, 13635.0], [69.3, 13706.0], [69.4, 13706.0], [69.5, 13891.0], [69.6, 13891.0], [69.7, 13891.0], [69.8, 13979.0], [69.9, 13979.0], [70.0, 14035.0], [70.1, 14035.0], [70.2, 14035.0], [70.3, 14255.0], [70.4, 14255.0], [70.5, 14338.0], [70.6, 14338.0], [70.7, 14338.0], [70.8, 14535.0], [70.9, 14535.0], [71.0, 14613.0], [71.1, 14613.0], [71.2, 14613.0], [71.3, 14877.0], [71.4, 14877.0], [71.5, 14912.0], [71.6, 14912.0], [71.7, 14912.0], [71.8, 14961.0], [71.9, 14961.0], [72.0, 15408.0], [72.1, 15408.0], [72.2, 15408.0], [72.3, 15613.0], [72.4, 15613.0], [72.5, 15733.0], [72.6, 15733.0], [72.7, 15733.0], [72.8, 15871.0], [72.9, 15871.0], [73.0, 15968.0], [73.1, 15968.0], [73.2, 15968.0], [73.3, 16165.0], [73.4, 16165.0], [73.5, 16169.0], [73.6, 16169.0], [73.7, 16169.0], [73.8, 16289.0], [73.9, 16289.0], [74.0, 16327.0], [74.1, 16327.0], [74.2, 16327.0], [74.3, 16441.0], [74.4, 16441.0], [74.5, 16591.0], [74.6, 16591.0], [74.7, 16591.0], [74.8, 16664.0], [74.9, 16664.0], [75.0, 16723.0], [75.1, 16723.0], [75.2, 16723.0], [75.3, 16869.0], [75.4, 16869.0], [75.5, 16912.0], [75.6, 16912.0], [75.7, 16912.0], [75.8, 17042.0], [75.9, 17042.0], [76.0, 17052.0], [76.1, 17052.0], [76.2, 17052.0], [76.3, 17456.0], [76.4, 17456.0], [76.5, 17986.0], [76.6, 17986.0], [76.7, 17986.0], [76.8, 18757.0], [76.9, 18757.0], [77.0, 18999.0], [77.1, 18999.0], [77.2, 18999.0], [77.3, 19324.0], [77.4, 19324.0], [77.5, 19463.0], [77.6, 19463.0], [77.7, 19463.0], [77.8, 19802.0], [77.9, 19802.0], [78.0, 19802.0], [78.1, 19802.0], [78.2, 19802.0], [78.3, 19929.0], [78.4, 19929.0], [78.5, 19959.0], [78.6, 19959.0], [78.7, 19959.0], [78.8, 20497.0], [78.9, 20497.0], [79.0, 20509.0], [79.1, 20509.0], [79.2, 20509.0], [79.3, 20599.0], [79.4, 20599.0], [79.5, 20762.0], [79.6, 20762.0], [79.7, 20762.0], [79.8, 20881.0], [79.9, 20881.0], [80.0, 20945.0], [80.1, 20945.0], [80.2, 20945.0], [80.3, 21330.0], [80.4, 21330.0], [80.5, 21333.0], [80.6, 21333.0], [80.7, 21333.0], [80.8, 21410.0], [80.9, 21410.0], [81.0, 21432.0], [81.1, 21432.0], [81.2, 21432.0], [81.3, 21494.0], [81.4, 21494.0], [81.5, 21552.0], [81.6, 21552.0], [81.7, 21552.0], [81.8, 21742.0], [81.9, 21742.0], [82.0, 21785.0], [82.1, 21785.0], [82.2, 21785.0], [82.3, 21861.0], [82.4, 21861.0], [82.5, 22143.0], [82.6, 22143.0], [82.7, 22143.0], [82.8, 22364.0], [82.9, 22364.0], [83.0, 22633.0], [83.1, 22633.0], [83.2, 22633.0], [83.3, 22686.0], [83.4, 22686.0], [83.5, 22702.0], [83.6, 22702.0], [83.7, 22702.0], [83.8, 22702.0], [83.9, 22702.0], [84.0, 22725.0], [84.1, 22725.0], [84.2, 22725.0], [84.3, 22734.0], [84.4, 22734.0], [84.5, 22779.0], [84.6, 22779.0], [84.7, 22779.0], [84.8, 22843.0], [84.9, 22843.0], [85.0, 22849.0], [85.1, 22849.0], [85.2, 22849.0], [85.3, 22857.0], [85.4, 22857.0], [85.5, 22921.0], [85.6, 22921.0], [85.7, 22921.0], [85.8, 22957.0], [85.9, 22957.0], [86.0, 23324.0], [86.1, 23324.0], [86.2, 23324.0], [86.3, 23464.0], [86.4, 23464.0], [86.5, 23476.0], [86.6, 23476.0], [86.7, 23476.0], [86.8, 23557.0], [86.9, 23557.0], [87.0, 23852.0], [87.1, 23852.0], [87.2, 23852.0], [87.3, 24317.0], [87.4, 24317.0], [87.5, 24453.0], [87.6, 24453.0], [87.7, 24453.0], [87.8, 24551.0], [87.9, 24551.0], [88.0, 24666.0], [88.1, 24666.0], [88.2, 24666.0], [88.3, 24674.0], [88.4, 24674.0], [88.5, 24791.0], [88.6, 24791.0], [88.7, 24791.0], [88.8, 24802.0], [88.9, 24802.0], [89.0, 24876.0], [89.1, 24876.0], [89.2, 24876.0], [89.3, 24901.0], [89.4, 24901.0], [89.5, 24948.0], [89.6, 24948.0], [89.7, 24948.0], [89.8, 24992.0], [89.9, 24992.0], [90.0, 25023.0], [90.1, 25023.0], [90.2, 25023.0], [90.3, 25088.0], [90.4, 25088.0], [90.5, 25100.0], [90.6, 25100.0], [90.7, 25100.0], [90.8, 25166.0], [90.9, 25166.0], [91.0, 25236.0], [91.1, 25236.0], [91.2, 25236.0], [91.3, 25273.0], [91.4, 25273.0], [91.5, 25279.0], [91.6, 25279.0], [91.7, 25279.0], [91.8, 25318.0], [91.9, 25318.0], [92.0, 25333.0], [92.1, 25333.0], [92.2, 25333.0], [92.3, 25349.0], [92.4, 25349.0], [92.5, 25362.0], [92.6, 25362.0], [92.7, 25362.0], [92.8, 25478.0], [92.9, 25478.0], [93.0, 25538.0], [93.1, 25538.0], [93.2, 25538.0], [93.3, 25675.0], [93.4, 25675.0], [93.5, 25786.0], [93.6, 25786.0], [93.7, 25786.0], [93.8, 25863.0], [93.9, 25863.0], [94.0, 25974.0], [94.1, 25974.0], [94.2, 25974.0], [94.3, 26232.0], [94.4, 26232.0], [94.5, 26303.0], [94.6, 26303.0], [94.7, 26303.0], [94.8, 26926.0], [94.9, 26926.0], [95.0, 27026.0], [95.1, 27026.0], [95.2, 27026.0], [95.3, 27125.0], [95.4, 27125.0], [95.5, 27339.0], [95.6, 27339.0], [95.7, 27339.0], [95.8, 27366.0], [95.9, 27366.0], [96.0, 28601.0], [96.1, 28601.0], [96.2, 28601.0], [96.3, 28969.0], [96.4, 28969.0], [96.5, 29066.0], [96.6, 29066.0], [96.7, 29066.0], [96.8, 29180.0], [96.9, 29180.0], [97.0, 29229.0], [97.1, 29229.0], [97.2, 29229.0], [97.3, 29579.0], [97.4, 29579.0], [97.5, 29821.0], [97.6, 29821.0], [97.7, 29821.0], [97.8, 30786.0], [97.9, 30786.0], [98.0, 30789.0], [98.1, 30789.0], [98.2, 30789.0], [98.3, 30861.0], [98.4, 30861.0], [98.5, 31002.0], [98.6, 31002.0], [98.7, 31002.0], [98.8, 31397.0], [98.9, 31397.0], [99.0, 31470.0], [99.1, 31470.0], [99.2, 31470.0], [99.3, 32553.0], [99.4, 32553.0], [99.5, 33432.0], [99.6, 33432.0], [99.7, 33432.0], [99.8, 34766.0], [99.9, 34766.0]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1400.0, "maxY": 16.0, "series": [{"data": [[34700.0, 1.0], [1400.0, 1.0], [1600.0, 3.0], [1700.0, 5.0], [1800.0, 3.0], [1900.0, 4.0], [2000.0, 4.0], [2100.0, 2.0], [2200.0, 16.0], [2300.0, 13.0], [2400.0, 13.0], [2500.0, 11.0], [2600.0, 8.0], [2800.0, 9.0], [2700.0, 11.0], [2900.0, 13.0], [3000.0, 12.0], [3100.0, 5.0], [3200.0, 7.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 6.0], [3600.0, 5.0], [3700.0, 5.0], [3800.0, 3.0], [3900.0, 4.0], [4000.0, 7.0], [4200.0, 7.0], [4300.0, 4.0], [4100.0, 9.0], [4500.0, 7.0], [4600.0, 5.0], [4400.0, 1.0], [4800.0, 3.0], [5000.0, 3.0], [4900.0, 2.0], [5300.0, 2.0], [5400.0, 1.0], [5600.0, 2.0], [5700.0, 2.0], [5800.0, 1.0], [5900.0, 1.0], [6300.0, 2.0], [6200.0, 2.0], [6600.0, 1.0], [6700.0, 1.0], [6900.0, 1.0], [7100.0, 1.0], [7300.0, 2.0], [7400.0, 2.0], [7200.0, 1.0], [7600.0, 1.0], [7500.0, 2.0], [7800.0, 3.0], [8500.0, 2.0], [8400.0, 1.0], [9500.0, 1.0], [9700.0, 2.0], [9400.0, 1.0], [9900.0, 1.0], [10100.0, 1.0], [10200.0, 1.0], [10500.0, 1.0], [10300.0, 2.0], [10700.0, 1.0], [11500.0, 1.0], [11800.0, 2.0], [12000.0, 1.0], [12300.0, 1.0], [12600.0, 2.0], [13200.0, 1.0], [12800.0, 1.0], [12900.0, 1.0], [13300.0, 1.0], [13100.0, 1.0], [13600.0, 1.0], [13700.0, 1.0], [13500.0, 1.0], [13800.0, 1.0], [13900.0, 1.0], [14000.0, 1.0], [14200.0, 1.0], [14300.0, 1.0], [14500.0, 1.0], [14600.0, 1.0], [14800.0, 1.0], [14900.0, 2.0], [15700.0, 1.0], [15600.0, 1.0], [15800.0, 1.0], [15400.0, 1.0], [16100.0, 2.0], [16200.0, 1.0], [16300.0, 1.0], [15900.0, 1.0], [16400.0, 1.0], [17400.0, 1.0], [17000.0, 2.0], [16800.0, 1.0], [16700.0, 1.0], [16900.0, 1.0], [16500.0, 1.0], [16600.0, 1.0], [17900.0, 1.0], [18900.0, 1.0], [18700.0, 1.0], [19400.0, 1.0], [19300.0, 1.0], [19800.0, 2.0], [19900.0, 2.0], [20400.0, 1.0], [21300.0, 2.0], [21500.0, 1.0], [20500.0, 2.0], [20700.0, 1.0], [20900.0, 1.0], [20800.0, 1.0], [21400.0, 3.0], [21700.0, 2.0], [22300.0, 1.0], [22100.0, 1.0], [21800.0, 1.0], [22800.0, 3.0], [22600.0, 2.0], [23300.0, 1.0], [23400.0, 2.0], [22700.0, 5.0], [23500.0, 1.0], [22900.0, 2.0], [24400.0, 1.0], [23800.0, 1.0], [24300.0, 1.0], [24500.0, 1.0], [24700.0, 1.0], [25500.0, 1.0], [24800.0, 2.0], [25400.0, 1.0], [25100.0, 2.0], [24900.0, 3.0], [25300.0, 4.0], [25000.0, 2.0], [25200.0, 3.0], [24600.0, 2.0], [25800.0, 1.0], [25600.0, 1.0], [25900.0, 1.0], [25700.0, 1.0], [26200.0, 1.0], [26300.0, 1.0], [27300.0, 2.0], [27000.0, 1.0], [27100.0, 1.0], [26900.0, 1.0], [28600.0, 1.0], [29500.0, 1.0], [29100.0, 1.0], [29200.0, 1.0], [29000.0, 1.0], [28900.0, 1.0], [30700.0, 2.0], [29800.0, 1.0], [31400.0, 1.0], [31300.0, 1.0], [30800.0, 1.0], [31000.0, 1.0], [32500.0, 1.0], [33400.0, 1.0]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 34700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 399.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 399.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.3636363636363638, "minX": 1.55746074E12, "maxY": 10.7, "series": [{"data": [[1.55746104E12, 10.7], [1.55746074E12, 2.3636363636363638], [1.55746122E12, 9.0], [1.55746092E12, 6.215686274509803], [1.5574611E12, 10.0], [1.5574608E12, 3.6176470588235285], [1.55746128E12, 7.027777777777778], [1.55746098E12, 9.129032258064518], [1.55746116E12, 9.310344827586205], [1.55746086E12, 4.633333333333335], [1.55746134E12, 5.066666666666666]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746134E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2410.8139534883717, "minX": 1.0, "maxY": 21939.67924528302, "series": [{"data": [[1.0, 5731.6], [2.0, 2499.3571428571427], [4.0, 3027.749999999998], [8.0, 14176.450000000003], [9.0, 17743.303571428572], [5.0, 4521.431818181818], [10.0, 21939.67924528302], [11.0, 17990.571428571435], [3.0, 2410.8139534883717], [6.0, 6318.619047619047], [7.0, 8824.205882352939]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}, {"data": [[6.422499999999998, 9888.270000000002]], "isOverall": false, "label": "Task WebDriver Sampler-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 11.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.55746074E12, "maxY": 295996.61666666664, "series": [{"data": [[1.55746104E12, 77205.95], [1.55746074E12, 19704.05], [1.55746122E12, 179272.6], [1.55746092E12, 123583.83333333333], [1.5574611E12, 110383.71666666666], [1.5574608E12, 100551.88333333333], [1.55746128E12, 295996.61666666664], [1.55746098E12, 118840.7], [1.55746116E12, 174357.48333333334], [1.55746086E12, 159298.36666666667], [1.55746134E12, 147922.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55746104E12, 0.0], [1.55746074E12, 0.0], [1.55746122E12, 0.0], [1.55746092E12, 0.0], [1.5574611E12, 0.0], [1.5574608E12, 0.0], [1.55746128E12, 0.0], [1.55746098E12, 0.0], [1.55746116E12, 0.0], [1.55746086E12, 0.0], [1.55746134E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746134E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2073.0, "minX": 1.55746074E12, "maxY": 25750.958333333332, "series": [{"data": [[1.55746104E12, 17714.966666666667], [1.55746074E12, 2073.0], [1.55746122E12, 21276.82608695652], [1.55746092E12, 6199.333333333332], [1.5574611E12, 25750.958333333332], [1.5574608E12, 2697.0588235294117], [1.55746128E12, 12420.500000000004], [1.55746098E12, 13038.935483870968], [1.55746116E12, 19114.551724137935], [1.55746086E12, 3700.6833333333334], [1.55746134E12, 8052.400000000001]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746134E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.55746074E12, "maxY": 4.9E-324, "series": [{"data": [[1.55746104E12, 0.0], [1.55746074E12, 0.0], [1.55746122E12, 0.0], [1.55746092E12, 0.0], [1.5574611E12, 0.0], [1.5574608E12, 0.0], [1.55746128E12, 0.0], [1.55746098E12, 0.0], [1.55746116E12, 0.0], [1.55746086E12, 0.0], [1.55746134E12, 0.0]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746134E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.55746074E12, "maxY": 4.9E-324, "series": [{"data": [[1.55746104E12, 0.0], [1.55746074E12, 0.0], [1.55746122E12, 0.0], [1.55746092E12, 0.0], [1.5574611E12, 0.0], [1.5574608E12, 0.0], [1.55746128E12, 0.0], [1.55746098E12, 0.0], [1.55746116E12, 0.0], [1.55746086E12, 0.0], [1.55746134E12, 0.0]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746134E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1631.0, "minX": 1.55746074E12, "maxY": 34766.0, "series": [{"data": [[1.55746104E12, 31470.0], [1.55746074E12, 2832.0], [1.55746122E12, 31002.0], [1.55746092E12, 17456.0], [1.5574611E12, 34766.0], [1.5574608E12, 7344.0], [1.55746128E12, 30786.0], [1.55746098E12, 25538.0], [1.55746116E12, 31397.0], [1.55746086E12, 13299.0], [1.55746134E12, 21410.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55746104E12, 5761.0], [1.55746074E12, 1631.0], [1.55746122E12, 5628.0], [1.55746092E12, 2782.0], [1.5574611E12, 6902.0], [1.5574608E12, 2029.0], [1.55746128E12, 3888.0], [1.55746098E12, 4569.0], [1.55746116E12, 5806.0], [1.55746086E12, 2299.0], [1.55746134E12, 3200.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55746104E12, 27307.7], [1.55746074E12, 2459.0], [1.55746122E12, 30104.200000000004], [1.55746092E12, 12260.800000000003], [1.5574611E12, 32992.5], [1.5574608E12, 3017.8], [1.55746128E12, 25564.900000000005], [1.55746098E12, 24791.4], [1.55746116E12, 25362.0], [1.55746086E12, 6187.499999999997], [1.55746134E12, 21362.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55746104E12, 31470.0], [1.55746074E12, 2832.0], [1.55746122E12, 31002.0], [1.55746092E12, 17456.0], [1.5574611E12, 34766.0], [1.5574608E12, 7344.0], [1.55746128E12, 30786.0], [1.55746098E12, 25538.0], [1.55746116E12, 31397.0], [1.55746086E12, 13299.0], [1.55746134E12, 21410.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55746104E12, 30429.949999999997], [1.55746074E12, 2579.999999999999], [1.55746122E12, 30973.8], [1.55746092E12, 14963.799999999996], [1.5574611E12, 34432.5], [1.5574608E12, 3446.5999999999967], [1.55746128E12, 26975.449999999993], [1.55746098E12, 25314.8], [1.55746116E12, 30609.0], [1.55746086E12, 7810.749999999999], [1.55746134E12, 21410.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746134E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1499.0, "minX": 1.0, "maxY": 5806.0, "series": [{"data": [[1.0, 5806.0], [2.0, 3668.0], [3.0, 4707.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 1499.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[1.0, 0.0], [2.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.55746074E12, "maxY": 1.1333333333333333, "series": [{"data": [[1.55746104E12, 0.5], [1.55746074E12, 0.6], [1.55746122E12, 0.36666666666666664], [1.55746092E12, 0.8333333333333334], [1.5574611E12, 0.4], [1.5574608E12, 1.1333333333333333], [1.55746128E12, 0.5666666666666667], [1.55746098E12, 0.6166666666666667], [1.55746116E12, 0.45], [1.55746086E12, 1.0333333333333334], [1.55746134E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746134E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.55746074E12, "maxY": 1.1166666666666667, "series": [{"data": [[1.55746104E12, 0.5], [1.55746074E12, 0.55], [1.55746122E12, 0.38333333333333336], [1.55746092E12, 0.85], [1.5574611E12, 0.4], [1.5574608E12, 1.1166666666666667], [1.55746128E12, 0.6], [1.55746098E12, 0.5166666666666667], [1.55746116E12, 0.48333333333333334], [1.55746086E12, 1.0], [1.55746134E12, 0.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5574608E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746134E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.55746074E12, "maxY": 1.1166666666666667, "series": [{"data": [[1.55746104E12, 0.5], [1.55746074E12, 0.55], [1.55746122E12, 0.38333333333333336], [1.55746092E12, 0.85], [1.5574611E12, 0.4], [1.5574608E12, 1.1166666666666667], [1.55746128E12, 0.6], [1.55746098E12, 0.5166666666666667], [1.55746116E12, 0.48333333333333334], [1.55746086E12, 1.0], [1.55746134E12, 0.25]], "isOverall": false, "label": "Task WebDriver Sampler-success", "isController": false}, {"data": [[1.5574608E12, 0.016666666666666666]], "isOverall": false, "label": "Task WebDriver Sampler-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746134E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.55746074E12, "maxY": 1.1166666666666667, "series": [{"data": [[1.55746104E12, 0.5], [1.55746074E12, 0.55], [1.55746122E12, 0.38333333333333336], [1.55746092E12, 0.85], [1.5574611E12, 0.4], [1.5574608E12, 1.1166666666666667], [1.55746128E12, 0.6], [1.55746098E12, 0.5166666666666667], [1.55746116E12, 0.48333333333333334], [1.55746086E12, 1.0], [1.55746134E12, 0.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5574608E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746134E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

