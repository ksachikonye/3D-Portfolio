import {
  javascript,
  mysql,
  html,
  css,
  docker,
  figma,
  git,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  php,
  android,
  bash,
  bootstrap,
  insomnia,
  laravel,
  linux,
  photoshop,
  python,
  sass,
  virtualbox,
  vmware,
  windows,
  office365,
  ccs,
  sonnenhof,
  glaubitz,
  service,
  pitagora,
  ccicampus,
  ifcaad,
} from '../assets'

export const navLinks = [
  {
    id: 'technologies',
    external: true,
    title: 'Techs',
  },
  {
    id: 'projects',
    external: false,
    title: 'Projects',
  },
  {
    id: 'news',
    external: false,
    title: 'News',
  },
  {
    id: 'contact',
    external: false,
    title: 'Contact',
  },
]

export const footLinks = [
  {
    id: 'mentions',
    external: true,
    title: 'Legal Mentions',
  },
]

const programming = [
  //   {
  //     name: 'HTML 5',
  //     icon: html,
  //   },
  //   {
  //     name: 'CSS 3',
  //     icon: css,
  //   },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  //   {
  //     name: 'Android',
  //     icon: android,
  //   },
]

const front = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  //   {
  //     name: 'Bootstrap',
  //     icon: bootstrap,
  //   },
  //   {
  //     name: 'Sass',
  //     icon: sass,
  //   },
]

const back = [
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
]

const devops = [
  {
    name: 'Linux',
    icon: linux,
  },
  //   {
  //     name: 'Windows',
  //     icon: windows,
  //   },
  {
    name: 'Bash',
    icon: bash,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Git',
    icon: git,
  },
  //   {
  //     name: 'VirtualBox',
  //     icon: virtualbox,
  //   },
  //   {
  //     name: 'VMWare',
  //     icon: vmware,
  //   },
]

const softwares = [
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Photoshop',
    icon: photoshop,
  },
  {
    name: 'Insomnia',
    icon: insomnia,
  },
  //   {
  //     name: 'Office365',
  //     icon: office365,
  //   },
]

const mentions = [
  {
    title: 'Editor and owner of the website',
    content:
      'Mr. Vladimir SACCHETTO\n Editorial manager : Vladimir SACCHETTO\n Email : vladisac@hotmail.it\n Website : www.vladimir-portfolio.com',
  },
  {
    title: 'Hosting',
    content:
      'Host : SAS OVH\n 2 rue Kellermann\n BP 80157, 59100 Roubaix\n Website: www.ovh.com\n Telephone: +33 (0) 899 701 761 (1.349 € incl. tax per call, and 0.337 € incl. tax/min)\n Fax : + 33 (0) 3 20 20 09 58',
  },
  {
    title: 'Terms and conditions of use',
    content:
      'This site www.vladimir-portfolio.com is proposed in different web languages (ReactJs - ThreeJs - TailwindCSS). For a better comfort of use and a more pleasant graphics, it is recommended to use modern browsers such as Microsoft Edge, Safari, Firefox, Google Chrome, Brave, etc...\n Mr. Vladimir SACCHETTO uses all the means at his disposal to ensure reliable information and a reliable update of his website. However, errors or omissions may occur. Mr. Vladimir SACCHETTO is in no way responsible for the use made of this information, and for any direct or indirect damage that may result from it.',
  },
  {
    title: 'Intellectual Property Rights',
    content:
      'All the content of this site, including texts, animations, logos and icons, as well as their layout, are the exclusive property of Mr. Vladimir SACCHETTO. Any reproduction, distribution, modification, adaptation, retransmission or publication, even partial, of these different elements is strictly forbidden without the express written consent of Mr. Vladimir SACCHETTO.\n This representation or reproduction, by any means whatsoever, constitutes an infringement punishable by articles L.335-2 and following of the Intellectual Property Code.\n Failure to comply with this prohibition constitutes an infringement that may incur the civil and criminal liability of the infringer. In addition, the owners of the copied contents could take legal action against you.',
  },
  {
    title: 'Disputes',
    content:
      'The present conditions of the site are governed by the French laws and any dispute or litigation which could arise from the interpretation or the execution of these will be of the exclusive competence of the courts. The reference language for the settlement of any disputes is French.',
  },
  {
    title: 'Personal information',
    content:
      'In general, you are not required to provide us with your personal data when you visit the www.vladimir-portfolio.com website.\n You can refuse to provide your personal data. In this case, you will not be able to use the services of the site, in particular that of requesting information.\n We may automatically collect certain information about you when you simply browse this website, including: information about your use of the site, such as the areas you visit and the services you access, your IP address, your browser type, your access times.\n Such information is used exclusively for internal statistical purposes. The databases are protected by the provisions of the law of July 1, 1998 transposing the directive 96/9 of March 11, 1996 on the legal protection of databases.',
  },
]

