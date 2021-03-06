const data = {
    roles:[
        {
            _id:'1',
            name:'Design',
            description:"I design beatiful and simple things.\nFocused on the user and the message of your brand or product.\n Things I enjoy designing: UX, UI, Web, Mobile, Logos.",
            icon:'/assets/icons/design.svg',
        },
        {
            _id:'2',
            name:'Development',
            description:'I can help you to bring your product idea into reality.\nOffering to you services of development, integration, deployment, analytics, and maintenance.',
            icon:'/assets/icons/frontend.svg',
        },
    ],
    skills :[
        {
            _id:'1',
            name: 'HTML',
            image: '/assets/icons/html.svg',
            
        },
        {
            _id:'2',
            name: 'CSS',
            image: '/assets/icons/css.svg',
        },
        {
            _id:'3',
            name: 'React.js',
            image: './assets/icons/react.svg',
        },
        {
            _id:'4',
            name: 'JavaScript',
            image: '/assets/icons/javascript.svg',
        },
        {
            _id:'5',
            name: 'SASS',
            image: '/assets/icons/sass.svg',
        },
        {
            _id:'6',
            name: 'Figma',
            image: '/assets/icons/figma.svg',
        },
        {
            _id:'7',
            name: 'Photoshop',
            image: '/assets/icons/photoshop.svg',
            
        },
        {
            _id:'8',
            name: 'Notion',
            image: '/assets/icons/notion.svg',
            
        },
        {
            _id:'9',
            name: 'Git',
            image: '/assets/icons/git.svg',
            
        },
        {
            _id:'10',
            name: 'GitHub',
            image: '/assets/icons/github.svg',
            
        },
        {
            _id:'11',
            name: 'Unity',
            image: '/assets/icons/unity.svg',
            
        },
        {
            _id:'12',
            name: 'Bootstrap',
            image: '/assets/icons/bootstrap.svg',
            
        },
    ],
    projects:[
        {
            _id:0,
            name:'CyberShai',
            image: '/assets/media/cybershaipicture.png',
            roles:['Front-end','UI Design'],
            skillIds:[2,4,5,7,8,9],
        },
        {
            _id:1,
            name:'Event5',
            image: '/assets/media/event5picture.png',
            roles:['Front-end','UI Design'],
            skillIds:[2,4,5,6,7,8,9],
        },
        {
            _id:2,
            name:'Ceol',
            image: '/assets/media/ceolpicture.png',
            roles:['Front-end','UI Design'],
            skillIds:[2,4,5,6,7,8,9],
        },
        {
            _id:3,
            name:'Shipwrecked',
            image: '/assets/media/josephpicture.jpg',
            roles:['Game Design','Programming'],
            skillIds:[10,6,8],
        },
        {
            _id:4,
            name:'Pinterest Clone',
            image: '/assets/media/pinterestpicture.png',
            roles:['Front-end'],
            skillIds:[0,1,8,9],
        },
        {
            _id:5,
            name:'Simpsons Quotes',
            image: '/assets/media/quotespicture.png',
            roles:['Front-end'],
            skillIds:[3,8,9,11],
        },
    ],
    contactLinks:[
        {
            _id: 1,
            name: 'me@djkde.com',
            link: 'mailto:me@djkde.com',
            icon: '/assets/icons/mail.svg',
        },
        {
            _id: 2,
            name: 'Twitter: @djkde' ,
            link: 'https://twitter.com/djkde',
            icon: '/assets/icons/twitter.svg',
        },
        {
            _id: 3,
            name: 'GitHub: Djkde01' ,
            link: 'https://github.com/Djkde01',
            icon: '/assets/icons/github.svg',
        },
        {
            _id: 4,
            name: 'LinkedIn: Djkde' ,
            link: 'https://linkedin.com/in/Djkde',
            icon: '/assets/icons/linkedin.svg',
        },
    ],
};

export default data;