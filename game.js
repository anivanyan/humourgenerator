
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = '1280';
canvas.height = '630';
context.fillStyle = "#145C66";
context.fillRect(0, 0, canvas.width, canvas.height);

const background0 = new Image();
background0.src = 'square.jpg';


const background1 = new Image();
background1.src = '7verq.jpg';

const backgroundy = new Image();
backgroundy.src = 'gyumri.jpg';

const background2 = new Image();
background2.src = 'shiraz.jpg';

const background3 = new Image();
background3.src = 'church.jpg';

const background4 = new Image();
background4.src = 'dzit.jpg';

const background5 = new Image();
background5.src = 'gitc.jpg';

const background6 = new Image();
background6.src = '58.jpg';

const background7 = new Image();
background7.src = '51.jpg';

const background8 = new Image();
background8.src = 'polozmukuch.jpg';

const background9 = new Image();
background9.src ='tatron.jpg';

const background10 = new Image();
background10.src ='KumayriDistrict.jpg';

const background11 = new Image();
background11.src ='gyumri6.jpg';

const background12 = new Image();
background12.src ='fortress.jpg';

const background13 = new Image();
background13.src ='kirovbuilding.jpg';

const background14 = new Image();
background14.src ='tun.jpg';

const background15 = new Image();
background15.src = 'station.jpg';

const background16 = new Image();
background16.src = 'welcome.jpg';

const tourist= new Image();
tourist.src = 'http://knowmadsapp.com/wp-content/uploads/2016/08/knowmads-traveler.png';
//tourist.src = 'traveler.png';
const rock = new Image();
rock.src = 'https://png2.kisspng.com/20180516/ffe/kisspng-animation-club-penguin-stone-youtube-5afc5e504124f3.7001558815264886562668.png?fbclid=IwAR190PbAmgtcia2qvJZhE5XmkL5WVcsLcX0mQCloG7DqNhBHN4_bFO2bLhM';

const rand = function(num) {
  return Math.floor(Math.random() * num);
};


const createOpsticals = function (count) {

	const obstacles  =[];
	for (let i=0; i< count; i++) {
	 const obstacle = {
		x: rand(canvas.width),
		y: 560,
		width: 75,
		height: 75,
		image: rock
		}	
		obstacles.push(obstacle)
	}
	return	obstacles;
};


let slide =0;
let data = [
{
	background: background0,
	obstacles: createOpsticals(2)
},{
	background: background1,
	obstacles: createOpsticals(2)
},{
	background: backgroundy,
	obstacles: createOpsticals(2)
},{
	background: background2,
	obstacles: createOpsticals(2)
},{
	background: background3,
	obstacles: createOpsticals(2)
},{
	background: background4,
	obstacles: createOpsticals(2)
},{
	background: background5,
	obstacles: createOpsticals(2)
},{
	background: background6,
	obstacles: createOpsticals(2)
},{
	background: background7,
	obstacles: createOpsticals(2)
},{
	background: background8,
	obstacles: createOpsticals(2)
},{
	background: background9,
	obstacles: createOpsticals(2)
},{
	background: background10,
	obstacles: createOpsticals(3)
}, {
	background: background11,
	obstacles: createOpsticals(2)
}, {
	background: background12,
	obstacles: createOpsticals(3)
},{
	background: background13,
	obstacles: createOpsticals(2)
},{
	background: background14,
	obstacles: createOpsticals(3)
},{
	background: background15,
	obstacles: createOpsticals(2)
},{
	background: background16,
	obstacles: createOpsticals(3)
}
]


const hero = {
	x: 0,
	y: 335,
	width: 200,
	height: 300,
	xDelta: 0,
	yDelta: 0,
	image: tourist,
	gravity: 300,
}; 

 
 const leftKey = 37;
 const upKey = 38;
 const rightKey = 39;
 const downKey = 40;
 const spaceKey = 32;

const jump = () => {
	if(hero.yDelta !== 0) return;
	hero.yDelta = -0.5;
	setTimeout(() => {
		hero.yDelta = 0.5;
		setTimeout(() => {
			hero.yDelta = 0;
		}, 500)
	}, 500) 
};


document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey) {
		hero.xDelta = 0.5; 
	} 
	if(event.keyCode === spaceKey) {
		jump();
	}
        });



