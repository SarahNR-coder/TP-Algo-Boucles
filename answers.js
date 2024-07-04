function pikachu(a,b) {
	let result = 0;
	for(let i=0; i<a; i++) {
		result += b; // result = result+b;
	}
	return result;
}
console.log("pikachu(1,1) : "+ pikachu(1,1));
console.log("pikachu(1,4) : "+ pikachu(1,4));
console.log("pikachu(4,10) : " + pikachu(4,10));
console.log("pikachu(3,0) : " + pikachu(3,0));
console.log("pikachu(0,3) : "+ pikachu(0,3));
console.log("pikachu(10,11) : "+ pikachu(10,11));


function plafond(a,b) {
	let result = 0;
	for(let i=0; i<a; i++) {
		result = b;
	}
	return result;
}
console.log("plafond(2,3) : "+ plafond(2,3) + " My guess = 3");
console.log("plafond(3,2) : "+ plafond(3,2) + " My guess = 2");
console.log("plafond(6,6) : "+ plafond(6,6) + " My guess = 6");
console.log("plafond(1,8) : "+ plafond(1,8) + " My guess = 8");
console.log("plafond(8,0) : "+ plafond(8,0) + " My guess = 0");
console.log("plafond(0,13) : "+ plafond(0,13)+ " My guess = 13");


function tableur(a,b) {
	let result=0;
	for(let i=0; i<=a; i++) {
		result += b;
	}
	return result;
}

//console.log("tableur() : " + tableur() + " My guess = ");
console.log("tableur(1,1) : " + tableur(1,1) + " My guess = 1");
console.log("tableur(4,1) : " + tableur(4,1) + " My guess = 5");
console.log("tableur(4,10) : " + tableur(4,10) + " My guess = 50");
console.log("tableur(3,0) : " + tableur(3,0) + " My guess = 0");
console.log("tableur(0,3) : " + tableur(0,3) + " My guess = 3");
console.log("tableur(10,11) : " + tableur(10,11) + " My guess = 121");

function lol(a,b) {
	let result=0;
	for(let i=0.0; i<a; i+=0.5) {
		result += b;
	}
	return result;
}
//console.log("lol() : " + lol() + " My guess = ");
console.log("lol(0,7) : " + lol(0,7) + " My guess = 0");
console.log("lol(2,3) : " + lol(2,3) + " My guess = 12");
console.log("lol(3,2) : " + lol(3,2) + " My guess = 12");
console.log("lol(10,10) : " + lol(10,10) + " My guess = 200");
console.log("lol(65,2) : " + lol(65,2) + " My guess = 260");
console.log("lol(4,2) : " + lol(4,2) + " My guess = 16");


function wolverine(a,b) {
	let result=0;
	for(let i=0; i<a; i++) {
		for(let j = 0 ; j < b ; j++) {
			result++;
		}
	}
	return result;
}

//console.log("wolverine() : " + wolverine() + " My guess = ");
console.log("wolverine(1,3) : " + wolverine(1,3) + " My guess = 3");
console.log("wolverine(2,0) : " + wolverine(2,0) + " My guess = 0");
console.log("wolverine(5,1) : " + wolverine(5,1) + " My guess = 5");
console.log("wolverine(2,3) : " + wolverine(2,3) + " My guess = 6");
console.log("wolverine(7,9) : " + wolverine(7,9) + " My guess = 63");
console.log("wolverine(8,8) : " + wolverine(8,8) + " My guess = 54");
console.log("wolverine(12,12) : " + wolverine(12,12) + " My guess = 224");

function ventilateur(a,b) {
	let result = 0;
	for(let i=a; i<a; i++) {
		result += b;
	}
	return result;
}

