const hamburger = document.querySelector('.hamburger');
const openMenu = document.querySelector('.mobile-option');
const extBtn = document.querySelector('.exit');

function show() {
  openMenu.style.display = 'block';
  openMenu.classList.toggle('open');
  hamburger.style.visibility = 'hidden';
  extBtn.style.visibility = 'visible';
}

function close() {
  openMenu.style.display = 'none';
  openMenu.classList.remove('open');
  hamburger.style.visibility = 'visible';
  extBtn.style.visibility = 'hidden';
}

hamburger.addEventListener('click', show);
extBtn.addEventListener('click', close);

openMenu.addEventListener('click', close);
// ===============================================

const projects = [{
  id: '1',
  class: 'item2',
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  image: './assets/images/Rectangle21.svg',
  img: './assets/images/Union.svg',
  sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
  span: '3',
  sideImage: [
      './assets/images/Rectangle21.svg',
      './assets/images/Rectangle21.svg',
      './assets/images/Rectangle21.svg',
      './assets/images/Rectangle21.svg',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
<br /><br />
nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi.`,
  linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
  linkToLive: 'https://github.com/NurkaAmre',
  btn: 'See Source',
  side: ['Next Project', 'Previous Project'],
  icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
  btnForPopup: ['See Live','See Source'],
  nextPrevious: ['./assets/icons/pre.png', './assets/icons/next.png']
}, {
  id: '2',
  class: 'item3',
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  image: './assets/images/Rectangle22.svg',
  img: './assets/images/Union.svg',
  sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
  sideImage: [
      './assets/images/Rectangle22.svg',
      './assets/images/Rectangle22.svg',
      './assets/images/Rectangle22.svg',
      './assets/images/Rectangle22.svg',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
<br /><br />
nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi.`,
  linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
  linkToLive: 'https://github.com/NurkaAmre',
  btn: 'See Source',
  side: ['Next Project', 'Previous Project'],
  icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
  btnForPopup: ['See Live','See Source'],
  nextPrevious: ['./assets/icons/pre.png', './assets/icons/next.png']
}, {
  id: '3',
  class: 'item5',
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  image: './assets/images/Rectangle23.svg',
  img: './assets/images/Union.svg',
  sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
  sideImage: [
      './assets/images/Rectangle23.svg',
      './assets/images/Rectangle23.svg',
      './assets/images/Rectangle23.svg',
      './assets/images/Rectangle23.svg',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
<br /><br />
nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi.`,
  linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
  linkToLive: 'https://github.com/NurkaAmre',
  btn: 'See Source',
  side: ['Next Project', 'Previous Project'],
  icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
  btnForPopup: ['See Live','See Source'],
  nextPrevious: ['./assets/icons/pre.png', './assets/icons/next.png']
}, {
  id: '4',
  class: 'item6',
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  image: './assets/images/Rectangle24.svg',
  img: './assets/images/Union.svg',
  sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
  sideImage: [
      './assets/images/Rectangle24.svg',
      './assets/images/Rectangle24.svg',
      './assets/images/Rectangle24.svg',
      './assets/images/Rectangle24.svg',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
<br /><br />
nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi.`,
  linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
  linkToLive: 'https://github.com/NurkaAmre',
  btn: 'See Source',
  side: ['Next Project', 'Previous Project'],
  icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
  btnForPopup: ['See Live','See Source'],
  nextPrevious: ['./assets/icons/pre.png', './assets/icons/next.png']
}, {
  id: '5',
  class: 'item8',
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  image: './assets/images/Rectangle25.svg',
  img: './assets/images/Union.svg',
  sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
  sideImage: [
      './assets/images/Rectangle25.svg',
      './assets/images/Rectangle25.svg',
      './assets/images/Rectangle25.svg',
      './assets/images/Rectangle25.svg',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
<br /><br />
nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi.`,
  linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
  linkToLive: 'https://github.com/NurkaAmre',
  btn: 'See Source',
  side: ['Next Project', 'Previous Project'],
  icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
  btnForPopup: ['See Live','See Source'],
  nextPrevious: ['./assets/icons/pre.png', './assets/icons/next.png']
},  {
  id: '6',
  class: 'item10',
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  image: './assets/images/Rectangle26.svg',
  img: './assets/images/Union.svg',
  sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
  sideImage: [
      './assets/images/Rectangle26.svg',
      './assets/images/Rectangle26.svg',
      './assets/images/Rectangle26.svg',
      './assets/images/Rectangle26.svg',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
<br /><br />
nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi.`,
  linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
  linkToLive: 'https://github.com/NurkaAmre',
  btn: 'See Source',
  side: ['Next Project', 'Previous Project'],
  icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
  btnForPopup: ['See Live','See Source'],
  nextPrevious: ['./assets/icons/pre.png', './assets/icons/next.png']
},
];

const projectList = document.querySelector('#portfolio ul.grid');

function loadProjects() {
for (let i = 0; i < projects.length; i++) {
  const projectItemtemplate = `
    <li class="project-item ${projects[i].class}">
      <img
        class="project-img"
        src="${projects[i].image}"
        alt="laptop"
      />
      <div class="container container-information hover">
        <h2 class="heading">${projects[i].title}</h2>
        <ul class="features">
          <li class="feature">${projects[i].features[0]}</li>
          <li class="feature">${projects[i].features[1]}</li>
          <li class="feature">${projects[i].features[2]}</li>
        </ul>
        <button data-id="${projects[i].id}" class="c-projects">
          See this project &rarr;
        </button>
      </div>
    </li>
  `;

  projectList.innerHTML += projectItemtemplate;
}
}

window.addEventListener('load', loadProjects());

function createModal(id) {
  const pCardTemplate = `
  <div class="overlay hidden">
      <article class="modal container">
        <div class="modal__header">
          <div class="modal__header_title flex space-between">
            <h1 class="top_title">${projects[id].title}</h1>
            <button type="button" class="top_btn">
              &#x2716
            </button>
          </div>
          <ul role="list" class="modal__header_bottom features-container flex">
            <li class="feature">${projects[id].features[0]}</li>
            <li class="feature">${projects[id].features[1]}</li>
            <li class="feature">${projects[id].features[2]}</li>
          </ul>
        </div>
        <div class="modal__body">
          <div class="modal__body_slide">
            <div class="slide_main">
              <span class="slide_prev flex">&lt;</span>
              <div class="slide_show">
                <img src="${projects[id].image}" />
              </div>
              <span class="slide_next flex">&gt;</span>
            </div>
            <ul class="slide_items flex" role="list">
              <li class="slide_item active">
                <img src="${projects[id].sideImage[0]}" alt="project" />
              </li>
              <li class="slide_item">
                <img src="${projects[id].sideImage[1]}" alt="project" />
              </li>
              <li class="slide_item">
                <img src="${projects[id].sideImage[2]}" alt="project" />
              </li>
              <li class="slide_item">
                <img src="${projects[id].sideImage[3]}" alt="project" />
              </li>
            </ul>
          </div>
          <div class="modal__body_wrapper">
            <div class="modal__body_description">
              <p>${projects[id].description}</p>
            </div>
            <div class="modal__body_buttons flex direction">
              <button class="btn secondary-btn flex" type="button">
                <span>See Live</span>
                <img src="./assets/project-ic_link.svg" alt="see this project" />
              </button>
              <button class="btn secondary-btn flex" type="button">
                <span>See Source</span>
                <img src="./assets/github-dark.svg" alt="see this project" />
              </button>
            </div>
            <div class="modal__footer flex space-between">
              <button class="btn secondary-btn flex">
                <span class="arrow arrow-prev">&larr;</span>
                <span>Previous project</span>
              </button>
              <button class="btn secondary-btn flex">
                <span>Next project</span>
                <span class="arrow arrow-next">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  `;

  document.body.innerHTML += pCardTemplate;
  const modal = document.querySelector('.overlay');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-y');

  const close = document.querySelector('.top_btn');
  close.addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.classList.remove('overflow-y');
  });
}

window.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-id')) {
    createModal(e.target.getAttribute('data-id'));
  }
});