const experiences = [
  {
    title: 'IT Technical Support',
    company_name: 'CCS',
    icon: ccs,
    iconBg: '#E6DEDD',
    date: 'Sept 2021 - Present',
    points: [
      'Work-study contract within the SAT-Client belonging to the CCS of the Crédit Mutuel Alliance Fédérale group in Strasbourg.',
      'Main role: provide assistance to professional users for their remote banking space.',
      'Ensure the follow-up of remote banking files (classic transfers, confidential transfers, direct debits).',
      'Helping users to navigate their online banking space and ensuring the rapid and secure transmission of their financial data.',
    ],
  },
  {
    title: 'Specialized Educator',
    company_name: 'Adèle de Glaubitz',
    icon: glaubitz,
    iconBg: '#383E56',
    date: 'April 2018 - Sept 2021',
    points: [
      'Work with two different groups: a group of 12 children aged 5-12 and a group of 13 teenage girls aged 11-17.',
      'Participate in the daily life of these groups by accompanying them in their academic, social and emotional life.',
      'Setting up personalized projects adapted to the individual needs of the children and teenagers.',
      'Accompaniment for the teenagers in their professional orientation by bringing them an educational and psychological support to help them to build themselves and to project themselves towards their future.',
    ],
  },
  {
    title: 'Medical and Psychological Assistance',
    company_name: 'Fondation Sonnenhof',
    icon: sonnenhof,
    iconBg: '#E6DEDD',
    date: 'Oct 2015 - April 2018',
    points: [
      'Have practiced this profession after graduation working with several different groups.',
      'Accompany children and adolescents with disabilities in their daily lives.',
      'Assist children and adolescents with various tasks and provide emotional and psychological support.',
      'Write individual personal projects for each of them, respecting the norms and procedures in force.',
    ],
  },
  {
    title: 'Service Civique',
    company_name: 'Service Civique',
    icon: service,
    iconBg: '#383E56',
    date: 'Oct 2014 - July 2015',
    dateColor: '#373737',
    points: [
      'Participation in the Service Civique project as a volunteer.',
      'Accompaniment to a public of disabled people in their daily life within different living groups of the IME of the Sonnenhof Foundation.',
      'Main role : propose and organize various activities throughout the volunteer service.',
      'Develop skills in social support and teamwork.',
    ],
  },
]

const schools = [
  {
    title: 'Superior Technical Bachelor',
    company_name: 'CCI Campus Strasbourg',
    icon: ccicampus,
    iconBg: '#383E56',
    date: 'Sept 2021 - Present',
    points: [
      'Expression and communication in English',
      'Mathematics for computer science and applied algorithms',
      'Economic, legal and managerial culture for IT',
      'Software Solutions and Business Applications',
      'Design and develop an application solution',
      'Managing data',
      'Ensure the cybersecurity of an application solution and its development',
      'Analyze connections (logs)',
      'Take security into account in a development project',
      'Programming languages: HTML, CSS, JS, PHP, MYSQL, KOTLIN',
    ],
  },
  {
    title: 'Medical and Psychological Assistance',
    company_name: 'IFCAAD Schiltigheim',
    icon: ifcaad,
    iconBg: '#E6DEDD',
    date: 'October 2015 - May 2017',
    points: [
      'Accompany the person in the essential acts of daily life.',
      'Respect for the person and the rules of hygiene and safety.',
      'Accompaniment in social and relational life.',
      'Positioning as a social worker in the context of intervention.',
      'Work in a multi-professional team, risk management and processing of information related to the support.',
    ],
  },
  {
    title: "Bachelor's degree",
    company_name: 'ITES Pitagora',
    icon: pitagora,
    iconBg: '#383E56',
    date: 'Sept 2009 - July 2014',
    points: [
      'Italian language and literature.',
      'English language and literature.',
      'French language and literature.',
      'History.',
      'Mathematics.',
      'Law and Economics.',
      'Information technology for business.',
      'Business Administration.',
      'Political Economy.',
    ],
  },
]