//jokes 
let jokeArr = ['Լենինականցին հանդիպում է մի ֆրանսիացու հարցնում է. -Ախպեր ջան ուրտեղ կաբրիս ֆրանսիացին ասում է. -Փարիզում -Հիմի օր սարի գլխից նայեմ կերևա -Չէ շաաաաաաաաատ հեռու է դե սա խուլ տեղ կաբրիս էլի: Lennakanci meets a tourist from France, he asks. -Brother, where are you from? -From Paris. -If I climb on Aragats and look from there will I see your city? -I am afraid not. -Therefore, you live in a suburb.' ,"Պոլոզ Մուկուչը գնում է ատամնաբույժի մոտ:- Բժիշկ ջան, ատամս կցավա:Բժիշկը փորձում է կատակել.- Բա էդ հասարակ բանի համար բժշկի մոտ գուկա՞ն: Իմ ատամը որ ցավում է, կնոջս համբուրում եմ, անմիջապես անցնում է: - Կնիգդ տունը կեղնի՞, - հարցնում է Մուկուչն ու ոտքի ելնում: Poloz Mukuch goes to a dentist. -Doctor, I have a terrible toothache. -Oh Mukuch, is that even that serious that you came all the way from your house to me. When I have toothache I ask my wife to kiss my cheek and it is gone in a minute – the doctor tries to joke. Mukuch gets up to leave. -Where are you going Mukuch? -To your place. Is your wife home?", "The center of the earth is Gyumri. It's just that some countries don't want to admit.", " - Մարդուս ղրգի բազար, որ Էրթար կառտոլ առնիր, էն էլ ավտոյի տակ էր ընկել ... -Վաաա՜յ, հըբը հմի ինչ պդի էնե՞ս: - Եսիմ, վայթե բրինձ եփեմ: A woman to the other; -My husband went to the store to by potatoes fro dinner and got into a car accident. -Oh my god, what are you going to do? - I don’t know, maybe I’ll cook rice.", "Ամբաստանյալ, ի՞նչը քեզ դրդեց թալանել ոսկերչական խանութը: -Պատուհանի վրա գրված էր. «Բաց մի թողեք ձեր շանսը»: In the court the judge asks the defendant. -What made you rob that store? -I was passing by the store and on the window it said 'Don’t miss your chance'", "Դատավորը ներս է կանչել վկային, կսե. -Դուք պարտավոր եք խոսել ճիշտը, ասել այն, ինչ տեսել եք սեփական աչքերով: -Խնդիր չկա, դատավոր ջան: -Ե՞րբ եք ծնվել: -Էտ մեկն արդեն չեղավ դատավոր ջան, ըդիկ չեմ տեսել: In the court the judge says to the defendant. -You have to speak only the truth and tell only whatever you have witnessed and remember. First question. When were you born?- Honorable judge, I have not witnessed  and don’t remember it.", " Ծո, ընչի՞ չես նշանվի: – Մուկուչ ջան, ինչ աղջիկ կբերեմ մերս չի հավնի: – Է, դու էլ իրա նման մէկին բեր, նայեմ չի հավնի: – Իրա նմանին էլ կբերեմ, հերս չի հավնի: Poloz Mukuch asks a friend. -Tso, why are you still not married? -Mukuch jan, whoever I like my mother doesn’t -So, you try to find a girl who is like your mother. -I tried. My father doesn’t like those ones.", " - Ինչու՞ Յուրի Վարդանյանը դարձավ աշխարհի չեմպիոն: - Որովհետև Լեննագանից մենակ իրան էին ղրկել: -Why did only Yuri Vardanyan bring a medal from the world championship? -Because Gyumri sent only him to the championship. Who else was supposed to win a medal?", "The center of the earth is Gyumri. It's just that some countries don't want to admit." ];
/*if(hero.x + hero.width === 1270 || hero.x + hero.width === 3830 || hero.x + hero.width === 6390 || hero.x + hero.width === 8950 || hero.x + hero.width === 11510 || hero.x + hero.width === 14070 || hero.x + hero.width === 16630 || hero.x + hero.width === 19190 || hero.x + hero.width === 23030) {
	alert(jokeArr[i]);
	jokeArr.splice(i, 1);
}; */


// window.onload = function () {
// 	window.scrollTo(1280, 0);
// 	window.onscroll = function () {
// 		let doc = document.body
// 		pageSize = (doc.scrollHeight - doc.clientHeight);
// 		percentageScrolled = Math.floor((scrollPosition / pageSize) * 1); 

//      if (percentageScrolled >= 1270){ // if the percentage is >= 50, scroll to top
//        window.scrollTo(1270,0); 
//      } 
//    }; 
// 	}


// const intersect = (rect1, rect2) => {
//         // const x = Math.max(rect1.x, rect2.x),
//         //     num1 = Math.min(rect1.x + rect1.w, rect2.x + rect2.w),
//         //     y = Math.max(rect1.y, rect2.y),
//         //     num2 = Math.min(rect1.y + rect1.h, rect2.y + rect2.h);
//         // return (num1 >= x && num2 >= y);
//     if(rect1.x + rect1.width >= rect2.x && rect1.x <= rect2.x + rect2.width
//       && rect1.y + rect1.height >= rect2.y && rect1.y <= rect2.y + rect2.height){
//         return true;

//     }

//     return false;
//     };

const draw = function() {

let currBackground =data[slide].background
let currentOps = data[slide].obstacles
	
	context.drawImage(currBackground, 0,0, canvas.width, canvas.height);
	for(let k = 0; k < currentOps.length; k++) {
		context.drawImage(currentOps[k].image, currentOps[k].x, currentOps[k].y, currentOps[k].width, currentOps[k].height)
	}
	context.drawImage(hero.image, hero.x, hero.y, hero.width, hero.height);
}; 
 
  
const update = function() {
	hero.x += hero.xDelta;
	hero.y += hero.yDelta;

// let currentOps = data[slide].obstacles;
// 	currentOps.forEach(ops=>{
// 		if(intersect(hero,ops))
// 			alert("game over")
// 		if(hero.x + hero.width <= ops.x + ops.width  && hero.x + hero.width  >= ops.x){
// 			// alert("iii")
// 		}
// 	})
}

 const loop = function () {
 	draw();

 	for(let u = 0; u < jokeArr.length; u++){
 	if(hero.x + hero.width <= canvas.width) {
	update();
 	//intersect();
 	// collision();
	}else{
		slide++;
		hero.x = -40;
		if (slide%2 ===0) {
if (slide=== 18) {
	alert("Thank you! We hope you enjoyed it!! ");
}
		alert(jokeArr[u]);

		}
		
	}	
	}
	requestAnimationFrame(loop);
 };
   loop();








