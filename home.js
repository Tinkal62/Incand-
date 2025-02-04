window.addEventListener("scroll", function () {
    let headerNav = document.getElementById("headerNav");
    if (window.scrollY > 50) {
        headerNav.classList.add("visible");
    } else {
        headerNav.classList.remove("visible");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutSections = document.querySelectorAll(".about-container");

    function showOnScroll() {
        aboutSections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Initial check when page loads
});



/*................................................................EVENT.......................................................................................*/

// document.addEventListener("DOMContentLoaded", function () {
//     const eventBoxes = document.querySelectorAll(".event-box");
//     const eventDetails = document.querySelector(".event-details");
//     const eventImage = document.getElementById("event-image");
//     const eventDescription = document.getElementById("event-description");
//     const eventsSection = document.getElementById("events");

//     window.addEventListener("scroll", function () {
//         let sectionTop = eventsSection.getBoundingClientRect().top;
//         if (sectionTop < window.innerHeight - 100) {
//             eventBoxes.forEach((box, index) => {
//                 setTimeout(() => {
//                     box.classList.add("show");
//                 }, index * 200);
//             });
//         }
//     });

//     eventBoxes.forEach(box => {
//         box.addEventListener("click", function () {
//             const eventContent = this.querySelector(".event-content");
//             if (eventContent) {
//                 const img = eventContent.querySelector("img");
//                 const text = eventContent.querySelector("p");
//                 eventImage.src = img.src;
//                 eventDescription.textContent = text.textContent;
//                 eventDetails.style.opacity = "1";
//                 eventDetails.style.transform = "translateX(0)";
//             }
//         });
//     }); 
// });

/*............................................................................................................................................................*/





document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".sponsor-slider");
    const images = document.querySelectorAll(".sponsor-logo");

    // Clone logos to create an infinite loop
    images.forEach((img) => {
        let clone = img.cloneNode(true);
        slider.appendChild(clone);
    });

    // Fade in effect
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
        }, index * 500); // Delay each fade-in
    });
});







// document.addEventListener("DOMContentLoaded", function () {
//     const eventBoxes = document.querySelectorAll(".event-box");
//     const eventDetails = document.querySelector(".event-details");
//     const eventImage = document.getElementById("event-image");
//     const eventDescription = document.getElementById("event-description");
//     const eventsSection = document.getElementById("events");

//     // Add animation to reveal event boxes as you scroll
//     window.addEventListener("scroll", function () {
//         let sectionTop = eventsSection.getBoundingClientRect().top;
//         if (sectionTop < window.innerHeight - 100) {
//             eventBoxes.forEach((box, index) => {
//                 setTimeout(() => {
//                     box.classList.add("show");
//                 }, index * 200);
//             });
//         }
//     });

//     // When an event box is clicked, show the content
//     eventBoxes.forEach(box => {
//         box.addEventListener("click", function () {
//             const eventContent = this.querySelector(".event-content");

//             // Only show content if it's not empty
//             if (eventContent) {
//                 const img = eventContent.querySelector("img");
//                 const contentHtml = eventContent.innerHTML; // Grab all content HTML, including headings and lists

//                 // Update the image and content on the right section
//                 eventImage.src = img.src;
//                 eventDescription.innerHTML = contentHtml; // Set the entire HTML structure to event-description

//                 // Make the event details section visible
//                 eventDetails.style.opacity = "1";
//                 eventDetails.style.transform = "translateX(0)";
//             }
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const eventBoxes = document.querySelectorAll(".event-box");
    const eventDetails = document.querySelector(".event-details");
    const eventImage = document.getElementById("event-image");
    const eventDescription = document.getElementById("event-description");
    const eventsSection = document.getElementById("events");

    // Add animation to reveal event boxes as you scroll
    window.addEventListener("scroll", function () {
        let sectionTop = eventsSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            eventBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add("show");
                }, index * 200);
            });
        }
    });

    // When an event box is clicked, show the content
    eventBoxes.forEach(box => {
        box.addEventListener("click", function () {
            const eventContent = this.querySelector(".event-content");

            // Only show content if it's not empty
            if (eventContent) {
                const img = eventContent.querySelector("img");
                const contentHtml = eventContent.innerHTML.replace(img.outerHTML, ""); // Grab the content but exclude the image tag

                // Update the image and content on the right section
                eventImage.src = img.src;
                eventDescription.innerHTML = contentHtml; // Set the entire HTML structure to event-description

                // Make the event details section visible
                eventDetails.style.opacity = "1";
                eventDetails.style.transform = "translateX(0)";
            }
        });
    });
});
