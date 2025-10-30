// 15-Domain AI Career Pathfinder — Extended Edition by Vasanth B

const DOMAINS = {
  "AI & ML": {
    tagline: "Foundations → Models → Deployment → MLOps",
    steps: [
      {title:"Math & Python", desc:"Linear algebra, probability, Python basics"},
      {title:"ML Foundations", desc:"Regression, classification, eval metrics"},
      {title:"Deep Learning", desc:"CNN, RNN, Transformers"},
      {title:"Deployment", desc:"APIs, containers, model serving"},
      {title:"MLOps", desc:"Monitoring, retraining pipelines"}
    ],
    certs:["IBM AI Engineering","Andrew Ng ML","TensorFlow Developer"],
    roles:["ML Engineer","Data Scientist","MLOps Engineer"]
  },

  "Data Science": {
    tagline: "Data → Analysis → Visualisation → Storytelling",
    steps:[
      {title:"Data Wrangling", desc:"Pandas, SQL, ETL"},
      {title:"Statistics", desc:"A/B testing, distributions"},
      {title:"Modeling", desc:"ML techniques & feature engineering"},
      {title:"Visualization", desc:"Dashboards, story telling"},
      {title:"Business Impact", desc:"KPIs, stakeholder reporting"}
    ],
    certs:["IBM Data Science","Google Data Analytics","Microsoft Data Analyst"],
    roles:["Data Analyst","Business Analyst","Junior Data Scientist"]
  },

  "Cloud & DevOps": {
    tagline:"Cloud → Infra as Code → CI/CD → Security",
    steps:[
      {title:"Cloud Basics", desc:"AWS/Azure/GCP"},
      {title:"Services", desc:"Compute, DB, storage, serverless"},
      {title:"IaC", desc:"Terraform, CloudFormation"},
      {title:"CI/CD", desc:"GitHub Actions, Jenkins"},
      {title:"Monitoring", desc:"Security, cost optimization"}
    ],
    certs:["IBM Cloud","AWS CCP","Azure Fundamentals"],
    roles:["Cloud Engineer","DevOps Engineer","SRE"]
  },

  "Cybersecurity": {
    tagline:"Foundations → Tools → Forensics → Response",
    steps:[
      {title:"Networking & OS", desc:"Linux, TCP/IP"},
      {title:"Security Basics", desc:"Cryptography, auth"},
      {title:"Tools", desc:"SIEM, Kali, Wireshark"},
      {title:"Pen-Testing", desc:"Web & network security"},
      {title:"Incident Response", desc:"SOC, forensics"}
    ],
    certs:["Security+","CEH","IBM Cybersecurity"],
    roles:["SOC Analyst","Pentester","Security Analyst"]
  },

  "Web Development": {
    tagline:"HTML/CSS → JS → Frameworks → Fullstack",
    steps:[
      {title:"HTML & CSS", desc:"Responsive design, Flexbox"},
      {title:"JavaScript", desc:"ES6, APIs"},
      {title:"Frontend Frameworks", desc:"React / Vue"},
      {title:"Backend", desc:"Node, DB, REST"},
      {title:"Deployment", desc:"CI, hosting, testing"}
    ],
    certs:["Meta Frontend","freeCodeCamp","Google UX"],
    roles:["Frontend Dev","Fullstack Intern","Web Dev"]
  },

  "Blockchain & Web3": {
    tagline:"Crypto → Smart Contracts → DApps → Security",
    steps:[
      {title:"Blockchain Basics", desc:"Consensus, wallets"},
      {title:"Solidity", desc:"Smart contracts"},
      {title:"Web3.js", desc:"Blockchain integration"},
      {title:"DApps", desc:"Decentralized apps"},
      {title:"Security", desc:"Audits & exploits"}
    ],
    certs:["Blockchain Council","IBM Blockchain"],
    roles:["Blockchain Dev","Smart Contract Engineer"]
  },

  "Mobile App Development": {
    tagline:"UI → Backend → Database → Deployment",
    steps:[
      {title:"Mobile Basics", desc:"UI/UX fundamentals"},
      {title:"Flutter/React Native", desc:"Cross-platform"},
      {title:"APIs", desc:"API integration"},
      {title:"Backend", desc:"Firebase / Node"},
      {title:"Publishing", desc:"Play Store / App Store"}
    ],
    certs:["Google Android","Meta React Native"],
    roles:["Mobile Developer","Flutter Developer"]
  },

  "AR/VR Development": {
    tagline:"3D → Game Engine → XR → Interaction",
    steps:[
      {title:"3D Basics", desc:"Unity fundamentals"},
      {title:"AR", desc:"ARCore / ARKit"},
      {title:"VR", desc:"Meta Quest / SteamVR"},
      {title:"Interaction", desc:"Physics, UX"},
      {title:"Deployment", desc:"App publishing"}
    ],
    certs:["Unity VR","Meta AR/VR"],
    roles:["AR Developer","VR Developer","Game Designer"]
  },

  "IoT & Embedded Systems": {
    tagline:"Sensors → Microcontrollers → Cloud → Automation",
    steps:[
      {title:"Electronics", desc:"Sensors, circuits"},
      {title:"Microcontrollers", desc:"Arduino, ESP32"},
      {title:"Comm Protocols", desc:"MQTT, BLE"},
      {title:"Cloud IoT", desc:"AWS IoT, Azure IoT"},
      {title:"Automation", desc:"Edge AI"}
    ],
    certs:["IBM IoT","Arduino Cert"],
    roles:["IoT Engineer","Embedded Engineer"]
  },

  "Game Development": {
    tagline:"Game Engine → Physics → UI → Deployment",
    steps:[
      {title:"Basics", desc:"Unity / Unreal"},
      {title:"C# / C++", desc:"Game coding"},
      {title:"Physics", desc:"Collisions, gravity"},
      {title:"UI & Assets", desc:"SFX, animations"},
      {title:"Publishing", desc:"Unity Store / Steam"}
    ],
    certs:["Unity Certification","Udemy Unreal"],
    roles:["Game Dev","Unity Developer"]
  },

  "UI/UX Design": {
    tagline:"Research → Wireframes → Prototypes → Testing",
    steps:[
      {title:"Figma", desc:"Wireframes, UI"},
      {title:"UX Research", desc:"User stories"},
      {title:"Prototyping", desc:"Interactive UI"},
      {title:"Branding", desc:"Colors, typography"},
      {title:"Usability Testing", desc:"User feedback"}
    ],
    certs:["Google UX","Coursera UI"],
    roles:["UI Designer","UX Researcher"]
  },

  "Software Testing & QA": {
    tagline:"Manual → Automation → CI → Performance Testing",
    steps:[
      {title:"Manual Testing", desc:"Test cases"},
      {title:"Automation", desc:"Selenium, Cypress"},
      {title:"API Testing", desc:"Postman"},
      {title:"Performance", desc:"JMeter"},
      {title:"CI Integration", desc:"GitHub Actions"}
    ],
    certs:["ISTQB","QA Analyst"],
    roles:["QA Engineer","Automation Tester"]
  },

  "Database & Big Data": {
    tagline:"SQL → NoSQL → ETL → Big Data → Analytics",
    steps:[
      {title:"SQL", desc:"Joins, indexing"},
      {title:"NoSQL", desc:"MongoDB"},
      {title:"ETL", desc:"Pipelines"},
      {title:"Big Data", desc:"Hadoop, Spark"},
      {title:"Analytics", desc:"Dashboards"}
    ],
    certs:["Oracle SQL","IBM Data Engineering"],
    roles:["DB Engineer","Big Data Engineer"]
  },

  "RPA Automation": {
    tagline:"Process Design → Bots → Orchestrators",
    steps:[
      {title:"RPA Basics", desc:"Process mapping"},
      {title:"Tools", desc:"UiPath, BluePrism"},
      {title:"Bot Creation", desc:"Automation flows"},
      {title:"AI Assist", desc:"OCR, NLP"},
      {title:"Monitoring", desc:"Orchestrator"}
    ],
    certs:["UiPath Certified"],
    roles:["RPA Developer","Process Analyst"]
  },

  "Networking & Infrastructure": {
    tagline:"Networking → Security → Routing → Virtualization",
    steps:[
      {title:"Networking Basics", desc:"OSI, routers"},
      {title:"Linux Admin", desc:"Shell, services"},
      {title:"Virtualization", desc:"VMware, KVM"},
      {title:"Routing & Switching", desc:"CCNA concepts"},
      {title:"Enterprise Security", desc:"Firewalls, IDS"}
    ],
    certs:["Cisco CCNA","CompTIA Network+"],
    roles:["Network Engineer","Infra Engineer"]
  }
};

