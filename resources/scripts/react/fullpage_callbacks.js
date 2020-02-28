export const onLeave = (_origin, destination) => {
  if (destination.index === 0) {
    // document?.querySelector('body')?.classList.remove('black');
    const screens = document.querySelectorAll('.screen');
    screens.forEach((s) => s.classList.remove('screen-off'));
    screens.forEach((s) => s.classList.add('screen-on'));
  }
  if (destination.index === 1) {
    // document?.querySelector('body')?.classList.add('black');
    const screens = document.querySelectorAll('.screen');
    screens.forEach((s) => s.classList.remove('screen-on'));
    screens.forEach((s) => s.classList.add('screen-off'));
  }
};
