const data = {
    roles:[
        {
            _id:'1',
            name:'Design',
            description:"I design beatiful and simple things.\nFocused on the user and the message of your brand or product.\r Things I enjoy designing: UX, UI, Web, Mobile, Logos.",
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
            image: '/assets/icons/.svg',
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
            _id:1,
            name:'Event5',
            roles:['Front-end','UI Design'],
            skillIds:[2,4,5,6,7,8,9],
        },
        {
            _id:2,
            name:'Ceol',
            roles:['Front-end','UI Design'],
            skillIds:[2,4,5,6,7,8,9],
        },
        {
            _id:3,
            name:'Shipwrecked',
            roles:['Game Design','Programming'],
            skillIds:[10,6,8],
        },
        {
            _id:4,
            name:'Pinterest Clone',
            roles:['Front-end'],
            skillIds:[0,1,8,9],
        },
        {
            _id:5,
            name:'Simpsons Quotes',
            roles:['Front-end'],
            skillIds:[3,8,9,11],
        },
    ],
};

export default data;