//console.log(" ventilateur() : " + ventilateur() + " My guess = ");
console.log(" ventilateur(2,3) : " + ventilateur(2,3) + " My guess = ");
console.log(" ventilateur() : " + ventilateur() + " My guess = ");
console.log(" ventilateur() : " + ventilateur() + " My guess = ");
console.log(" ventilateur() : " + ventilateur() + " My guess = ");
console.log(" ventilateur() : " + ventilateur() + " My guess = ");
console.log(" ventilateur() : " + ventilateur() + " My guess = ");
console.log(" ventilateur() : " + ventilateur() + " My guess = ");

function bob(a,b,c) {
	let result=0;
	for(let i=0; i<a; i++) {
		for(let j=0; j<b; j++) {
			for(let k=0; k<c; k++) {
				result += 1;
			}
		}
	}
	return result;
}

function calcul(a) {
	let aaa=1;
	for(let i=2; i<=a; i++) {
		aaa *= i;
		// aaa = aaa*i;
	}
	return aaa;
}

function python(a) {
	let monResultat;
	if(a<2) {
		monResultat = 1;
	} else {
		monResultat = a*python(a-1);
	}
	return monResultat;
}

function erogahtyp(a) {
	let x;
	if(a%2 == 0) {
		x = a/2;
	}
	else {
		x = 3*a+1;
	}
	return x;
}

function pythagore(a,b) {
	let result = a;
	for(let i=0; i<b; i++) {
		result=erogahtyp(result);
	}
	return result;
}

function aceeilnrtt(a) {
	let tluser = 0;
	let v = a;
	while(v != 1) {
		v = erogahtyp(v);
		tluser++;
	}
	return tluser;
}

function micmath(a,b) {
	let c=0;
	while(a>=b) {
		a/=b;
		c++;
	}
	return c;
}

function stylo(a,b) {
	let result = 1;
	for(let i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function crayon(a,b) {
	let result = 0;
	for(let i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function minecraft(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result *= a;
	}
	return result;
}

function nenio(a) {
	let result = Math.random(); // Google ?
	result = Math.floor(result);
	return result;
}

function carapuceSamourai(a) {
	let tortank = 1;
	for(let i=0; i<a; i++) {
		tortank = 1-tortank;
	}
	return tortank;
}

function bouteilleDEau(a) {
	let result;
	if(a<0) {
		result=0;
	}
	else {
		if(a>0) {
			result = -1;
		}
		else {
			result = 1;
		}
	}
	return result;
}

function spiderman(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result = bouteilleDEau(result);
	}
	return result;
}

function az(a) {
	let result = 0;
	for(let i = 0 ; i < 20 ; i++) {
		if(i*a < 100) {
			result++;
		}
	}
	return result;
}

function er(a) {
	let result1 = 1;
	let result2 = 1;
	for(let i = 0 ; i < a ; i++) {
		result1++;
		result2 += result1;
		result1++;
	}
	
	return result2-result1;
}

function ty(a) {
	let result = 0;
	for(let i = 0 ; i < 20 ; i++) {
		if(i*a < 100); {
			result++;
		}
	}
	
	return result;
}

function ui(a) {
	let result = 0;
	for(let i = 0 ; i < a ; i++) {
		for(let j = 0 ; i < a ; i++) {
			result++;
		}
	}
	return result;
}

function op(a) {	
	let ooo = 0;
	let oOo = a;
	let o0o = -4;
	for(let oOO = 0; oOo > oOO ; ooo++) {
		oOo += o0o;
		o0o -= 1;
		oOO *= a;
	}
	return ooo;
}

// You need to understand "ty" first
function qs(a) {
	let tluser = 1;
	for(;tluser<a;tluser*=2);
	return tluser;
}

function df(a,b) {
	let result = 0;
	for(let i = 0 ; i < a ; i++) {
		for(let j = 0 ; j < b ; j++) {
			result++;
			i++;
		}
	}
	return result;
}

function gh(a,b) {
	return a&b;
}

function jk(a,b) {
	return a|b;
}


function lm(a,b) {
	return a^b;
}

function wx(a,b) {
	return a<<b;
}

function cv(a,b) {
	return a>>b;
}
