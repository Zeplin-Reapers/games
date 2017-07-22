var gamecandy = 0;
var gamecps = 0;
var gamepresteige = 0;
var helpercps = [1, 5, 10, 20, 47, 56];
var gamecpsid = setInterval( "cps()", 1000 );
var cursor$ = 15;
var grandma$ = 100;
var candyFarm$ = 250;
var grandmas = 0;
var n1 = Math.ceil(Math.random()*9);
var n2 = Math.ceil(Math.random()*9);
var n3 = Math.ceil(Math.random()*9);
var n4 = Math.ceil(Math.random()*9);
var n5 = Math.ceil(Math.random()*9);
var n6 = Math.ceil(Math.random()*9);
var bc = "#" + n1 + n2 + n3 + n4 + n5 + n6;
var codeojqpsw = 'QR|+5$p^gcWUo!v3RRHkX4B!hfpVRra$wLC3OcZD9mKCGFc8@OW|W?3_j4P0*ftcmfe9?&RiNku-EiFH++MPNj-l1BpT*BXXrsCA?mh@@wuO7UXuaeKXIDbRS#L0MeHG6_!Q&nPGIx$Lsebwvo+XSYWR3OdL30ZVHv1mG=-&SC*TE^ZnGRcgF%v37UsT_-Le&YRm1OHhWp%iWaqXPpGfpPypWD0jDp+MKPn?asoCDtrDxot9a1nY$3KKeF$qry3k';
function bcc() {
	var n1 = Math.ceil(Math.random()*9);
	var n2 = Math.ceil(Math.random()*9);
	var n3 = Math.ceil(Math.random()*9);
	var n4 = Math.ceil(Math.random()*9);
	var n5 = Math.ceil(Math.random()*9);
	var n6 = Math.ceil(Math.random()*9);
	var bc = "#" + n1 + n2 + n3 + n4 + n5 + n6;
	document.getElementById('SEZURES!!!').style.backgroundColor = "bc"
}
function cps() {
	if(gamecps > 0){
		clearInterval(gamecpsid);
		gamecpsid = setInterval( "cps()", 1/gamecps*1000);
		gamecandy += 1;
		document.getElementById("candydisplay").innerHTML = gamecandy + ' candy.  Per Second: ' + gamecps;
	}
}

function candyclick() {
	gamecandy+=1;
	document.getElementById("candydisplay").innerHTML = gamecandy + ' candy.  Per Second: ' + gamecps;
}
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 0);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function hihihi() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function devpopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function devconsolePLZ() {
	document.getElementById("devConsole").style.display = "block";
}
function help001() {
	if (gamecandy >= cursor$) {
		gamecandy -= cursor$;
		gamecps += helpercps[0];
		cursor$ += cursor$ / 2 * 1.8 + 32 / 50;
		cursor$ = Math.ceil(cursor$)
		document.getElementById("cursor").innerHTML = ' ' + cursor$ + ' candy.';
	}
}
function help002() {
	if (gamecandy >= grandma$) {
		gamecandy -= grandma$;
		grandmas++;
		gamecps += helpercps[1];
		grandma$ += grandma$ / 2 * 1.8 + 32 / 50;
		grandma$ = Math.ceil(grandma$);
		document.getElementById("grandma").innerHTML = ' ' + grandma$ + ' candy.';
	}
}
function help003() {
	if (gamecandy >= candyFarm$) {
		gamecandy -= candyFarm$;
		gamecps += helpercps[2];
		candyFarm$ += candyFarm$ / 2 * 1.8 + 32 / 50;
		candyFarm$ =  Math.ceil(candyFarm$)
		document.getElementById("candyFarm").innerHTML = ' ' + candyFarm$ + ' candy.';
	}
}
