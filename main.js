window.onscroll = function () {
  handleScroll();
};
function handleScroll() {
  let scroll = this.scrollY;
  let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollInPercent = (scroll / maxScroll) * 100 + "%";
  console.log(scrollInPercent);
  bar.style.width = scrollInPercent;
}


