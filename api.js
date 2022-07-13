var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);