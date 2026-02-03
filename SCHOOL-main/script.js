/**
 * Hayagrivas International School - Global Script (v3.1)
 * Optimized for AntiGravity Stability & Performance.
 */

console.log("Hayagrivas v3.1: Stabilized.");

// 1. Core Loader & Popup Logic
window.addEventListener("load", () => {
  // document.body.classList.add("loaded"); // Moved below for better flow

  document.body.classList.add("loaded");

  // Announcement Popup (Delays to let page load first)
  setTimeout(() => {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "flex";
  }, 2000);

  // Initial Loader Fade-out (Now instant for better UX)
  const loader = document.getElementById("schoolLoader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 500);
  }

  document.body.classList.add("loaded");
});

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}
window.closePopup = closePopup;

// 2. Smooth Internal Navigation Transitions
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (
      this.hostname === window.location.hostname &&
      !this.target &&
      !this.href.includes("#") &&
      !this.href.startsWith("mailto:") &&
      !this.href.startsWith("tel:")
    ) {
      e.preventDefault();
      document.body.classList.remove("loaded");
      setTimeout(() => {
        window.location = this.href;
      }, 600);
    }
  });
});

// 3. Optimized Scroll Listener (Throttled effect)
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Navbar Glassmorphism
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", scrollY > 50);
  }

  // Hero Section Effects
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.classList.toggle("zoom", scrollY > 100);
  }

  // Scroll Progress Bar
  const sBar = document.getElementById("scrollBar");
  if (sBar) {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    sBar.style.width = (scrollY / h) * 100 + "%";
  }

  // Reveal Sections on scroll
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});

// 4. Cursor Glow Tracking
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

// 5. Smart Intersection Observer for Counters
const counters = document.querySelectorAll(".counter");
if (counters.length > 0) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const goal = +target.getAttribute("data-target");
          let current = 0;
          const inc = goal / 100;

          const run = () => {
            current += inc;
            if (current < goal) {
              target.innerText = Math.ceil(current);
              requestAnimationFrame(run);
            } else {
              target.innerText = goal;
            }
          };
          run();
          countObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.6 },
  );

  counters.forEach((c) => countObserver.observe(c));
}

// 6. Gallery Lightbox Logic
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
if (lb && lbImg) {
  document.querySelectorAll(".gallery-img").forEach((img) => {
    img.onclick = () => {
      lb.style.display = "flex";
      lbImg.src = img.src;
    };
  });
  lb.onclick = () => {
    lb.style.display = "none";
  };
}

// 7. Video Fade on Scroll
window.addEventListener("scroll", () => {
  const video = document.querySelector(".hero-video");
  if (video) {
    let scrollY = window.scrollY;
    let fadeValue = 1 - scrollY / 600;
    if (fadeValue < 0) fadeValue = 0;
    video.style.opacity = fadeValue;
  }
});

// 8. Video Slideshow
const hVideo = document.getElementById("heroVideo");
if (hVideo) {
  const isFrontend = window.location.pathname.includes("/frontend/");
  const pathPrefix = isFrontend ? "../" : "";

  const videoFiles = [
    pathPrefix + "VID-20260126-WA0032.mp4",
    pathPrefix + "video1.mp4",
    pathPrefix + "video2.mp4",
    pathPrefix + "video3.mp4",
  ];
  /* 
    // Video Slideshow Disabled for Single Video Loop
    let vIndex = 0;
    setInterval(() => {
        vIndex = (vIndex + 1) % videoFiles.length;
        hVideo.src = videoFiles[vIndex];
        hVideo.play().catch(e => console.log("Video switch error:", e));
    }, 8000); 
    */
}

// 10. Fullscreen Video Logic
const fsBtn = document.getElementById("fullscreenBtn");
if (fsBtn && hVideo) {
  fsBtn.addEventListener("click", () => {
    if (hVideo.requestFullscreen) {
      hVideo.requestFullscreen();
    } else if (hVideo.mozRequestFullScreen) {
      /* Firefox */
      hVideo.mozRequestFullScreen();
    } else if (hVideo.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      hVideo.webkitRequestFullscreen();
    } else if (hVideo.msRequestFullscreen) {
      /* IE/Edge */
      hVideo.msRequestFullscreen();
    }
  });
}

// 9. Event Modal
window.openModal = function () {
  const modal = document.getElementById("eventModal");
  if (modal) modal.style.display = "flex";
};
window.closeModal = function () {
  const modal = document.getElementById("eventModal");
  if (modal) modal.style.display = "none";
};

// 11. Hero background slideshow (cycles gallery images)
(function initHeroSlides() {
  const slides = document.querySelectorAll(".hero-slides .slide");
  if (!slides || slides.length === 0) return;

  let idx = 0;
  slides[idx].classList.add("active");

  setInterval(() => {
    slides[idx].classList.remove("active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
  }, 5000);
})();


