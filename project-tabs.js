document.addEventListener('DOMContentLoaded', function () {
    // Project Data Dictionary
    const projectData = {
        buildings: {
            title: "Modern High-Rise Complex",
            desc: "A state-of-the-art residential and commercial complex in the heart of the city. Featuring 50 floors of luxury apartments and premium office spaces, designed with sustainability at its core.",
            loc: "New York",
            market: "Commercial",
            image: "https://images.unsplash.com/photo-1486325212027-8081648a52ea?auto=format&fit=crop&q=80&w=1000"
        },
        civil: {
            title: "Highway Interchange Upgrade",
            desc: "A major infrastructure project improving traffic flow and safety for millions of commuters. This complex interchange connects three major highways and includes 15 new bridges.",
            loc: "Texas",
            market: "Infrastructure",
            image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1000"
        },
        industrial: {
            title: "OGE Mustang Simple Cycle",
            desc: "Until 2017, Oklahoma City was powered by the 60-year-old Mustang coal fired plant. The plant was decommissioned and a new clean energy super-cycle unit was built right next door to the old plant. OG&E Mustang’s new facility includes seven Siemens Trent 60 gas turbines.",
            loc: "Oklahoma",
            market: "Oil and Gas",
            image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1000"
        },
        special: {
            title: "Eco-Friendly Urban Park",
            desc: "Transforming a former industrial site into a lush, green public space. This special project involved extensive soil remediation and the creation of a sustainable ecosystem for the community.",
            loc: "California",
            market: "Public Spaces",
            image: "https://images.unsplash.com/photo-1496417263034-38ec4f0d665a?auto=format&fit=crop&q=80&w=1000"
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
