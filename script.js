/* eslint-disable linebreak-style */
const openMenu = document.querySelector('.hamburger');
const bodyBlur = document.querySelector('.main-section');
const navItem = document.querySelectorAll('.item');
const menuCont = document.querySelector('.items');
const closeMenu = document.querySelector('.close');
function openMobMenu() {
  menuCont.classList.add('menu-open');
  bodyBlur.classList.add('blurred');
}
openMenu.addEventListener('click', openMobMenu);
function closeMobMenu() {
  menuCont.classList.remove('menu-open');
}
closeMenu.addEventListener('click', closeMobMenu);

navItem.forEach((menuItem) => {
  menuItem.addEventListener('click', closeMobMenu);
});

const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i += 1) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'flex') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'flex';
    }
  });
}

// Project pop up section
const projects = [
  {
    mobileImage: 'src="assets/images/portfolio1.png" alt="mobile-project1"',
    desktopImage: 'src="assets/images/desktop/portfolio1.png" alt="Desktop-project1"',
    name: 'WEB METRICS',
    jobDescription: {
      company: 'Microverse',
      role: 'Full-stack Dev',
      year: '2023',
    },
    description: 'This is a React capstone project about building a mobile web application to check a list of metrics (numeric values) that you will create making use of React and Redux. I select for this project the financial modeling prep API that provides numeric stock data. The webapp will have two pages: The homepage and the details of each individual data.',
    languages: ['HTML5', 'react', 'CSS3'],
    github: 'https://github.com/Piercel2022/metrics-webapp',
    livedemo: 'https://metrics2022.netlify.app/',
  },
  {
    mobileImage: 'src="assets/images/portfolio2.png" alt="mobile-project2"',
    desktopImage: 'src="assets/images/desktop/portfolio2.png" alt="Desktop-project2"',
    name: 'BLOG',
    jobDescription: {
      company: 'Microverse',
      role: 'Front-end Dev',
      year: '2023',
    },
    description: 'Blog starter is a A statically generated blog example using Next.js, Markdown, and TypeScript. The blog posts in the example will be stored as local markdown files in the application directory (not fetched from an external data source), so there will be the need to read the data from the file system.',
    languages: ['html', 'Tailwind', 'Typescript', 'JavaScript'],
    github: 'https://github.com/Piercel2022/Blog-starter',
    livedemo: 'https://react-rails.netlify.app/',
  },
  {
    mobileImage: 'src="assets/images/portfolio3.png" alt="mobile-project3"',
    desktopImage: 'src="assets/images/desktop/portfolio3.png" alt="Desktop-project3"',
    name: 'PIERCEL-BUDGET',
    jobDescription: {
      company: 'Microverse',
      role: 'Full-stack Dev',
      year: '2022',
    },
    description: 'PIERCEL-BUDGET is a mobile web application where a user can manage the budget, and can easily create an account, login and start managing his budget. The features of the web application are: The user authentication to create an account and then login. The user can add some transactions according to the category of the transactions.',
    languages: ['Rails', 'Bootstrap', 'Ruby', 'postgresql'],
    github: 'https://github.com/Piercel2022/budget_app',
    livedemo: 'https://budget-app-0eev.onrender.com/',
  },
  {
    mobileImage: 'src="assets/images/portfolio4.png" alt="mobile-project4"',
    desktopImage: 'src="assets/images/desktop/portfolio4.png" alt="Desktop-project4"',
    name: 'SPACE TRAVELER',
    jobDescription: {
      company: 'Microverse',
      role: 'Front-end Dev',
      year: '2023',
    },
    description: 'Space Traveler is built with real live data from the SpaceX API. The application provides commercial and scientific space travel services that allow users to book rockets and join selected space missions. Space Traveler is built with real live data from the SpaceX API',
    languages: ['react', 'redux'],
    github: 'https://github.com/Piercel2022/Space-Traveler',
    livedemo: 'https://spacetraveleryun.netlify.app/',
  },
];
const portfolios = document.querySelector('#Portfolio');
projects.forEach((project, id) => {
  const innerProject = document.createElement('div');
  innerProject.classList.add('container');
  innerProject.innerHTML = (`
    <img class="projetc-image" ${project.mobileImage}>
    <img class="Dprojetc-image" ${project.desktopImage}>
    <div class="details project${id}">
      <h2 class="Project-Title">${project.name}</h2>
      <article class="experience">
          <span class="title">${project.jobDescription.company}</span>
          <span class="year"> &nbsp;&nbsp; &#8226; &nbsp;&nbsp; ${project.jobDescription.role} &nbsp;&nbsp; &#8226; &nbsp;&nbsp;${project.jobDescription.year}</span>
      </article>
      <p class="description">${project.description}</p>
      <ul class="stacks">
      <li class="language">${project.languages[0]}</li>
        <li class="language">${project.languages[1]}</li>
        <li class="language">${project.languages[2]}</li>
      </ul>
      <button class='btn see-project' type="button">see project</button>
    </div>
    `);
  portfolios.appendChild(innerProject);
});