const projects = [
  {
    name: 'CCI APPRO',
    description:
      'I have produced a technical documentation explaining all the technical parts concerning the CCI APPRO project of our AP3. This documentation is intended for users who wish to install the project for technical and functional use.',
    tags: [
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'white-text-gradient',
      },
      {
        name: 'laravel',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://cdn.vladimir-portfolio.com/shared/images/logo_ccicampus_appro.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/cci-campus_doc_utilisateur.pdf',
  },
  {
    name: 'Word Press article',
    description:
      'HTML form with PHP processing in a Word Press article for the BTS SIO 21-23 Blog. During our second year of BTS, we realized articles present in the BTS blog. I realized an article which speaks about an HTML form with a treatment in PHP. I invite you to click the link below',
    tags: [
      {
        name: 'wordpress',
        color: 'green-text-gradient',
      },
      {
        name: 'seo',
        color: 'white-text-gradient',
      },
      {
        name: 'blog',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://ih1.redbubble.net/image.541875930.4233/st,small,507x507-pad,600x600,f8f8f8.u6.jpg',
    source_code_link:
      'https://btssio-ccicampus-strasbourg.fr/formulaire_html_et_traitement_en_php/',
  },
  {
    name: 'Business Continuity Plan',
    description:
      'This work consisted in the realization of a situation around the BCP (Business Continuity Plan). Within a client company, my work consists, under the responsibility of the system and network administrator, to participate in the design, installation, parameter setting and exploitation of the information system of the company. Starting with an expression of needs, I elaborated a technical offer answering all the requirements.',
    tags: [
      {
        name: 'work',
        color: 'green-text-gradient',
      },
      {
        name: 'redaction',
        color: 'white-text-gradient',
      },
      {
        name: 'plan',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://www.wysiwyg.fr/wp-content/uploads/2021/12/F36-1-768x535.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/SACCHETTO_Vladimir_TP_Solution_PCA.pdf',
  },
  {
    name: 'BCP & DRP',
    description:
      'This work consisted in the realization of a research work around the main concepts of a BCP (Business Continuity Plan) and DRP (Disaster Recovery Plan). To organize and realize this research work, I relied on the 5W method (Who - What - Where - When - Why). This was done in order to understand the meaning and the differences between a BCP and a DRP.',
    tags: [
      {
        name: 'work',
        color: 'green-text-gradient',
      },
      {
        name: 'redaction',
        color: 'white-text-gradient',
      },
      {
        name: 'plan',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://myosotis.fr/wp-content/uploads/2017/04/pca-pra-1.png',
    source_code_link:
      ' https://cdn.vladimir-portfolio.com/shared/pdf/SACCHETTO_Vladimir_TP_Solutions_PCA_PRA.pdf',
  },
]

const news = [
  {
    name: 'Vite.js Tutorial',
    description:
      'Vite.js is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience.',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/getting-started-with-vite.png',
    source_link: 'https://www.freecodecamp.org/news/get-started-with-vite/',
    published_at: 'Apr 6, 2022',
    read: 'Read more...',
  },
  {
    name: 'Vite.js Tutorial',
    description:
      'Vite.js is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience.',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/getting-started-with-vite.png',
    source_link: 'https://www.freecodecamp.org/news/get-started-with-vite/',
    published_at: 'Apr 6, 2022',
    read: 'Read more...',
  },
  {
    name: 'Vite.js Tutorial',
    description:
      'Vite.js is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience.',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/getting-started-with-vite.png',
    source_link: 'https://www.freecodecamp.org/news/get-started-with-vite/',
    published_at: 'Apr 6, 2022',
    read: 'Read more...',
  },
  {
    name: 'Vite.js Tutorial',
    description:
      'Vite.js is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience.',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/getting-started-with-vite.png',
    source_link: 'https://www.freecodecamp.org/news/get-started-with-vite/',
    published_at: 'Apr 6, 2022',
    read: 'Read more...',
  },
  {
    name: 'Vite.js Tutorial',
    description:
      'Vite.js is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience.',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/getting-started-with-vite.png',
    source_link: 'https://www.freecodecamp.org/news/get-started-with-vite/',
    published_at: 'Apr 6, 2022',
    read: 'Read more...',
  },
  {
    name: 'Vite.js Tutorial',
    description:
      'Vite.js is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience.',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/getting-started-with-vite.png',
    source_link: 'https://www.freecodecamp.org/news/get-started-with-vite/',
    published_at: 'Apr 6, 2022',
    read: 'Read more...',
  },
]

export {
  programming,
  front,
  back,
  devops,
  softwares,
  experiences,
  mentions,
  schools,
  projects,
  news,
}
