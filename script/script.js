
window.onscroll = (() => {
    return () => {    
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.querySelector(".bwf-scroll-to-top").style.display = "block";
        } else {
          document.querySelector(".bwf-scroll-to-top").style.display = "none";
        }
    };
})();

