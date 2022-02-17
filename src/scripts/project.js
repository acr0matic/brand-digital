const project = document.getElementById('project');

if (project) {
  const items = project.querySelectorAll('.project__item');
  items.forEach(item => {
    const target = item.querySelector('.project__count span');
    const count = target.innerHTML.replace(' ', '');

    const counter = new countUp.CountUp(target, count, { separator: ' ', });

    window.addEventListener('pageLoaded', () => counter.start());
  });
}

if (window.matchMedia('(max-width: 991px)').matches) {
  const allProjects = document.getElementById('projects');
  if (allProjects) {
    const windowHeight = window.screen.height;
    const windowCenter = windowHeight * .5;

    const cards = allProjects.querySelectorAll('.project-card');
    cards.forEach(card => {
      let top = 0;

      window.addEventListener('scroll', () => {
        const bounding = card.getBoundingClientRect();
        top = bounding.top;

        if (windowCenter >= top && windowCenter <= top + 200) card.classList.add('project-card--wide');
        else card.classList.remove('project-card--wide');
      });
    });
  }
}