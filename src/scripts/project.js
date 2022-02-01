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