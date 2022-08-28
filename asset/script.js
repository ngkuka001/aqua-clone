
  // Check event scroll
  // Animation
  window.onscroll = function () {
    onWindowScroll();
  };

  function onWindowScroll() {
    const visionHolder = document.querySelector('.vision-holder');
    const roadmapTitle = document.querySelector('.roadmap-title');
    const misionAnimation = document.querySelector('.mission-animation');
    const roadmapAnimation = document.querySelector('.roadmap-animation');

    if (visionHolder) {
      const visionLeft = document.querySelector('.animation-vision-left');
      const visionRight = document.querySelector('.animation-vision-right');
      const visionRightBg = document.querySelector(
        '.animation-vision-right-bg'
      );
      const opacityAttr = visionHolder.style.opacity;

      const opacity = parseFloat(opacityAttr);

      visionLeft.style.left = opacity * 40 + 'px';
      visionRight.style.right = opacity * 40 + 45 + 'px';
      visionRightBg.style.right = opacity * 40 + 'px';
      misionAnimation.style.opacity = opacityAttr;
    }
    if (roadmapTitle) {
      const roadmapLeft = document.querySelector('.animation-roadmap-left');
      const roadmapRight = document.querySelector('.animation-roadmap-right');
      const opacityAttr = roadmapTitle.style.opacity;

      const opacity = parseFloat(opacityAttr);

      roadmapLeft.style.left = opacity * 40 + 'px';
      roadmapRight.style.right = opacity * 40 + 'px';
      roadmapAnimation.style.opacity = opacityAttr;
    }
  }
});
