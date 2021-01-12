"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';


// Header starts
const elOfHeader = document.createElement('header');
elOfHeader.classList.add('header-container');
const divOfHeader = document.createElement('div');
divOfHeader.classList.add('header-inside');
const elOfH3 = document.createElement('h3');
elOfH3.innerText = 'HYF Repositories';
const elOfMenu = document.createElement('div');
elOfMenu.classList.add('menu');
const selectLabel = document.createElement('label');
selectLabel.for = 'select'; 
const elOfSelect = document.createElement('select');
selectEl.name = 'select';
selectEl.id = 'select-repo'; 
const elOfOption = document.createElement('option');
elOfOption.innerText = 'Select an option';

// Main section starts
const elOfMain = document.createElement('main');
elOfMain.classList.add('content');


// First Section starts
const sectionOfRepo = document.createElement('section');

// Repository Paragraph
const repoDiv = document.createElement('div');
repoDiv.classList.add('repo');
repoDiv.id = 'repository';
const repoP = document.createElement('p');
repoP.classList.add('repo');
repoP.innerText = 'Repository: ';

// Description Paragraph
const descDiv = document.createElement('div');
descDiv.classList.add('repo');
descDiv.id = 'description';
const descP = document.createElement('p');
descDiv.classList.add('repo');
descDiv.innerText = 'Description: ';

// Forks Paragraph
const forkDiv = document.createElement('div');
forkDiv.classList.add('repo');
forkDiv.id = 'forks';
const forkP = document.createElement('p');
forkP.classList.add('repo');
forkP.innerText = 'Forks: ';

// Updated Paragraph
const upDiv = document.createElement('div');
upDiv.classList.add('repo');
upDiv.id = 'updated';
const upP = document.createElement('p');
upP.classList.add('repo');
upP.innerText = 'Updated: ';


// Section of Contributors starts
const sectionofCont = document.createElement('section');
sectionofCont.classList.add('contributors');

// Contributors Paragraph
const contDiv = document.createElement('div');
contDiv.id = 'contributors';
const contP = document.createElement('p');
upP.innerText = 'Contributors: ';

//Adding to the DOM
document.body.appendChild(elOfHeader);
elOfHeader.appendChild(divOfHeader);
divOfHeader.appendChild(elOfH3);
divOfHeader.appendChild(elOfMenu);
elOfMenu.appendChild(selectLabel);
elOfMenu.appendChild(elOfSelect);
elOfSelect.appendChild(elOfOption);


document.body.appendChild(elOfMain);
elOfMain.appendChild(sectionOfRepo);

sectionOfRepo.appendChild(repoDiv);
repoDiv.appendChild(repoP);
sectionOfRepo.appendChild(descDiv);
descDiv.appendChild(descP);
sectionOfRepo.appendChild(forkDiv);
forkDiv.appendChild(forkP);
sectionOfRepo.appendChild(upDiv);
upDiv.appendChild(upP);

elOfMain.appendChild(sectionofCont);
sectionofCont.appendChild(contDiv);
contDiv.appendChild(contP);

// I recreate all the html elements using Javascript. I will complete the other parts as soon as possible.