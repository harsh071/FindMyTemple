const initialState = {
    username: '',
    fullname: '',
    email: '',
    routesCompleted: '',
    distanceCompleted: '',
    totalTime: '',
    moreMandirs: [{
        "address": "1203 Cordele Rd, Albany, GA 31705, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/863BAPS_ALBANY,_GA.jpg",
        "name": "Albany, GA",
        "latlng": [31.600371008552784, -84.05457396249034]
    }, {
        "address": "16 Computer Drive East, Albany, NY 12205, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/12albanymandirf.jpg",
        "name": "Albany, NY",
        "latlng": [42.715951983218986, -73.80486466633383]
    }, {
        "address": "4166 Lower Saucon Road, Hellertown, PA 18055-3322, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1264Allentown.JPG",
        "name": "Allentown",
        "latlng": [40.621778988568934, -75.27649602632806]
    }, {
        "address": "460 Rockbridge Road NW, Lilburn, GA 30047, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1301_Homepage Photo-f.jpg",
        "name": "Atlanta",
        "latlng": [33.88530899485821, -84.1620080006132]
    }, {
        "address": "837 Furys Ferry Rd, Evans, GA 30809, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/16augusta1f.jpg",
        "name": "Augusta",
        "latlng": [33.56067801060186, -82.1003859593069]
    }, {
        "address": "12246 Running Bird Lane, Austin, TX 78758-2634, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/15austinmandirf.jpg",
        "name": "Austin",
        "latlng": [30.408699992303127, -97.69311998863384]
    }, {
        "address": "1345 South Major Drive, Beaumont, TX 77707, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/960BAPS MAndir Beaumont.jpg",
        "name": "Beaumont",
        "latlng": [30.06354499611237, -94.18896503475912]
    }, {
        "address": "500 Biscayne Dr, Birmingham, AL 35206, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/17birmingham01f.jpg",
        "name": "Birmingham",
        "latlng": [33.58517097941841, -86.69398196353296]
    }, {
        "address": "1414 Leslie Dr., Bloomington, IL 61704, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1203BAPS Bloomington Mandir -f.jpg",
        "name": "Bloomington",
        "latlng": [40.50172498938707, -88.9048390131932]
    }, {
        "address": "713 S Second Avenue, Galloway, Atlantic City, NJ 08205, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/14atlantic-city.jpg",
        "name": "Atlantic City",
        "latlng": [39.454591008580564, -74.53072197480627]
    }, {
        "address": "50 Stedman Street, Lowell, MA 01851, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/18boston.jpg",
        "name": "Boston",
        "latlng": [42.627959643783015, -71.34859454415208]
    }, {
        "address": "Rotary Challenger Park, Pearl and Burns Centre, 3688 - 48th Ave NE, Calgary, AB T3J 5C8, Canada",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/901Calgary.jpg",
        "name": "Calgary",
        "latlng": [51.098334797776936, -113.98717696771291]
    }, {
        "address": "215 West Line Street, Calhoun, GA 30701-4747, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1210BAPS Calhoun mandir.jpg",
        "name": "Calhoun",
        "latlng": [34.50615999964353, -84.95252004123876]
    }, {
        "address": "333 Speedsville Road, Cambridge, ON N3H4R6, Canada",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/1393BAPS Cambridge.jpg",
        "name": "Cambridge",
        "latlng": [43.40876650618892, -80.34866238758886]
    }, {
        "address": "4100 Margaret Wallace Road, Matthews, NC 28105, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/19charlotte4f.jpg",
        "name": "Charlotte",
        "latlng": [35.166411984323716, -80.71084695901295]
    }, {
        "address": "377 Direct Connection Dr, Rossville, GA 30741, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/932BAPS Shri Swaminarayan Mandir Chattanooga.jpg",
        "name": "Chattanooga",
        "latlng": [34.984278006006164, -85.20455699656371]
    }, {
        "address": "1 Carnegie Plaza, Cherry Hill, NJ 08003, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/20cherry-hill.jpg",
        "name": "Cherry Hill",
        "latlng": [39.91409201170973, -74.96153796788377]
    }, {
        "address": "1851 S IL Route 59, Pramukh Swami Rd, Bartlett, IL 60103-3008, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/21mandirss.jpg",
        "name": "Chicago",
        "latlng": [41.94233591534058, -88.2083470644649]
    }, {
        "address": "1 BAPS Drive, Cincinnati, OH 45246, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/900cincinnati.jpg",
        "name": "Cincinnati",
        "latlng": [39.27639597993175, -84.44245902096966]
    }, {
        "address": "401 Landing Blvd, League City, TX 77573, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/961Clearlake-f.jpg",
        "name": "Clear Lake",
        "latlng": [29.49820301937787, -95.12671299983128]
    }, {
        "address": "2915 Laurel Road, Brunswick, OH 44212, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/22YJ0A2054.JPG",
        "name": "Cleveland",
        "latlng": [41.227455982578675, -81.7903609861575]
    }, {
        "address": "854 Bloomfield Avenue, Clifton, NJ 07012, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/25Clifton.jpg",
        "name": "Clifton",
        "latlng": [40.8464419892274, -74.1560609611478]
    }, {
        "address": "721 Arrowwood Rd, Columbia, SC 29210, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/-1Mandirf.jpg",
        "name": "Columbia, SC",
        "latlng": [34.0224399902031, -81.09039403548948]
    }, {
        "address": "1024 East Valley Dr, Columbia, TN 38401, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/99701Mandirf.jpg",
        "name": "Columbia, TN",
        "latlng": [35.60824100189295, -87.02077996312677]
    }, {
        "address": "5419 E Broad Street, Columbus, OH 43213, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/26Columbus_OH3__1_.JPG",
        "name": "Columbus",
        "latlng": [39.9768640007716, -82.85601696132497]
    }, {
        "address": "1001 Lantana St, Corpus Christi, TX 78407-1107, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/27IMG_1186.JPG",
        "name": "Corpus Christi",
        "latlng": [27.805242979808355, -97.47248097205184]
    }, {
        "address": "1300 Cunat Ct, Lake In the Hills, Crystal Lake, IL 60156, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1389crystallake.jpg",
        "name": "Crystal Lake",
        "latlng": [42.18947636483426, -88.3107712655637]
    }, {
        "address": "4601 N State Highway 161, Irving, TX 75038, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/28dallasf.jpg",
        "name": "Dallas",
        "latlng": [32.87064001097839, -97.00081501947754]
    }, {
        "address": "5282 Bellefontaine Rd, Huber Heights, OH 45424, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/29daytonmandirf.jpg",
        "name": "Dayton",
        "latlng": [39.82998200218657, -84.11443198291326]
    }, {
        "address": "1 Pramukh Swami Way, New Castle, DE 19720, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/30delawaremandirf.jpg",
        "name": "Delaware",
        "latlng": [39.688015000000064, -75.58538999999996]
    }, {
        "address": "3175 S. Canton Center Road, Canton, MI 48188, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/31detroit.jpg",
        "name": "Detroit",
        "latlng": [42.28342800973144, -83.48416198207259]
    }, {
        "address": "3113 Oxmoor Ind Blvd, Dothan, AL 36303, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1329Dothan Mandir-f.jpg",
        "name": "Dothan",
        "latlng": [31.28032702080921, -85.45285897583368]
    }, {
        "address": "2500 Woodbridge Avenue, Edison, NJ 08817, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/8edison  new.jpg",
        "name": "Edison",
        "latlng": [40.503873019713836, -74.38078598788977]
    }, {
        "address": "3611 Ellerslie Road S.W, Edmonton, AB T6X 1A4, Canada",
        "image": "NONE",
        "name": "Edmonton",
        "latlng": [53.423759990103434, -113.39692999301336]
    }, {
        "address": "8122  Robin Hill Rd, Newburgh, IN 47630, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1390EvensvilleMandir.jpg",
        "name": "Evansville",
        "latlng": [37.96069999596136, -87.39818998956969]
    }, {
        "address": "4 Commercial Street, Sharon, MA 02067, USA",
        "image": "NONE",
        "name": "NONE",
        "latlng": [42.115569166892925, -71.23539819905321]
    }, {
        "address": "AB, Canada",
        "image": "NONE",
        "name": "NONE",
        "latlng": [55.16950925700007, -114.51104221099996]
    }, {
        "address": "1425 West Pine Avenue, Fresno, CA 93728, USA",
        "image": "NONE",
        "name": "Fresno",
        "latlng": [36.76152399124649, -119.82835298396105]
    }, {
        "address": "922 Gallimore Dairy Road, High Point, NC 27265, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/965greesnboro.jpg",
        "name": "Greensboro",
        "latlng": [36.07498620386981, -79.98928944280254]
    }, {
        "address": "5 Webb Road, Greenville, SC 29607, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1302Greenville-Mandir.jpg",
        "name": "Greenville",
        "latlng": [34.8432790138029, -82.32312296625372]
    }, {
        "address": "245/265 Reynders St, Harrisburg, PA 17113, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/34harriburgmandir.jpg",
        "name": "Harrisburg",
        "latlng": [40.237263999989835, -76.8313920390007]
    }, {
        "address": "647 North Mountain Road, Newington, CT 06111, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/35hartfordmandirf.jpg",
        "name": "Hartford",
        "latlng": [41.72027601474909, -72.71930401805756]
    }, {
        "address": "1150 Brand Lane, Stafford, TX 77477, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/3636-houston.jpg",
        "name": "Houston",
        "latlng": [29.608140019517464, -95.57834000120793]
    }, {
        "address": "12544 Henderson Lane, Madison, AL 35756, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/996Huntsvill_mandir_outside.jpg",
        "name": "Huntsville",
        "latlng": [34.73675600473618, -86.80602697041166]
    }, {
        "address": "350 N County Road 900 East, Avon, IN 46123, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/37indianapolismandirf.jpg",
        "name": "Indianapolis",
        "latlng": [39.76851379362919, -86.36200098150992]
    }, {
        "address": "2390 Greenway Drive, Jackson, MS 39204, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/41jakson4f.jpg",
        "name": "Jackson",
        "latlng": [32.29164399779013, -90.27577999526439]
    }, {
        "address": "7500 Merrill Road, Jacksonville, FL 32277, USA",
        "image": "NONE",
        "name": "Jacksonville",
        "latlng": [30.351590020745803, -81.57149097024067]
    }, {
        "address": "2000 Tonnelle Avenue, North Bergen, NJ 07047, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/40jerse4f.jpg",
        "name": "Jersey City",
        "latlng": [40.76916694556553, -74.04447165696992]
    }, {
        "address": "15220 W 65th Street, Shawnee, KS 66217, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/857Mandir-front-f.jpg",
        "name": "Kansas City",
        "latlng": [39.01202999940702, -94.76297000179206]
    }, {
        "address": "602 Brakebill Rd., Knoxville, TN 37924, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/879Knoxville mandir-f.jpg",
        "name": "Knoxville",
        "latlng": [36.008970620824115, -83.77672502966487]
    }, {
        "address": "2021 E. Township Line Road, Souderton, PA 18964, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/44Lansdale Mandir Photo.jpg",
        "name": "Lansdale",
        "latlng": [40.29186613475759, -75.31590666393703]
    }, {
        "address": "5601 Pritchard Dr., North Little Rock, AR 72117, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/45littlerock01f.jpg",
        "name": "Little Rock",
        "latlng": [34.7781919849935, -92.20696503864926]
    }, {
        "address": "2 Deshon Drive, Melville, NY 11747, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/966Long Island mandir.jpg",
        "name": "Long Island",
        "latlng": [40.75973647844641, -73.4096331555726]
    }, {
        "address": "15100 Fairfield Ranch Rd., Chino Hills, CA 91709, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/43la1.jpg",
        "name": "Los Angeles",
        "latlng": [33.97745599224113, -117.69623796348284]
    }, {
        "address": "1620 KY-1793, Goshen, KY 40026, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1321BAPS Louisville mandir.jpg",
        "name": "Louisville",
        "latlng": [38.40081338760383, -85.59370724716713]
    }, {
        "address": "5206, 11 TH ST, Lubbock, TX 79416, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/46lubbockmandirf.jpg",
        "name": "Lubbock",
        "latlng": [33.58595301098468, -101.92355604000555]
    }, {
        "address": "801 Masterson Street, Melbourne, FL 32935, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1233BAPS Melbourne FL USA Mandir.jpg",
        "name": "Melbourne",
        "latlng": [28.14044999803437, -80.63201499200986]
    }, {
        "address": "4790 American Way, Memphis, TN 38118, USA",
        "image": "NONE",
        "name": "Memphis",
        "latlng": [35.07503302072875, -89.90329903080281]
    }, {
        "address": "541 South East 18th Avenue, Boynton Beach, FL 33435, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/48miami4f.jpg",
        "name": "Miami",
        "latlng": [26.511806019820185, -80.06152598190192]
    }, {
        "address": "N35 W23986 Capitol Drive, Pewaukee, WI 53072, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1387Milwaukee.jpg",
        "name": "Milwaukee",
        "latlng": [43.083608365134, -88.22055850543363]
    }, {
        "address": "2300, Freeway Boulevard, Brooklyn Center, MN 55430-1730, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/49minneapolismandirf.jpg",
        "name": "Minneapolis",
        "latlng": [45.07329800402434, -93.31038299636468]
    }, {
        "address": "4137 Andrew Jackson Parkway, Hermitage, TN 37076, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/50nashvillemandirf.jpg",
        "name": "Nashville",
        "latlng": [36.19308397927931, -86.60508400136841]
    }, {
        "address": "25 Research Drive, Milford, CT 06460, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1397BAPSShriSwaminarayanMandirNewHaven.jpg",
        "name": "New Haven",
        "latlng": [41.23823599016211, -73.01876301552112]
    }, {
        "address": "10328 River Rd, St Rose, New Orleans, LA 70087, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1299Exterior Picture-f.jpg",
        "name": "New Orleans",
        "latlng": [29.97019699773294, -90.29077597441653]
    }, {
        "address": "43-38 Bowne Street, Flushing, NY 11355, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/51Mandir Frontf.jpg",
        "name": "New York",
        "latlng": [40.754364980736, -73.81957398439738]
    }, {
        "address": "4160 Pleasant Valley Road, Chantilly, VA 20151, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/1339Northern virginia Mandir.jpg",
        "name": "Northern Virginia",
        "latlng": [38.90752698709608, -77.475027990283]
    }, {
        "address": "3500 N Meridian Ave, Oklahoma, OK 73112, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/895BAPS Swaminarayan Mandir Oklahoma.jpg",
        "name": "Oklahoma",
        "latlng": [35.50640599127226, -97.60012101270264]
    }, {
        "address": "3721 Magnolia Street, Orangeburg, SC 29118, USA",
        "image": "NONE",
        "name": "Orangeburg",
        "latlng": [33.53104098398752, -80.83826102355414]
    }, {
        "address": "1325 West Oakridge Road, Orlando, FL 32809, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/52Orlando_mandir_pic.jpg",
        "name": "Orlando",
        "latlng": [28.472946015406833, -81.39874296327994]
    }, {
        "address": "3 Entin Road, Parsippany, NJ 07054, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/53parsipannyf.jpg",
        "name": "Parsippany",
        "latlng": [40.84764587561962, -74.42946487071004]
    }, {
        "address": "736, Mason Terrace, Perry, GA 31069, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/54perry06-f.jpg",
        "name": "Perry",
        "latlng": [32.47845000702816, -83.7436900119035]
    }, {
        "address": "1561 Woodbourne Road, Levittown, PA 19057, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/55BAPS Phila_01f.jpg",
        "name": "Philadelphia",
        "latlng": [40.16188932295047, -74.87043482567584]
    }, {
        "address": "3620 N Black Canyon Highway, Phoenix, AZ 85017, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/56Phoenix mandir.jpg",
        "name": "Phoenix",
        "latlng": [33.49076099390665, -112.11406697151907]
    }, {
        "address": "81 Suttons Lane, Piscataway, NJ 08854, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/57Piscatway.jpg",
        "name": "Piscataway",
        "latlng": [40.52797501465676, -74.4332400217807]
    }, {
        "address": "90 Grant Street, Coraopolis, PA 15108, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/1204Mandir.JPG",
        "name": "Pittsburgh",
        "latlng": [40.48797200456633, -80.11544701648664]
    }, {
        "address": "11365 SW Tigard St., Tigard, OR 97223, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/58portland.jpg",
        "name": "Portland",
        "latlng": [45.43676599182038, -122.79397996272611]
    }, {
        "address": "1020 Aviation Parkway, Morrisville, NC 27560, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/65Raleigh.jpg",
        "name": "Raleigh",
        "latlng": [35.83913699530025, -78.80838996675256]
    }, {
        "address": "7041 Jefferson Davis Hwy, Richmond, VA 23237, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/64richmondf.jpg",
        "name": "Richmond",
        "latlng": [37.42774699229176, -77.4385160009556]
    }, {
        "address": "115 Sheraton Drive, Salem, VA 24153, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/963roanoke_mandirf.jpg",
        "name": "Roanoke",
        "latlng": [37.31981397947288, -80.03247296439133]
    }, {
        "address": "112 N Main Street, Robbinsville, NJ 08561, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/865New robbinsiville 2.jpeg",
        "name": "Robbinsville",
        "latlng": [40.25307688194603, -74.57437639830407]
    }, {
        "address": "10548 Armstrong Ave, Mather, CA 95655, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/892Sacramentof.jpg",
        "name": "Sacramento",
        "latlng": [38.56785237256804, -121.29567730300859]
    }, {
        "address": "5044 N. Loop, 1604 W, San Antonio, TX 78249, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/66sanantoniof.jpg",
        "name": "San Antonio",
        "latlng": [29.591221986148142, -98.58531700381326]
    }, {
        "address": "950 Avalon Avenue, San Francisco, CA  94112, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/67sf1f.jpg",
        "name": "San Francisco",
        "latlng": [37.724531995004284, -122.42419595943028]
    }, {
        "address": "1430.California Circle, Milpitas, CA  95035, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/68Mandirf.jpg",
        "name": "San Jose",
        "latlng": [37.449052993882944, -121.91846796400773]
    }, {
        "address": "355 Canebrake Rd, Savannah, GA  31419, USA",
        "image": "NONE",
        "name": "Savannah",
        "latlng": [32.001018981449775, -81.2795389728991]
    }, {
        "address": "1840 Birchmount Road, Scarborough, ON M1P 2H7, Canada",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/1202scarborough.jpg",
        "name": "Scarborough",
        "latlng": [43.76717000443821, -79.29264000584028]
    }, {
        "address": "301 Oak St, Scranton, PA 18508, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/70scrantonmandirf.jpg",
        "name": "Scranton",
        "latlng": [41.439232016652454, -75.66125698185584]
    }, {
        "address": "15440 NE 95th Street, Redmond, WA 98052, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/88020151004_122649.jpg",
        "name": "Seattle",
        "latlng": [47.686434019210964, -122.13342296058937]
    }, {
        "address": "4 Commercial St, Sharon, MA 02067, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/32Soth Boston BAPS mandir.jpg",
        "name": "South Boston",
        "latlng": [42.115569166892925, -71.23539819905321]
    }, {
        "address": "605 Silver Street, Agawam, MA 01001, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/71springfield.jpg",
        "name": "Springfield",
        "latlng": [42.05694601035535, -72.64898789704264]
    }, {
        "address": "12305 Natural Bridge Road, Bridgeton, MO 63044, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/72stlouisef.jpg",
        "name": "St. Louis",
        "latlng": [38.756970990801676, -90.42220597640714]
    }, {
        "address": "43601 Van Dyke Ave, Sterling Heights, MI 48314, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1338Sterlinghightsmandir.jpg",
        "name": "Sterling Heights",
        "latlng": [42.61457001446493, -83.0326840109344]
    }, {
        "address": "9556 E. Fowler Avenue, Thonotosassa, FL 33592, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/FullSizeImages/74Tampa Mandir front view.jpg",
        "name": "Tampa",
        "latlng": [28.055252981397913, -82.33277900253087]
    }, {
        "address": "998 Easton Road, Warrington, PA 18976, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/882BAPS_Warrington_01f.jpg",
        "name": "Warrington",
        "latlng": [40.243723010757805, -75.14090399031569]
    }, {
        "address": "1767 Northway Avenue, Windsor, ON N9B 3M1, Canada",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1337Windsor Mandir.jpg",
        "name": "Windsor",
        "latlng": [42.28498000292339, -83.05446002774615]
    }, {
        "address": "1550 North Oracle Road, Tucson, AZ 85705, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/76tucsonmandirf.jpg",
        "name": "Tucson",
        "latlng": [32.241222994514374, -110.97753999334645]
    }, {
        "address": "61 Claireville Drive, Toronto, ON M9W 5Z7, Canada",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/75toronto-mandir.jpg",
        "name": "Toronto",
        "latlng": [43.73928001790273, -79.62496000324607]
    }, {
        "address": "310 Gateway Park Dr., Syracuse, NY 13212, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/73Syracus Mandir.jpg",
        "name": "Syracuse",
        "latlng": [43.12673916720166, -76.12424347369198]
    }, {
        "address": "6014 Jefferson Ave, Newport News, VA 23605, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/78VaBeach_Mandir Outside Shot-f.jpg",
        "name": "Virginia Beach",
        "latlng": [37.01611298463126, -76.44176798706957]
    }, {
        "address": "275 Turnpike Road, Westborough, MA 01581, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1384Westborough Mandir.jpg",
        "name": "Westborough",
        "latlng": [42.28671053065298, -71.64554006031041]
    }, {
        "address": "4320 Ammendale Rd, Beltsville, MD 20705, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/79baps-wdc-address.jpg",
        "name": "Washington DC",
        "latlng": [39.05632240653799, -76.9157877456936]
    }, {
        "address": "556, Yonkers Avenue, Yonkers, NY 10704, USA",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/80westchester.jpg",
        "name": "Westchester",
        "latlng": [40.92880273207698, -73.87068571969264]
    }, {
        "address": "1488 Red River Drive, Howden, Winnipeg, MB R5A 1K2, Canada",
        "image": "https://www.baps.org//Data/Sites/1/Media/LocationImages/1324BAPS Shri Swaminarayan Mandir Winnipeg.jpg",
        "name": "Winnipeg",
        "latlng": [49.696435140847704, -97.12872643679002]
    }]

}

export default function mandirReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return {...state, username: action.payload}
        case 'UPDATE_FULLNAME':
            return {...state, fullname: action.payload}
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload}
        case 'UPDATE_ROUTES_COMPLETED':
            return {...state, routesCompleted: action.payload}
        case 'UPDATED_DISTANCE_COMPLETED':
            return {...state, distanceCompleted: action.payload}
        case 'UPDATE_TOTAL_TIME':
            return {...state, totalTime: action.payload}
        default:
            return state
    }
}
