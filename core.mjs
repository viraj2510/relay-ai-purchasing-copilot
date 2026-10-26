export const catalog = [
 {id:'launch',name:'Launch essentials',category:'Startup',icon:'↗',description:'Landing page kit, pitch templates & brand assets',price:49,tags:['startup','launch','business','brand','website'],color:'peach'},
 {id:'design',name:'Design studio',category:'Design',icon:'◈',description:'Interface library, icons & creative templates',price:39,tags:['design','creative','ui','brand'],color:'purple'},
 {id:'code',name:'Builder toolkit',category:'Development',icon:'⌘',description:'Application starter, components & developer guides',price:59,tags:['code','development','app','website','build'],color:'green'},
 {id:'growth',name:'Growth playbook',category:'Marketing',icon:'✳',description:'Campaign planner, content calendar & email templates',price:29,tags:['marketing','growth','social','business'],color:'yellow'},
 {id:'learn',name:'Learning library',category:'Education',icon:'▤',description:'Self-paced workshops & project-based study guides',price:19,tags:['learn','student','education','course'],color:'blue'},
 {id:'focus',name:'Focus workspace',category:'Productivity',icon:'◷',description:'Project planner, habit tracker & meeting templates',price:15,tags:['productivity','work','plan','team'],color:'pink'}
];
export function validateBudget(value){const n=Number(value);if(!Number.isFinite(n)||n<15||n>10000)throw new Error('Budget must be between $15 and $10,000.');return Math.round(n*100)/100;}
export function selectItems(ids,budget){if(!Array.isArray(ids)||!ids.length||ids.length>6||new Set(ids).size!==ids.length)throw new Error('Select between one and six unique products.');const items=ids.map(id=>{const item=catalog.find(x=>x.id===id);if(!item)throw new Error('Unknown product.');return item;});const total=items.reduce((a,x)=>a+x.price,0);if(total>budget)throw new Error('This plan exceeds your budget.');return {items,total};}
export function simulate(brief,budget){const ranked=[...catalog].sort((a,b)=>score(b)-score(a));function score(p){return p.tags.filter(t=>brief.toLowerCase().includes(t)).length;}let total=0;return ranked.filter(p=>{if(total+p.price<=budget){total+=p.price;return true;}return false;}).map(p=>p.id);}
