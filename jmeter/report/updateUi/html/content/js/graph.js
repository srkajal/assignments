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
        data: {"result": {"minY": 245.0, "minX": 0.0, "maxY": 18675.0, "series": [{"data": [[0.0, 245.0], [0.1, 245.0], [0.2, 245.0], [0.3, 288.0], [0.4, 288.0], [0.5, 361.0], [0.6, 361.0], [0.7, 361.0], [0.8, 420.0], [0.9, 420.0], [1.0, 449.0], [1.1, 449.0], [1.2, 449.0], [1.3, 935.0], [1.4, 935.0], [1.5, 1000.0], [1.6, 1000.0], [1.7, 1000.0], [1.8, 1055.0], [1.9, 1055.0], [2.0, 1115.0], [2.1, 1115.0], [2.2, 1115.0], [2.3, 1329.0], [2.4, 1329.0], [2.5, 1361.0], [2.6, 1361.0], [2.7, 1361.0], [2.8, 1374.0], [2.9, 1374.0], [3.0, 1385.0], [3.1, 1385.0], [3.2, 1385.0], [3.3, 1387.0], [3.4, 1387.0], [3.5, 1404.0], [3.6, 1404.0], [3.7, 1404.0], [3.8, 1406.0], [3.9, 1406.0], [4.0, 1415.0], [4.1, 1415.0], [4.2, 1415.0], [4.3, 1416.0], [4.4, 1416.0], [4.5, 1421.0], [4.6, 1421.0], [4.7, 1421.0], [4.8, 1436.0], [4.9, 1436.0], [5.0, 1448.0], [5.1, 1448.0], [5.2, 1448.0], [5.3, 1478.0], [5.4, 1478.0], [5.5, 1478.0], [5.6, 1478.0], [5.7, 1478.0], [5.8, 1479.0], [5.9, 1479.0], [6.0, 1536.0], [6.1, 1536.0], [6.2, 1536.0], [6.3, 1545.0], [6.4, 1545.0], [6.5, 1597.0], [6.6, 1597.0], [6.7, 1597.0], [6.8, 1626.0], [6.9, 1626.0], [7.0, 1639.0], [7.1, 1639.0], [7.2, 1639.0], [7.3, 1643.0], [7.4, 1643.0], [7.5, 1643.0], [7.6, 1643.0], [7.7, 1643.0], [7.8, 1655.0], [7.9, 1655.0], [8.0, 1662.0], [8.1, 1662.0], [8.2, 1662.0], [8.3, 1667.0], [8.4, 1667.0], [8.5, 1672.0], [8.6, 1672.0], [8.7, 1672.0], [8.8, 1674.0], [8.9, 1674.0], [9.0, 1674.0], [9.1, 1674.0], [9.2, 1674.0], [9.3, 1675.0], [9.4, 1675.0], [9.5, 1679.0], [9.6, 1679.0], [9.7, 1679.0], [9.8, 1690.0], [9.9, 1690.0], [10.0, 1693.0], [10.1, 1693.0], [10.2, 1693.0], [10.3, 1709.0], [10.4, 1709.0], [10.5, 1709.0], [10.6, 1709.0], [10.7, 1709.0], [10.8, 1710.0], [10.9, 1710.0], [11.0, 1723.0], [11.1, 1723.0], [11.2, 1723.0], [11.3, 1737.0], [11.4, 1737.0], [11.5, 1741.0], [11.6, 1741.0], [11.7, 1741.0], [11.8, 1765.0], [11.9, 1765.0], [12.0, 1770.0], [12.1, 1770.0], [12.2, 1770.0], [12.3, 1781.0], [12.4, 1781.0], [12.5, 1785.0], [12.6, 1785.0], [12.7, 1785.0], [12.8, 1786.0], [12.9, 1786.0], [13.0, 1787.0], [13.1, 1787.0], [13.2, 1787.0], [13.3, 1796.0], [13.4, 1796.0], [13.5, 1796.0], [13.6, 1796.0], [13.7, 1796.0], [13.8, 1808.0], [13.9, 1808.0], [14.0, 1816.0], [14.1, 1816.0], [14.2, 1816.0], [14.3, 1819.0], [14.4, 1819.0], [14.5, 1821.0], [14.6, 1821.0], [14.7, 1821.0], [14.8, 1827.0], [14.9, 1827.0], [15.0, 1837.0], [15.1, 1837.0], [15.2, 1837.0], [15.3, 1839.0], [15.4, 1839.0], [15.5, 1843.0], [15.6, 1843.0], [15.7, 1843.0], [15.8, 1846.0], [15.9, 1846.0], [16.0, 1850.0], [16.1, 1850.0], [16.2, 1850.0], [16.3, 1863.0], [16.4, 1863.0], [16.5, 1863.0], [16.6, 1863.0], [16.7, 1863.0], [16.8, 1864.0], [16.9, 1864.0], [17.0, 1865.0], [17.1, 1865.0], [17.2, 1865.0], [17.3, 1867.0], [17.4, 1867.0], [17.5, 1873.0], [17.6, 1873.0], [17.7, 1873.0], [17.8, 1882.0], [17.9, 1882.0], [18.0, 1887.0], [18.1, 1887.0], [18.2, 1887.0], [18.3, 1898.0], [18.4, 1898.0], [18.5, 1900.0], [18.6, 1900.0], [18.7, 1900.0], [18.8, 1901.0], [18.9, 1901.0], [19.0, 1903.0], [19.1, 1903.0], [19.2, 1903.0], [19.3, 1911.0], [19.4, 1911.0], [19.5, 1919.0], [19.6, 1919.0], [19.7, 1919.0], [19.8, 1919.0], [19.9, 1919.0], [20.0, 1925.0], [20.1, 1925.0], [20.2, 1925.0], [20.3, 1927.0], [20.4, 1927.0], [20.5, 1927.0], [20.6, 1927.0], [20.7, 1927.0], [20.8, 1928.0], [20.9, 1928.0], [21.0, 1929.0], [21.1, 1929.0], [21.2, 1929.0], [21.3, 1934.0], [21.4, 1934.0], [21.5, 1936.0], [21.6, 1936.0], [21.7, 1936.0], [21.8, 1937.0], [21.9, 1937.0], [22.0, 1938.0], [22.1, 1938.0], [22.2, 1938.0], [22.3, 1939.0], [22.4, 1939.0], [22.5, 1939.0], [22.6, 1939.0], [22.7, 1939.0], [22.8, 1940.0], [22.9, 1940.0], [23.0, 1947.0], [23.1, 1947.0], [23.2, 1947.0], [23.3, 1948.0], [23.4, 1948.0], [23.5, 1949.0], [23.6, 1949.0], [23.7, 1949.0], [23.8, 1955.0], [23.9, 1955.0], [24.0, 1956.0], [24.1, 1956.0], [24.2, 1956.0], [24.3, 1958.0], [24.4, 1958.0], [24.5, 1961.0], [24.6, 1961.0], [24.7, 1961.0], [24.8, 1963.0], [24.9, 1963.0], [25.0, 1973.0], [25.1, 1973.0], [25.2, 1973.0], [25.3, 1976.0], [25.4, 1976.0], [25.5, 1978.0], [25.6, 1978.0], [25.7, 1978.0], [25.8, 1983.0], [25.9, 1983.0], [26.0, 1985.0], [26.1, 1985.0], [26.2, 1985.0], [26.3, 1986.0], [26.4, 1986.0], [26.5, 1986.0], [26.6, 1986.0], [26.7, 1986.0], [26.8, 1987.0], [26.9, 1987.0], [27.0, 1994.0], [27.1, 1994.0], [27.2, 1994.0], [27.3, 1994.0], [27.4, 1994.0], [27.5, 1994.0], [27.6, 1994.0], [27.7, 1994.0], [27.8, 1995.0], [27.9, 1995.0], [28.0, 1997.0], [28.1, 1997.0], [28.2, 1997.0], [28.3, 1997.0], [28.4, 1997.0], [28.5, 2000.0], [28.6, 2000.0], [28.7, 2000.0], [28.8, 2002.0], [28.9, 2002.0], [29.0, 2003.0], [29.1, 2003.0], [29.2, 2003.0], [29.3, 2004.0], [29.4, 2004.0], [29.5, 2004.0], [29.6, 2004.0], [29.7, 2004.0], [29.8, 2007.0], [29.9, 2007.0], [30.0, 2009.0], [30.1, 2009.0], [30.2, 2009.0], [30.3, 2014.0], [30.4, 2014.0], [30.5, 2015.0], [30.6, 2015.0], [30.7, 2015.0], [30.8, 2015.0], [30.9, 2015.0], [31.0, 2016.0], [31.1, 2016.0], [31.2, 2016.0], [31.3, 2016.0], [31.4, 2016.0], [31.5, 2018.0], [31.6, 2018.0], [31.7, 2018.0], [31.8, 2022.0], [31.9, 2022.0], [32.0, 2025.0], [32.1, 2025.0], [32.2, 2025.0], [32.3, 2029.0], [32.4, 2029.0], [32.5, 2030.0], [32.6, 2030.0], [32.7, 2030.0], [32.8, 2033.0], [32.9, 2033.0], [33.0, 2038.0], [33.1, 2038.0], [33.2, 2038.0], [33.3, 2040.0], [33.4, 2040.0], [33.5, 2043.0], [33.6, 2043.0], [33.7, 2043.0], [33.8, 2046.0], [33.9, 2046.0], [34.0, 2048.0], [34.1, 2048.0], [34.2, 2048.0], [34.3, 2048.0], [34.4, 2048.0], [34.5, 2049.0], [34.6, 2049.0], [34.7, 2049.0], [34.8, 2053.0], [34.9, 2053.0], [35.0, 2054.0], [35.1, 2054.0], [35.2, 2054.0], [35.3, 2056.0], [35.4, 2056.0], [35.5, 2057.0], [35.6, 2057.0], [35.7, 2057.0], [35.8, 2057.0], [35.9, 2057.0], [36.0, 2058.0], [36.1, 2058.0], [36.2, 2058.0], [36.3, 2059.0], [36.4, 2059.0], [36.5, 2059.0], [36.6, 2059.0], [36.7, 2059.0], [36.8, 2063.0], [36.9, 2063.0], [37.0, 2063.0], [37.1, 2063.0], [37.2, 2063.0], [37.3, 2063.0], [37.4, 2063.0], [37.5, 2065.0], [37.6, 2065.0], [37.7, 2065.0], [37.8, 2066.0], [37.9, 2066.0], [38.0, 2068.0], [38.1, 2068.0], [38.2, 2068.0], [38.3, 2072.0], [38.4, 2072.0], [38.5, 2076.0], [38.6, 2076.0], [38.7, 2076.0], [38.8, 2077.0], [38.9, 2077.0], [39.0, 2078.0], [39.1, 2078.0], [39.2, 2078.0], [39.3, 2080.0], [39.4, 2080.0], [39.5, 2083.0], [39.6, 2083.0], [39.7, 2083.0], [39.8, 2084.0], [39.9, 2084.0], [40.0, 2088.0], [40.1, 2088.0], [40.2, 2088.0], [40.3, 2091.0], [40.4, 2091.0], [40.5, 2092.0], [40.6, 2092.0], [40.7, 2092.0], [40.8, 2094.0], [40.9, 2094.0], [41.0, 2095.0], [41.1, 2095.0], [41.2, 2095.0], [41.3, 2098.0], [41.4, 2098.0], [41.5, 2104.0], [41.6, 2104.0], [41.7, 2104.0], [41.8, 2106.0], [41.9, 2106.0], [42.0, 2107.0], [42.1, 2107.0], [42.2, 2107.0], [42.3, 2109.0], [42.4, 2109.0], [42.5, 2110.0], [42.6, 2110.0], [42.7, 2110.0], [42.8, 2113.0], [42.9, 2113.0], [43.0, 2114.0], [43.1, 2114.0], [43.2, 2114.0], [43.3, 2115.0], [43.4, 2115.0], [43.5, 2117.0], [43.6, 2117.0], [43.7, 2117.0], [43.8, 2120.0], [43.9, 2120.0], [44.0, 2122.0], [44.1, 2122.0], [44.2, 2122.0], [44.3, 2123.0], [44.4, 2123.0], [44.5, 2123.0], [44.6, 2123.0], [44.7, 2123.0], [44.8, 2124.0], [44.9, 2124.0], [45.0, 2125.0], [45.1, 2125.0], [45.2, 2125.0], [45.3, 2127.0], [45.4, 2127.0], [45.5, 2129.0], [45.6, 2129.0], [45.7, 2129.0], [45.8, 2131.0], [45.9, 2131.0], [46.0, 2133.0], [46.1, 2133.0], [46.2, 2133.0], [46.3, 2133.0], [46.4, 2133.0], [46.5, 2136.0], [46.6, 2136.0], [46.7, 2136.0], [46.8, 2138.0], [46.9, 2138.0], [47.0, 2140.0], [47.1, 2140.0], [47.2, 2140.0], [47.3, 2142.0], [47.4, 2142.0], [47.5, 2143.0], [47.6, 2143.0], [47.7, 2143.0], [47.8, 2148.0], [47.9, 2148.0], [48.0, 2148.0], [48.1, 2148.0], [48.2, 2148.0], [48.3, 2150.0], [48.4, 2150.0], [48.5, 2152.0], [48.6, 2152.0], [48.7, 2152.0], [48.8, 2153.0], [48.9, 2153.0], [49.0, 2156.0], [49.1, 2156.0], [49.2, 2156.0], [49.3, 2157.0], [49.4, 2157.0], [49.5, 2160.0], [49.6, 2160.0], [49.7, 2160.0], [49.8, 2160.0], [49.9, 2160.0], [50.0, 2162.0], [50.1, 2162.0], [50.2, 2162.0], [50.3, 2164.0], [50.4, 2164.0], [50.5, 2166.0], [50.6, 2166.0], [50.7, 2166.0], [50.8, 2169.0], [50.9, 2169.0], [51.0, 2170.0], [51.1, 2170.0], [51.2, 2170.0], [51.3, 2172.0], [51.4, 2172.0], [51.5, 2174.0], [51.6, 2174.0], [51.7, 2174.0], [51.8, 2174.0], [51.9, 2174.0], [52.0, 2175.0], [52.1, 2175.0], [52.2, 2175.0], [52.3, 2176.0], [52.4, 2176.0], [52.5, 2187.0], [52.6, 2187.0], [52.7, 2187.0], [52.8, 2189.0], [52.9, 2189.0], [53.0, 2190.0], [53.1, 2190.0], [53.2, 2190.0], [53.3, 2190.0], [53.4, 2190.0], [53.5, 2191.0], [53.6, 2191.0], [53.7, 2191.0], [53.8, 2197.0], [53.9, 2197.0], [54.0, 2199.0], [54.1, 2199.0], [54.2, 2199.0], [54.3, 2200.0], [54.4, 2200.0], [54.5, 2206.0], [54.6, 2206.0], [54.7, 2206.0], [54.8, 2209.0], [54.9, 2209.0], [55.0, 2211.0], [55.1, 2211.0], [55.2, 2211.0], [55.3, 2219.0], [55.4, 2219.0], [55.5, 2224.0], [55.6, 2224.0], [55.7, 2224.0], [55.8, 2227.0], [55.9, 2227.0], [56.0, 2228.0], [56.1, 2228.0], [56.2, 2228.0], [56.3, 2229.0], [56.4, 2229.0], [56.5, 2233.0], [56.6, 2233.0], [56.7, 2233.0], [56.8, 2234.0], [56.9, 2234.0], [57.0, 2236.0], [57.1, 2236.0], [57.2, 2236.0], [57.3, 2236.0], [57.4, 2236.0], [57.5, 2245.0], [57.6, 2245.0], [57.7, 2245.0], [57.8, 2251.0], [57.9, 2251.0], [58.0, 2255.0], [58.1, 2255.0], [58.2, 2255.0], [58.3, 2255.0], [58.4, 2255.0], [58.5, 2256.0], [58.6, 2256.0], [58.7, 2256.0], [58.8, 2257.0], [58.9, 2257.0], [59.0, 2267.0], [59.1, 2267.0], [59.2, 2267.0], [59.3, 2273.0], [59.4, 2273.0], [59.5, 2274.0], [59.6, 2274.0], [59.7, 2274.0], [59.8, 2281.0], [59.9, 2281.0], [60.0, 2285.0], [60.1, 2285.0], [60.2, 2285.0], [60.3, 2286.0], [60.4, 2286.0], [60.5, 2294.0], [60.6, 2294.0], [60.7, 2294.0], [60.8, 2296.0], [60.9, 2296.0], [61.0, 2299.0], [61.1, 2299.0], [61.2, 2299.0], [61.3, 2307.0], [61.4, 2307.0], [61.5, 2312.0], [61.6, 2312.0], [61.7, 2312.0], [61.8, 2320.0], [61.9, 2320.0], [62.0, 2321.0], [62.1, 2321.0], [62.2, 2321.0], [62.3, 2322.0], [62.4, 2322.0], [62.5, 2326.0], [62.6, 2326.0], [62.7, 2326.0], [62.8, 2327.0], [62.9, 2327.0], [63.0, 2334.0], [63.1, 2334.0], [63.2, 2334.0], [63.3, 2334.0], [63.4, 2334.0], [63.5, 2334.0], [63.6, 2334.0], [63.7, 2334.0], [63.8, 2335.0], [63.9, 2335.0], [64.0, 2346.0], [64.1, 2346.0], [64.2, 2346.0], [64.3, 2346.0], [64.4, 2346.0], [64.5, 2350.0], [64.6, 2350.0], [64.7, 2350.0], [64.8, 2358.0], [64.9, 2358.0], [65.0, 2361.0], [65.1, 2361.0], [65.2, 2361.0], [65.3, 2362.0], [65.4, 2362.0], [65.5, 2366.0], [65.6, 2366.0], [65.7, 2366.0], [65.8, 2367.0], [65.9, 2367.0], [66.0, 2371.0], [66.1, 2371.0], [66.2, 2371.0], [66.3, 2380.0], [66.4, 2380.0], [66.5, 2396.0], [66.6, 2396.0], [66.7, 2396.0], [66.8, 2409.0], [66.9, 2409.0], [67.0, 2412.0], [67.1, 2412.0], [67.2, 2412.0], [67.3, 2417.0], [67.4, 2417.0], [67.5, 2417.0], [67.6, 2417.0], [67.7, 2417.0], [67.8, 2418.0], [67.9, 2418.0], [68.0, 2420.0], [68.1, 2420.0], [68.2, 2420.0], [68.3, 2421.0], [68.4, 2421.0], [68.5, 2422.0], [68.6, 2422.0], [68.7, 2422.0], [68.8, 2427.0], [68.9, 2427.0], [69.0, 2436.0], [69.1, 2436.0], [69.2, 2436.0], [69.3, 2437.0], [69.4, 2437.0], [69.5, 2439.0], [69.6, 2439.0], [69.7, 2439.0], [69.8, 2439.0], [69.9, 2439.0], [70.0, 2449.0], [70.1, 2449.0], [70.2, 2449.0], [70.3, 2454.0], [70.4, 2454.0], [70.5, 2462.0], [70.6, 2462.0], [70.7, 2462.0], [70.8, 2463.0], [70.9, 2463.0], [71.0, 2464.0], [71.1, 2464.0], [71.2, 2464.0], [71.3, 2466.0], [71.4, 2466.0], [71.5, 2466.0], [71.6, 2466.0], [71.7, 2466.0], [71.8, 2466.0], [71.9, 2466.0], [72.0, 2469.0], [72.1, 2469.0], [72.2, 2469.0], [72.3, 2473.0], [72.4, 2473.0], [72.5, 2473.0], [72.6, 2473.0], [72.7, 2473.0], [72.8, 2477.0], [72.9, 2477.0], [73.0, 2482.0], [73.1, 2482.0], [73.2, 2482.0], [73.3, 2484.0], [73.4, 2484.0], [73.5, 2487.0], [73.6, 2487.0], [73.7, 2487.0], [73.8, 2488.0], [73.9, 2488.0], [74.0, 2488.0], [74.1, 2488.0], [74.2, 2488.0], [74.3, 2498.0], [74.4, 2498.0], [74.5, 2499.0], [74.6, 2499.0], [74.7, 2499.0], [74.8, 2501.0], [74.9, 2501.0], [75.0, 2502.0], [75.1, 2502.0], [75.2, 2502.0], [75.3, 2509.0], [75.4, 2509.0], [75.5, 2514.0], [75.6, 2514.0], [75.7, 2514.0], [75.8, 2515.0], [75.9, 2515.0], [76.0, 2516.0], [76.1, 2516.0], [76.2, 2516.0], [76.3, 2517.0], [76.4, 2517.0], [76.5, 2545.0], [76.6, 2545.0], [76.7, 2545.0], [76.8, 2548.0], [76.9, 2548.0], [77.0, 2554.0], [77.1, 2554.0], [77.2, 2554.0], [77.3, 2557.0], [77.4, 2557.0], [77.5, 2562.0], [77.6, 2562.0], [77.7, 2562.0], [77.8, 2566.0], [77.9, 2566.0], [78.0, 2602.0], [78.1, 2602.0], [78.2, 2602.0], [78.3, 2604.0], [78.4, 2604.0], [78.5, 2606.0], [78.6, 2606.0], [78.7, 2606.0], [78.8, 2608.0], [78.9, 2608.0], [79.0, 2626.0], [79.1, 2626.0], [79.2, 2626.0], [79.3, 2634.0], [79.4, 2634.0], [79.5, 2636.0], [79.6, 2636.0], [79.7, 2636.0], [79.8, 2637.0], [79.9, 2637.0], [80.0, 2640.0], [80.1, 2640.0], [80.2, 2640.0], [80.3, 2644.0], [80.4, 2644.0], [80.5, 2649.0], [80.6, 2649.0], [80.7, 2649.0], [80.8, 2656.0], [80.9, 2656.0], [81.0, 2682.0], [81.1, 2682.0], [81.2, 2682.0], [81.3, 2701.0], [81.4, 2701.0], [81.5, 2720.0], [81.6, 2720.0], [81.7, 2720.0], [81.8, 2723.0], [81.9, 2723.0], [82.0, 2759.0], [82.1, 2759.0], [82.2, 2759.0], [82.3, 2760.0], [82.4, 2760.0], [82.5, 2766.0], [82.6, 2766.0], [82.7, 2766.0], [82.8, 2766.0], [82.9, 2766.0], [83.0, 2767.0], [83.1, 2767.0], [83.2, 2767.0], [83.3, 2777.0], [83.4, 2777.0], [83.5, 2778.0], [83.6, 2778.0], [83.7, 2778.0], [83.8, 2784.0], [83.9, 2784.0], [84.0, 2801.0], [84.1, 2801.0], [84.2, 2801.0], [84.3, 2843.0], [84.4, 2843.0], [84.5, 2862.0], [84.6, 2862.0], [84.7, 2862.0], [84.8, 2877.0], [84.9, 2877.0], [85.0, 2882.0], [85.1, 2882.0], [85.2, 2882.0], [85.3, 2902.0], [85.4, 2902.0], [85.5, 2926.0], [85.6, 2926.0], [85.7, 2926.0], [85.8, 2931.0], [85.9, 2931.0], [86.0, 2959.0], [86.1, 2959.0], [86.2, 2959.0], [86.3, 2980.0], [86.4, 2980.0], [86.5, 2986.0], [86.6, 2986.0], [86.7, 2986.0], [86.8, 3000.0], [86.9, 3000.0], [87.0, 3115.0], [87.1, 3115.0], [87.2, 3115.0], [87.3, 3119.0], [87.4, 3119.0], [87.5, 3207.0], [87.6, 3207.0], [87.7, 3207.0], [87.8, 3303.0], [87.9, 3303.0], [88.0, 3450.0], [88.1, 3450.0], [88.2, 3450.0], [88.3, 4141.0], [88.4, 4141.0], [88.5, 5916.0], [88.6, 5916.0], [88.7, 5916.0], [88.8, 7228.0], [88.9, 7228.0], [89.0, 7277.0], [89.1, 7277.0], [89.2, 7277.0], [89.3, 7579.0], [89.4, 7579.0], [89.5, 7656.0], [89.6, 7656.0], [89.7, 7656.0], [89.8, 7673.0], [89.9, 7673.0], [90.0, 7898.0], [90.1, 7898.0], [90.2, 7898.0], [90.3, 7970.0], [90.4, 7970.0], [90.5, 8076.0], [90.6, 8076.0], [90.7, 8076.0], [90.8, 8208.0], [90.9, 8208.0], [91.0, 8586.0], [91.1, 8586.0], [91.2, 8586.0], [91.3, 8737.0], [91.4, 8737.0], [91.5, 8837.0], [91.6, 8837.0], [91.7, 8837.0], [91.8, 8841.0], [91.9, 8841.0], [92.0, 9039.0], [92.1, 9039.0], [92.2, 9039.0], [92.3, 9109.0], [92.4, 9109.0], [92.5, 9210.0], [92.6, 9210.0], [92.7, 9210.0], [92.8, 9246.0], [92.9, 9246.0], [93.0, 9392.0], [93.1, 9392.0], [93.2, 9392.0], [93.3, 9595.0], [93.4, 9595.0], [93.5, 9699.0], [93.6, 9699.0], [93.7, 9699.0], [93.8, 9772.0], [93.9, 9772.0], [94.0, 9925.0], [94.1, 9925.0], [94.2, 9925.0], [94.3, 9932.0], [94.4, 9932.0], [94.5, 10096.0], [94.6, 10096.0], [94.7, 10096.0], [94.8, 10235.0], [94.9, 10235.0], [95.0, 10309.0], [95.1, 10309.0], [95.2, 10309.0], [95.3, 10608.0], [95.4, 10608.0], [95.5, 10772.0], [95.6, 10772.0], [95.7, 10772.0], [95.8, 10782.0], [95.9, 10782.0], [96.0, 10784.0], [96.1, 10784.0], [96.2, 10784.0], [96.3, 11011.0], [96.4, 11011.0], [96.5, 11352.0], [96.6, 11352.0], [96.7, 11352.0], [96.8, 11446.0], [96.9, 11446.0], [97.0, 11482.0], [97.1, 11482.0], [97.2, 11482.0], [97.3, 11872.0], [97.4, 11872.0], [97.5, 12808.0], [97.6, 12808.0], [97.7, 12808.0], [97.8, 12953.0], [97.9, 12953.0], [98.0, 14744.0], [98.1, 14744.0], [98.2, 14744.0], [98.3, 15393.0], [98.4, 15393.0], [98.5, 15608.0], [98.6, 15608.0], [98.7, 15608.0], [98.8, 16986.0], [98.9, 16986.0], [99.0, 17270.0], [99.1, 17270.0], [99.2, 17270.0], [99.3, 17805.0], [99.4, 17805.0], [99.5, 17957.0], [99.6, 17957.0], [99.7, 17957.0], [99.8, 18675.0], [99.9, 18675.0]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 52.0, "series": [{"data": [[900.0, 1.0], [1000.0, 2.0], [1100.0, 1.0], [1300.0, 5.0], [1400.0, 10.0], [1500.0, 3.0], [1600.0, 14.0], [1700.0, 14.0], [1800.0, 19.0], [1900.0, 40.0], [2000.0, 52.0], [2100.0, 51.0], [2200.0, 28.0], [2300.0, 22.0], [2400.0, 32.0], [2500.0, 13.0], [2600.0, 13.0], [2700.0, 11.0], [2800.0, 5.0], [2900.0, 6.0], [3000.0, 1.0], [3100.0, 2.0], [3300.0, 1.0], [3200.0, 1.0], [3400.0, 1.0], [4100.0, 1.0], [5900.0, 1.0], [7200.0, 2.0], [7500.0, 1.0], [7600.0, 2.0], [7900.0, 1.0], [7800.0, 1.0], [8000.0, 1.0], [8700.0, 1.0], [8500.0, 1.0], [8200.0, 1.0], [9000.0, 1.0], [9200.0, 2.0], [8800.0, 2.0], [9100.0, 1.0], [9700.0, 1.0], [9300.0, 1.0], [9600.0, 1.0], [9500.0, 1.0], [9900.0, 2.0], [10000.0, 1.0], [10200.0, 1.0], [10700.0, 3.0], [10300.0, 1.0], [10600.0, 1.0], [11000.0, 1.0], [11400.0, 2.0], [11300.0, 1.0], [11800.0, 1.0], [12800.0, 1.0], [12900.0, 1.0], [14700.0, 1.0], [15300.0, 1.0], [15600.0, 1.0], [17200.0, 1.0], [16900.0, 1.0], [17800.0, 1.0], [17900.0, 1.0], [18600.0, 1.0], [200.0, 2.0], [300.0, 1.0], [400.0, 2.0]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 375.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 13.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 375.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 12.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.5574653E12, "maxY": 4.062499999999999, "series": [{"data": [[1.55746548E12, 3.288888888888889], [1.55746566E12, 4.017543859649122], [1.5574656E12, 3.659090909090908], [1.5574653E12, 1.0], [1.55746578E12, 2.9777777777777774], [1.55746572E12, 3.4489795918367343], [1.55746542E12, 2.902439024390243], [1.55746536E12, 2.6052631578947363], [1.55746584E12, 1.6551724137931032], [1.55746554E12, 4.062499999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746584E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2386.7894736842104, "minX": 1.0, "maxY": 3426.8814432989707, "series": [{"data": [[1.0, 2446.4375], [2.0, 2386.7894736842104], [4.0, 3057.4531249999995], [5.0, 2711.875], [3.0, 3426.8814432989707]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}, {"data": [[3.265, 3127.737500000001]], "isOverall": false, "label": "Task WebDriver Sampler-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.5574653E12, "maxY": 458186.4, "series": [{"data": [[1.55746548E12, 427078.4], [1.55746566E12, 450702.55], [1.5574656E12, 367973.6666666667], [1.5574653E12, 40590.4], [1.55746578E12, 378712.88333333336], [1.55746572E12, 429342.01666666666], [1.55746542E12, 356553.1], [1.55746536E12, 335842.95], [1.55746584E12, 275776.51666666666], [1.55746554E12, 458186.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55746548E12, 0.0], [1.55746566E12, 0.0], [1.5574656E12, 0.0], [1.5574653E12, 0.0], [1.55746578E12, 0.0], [1.55746572E12, 0.0], [1.55746542E12, 0.0], [1.55746536E12, 0.0], [1.55746584E12, 0.0], [1.55746554E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746584E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2129.7241379310344, "minX": 1.5574653E12, "maxY": 3859.068181818181, "series": [{"data": [[1.55746548E12, 3611.7333333333327], [1.55746566E12, 2993.2982456140353], [1.5574656E12, 3859.068181818181], [1.5574653E12, 3115.0], [1.55746578E12, 3204.422222222223], [1.55746572E12, 2940.795918367347], [1.55746542E12, 2774.5609756097556], [1.55746536E12, 2685.4736842105267], [1.55746584E12, 2129.7241379310344], [1.55746554E12, 3538.0208333333335]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746584E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.5574653E12, "maxY": 4.9E-324, "series": [{"data": [[1.55746548E12, 0.0], [1.55746566E12, 0.0], [1.5574656E12, 0.0], [1.5574653E12, 0.0], [1.55746578E12, 0.0], [1.55746572E12, 0.0], [1.55746542E12, 0.0], [1.55746536E12, 0.0], [1.55746584E12, 0.0], [1.55746554E12, 0.0]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746584E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.5574653E12, "maxY": 4.9E-324, "series": [{"data": [[1.55746548E12, 0.0], [1.55746566E12, 0.0], [1.5574656E12, 0.0], [1.5574653E12, 0.0], [1.55746578E12, 0.0], [1.55746572E12, 0.0], [1.55746542E12, 0.0], [1.55746536E12, 0.0], [1.55746584E12, 0.0], [1.55746554E12, 0.0]], "isOverall": false, "label": "Task WebDriver Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746584E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1374.0, "minX": 1.5574653E12, "maxY": 18675.0, "series": [{"data": [[1.55746548E12, 17270.0], [1.55746566E12, 11872.0], [1.5574656E12, 18675.0], [1.5574653E12, 7970.0], [1.55746578E12, 17957.0], [1.55746572E12, 12953.0], [1.55746542E12, 9932.0], [1.55746536E12, 11482.0], [1.55746584E12, 10782.0], [1.55746554E12, 12808.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55746548E12, 1781.0], [1.55746566E12, 2043.0], [1.5574656E12, 1865.0], [1.5574653E12, 1415.0], [1.55746578E12, 1816.0], [1.55746572E12, 1983.0], [1.55746542E12, 1723.0], [1.55746536E12, 1416.0], [1.55746584E12, 1374.0], [1.55746554E12, 1956.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55746548E12, 9814.400000000001], [1.55746566E12, 3171.5999999999995], [1.5574656E12, 10350.000000000002], [1.5574653E12, 7970.0], [1.55746578E12, 7987.200000000001], [1.55746572E12, 4647.900000000007], [1.55746542E12, 7673.0], [1.55746536E12, 7728.100000000002], [1.55746584E12, 2095.0], [1.55746554E12, 9229.000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55746548E12, 17270.0], [1.55746566E12, 11872.0], [1.5574656E12, 18675.0], [1.5574653E12, 7970.0], [1.55746578E12, 17957.0], [1.55746572E12, 12953.0], [1.55746542E12, 9932.0], [1.55746536E12, 11482.0], [1.55746584E12, 10782.0], [1.55746554E12, 12808.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55746548E12, 15263.199999999999], [1.55746566E12, 10309.599999999999], [1.5574656E12, 17641.199999999997], [1.5574653E12, 7970.0], [1.55746578E12, 14775.599999999988], [1.55746572E12, 10709.849999999997], [1.55746542E12, 9772.0], [1.55746536E12, 9405.449999999997], [1.55746584E12, 9029.5], [1.55746554E12, 10903.449999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746584E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 767.5, "minX": 1.0, "maxY": 2250.0, "series": [{"data": [[1.0, 2138.0], [2.0, 2250.0], [3.0, 2205.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 967.5], [3.0, 767.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[1.0, 0.0], [2.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.5574653E12, "maxY": 0.9333333333333333, "series": [{"data": [[1.55746548E12, 0.75], [1.55746566E12, 0.9333333333333333], [1.5574656E12, 0.75], [1.5574653E12, 0.06666666666666667], [1.55746578E12, 0.7333333333333333], [1.55746572E12, 0.8166666666666667], [1.55746542E12, 0.6833333333333333], [1.55746536E12, 0.6833333333333333], [1.55746584E12, 0.4666666666666667], [1.55746554E12, 0.7833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746584E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5574653E12, "maxY": 0.9166666666666666, "series": [{"data": [[1.55746548E12, 0.7166666666666667], [1.55746566E12, 0.9166666666666666], [1.5574656E12, 0.7166666666666667], [1.5574653E12, 0.06666666666666667], [1.55746578E12, 0.7166666666666667], [1.55746572E12, 0.8], [1.55746542E12, 0.65], [1.55746536E12, 0.6], [1.55746584E12, 0.48333333333333334], [1.55746554E12, 0.8]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.55746548E12, 0.03333333333333333], [1.55746566E12, 0.03333333333333333], [1.5574656E12, 0.016666666666666666], [1.55746578E12, 0.03333333333333333], [1.55746572E12, 0.016666666666666666], [1.55746542E12, 0.03333333333333333], [1.55746536E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55746584E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5574653E12, "maxY": 0.9166666666666666, "series": [{"data": [[1.55746548E12, 0.7166666666666667], [1.55746566E12, 0.9166666666666666], [1.5574656E12, 0.7166666666666667], [1.5574653E12, 0.06666666666666667], [1.55746578E12, 0.7166666666666667], [1.55746572E12, 0.8], [1.55746542E12, 0.65], [1.55746536E12, 0.6], [1.55746584E12, 0.48333333333333334], [1.55746554E12, 0.8]], "isOverall": false, "label": "Task WebDriver Sampler-success", "isController": false}, {"data": [[1.55746548E12, 0.03333333333333333], [1.55746566E12, 0.03333333333333333], [1.5574656E12, 0.016666666666666666], [1.55746578E12, 0.03333333333333333], [1.55746572E12, 0.016666666666666666], [1.55746542E12, 0.03333333333333333], [1.55746536E12, 0.03333333333333333]], "isOverall": false, "label": "Task WebDriver Sampler-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746584E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5574653E12, "maxY": 0.9166666666666666, "series": [{"data": [[1.55746548E12, 0.7166666666666667], [1.55746566E12, 0.9166666666666666], [1.5574656E12, 0.7166666666666667], [1.5574653E12, 0.06666666666666667], [1.55746578E12, 0.7166666666666667], [1.55746572E12, 0.8], [1.55746542E12, 0.65], [1.55746536E12, 0.6], [1.55746584E12, 0.48333333333333334], [1.55746554E12, 0.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.55746548E12, 0.03333333333333333], [1.55746566E12, 0.03333333333333333], [1.5574656E12, 0.016666666666666666], [1.55746578E12, 0.03333333333333333], [1.55746572E12, 0.016666666666666666], [1.55746542E12, 0.03333333333333333], [1.55746536E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55746584E12, "title": "Total Transactions Per Second"}},
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

