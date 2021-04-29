// JavaScript source code


var map;
var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
function initMap() {
    var canberraMap = {
        center: canberraCentre,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(
        document.getElementById("googleMap"), canberraMap);
    
 // Add markers below this line
    
    
    addCanberraItalianSons(map);
    addCanberraBellucisItalian(map);
    addCanberraBluGinger(map);
    addCanberraJewelOfIndia(map);
    addCanberraChairmanYip(map);
    addCanberraDicksonAsianNoodleHouse(map);

}


function addCanberraItalianSons(map) {
    var canberraItalianSons = new google.maps.LatLng(-35.274976, 149.132290);
    var markerCanberraItalianSons = new google.maps.Marker({
        position: canberraItalianSons,
    });
    markerCanberraItalianSons.setMap(map);

    var contentcanberraItalianSons =
        ' <h1>Italian&Sons</h1>' +
        ' <img src="img/is_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>"A casual Italian trattoria that specialises in wood fired pizzas such as Rucola with Prosciutto di Parma, rucola & reggiano. Do not miss daily changing main dishes of the day such as their wood roast suckling pig, rosemary, garlic, baked baby fennel & mustard fruits.</p>' +
        ' <p><a href="http://italianandsons.com.au/ ">Click Herer<a> for the Italian and Sons website ';



    var infoCanberraItalianSons = new google.maps.InfoWindow({
        content: contentcanberraItalianSons
    });

    google.maps.event.addListener(markerCanberraItalianSons, 'click',
        function () {
            infoCanberraItalianSons.open(map, markerCanberraItalianSons);
        });
}


function addCanberraBellucisItalian(map) {
    var canberraBellucisItalian = new google.maps.LatLng(-35.339935, 149.084268);
    var markerCanberraBellucisItalian = new google.maps.Marker({
        position: canberraBellucisItalian,
    });
    markerCanberraBellucisItalian.setMap(map);

    var contentcanberraBellucisItalian =

        ' <h1>Bellucis Italian</h1>' +
        ' <img src="img/bellucis_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>"Bellucis demonstrates a new concept, a new food philosophy the dawn of a new era in Canberra dining.Having been established more than 20 years ago, Bellucis fast became an iconic name in Canberra. To bring you the finest dishes, we have gone back to traditional Italian routes, creating simple, rustic food."</p>' +
        ' <p><a href="https://bellucis.com.au/home.php ">Click Herer<a> for the Bellucis Italian website ';

    var infoCanberraBellucisItalian = new google.maps.InfoWindow({
        content: contentcanberraBellucisItalian
    });

    google.maps.event.addListener(markerCanberraBellucisItalian, 'click',
        function () {
            infoCanberraBellucisItalian.open(map, markerCanberraBellucisItalian);
        });
}

function addCanberraBluGinger(map) {
    var canberraBluGinger = new google.maps.LatLng(-35.276909, 149.131970);
    var markerCanberraBluGinger = new google.maps.Marker({
        position: canberraBluGinger,
    });
    markerCanberraBluGinger.setMap(map);

    var contentcanberraBluGinger =

        ' <h1>Blu Ginger</h1>' +
        ' <img src="img/bluginger_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>"At Blu Ginger we use only the freshest locally sourced produce, combined with authentic spices imported directly from the sub-continent, to offer classic, traditional recipes with a modern twist, creating a unique and memorable dining experience for you." </p>' +
        ' <p><a href="http://www.bluginger.com.au/">Click Herer<a> for the Blu Ginger website ';

    var infoCanberraBluGinger = new google.maps.InfoWindow({
        content: contentcanberraBluGinger
    });

    google.maps.event.addListener(markerCanberraBluGinger, 'click',
        function () {
            infoCanberraBluGinger.open(map, markerCanberraBluGinger);
        });
}

function addCanberraJewelOfIndia(map) {
    var canberraJewelOfIndia = new google.maps.LatLng(-35.320575, 149.132824);
    var markerCanberraJewelOfIndia = new google.maps.Marker({
        position: canberraJewelOfIndia,
    });
    markerCanberraJewelOfIndia.setMap(map);

    var contentcanberraJewelOfIndia =

        ' <h1>Jewel of India</h1>' +
        ' <img src="img/jewel_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>"Finding a balance between dishes inspired by authentic recipes and creating a modern take on classic cuisine sees a loyal following of Canberra locals returning for a mouth-watering feast."  </p>' +
        ' <p><a href="http://www.jewelofindia.com.au/">Click Herer<a> for the Jewel of India website ';

    var infoCanberraJewelOfIndia = new google.maps.InfoWindow({
        content: contentcanberraJewelOfIndia
    });

    google.maps.event.addListener(markerCanberraJewelOfIndia, 'click',
        function () {
            infoCanberraJewelOfIndia.open(map, markerCanberraJewelOfIndia);
        });
}

function addCanberraChairmanYip(map) {
    var canberraChairmanYip = new google.maps.LatLng(-35.311635, 149.133937);
    var markerCanberraChairmanYip = new google.maps.Marker({
        position: canberraChairmanYip,
    });
    markerCanberraChairmanYip.setMap(map);

    var contentcanberraChairmanYip =

        ' <h1>Chairman & Yip</h1>' +
        ' <img src="img/chairman_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>The Chairman & Yip has become one of Canberras longest standing and most highly regarded institutions, having received numerous awards over the years,offering an ever consistent and professional quality of service for corporate dining, conferences and presentations.</p>' +
        ' <p><a href="http://chairmangroup.com.au/chairmanyip/">Click Herer<a> for the Chairman & Yip website ';

    var infoCanberraChairmanYip = new google.maps.InfoWindow({
        content: contentcanberraChairmanYip
    });

    google.maps.event.addListener(markerCanberraChairmanYip, 'click',
        function () {
            infoCanberraChairmanYip.open(map, markerCanberraChairmanYip);
        });
}

function addCanberraDicksonAsianNoodleHouse(map) {
    var canberraDicksonAsianNoodleHouse = new google.maps.LatLng(-35.250308, 149.136426);
    var markerCanberraDicksonAsianNoodleHouse = new google.maps.Marker({
        position: canberraDicksonAsianNoodleHouse,
    });
    markerCanberraDicksonAsianNoodleHouse.setMap(map);

    var contentcanberraDicksonAsianNoodleHouse =

        ' <h1>Dickson Asian Noodle House</h1>' +
        ' <img src="img/noodle_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>"The Dickson Asian Noodle House specialises in traditional Malaysian, Thai and Lao cuisine. The dining atmosphere is casual and cosy providing for a la carte dining, banquets and take away." </p>' +
        ' <p><a href="http://chairmangroup.com.au/chairmanyip/">Click Herer<a> for the Dickson Asian Noodle House website ';

    var infoCanberraDicksonAsianNoodleHouse = new google.maps.InfoWindow({
        content: contentcanberraDicksonAsianNoodleHouse
    });

    google.maps.event.addListener(markerCanberraDicksonAsianNoodleHouse, 'click',
        function () {
            infoCanberraDicksonAsianNoodleHouse.open(map, markerCanberraDicksonAsianNoodleHouse);
        });
}

google.maps.event.addDomListener(window, 'load', initMap);     


function BelluciMenuContent() {
    var content =
        "<h1>Bellucis Italian</h1>" +
        "<br>" +
        "<h4>SPAGHETTI ALLA MARINARA</h4>" +
        "<p5>w/ qld prawns, squid, clams, mussels & chilli tomato sugo</p5>" +
        "<h4>GNOCCHI AL RAGU</h4>" +
        "<p5>house made ricotta gnocchiw / braised beef cheek ragu, baby beetroots,leek & confit garlic</p5>" +
        "<h4>FETTUCCINE ALLA CARBONARA</h4>" +
        "<p5> w/ mushrooms, pialligo bacon, onion,parmesan & 63 degree egg</p5>";

    document.getElementById("BT").innerHTML = content;
    document.getElementById("BT").style = "font-size:15px; ";
}

function ItalianSonsContent() {
    var content =
        "<h1>Italian and Sons<h1>" +
        "<br>" +
        "<h4>Diavola</h4>" +
        "<p5>finocchiona salami, chilli & bufala</p5>" +
        "<h4>Rucola</h4>" +
        "<p5>Prosciutto san daniele, rucola & reggiano </p5>" +
        "<h4>Funghi</h4>" +
        "<p5>porcini & wild mushroom 'trifolati', cauliflower, bufala & gremolata </p5>"+
        "<h4>Bomba</h4>" +
        "<p5>chilli 'nduja, straciatella, peppers & potato </p5 >";

    document.getElementById("IS").innerHTML = content;
    document.getElementById("IS").style = "font-size:15px; ";
}

function BluGingerContent() {
    var content =
        "<h1>Blu Ginger</h1>" +
        "<br>"+
        "<h4>Tandoori Chicken Tikka Salad</h4>" +
        "<p5>Mouth watering tandoori chicken tikka with garden salad</p5>" +
        "<h4>Mix Seafood Platter</h4>" +
        " <p5>Grilled tiger prawn, Amritsari fish, crumbed squid served withMint Yoghurt sauce, Garlic naan and Salad</p5 >" +
        "<h4>Seafood Curry Express</h4>" +
        " <p5> Choice of Fish or Prawn Malabar curry, in chefs own special sauce servedWith rice, salad and naan</p5 >";

    document.getElementById("BG").innerHTML = content;
    document.getElementById("BG").style = "font-size:15px; ";
}
function JewelofIndiaContent() {
    var content =
        "<h1>Jewel of India</h1>" +
        "<br>" +
        "<h4>Tawa Prawns / Fish </h4>" +
        "<p5>Wok fried prawns / fish with diced peppers and onions</p5>" +
        "<h4>Prawn Curry Goanese</h4>" +
        " <p5>Prawns cooked in a spiced coconut curry sauce</p5 >" +
        "<h4>Butter Chicken </h4>" +
        " <p5>Boneless tandoori chicken cooked in a tomato & butter sauce</p5 >";

    document.getElementById("JI").innerHTML = content;
    document.getElementById("JI").style = "font-size:15px; ";
}

function ChairmanYipContent() {
    var content =
        "<h1>Chairman & Yip</h1>" +
        "<br>" +
        "<h4>Shantung lamb belly  </h4>" +
        "<h4>Stir-fried prawns with chilli and plum jam</h4>" +
        "<h4>Pan-fried mapo tofu with broad bean and shiitake mushroom</h4>" +
        " <h4>Xian-style spiced roast duck</h4>" ;

    document.getElementById("JY").innerHTML = content;
    document.getElementById("JY").style = "font-size:15px; ";
}

function DicksonAsianNoodleHouseContent() {
    var content =
        "<h1>Dickson Asian Noodle House</h1>" +
        "<br>" +
        "<h4>Cha Kway Teow</h4>" +
        "<p5>Rice noodles with shredded pork, chinese sausage, chicken,vegetables and onion</p5>" +
        "<h4>Pad Kee Mao Chicken</h4>" +
        "<p5>Spicy rice noodles stir-fired with chicken,onion and garlic.</p5 >" +
        "<h4>Crispy Duck </h4>" +
        " <p5>Crispy fried duck breast served in special sauce</p5 >";

    document.getElementById("DANH").innerHTML = content;
    document.getElementById("DANH").style = "font-size:15px; ";
}