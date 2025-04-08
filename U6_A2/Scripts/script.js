// Controls the secret logo button that enters into the secret testing area
let logoButton = document.getElementById("logo");

logoButton.addEventListener("click", function() {
    let password = prompt("Enter password");
    let correctPassword = "SecretWindow1";

    if (password === correctPassword) {
        window.location.href = "abouttesting.html";
    } else {
        alert("Incorrect password, This is for Admins Only");
    }
});

const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const scrollbarThumb = document.querySelector('.thumb');
const slideCount = slides.length;
const slideHeight = 720; // Controls the height of each image so they dont overflow
const marginTop = 16;

// Data for each of the images that auto updates to the specific person after scrolling
const persons = [
   { title: 'Founder & Creative Director', name: 'Gareth Morgan', description: 'With over 15 years in the industry, Gareth leads the creative vision behind our flagship titles. A proud Welsh developer, his goal is to showcase local talent while producing globally recognized games.' },
   { title: 'Lead Developer', name: 'Sophie Tanner', description: 'Sophie specializes in cross-platform architecture, ensuring seamless gameplay across devices. She’s passionate about clean code, fast performance, and accessibility in game design.' },
   { title: 'Art Director', name: 'Cameron Jones', description: 'Cameron is the visionary behind our game aesthetics, from concept art to the character design. His unique art style helps Celtec titles stand out in a crowded market.' },
   { title: 'Social Media Marketing Officer', name: 'Laura Fong', description: 'Our wonderful Laura is the voice of Celtec online. She helps craft engaging content, drives our digital campaigns, and leads community interaction.' },
   { title: 'Game Designer', name: 'Evan Fong', description: 'Evan brings our ideas to life with fun, balanced gameplay mechanics. Whether it’s cozy farming systems or the logic behind complex puzzles, Evan ensures our games are challenging and rewarding.' },
   { title: 'QA & User Testing Coordinator', name: 'Maya Singh', description: 'Maya leads our testing initiatives, making sure every title is polished and playable. She works directly with users to gather feedback and drive improvements.' },
   { title: 'Technical Artist', name: 'Samuel Lee', description: 'Samuel bridges the gap between art and code, ensuring that the visuals of our games are both stunning and optimized for performance. His expertise in shaders and real-time rendering enhances the immersive experience of our games.' },
   { title: 'Sound Designer', name: 'Amara Phillips', description: 'Amara is the mastermind behind the audio in our games, from sound effects to the atmospheric music that sets the tone for each scene. Her attention to detail brings our virtual worlds to life through sound.' },
   { title: "Community Manager", name: 'Olivia Carter', description: 'Olivia is the heart of our community, ensuring players feel heard and valued. She manages our social media presence, organizes events, and collects feedback to improve player experience.' },
];

// Scroll handler to update the thumb size and position
const scrollThumb = () => {
    const index = Math.floor(slideGallery.scrollTop / slideHeight);
    scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
    updatePersonInfo(index); // links to update person info when scrolling
};

// Smooth scroll to the chosen or next person
const scrollToElement = el => {
    const index = parseInt(el.dataset.id, 10);
    slideGallery.scrollTo({
        top: index * slideHeight + marginTop,
        behavior: 'smooth' // Smooth scroll behavior management
    });
    updatePersonInfo(index); // Updates info when clicking on a thumbnail
};

// Updates the person info in the section
const updatePersonInfo = index => {
    if (index >= 0 && index < persons.length) {
        document.getElementById('personTitle').textContent = persons[index].title;
        document.getElementById('personName').textContent = persons[index].name;
        document.getElementById('personDescription').textContent = persons[index].description;
    }
};

// Creates thumbnails dynamically
document.querySelector('.thumbnails').innerHTML += [...slides]
   .map((slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`)
   .join('');

// Adds event listener for each thumbnail image
document.querySelectorAll('.thumbnails img').forEach(el => {
    el.addEventListener('click', () => scrollToElement(el));
});

// Adds scroll event listener to update the scrollbar thumb
slideGallery.addEventListener('scroll', () => {
    scrollThumb();
});

// Initializes scrollbar position
scrollThumb();
