const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "About Me",
    link: "#aboutme",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { id: 1, value: 10, suffix: "+", label: "Completed Projects" },
  { id: 2, value: 1000, suffix: "+", label: "Hours of Practical Coding" },
  { id: 3, value: 20, suffix: "+", label: "Web Technologies Learned" },
  { id: 4, value: 100, suffix: "%", label: "Code Written with Passion" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/nextjs.png",
  },
  {
    imgPath: "/images/logos/express.png",
  },
  {
    imgPath: "/images/logos/mongodb.png",
  },
  {
    imgPath: "/images/logos/vercel.png",
  },
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/docker.png",
  },
  {
    imgPath: "/images/logos/git.png",
  },
  {
    imgPath: "/images/logos/gsap.png",
  },
  {
    imgPath: "/images/logos/clerk.png",
  },
  {
    imgPath: "/images/logos/mysql.png",
  },
  {
    imgPath: "/images/logos/openai.png",
  },
  {
    imgPath: "/images/logos/typescript.png",
  },
  {
    imgPath: "/images/logos/threejs.png",
  },
  {
    imgPath: "/images/logos/figma.png",
  },
  {
    imgPath: "/images/logos/javascript.png",
  },
  {
    imgPath: "/images/logos/postgresql.png",
  },
  {
    imgPath: "/images/logos/tailwindcss.png",
  },
  {
    imgPath: "/images/logos/python.png",
  },
  {
    imgPath: "/images/logos/nodejs.png",
  },
  {
    imgPath: "/images/logos/adobexd.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const eduCards = [
  {
    review:
      "Pursuing this advanced degree pushed my technical and analytical skills to new heights. It has been a transformative journey into modern AI and big data solutions, further enriched by certifications in Web Technologies and Generative AI for Everyday Life.",
    imgPath: "/images/edu_msc.png",
    logoPath: "/images/logo_mdu.png",
    title: "MSc. Computer Science (Data Science & Machine Learning)",
    date: "July 2024 – June 2026 (Expected)",
    address: "Maharshi Dayanand University, Rohtak, India",
    learnings: [
      "Engineered data analysis workflows using Python and R.",
      "Implemented advanced ML and deep learning models.",
      "Explored big data technologies like Hadoop, Spark.",
      "Applied computer vision and image processing with OpenCV.",
      "Built full-stack web apps and explored advanced AI techniques.",
    ],
  },
  {
    review:
      "Despite visa setbacks, I proactively completed initial coursework and led impactful projects before withdrawing prior to first semester exams. This experience strengthened my skills in mobile and web development, showcased leadership in team projects, and enhanced my adaptability to new tools and frameworks.",
    imgPath: "/images/conestoga.png",
    logoPath: "/images/conestoga.png",
    title: "Mobile Solutions Development (Coursework)",
    date: "May 2022",
    address: "Conestoga College, Waterloo, Canada (Online)",
    learnings: [
      "Developed a ticket booking system in C# as an individual project.",
      "Led a team to design a music app prototype in Adobe XD.",
      "Led and contributed to the iOS app 'Explore Waterloo' with search and GitHub version control.",
      "Engineered web apps with modern UI/UX and accessibility standards.",
      "Strengthened problem-solving, debugging, and team collaboration skills.",
    ],
  },
  {
    review:
      "This program refined my practical understanding of system-level programming and database management, preparing me for real-world software challenges.",
    imgPath: "/images/edu_pgdca.png",
    logoPath: "/images/logo_citc.png",
    title: "PGDCA",
    date: "March 2021 – March 2022",
    address: "CITC – The Hub of IT, Charkhi Dadri, India",
    learnings: [
      "Developed skills in OS concepts and computer architecture.",
      "Engineered efficient data structures and database systems.",
      "Designed modular, optimized programs in C and C++.",
      "Strengthened software development best practices.",
      "Reinforced theoretical learning through hands-on coding.",
    ],
  },
  {
    review:
      "My undergraduate journey laid a solid foundation in core computer science principles and ignited my passion for solving complex problems through code.",
    imgPath: "/images/edu_bsc.png",
    logoPath: "/images/logo_mdu.png",
    title: "BSc. Computer Science",
    date: "2016 – 2020",
    address: "Maharshi Dayanand University, Rohtak, India",
    learnings: [
      "Developed strong C, C++, and Visual Basic programming skills.",
      "Engineered and analyzed core data structures and algorithms.",
      "Built relational databases and designed web interfaces using HTML/CSS.",
      "Explored operating systems, computer architecture, and networking fundamentals.",
      "Applied software engineering and systems analysis techniques through lab projects.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  eduCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
};
