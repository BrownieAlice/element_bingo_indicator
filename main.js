"use strict";
let atom_name,atom_num,atom_name_jp,atom_name_en,atom_name_of,loop_start,loop_end,already,now_num=-1;
let str="";
let arr=new Array(75),arrlist=new Array(75);
for(let i=0;i<=75;i++)arr[i]=false;
for(let i=0;i<=75;i++)arrlist[i]=0;
function init(){
    atom_name=document.getElementById("atom_name");
    atom_num=document.getElementById("atom_num");
    atom_name_jp=document.getElementById("atom_name_jp");
    atom_name_en=document.getElementById("atom_name_en");
    atom_name_of=document.getElementById("atom_name_of");
    already=document.getElementById("already");
}

function myclick(){
    let num=Number(number.value);
    if(!isNaN(num)&&1<=num&&num<=75&&arr[num-1]!=true){
	arrlist[++now_num]=num;
	num--;
	arr[num]=true;
	let i=-Number(atom_name.style.opacity)*100;;
	let flag=false;
	loop_start=function(){
	    if(i<=0){
		let j=-i;
		atom_name.style.opacity=j/100;
		atom_num.style.opacity=j/100;
		atom_name_jp.style.opacity=j/100;
		atom_name_en.style.opacity=j/100;
		atom_name_of.style.opacity=j/100;
		i++
		setTimeout(loop_start,10);
	    }else{
		atom_name.textContent=name[num];
		atom_num.textContent=num+1;
		atom_name_jp.textContent=name_jp[num];
		atom_name_en.textContent=name_en[num];
		atom_name_of.textContent=name_of[num];
		str+="\u0020"+name[num]
		already.textContent=str;
	    }
	}
	loop_start();
	
	loop_end=function(){
	    if(i<=100){
		if(0<=i){
		    atom_name.style.opacity=i/100;
		    atom_num.style.opacity=i/100;
		    atom_name_jp.style.opacity=i/100;
		    atom_name_en.style.opacity=i/100;
		    atom_name_of.style.opacity=i++/100;
		}
		setTimeout(loop_end,10);
	    }
	}
	loop_end();
    }
}

function mydel(){
    arr[arrlist[now_num--]-1]=false;
    str="";
    for(let i=0;i<=now_num;i++)str+="\u0020"+name[arrlist[i]-1];
    let i=-Number(atom_name.style.opacity)*100;
    loop_start=function(){
	if(i<=0){
	    let j=-i;
	    atom_name.style.opacity=j/100;
	    atom_num.style.opacity=j/100;
	    atom_name_jp.style.opacity=j/100;
	    atom_name_en.style.opacity=j/100;
	    atom_name_of.style.opacity=j/100;
	    i++
	    setTimeout(loop_start,10);
	}
    }
    loop_start();
    console.log(str);
    already.textContent=str;
}

const list="1,H,水素,Hydrogen,Hydrogenium,2,He,ヘリウム,Helium,Helium,3,Li,リチウム,Lithium,Lithium,4,Be,ベリリウム,Beryllium,Beryllium,5,B,ホウ素,Boron,Borium,6,C,炭素,Carbon,Carbonium,7,N,窒素,Nitrogen,Nitrogenium,8,O,酸素,Oxygen,Oxygenium,9,F,フッ素,Fluorine,Fluorum,10,Ne,ネオン,Neon,Neon,11,Na,ナトリウム,Sodium,Natrium,12,Mg,マグネシウム,Magnesium,Magnesium,13,Al,アルミニウム,Aluminium,Aluminium,14,Si,ケイ素,Silicon,Silicium,15,P,リン,Phosphorus,Phosphorus,16,S,硫黄,Sulfur,Sulphur,17,Cl,塩素,Chlorine,Chlorum,18,Ar,アルゴン,Argon,Argon,19,K,カリウム,Potassium,Kalium,20,Ca,カルシウム,Calcium,Calcium,21,Sc,スカンジウム,Scandium,Scandium,22,Ti,チタン,Titanium,Titanium,23,V,バナジウム,Vanadium,Vanadium,24,Cr,クロム,Chromium,Chromium,25,Mn,マンガン,Manganese,Manganum,26,Fe,鉄,Iron,Ferrum,27,Co,コバルト,Cobalt,Cobaltum,28,Ni,ニッケル,Nickel,Niccolum,29,Cu,銅,Copper,Cuprum,30,Zn,亜鉛,Zinc,Zincum,31,Ga,ガリウム,Gallium,Gallium,32,Ge,ゲルマニウム,Germanium,Germanium,33,As,ヒ素,Arsenic,Arsenicum,34,Se,セレン,Selenium,Selenium,35,Br,臭素,Bromine,Bromum,36,Kr,クリプトン,Krypton,Krypton,37,Rb,ルビジウム,Rubidium,Rubidium,38,Sr,ストロンチウム,Strontium,Strontium,39,Y,イットリウム,Yttrium,Yttrium,40,Zr,ジルコニウム,Zirconium,Zirconium,41,Nb,ニオブ,Niobium,Niobium,42,Mo,モリブデン,Molybdenum,Molybdenum,43,Tc,テクネチウム,Technetium,Technetium,44,Ru,ルテニウム,Ruthenium,Ruthenium,45,Rh,ロジウム,Rhodium,Rhodium,46,Pd,パラジウム,Palladium,Palladium,47,Ag,銀,Silver,Argentum,48,Cd,カドミウム,Cadmium,Cadmium,49,In,インジウム,Indium,Indium,50,Sn,スズ,Tin,Stannum,51,Sb,アンチモン,Antimony,Stibium,52,Te,テルル,Tellurium,Tellurium,53,I,ヨウ素,Iodine,Iodum,54,Xe,キセノン,Xenon,Xenon,55,Cs,セシウム,Caesium,Caesium,56,Ba,バリウム,Barium,Barium,57,La,ランタン,Lanthanum,Lanthanum,58,Ce,セリウム,Cerium,Cerium,59,Pr,プラセオジム,Praseodymium,Praseodymium,60,Nd,ネオジム,Neodymium,Neodymium,61,Pm,プロメチウム,Promethium,Promethium,62,Sm,サマリウム,Samarium,Samarium,63,Eu,ユウロピウム,Europium,Europium,64,Gd,ガドリニウム,Gadolinium,Gadolinium,65,Tb,テルビウム,Terbium,Terbium,66,Dy,ジスプロシウム,Dysprosium,Dysprosium,67,Ho,ホルミウム,Holmium,Holmium,68,Er,エルビウム,Erbium,Erbium,69,Tm,ツリウム,Thulium,Thulium,70,Yb,イッテルビウム,Ytterbium,Ytterbium,71,Lu,ルテチウム,Lutetium,Lutetium,72,Hf,ハフニウム,Hafnium,Hafnium,73,Ta,タンタル,Tantalum,Tantalum,74,W,タングステン,Tungsten,Wolframium,75,Re,レニウム,Rhenium,Rhenium"
const list2=list.split(",");
let name=new Array(75);
let name_jp=new Array(75);
let name_en=new Array(75);
let name_of=new Array(75);
for(let i=0;i<75;i++){
    name[i]=list2[i*5+1];
    name_jp[i]=list2[i*5+2];
    name_en[i]=list2[i*5+3];
    name_of[i]=list2[i*5+4];
}