function projectPopup(position) {
  const popup = document.createElement('div');
  popup.innerHTML = (`
      <div class="popup-content">
          <h2 class="Project-Title">
             ${projects[position].name}
          </h2>
          <i class="close-icon bi bi-x-lg "></i>
          <img class="project-img" src="assets/images/portfolio${position + 1}.png" alt="">

          <ul class="info-top">
            <li class="title">${projects[position].jobDescription.company}&nbsp;&nbsp; &#8226; &nbsp;</li>
            <li class="year gray">${projects[position].jobDescription.role}&nbsp;&nbsp; &#8226; &nbsp;</li>
            <li class="year gray">${projects[position].jobDescription.year}</li>
          </ul>
          <img class="desktop-img" src="assets/images/desktop/portfolio${position + 1}.png" alt="project tonic homepage">
          <div class="popup-bottom">
            <p class="project-text">
              ${projects[position].description}
            </p>
            <div class="badges-buttons">
              <ul class="project-languages">
                <li class="language">${projects[position].languages[0]}</li>
                <li class="language">${projects[position].languages[1]}</li>
                <li class="language">${projects[position].languages[2]}</li>
              </ul>
              <div class="popup-buttons">
                <button type="button" class="btn project-button">
                        <a class="btn-live"href="${projects[position].livedemo}">
                          See live &nbsp;&nbsp;&nbsp;
                          <i class="btnicon bi bi-box-arrow-up-right"></i>
                        </a>
                </button>
                <button type="button" class="btn project-button">
                        <a class="btn-live"href="${projects[position].github}">
                          See Source&nbsp;&nbsp;&nbsp;
                          <i class="btnicon bi bi-github"></i>
                        </a>
                </button>
              </div>
            </div>
          </div>
        </div>
    `);
  popup.classList.add('popup');
  portfolios.appendChild(popup);
}

const projectnBtn = document.querySelectorAll('.see-project');
projectnBtn.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    projectPopup(ind);
    const popup = document.querySelector('.popup');
    document.querySelector('.close-icon').addEventListener('click', () => {
      portfolios.removeChild(popup);
    });
  });
});

// form validation
const form = document.querySelector('.forms');
const email = document.querySelector('.form-email');
const errorMsg = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  let errorMessage = '';
  const emailLower = email.value.toLowerCase();
  if (emailLower !== email.value) {
    errorMessage = 'The email you insert have to be in Lowercase';
  }
  if (errorMessage.length > 0) {
    event.preventDefault();
    errorMsg.innerText = errorMessage;
  }
});

// local storage
const formData = {
  name: document.querySelector('.form-name').value,
  email: document.querySelector('.form-email').value,
  message: document.querySelector('.form-message').value,
};

let getFormData = window.localStorage.getItem('formData');
if (getFormData) {
  getFormData = JSON.parse(getFormData);
  document.querySelector('.form-name').value = getFormData.name;
  document.querySelector('.form-email').value = getFormData.email;
  document.querySelector('.form-message').value = getFormData.message;
}

Array.from(form).forEach((element) => {
  element.addEventListener('input', () => {
    formData.name = document.querySelector('.form-name').value;
    formData.email = document.querySelector('.form-email').value;
    formData.message = document.querySelector('.form-message').value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});