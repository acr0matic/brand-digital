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

const allProjects = document.getElementById('projects');
if (allProjects) {
  const cards = allProjects.querySelectorAll('.project-card');
  const firstCard = cards[0];

  if (window.matchMedia('(max-width: 991px)').matches) {
    const windowHeight = window.screen.height;
    const windowCenter = windowHeight * .4;

    firstCard.classList.add('project-card--wide');

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

  else {
    window.addEventListener('pageLoaded', () => {
      firstCard.addEventListener('mouseenter', () => {
        firstCard.classList.add('project-card--hovered');
        firstCard.classList.remove('project-card--show');
      });

      setInterval(() => {
        if (!firstCard.classList.contains('project-card--hovered'))
          firstCard.classList.toggle('project-card--show');
      }, 1000);
    });
  }
}