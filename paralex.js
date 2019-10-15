let scrollAfstand
let sectie2 = document.getElementsByClassName('sectie-2')[0];
let sectie4 = document.getElementsByClassName('sectie-4')[0];
let sectie6 = document.getElementsByClassName('sectie-6')[0];
window.addEventListener('scroll',(e)=>{
  scrollAfstand = window.pageOffset;

  corrSection2(scrollAfstand);
  corrSection4(scrollAfstand);
  corrSection6(scrollAfstand);
});

const corrSection2 = (gescrolled) => {
  sectie2.style.backgroundPostionY = gescrolled/4 + "px";
  sectie2.getElementsByClassName('section_kop')[0].style.marginLeft = -300 gescrolled+2 + 'px';
}
const corrSection4 = (gescrolled) => {
  sectie4.style.backgroundPostionY = gescrolled/3 + "px";
}
const corrSection6 = (gescrolled) => {
  sectie6.style.backgroundPostionY = 400 gescrolled/2 + "px";
}
