export default {
  mounted(el) {
    const caseImg = el;
    const button = caseImg.querySelector('button');

    if (!button) return;

    button.addEventListener('click', function () {
      const rect = caseImg.getBoundingClientRect();

      const fullscreenDiv = document.createElement('div');
      fullscreenDiv.classList.add('case-img-fullscreen');

      const caseImgCopy = caseImg.cloneNode(true);
      caseImgCopy.classList.add('case-img-bis');

      caseImgCopy.style.position = 'absolute';
      caseImgCopy.style.top = `${rect.top}px`;
      caseImgCopy.style.left = `${rect.left}px`;
      caseImgCopy.style.width = `${rect.width}px`;
      caseImgCopy.style.height = `${rect.height}px`;

      fullscreenDiv.appendChild(caseImgCopy);

      const closeButton = document.createElement('button');
      closeButton.classList.add('case-img-close');
      fullscreenDiv.appendChild(closeButton);

      document.body.appendChild(fullscreenDiv);

      const fullscreenWidth = window.innerWidth;
      const fullscreenHeight = window.innerHeight;

      const scaleX = fullscreenWidth / rect.width;
      const scaleY = fullscreenHeight / rect.height;
      const scale = Math.min(scaleX, scaleY);

      const translateX = (fullscreenWidth - rect.width * scale) / 2 - rect.left;
      const translateY = (fullscreenHeight - rect.height * scale) / 2 - rect.top;

      setTimeout(() => {
        caseImgCopy.style.transition = 'transform 0.3s ease-in-out';
        caseImgCopy.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      }, 0);

      caseImg.classList.add('hidden');

      function closeFullscreen() {
        caseImgCopy.style.transition = 'transform 0.3s ease-in-out';
        caseImgCopy.style.transform = `translate(0, 0) scale(1)`;

        setTimeout(() => {
          fullscreenDiv.remove();
          caseImg.classList.remove('hidden');
        }, 300);
      }

      setTimeout(() => {
        document.addEventListener('click', closeFullscreen);
        document.addEventListener('scroll', closeFullscreen);
        document.addEventListener('keydown', closeFullscreen);
        window.addEventListener('resize', closeFullscreen);
      }, 0);

      closeButton.addEventListener('click', closeFullscreen);
    });
  }
};