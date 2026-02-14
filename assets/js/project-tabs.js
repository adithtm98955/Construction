
document.addEventListener('DOMContentLoaded', function () {
    // Project Data Dictionary with Multiple Images
    const projectData = {
        buildings: {
            title: "Elite Skyline Towers",
            desc: "A premium residential complex in Kochi featuring 20 floors of luxury apartments with world-class amenities and sustainable design.",
            loc: "Kochi, India",
            market: "Residential",
            images: ["assets/images/ourworks/unnamed.webp", "assets/images/ourworks/unnamed (4).webp"]
        },
        civil: {
            title: "Highway Expansion Project",
            desc: "Major infrastructure upgrade involving the widening of state highways and construction of new flyovers to improve connectivity.",
            loc: "Kerala, India",
            market: "Infrastructure",
            images: ["assets/images/ourworks/unnamed (1).webp", "assets/images/ourworks/unnamed (5).webp"]
        },
        industrial: {
            title: "Industrial Manufacturing Unit",
            desc: "Construction of a state-of-the-art steel fabrication and manufacturing facility, equipped with heavy machinery foundations.",
            loc: "Coimbatore, India",
            market: "Industrial",
            images: ["assets/images/ourworks/unnamed (2).webp", "assets/images/ourworks/unnamed (6).webp"]
        },
        special: {
            title: "Heritage Fort Restoration",
            desc: "Restoration of a colonial-era fort into a heritage tourism site, preserving original architecture while integrating modern amenities.",
            loc: "Rajasthan, India",
            market: "Restoration",
            images: ["assets/images/ourworks/unnamed (3).webp", "assets/images/ourworks/unnamed (7).webp"]
        }
    };

    // Elements
    const projectTabs = document.getElementById('projectTabs');
    const galleryContainer = document.getElementById('showcase-gallery');

    // State
    let slideshowInterval = null;

    if (projectTabs && galleryContainer) {
        const titleEl = document.getElementById('projectTitle');
        const descEl = document.getElementById('projectDesc');
        const locEl = document.getElementById('projectLoc');
        const marketEl = document.getElementById('projectMarket');
        const links = projectTabs.querySelectorAll('.nav-link');

        // Function to start slideshow
        function startSlideshow(images) {
            // Clear interval if running
            if (slideshowInterval) clearInterval(slideshowInterval);

            // Clear existing images
            galleryContainer.innerHTML = '';

            // Create Image Elements
            const imgElements = images.map((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = "Project Image " + (index + 1);
                img.className = 'gallery-img'; // Base class
                if (index === 0) img.classList.add('active'); // First one active
                galleryContainer.appendChild(img);
                return img;
            });

            // If only one image, no need to cycle
            if (images.length <= 1) return;

            let currentIndex = 0;

            // Start Interval
            slideshowInterval = setInterval(() => {
                // Remove active class from current
                imgElements[currentIndex].classList.remove('active');

                // Advance index
                currentIndex = (currentIndex + 1) % imgElements.length;

                // Add active class to new
                imgElements[currentIndex].classList.add('active');
            }, 4000); // Change every 4 seconds
        }

        // Initialize with default (Industrial is active in HTML)
        startSlideshow(projectData['industrial'].images);

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Update Active State
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // Get Data
                const category = this.getAttribute('data-tab');
                const data = projectData[category];

                if (data) {
                    // Update Content with animation
                    titleEl.textContent = data.title;
                    descEl.textContent = data.desc;
                    locEl.textContent = data.loc;
                    marketEl.textContent = data.market;

                    // Trigger Text Animation (Simple shake/fade)
                    titleEl.style.opacity = '0';
                    setTimeout(() => titleEl.style.opacity = '1', 200);

                    // Start Slideshow for new category
                    startSlideshow(data.images);
                }
            });
        });
    }
});
