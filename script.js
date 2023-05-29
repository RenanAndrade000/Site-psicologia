
window.onload = function() {
    var video = document.getElementById("video");
video.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
  };

  function redirect(url){
    window.location.href = url;
  }
  function scrollToSection(section){
    var section = document.querySelector(section);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  function scrollToStart(section){
      var section = document.querySelector(section);
      if(section){
        section.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }