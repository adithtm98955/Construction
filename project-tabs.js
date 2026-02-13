document.addEventListener('DOMContentLoaded', function () {
    // Project Data Dictionary
    const projectData = {
        buildings: {
            title: "Elite Skyline Towers",
            desc: "A premium residential complex in Kochi featuring 20 floors of luxury apartments with world-class amenities and sustainable design.",
            loc: "Kochi, India",
            market: "Residential",
            image: "ourworks/unnamed.webp"
        },
        civil: {
            title: "Highway Expansion Project",
            desc: "Major infrastructure upgrade involving the widening of state highways and construction of new flyovers to improve connectivity.",
            loc: "Kerala, India",
            market: "Infrastructure",
            image: "ourworks/unnamed (1).webp"
        },
        industrial: {
            title: "Industrial Manufacturing Unit",
            desc: "Construction of a state-of-the-art steel fabrication and manufacturing facility, equipped with heavy machinery foundations.",
            loc: "Coimbatore, India",
            market: "Industrial",
            image: "ourworks/unnamed (2).webp"
        },
        special: {
            title: "Heritage Fort Restoration",
            desc: "Restoration of a colonial-era fort into a heritage tourism site, preserving original architecture while integrating modern amenities.",
            loc: "Rajasthan, India",
            market: "Restoration",
            image: "ourworks/unnamed (3).webp"
        }
    };

    // Elements
    const projectTabs = document.getElementById('projectTabs');
    if (projectTabs) {
        const titleEl = document.getElementById('projectTitle');
        const descEl = document.getElementById('projectDesc');
        const locEl = document.getElementById('projectLoc');
        const marketEl = document.getElementById('projectMarket');
        const imgEl = document.getElementById('projectImage');
        const links = projectTabs.querySelectorAll('.nav-link');

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
                    // Update Content with minimal fade effect (optional)
                    titleEl.textContent = data.title;
                    descEl.textContent = data.desc;
                    locEl.textContent = data.loc;
                    marketEl.textContent = data.market;

                    // Update Image
                    imgEl.style.opacity = '0.5';
                    setTimeout(() => {
                        imgEl.src = data.image;
                        imgEl.style.opacity = '1';
                    }, 200);
                }
            });
        });
    }
});
