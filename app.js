const body = document.querySelector('body');
body.style.backgroundColor ="hsl(217, 54%, 11%)";


const wrapperDiv = document.createElement('div');
document.body.append(wrapperDiv);
wrapperDiv.id= "wrapper";
wrapperDiv.style.cssText ="width: 350px; height: 595px; background-color: hsl(216, 50%, 16%); margin: 0 auto; margin-top: 160px; border-radius: 15px; ";




const container = document.createElement('div');
wrapperDiv.prepend(container);
container.style.width ="300px";
container.style.margin ="0 auto";


const img = new Image();
img.src ="./images/image-equilibrium.jpg";
container.appendChild(img);
img.style.cssText ="width: 300px; height: 300px; margin-top: 25px; border-radius:10px;";


const title= document.createElement('h3');
container.append(title);
title.innerText = "Equilibrium #3429";
title.style.cssText="font-family:'Outfit', sans-serif; font-size: 22px; color:  hsl(0, 0%, 100%); "


const paragrath = document.createElement('p')
paragrath.innerText= "Our Equilibrium collection promotes balance and calm.";
container.append(paragrath);
paragrath.style.cssText ="font-family: 'Outfit', sans-serif; font-weight: 300; color: hsl(215, 51%, 70%); font-size: 18px; line-height:  1.25;";


const stat = document.createElement('div');
container.append(stat);
stat.style.cssText ="display: flex; justify-content:space-between; align-items: center; padding-top:5px; margin-bottom:22px;";

const stat_1 = document.createElement('div');
const stat_2 = document.createElement('div');
stat.prepend(stat_1);
stat.append(stat_2);

stat_1.style.cssText = "display:flex; font-family: 'Outfit', sans-serif; font-size: 18px; color:hsl(178, 100%, 50%);";
stat_2.style.cssText = "display:flex; font-family: 'Outfit', sans-serif;font-size: 16px; color:hsl(215, 51%, 70%);";


// icon


const priceCount = document.createElement('p');
priceCount.innerText="0.041";
stat_1.prepend(priceCount);
priceCount.style.margin = '0';

const priceName = document.createElement('p');
priceName.innerText ="ETH";
stat_1.append(priceName);
priceName.style.cssText =" margin: 0 0 0 3px";


// icon

const dayCount = document.createElement('p');
dayCount.innerText="3";
stat_2.prepend(dayCount);
dayCount.style.margin = '0';

const  descr = document.createElement('p');
descr.innerText ="days left";
stat_2.append(descr);
descr.style.cssText =" margin: 0 0 0 3px";


const line = document.createElement('div');
container.append(line);
line.style.cssText ="border-bottom: 0.1px solid hsl(215, 51%, 70%, 0.3); width:300px;";


const author = document.createElement('div');
container.append(author);
author.style.cssText = "display: flex; justify-content: flex-start; align-items: center; margin-top: 10px;";

const avatar= new Image();
avatar.src = "./images/image-avatar.png";
author.prepend(avatar);
avatar.style.cssText ="width: 30px; border: 1px solid  hsl(0, 0%, 100%); border-radius: 50px ";


const authorDescr = document.createElement('p');
authorDescr.innerText ="Creation of";
author.append(authorDescr);
authorDescr.style.cssText ="font-family: 'Outfit', sans-serif;font-size: 16px; margin-left: 15px; color: hsl(215, 51%, 70%);"


const authorName = document.createElement('p');
authorName.innerText ="Jules Wyvern";
author.append(authorName);
authorName.style.cssText ="font-family: 'Outfit', sans-serif;font-size: 16px; margin-left: 5px; color: hsl(0, 0%, 100%);"