// UI references
const domainOptions = document.getElementById('domainOptions');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const output = document.getElementById('output');
const domainTitle = document.getElementById('domainTitle');
const domainTagline = document.getElementById('domainTagline');
const roadmap = document.getElementById('roadmap');
const cardsRow = document.getElementById('cardsRow');
const aiPitch = document.getElementById('aiPitch');
const downloadBtn = document.getElementById('downloadBtn');
const saveBtn = document.getElementById('saveBtn');
const yearEl = document.getElementById('year');
yearEl.innerText = new Date().getFullYear();

let selectedDomain = null;

// create option buttons
Object.keys(DOMAINS).forEach(domain=>{
  const btn = document.createElement('button');
  btn.className = 'optBtn';
  btn.innerHTML = `<i class="fa-solid fa-rocket"></i> ${domain}`;
  btn.onclick = ()=> {
    // toggle
    document.querySelectorAll('.optBtn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    selectedDomain = domain;
  };
  domainOptions.appendChild(btn);
});

// restore saved preference if exists
const saved = localStorage.getItem('career_pref');
if(saved && DOMAINS[saved]){
  // set active visually
  document.querySelectorAll('.optBtn').forEach(b=>{
    if(b.innerText.trim().endsWith(saved)) b.classList.add('active');
  });
  selectedDomain = saved;
  // optionally auto-generate
  // renderDomain(saved);
}

generateBtn.addEventListener('click', ()=>{
  if(!selectedDomain){ alert('Choose a domain first.'); return; }
  renderDomain(selectedDomain);
});

clearBtn.addEventListener('click', ()=>{
  localStorage.removeItem('career_pref');
  alert('Saved preference cleared.');
  document.querySelectorAll('.optBtn').forEach(b=>b.classList.remove('active'));
  selectedDomain = null;
  output.classList.add('hidden');
});

function renderDomain(domain){
  const data = DOMAINS[domain];
  domainTitle.innerText = domain;
  domainTagline.innerText = data.tagline;
  // roadmap
  roadmap.innerHTML = '';
  data.steps.forEach((s, idx)=>{
    const d = document.createElement('div');
    d.className = 'step';
    d.innerHTML = `<h4>Step ${idx+1}: ${s.title}</h4><p>${s.desc}</p><div class="badge">Duration: ${idx===0? '4-8 weeks' : '6-12 weeks'}</div>`;
    roadmap.appendChild(d);
  });
  // cards (certs + roles)
  cardsRow.innerHTML = '';
  const certTile = document.createElement('div'); certTile.className='cardTile';
  certTile.innerHTML = `<h4>Recommended Certifications</h4><p class="small">${data.certs.join(' • ')}</p>`;
  const roleTile = document.createElement('div'); roleTile.className='cardTile';
  roleTile.innerHTML = `<h4>Typical Entry Roles</h4><p class="small">${data.roles.join(' • ')}</p>`;
  cardsRow.appendChild(certTile); cardsRow.appendChild(roleTile);
  // AI pitch
  aiPitch.innerText = generatePitch(domain,data);
  output.classList.remove('hidden');
  // scroll to output
  setTimeout(()=> output.scrollIntoView({behavior:'smooth', block:'center'}),200);
}

function generatePitch(domain, data){
  // small "AI-style" personalization
  return `Personalized roadmap for ${domain}: Start with "${data.steps[0].title}" to build a strong foundation, then progress through ${data.steps.length} stages to reach deployable skills. Recommended certifications include ${data.certs.slice(0,2).join(' and ')}. Focus on hands-on projects and measurable outcomes for interviews.`;
}

// download roadmap (simple text)
downloadBtn.addEventListener('click', ()=>{
  if(!selectedDomain) return alert('Generate a roadmap first.');
  const data = DOMAINS[selectedDomain];
  const lines = [];
  lines.push(`AI Career Pathfinder — ${selectedDomain}`);
  lines.push(`Tagline: ${data.tagline}`);
  lines.push('');
  lines.push('Roadmap:');
  data.steps.forEach((s,i)=> lines.push(`${i+1}. ${s.title} — ${s.desc}`));
  lines.push('');
  lines.push('Certifications: ' + (data.certs && data.certs.length ? data.certs.join(', ') : '—'));
  lines.push('Entry roles: ' + (data.roles && data.roles.length ? data.roles.join(', ') : '—'));
  const blob = new Blob([lines.join('\n')], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `${selectedDomain.replace(/ /g,'_')}_roadmap.txt`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});

// save preference
saveBtn.addEventListener('click', ()=>{
  if(!selectedDomain) return alert('Generate a roadmap first.');
  localStorage.setItem('career_pref', selectedDomain);
  alert('Preference saved. It will be restored on this device/browser.');
});
