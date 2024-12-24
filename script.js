document.addEventListener("DOMContentLoaded", () => {
    // Text Animation for #chotu_text
    const text = "REALITY";
    let chotu_text = document.getElementById("chotu_text");
    let i = 0;
  
    function animate() {
        if (i < text.length) {
            chotu_text.textContent = chotu_text.textContent + text[i];
            i++;
            setTimeout(animate, 250);
        } else {
            setTimeout(() => {
                chotu_text.textContent = "";
                i = 0;
                animate();
            }, 1000);
        }
    }
    animate();
  
    // Animated Counters for Skill Progression
    let counts = document.querySelectorAll(".count1");
    let counts2 = document.querySelectorAll(".count2");
    let counts3 = document.querySelectorAll(".count3");
    let counts4 = document.querySelectorAll(".count4");
  
    const animateCounter = (counter, target, interval) => {
        let count = 0;
        const updateCount = () => {
            if (count < target) {
                count++;
                counter.innerText = `${count}%`;
                setTimeout(updateCount, interval);
            }
        };
        updateCount();
    };
  
    counts.forEach(counter => animateCounter(counter, 90, 50));
    counts2.forEach(counter2 => animateCounter(counter2, 65, 50));
    counts3.forEach(counter3 => animateCounter(counter3, 75, 35));
    counts4.forEach(counter4 => animateCounter(counter4, 80, 50));
  
    // Intersection Observer for Animations
    const animElements2 = document.querySelectorAll(".count_icon");
    const animElements3 = document.querySelectorAll(".left_card");
    const animElements4 = document.querySelectorAll(".right_card");
    const animElements5 = document.querySelectorAll(".card1_container");
    const animElements6 = document.querySelectorAll(".card2_container");
    const animElements7 = document.querySelectorAll(".card3_container");
    const animElements = document.querySelectorAll(".animate");
  
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.1 }
    );
  
    animElements.forEach(el => observer.observe(el));
    animElements2.forEach(el => observer.observe(el));
    animElements3.forEach(el => observer.observe(el));
    animElements4.forEach(el => observer.observe(el));
    animElements5.forEach(el => observer.observe(el));
    animElements6.forEach(el => observer.observe(el));
    animElements7.forEach(el => observer.observe(el));
  
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
  });
  