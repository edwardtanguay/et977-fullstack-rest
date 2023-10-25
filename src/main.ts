import './style.scss'
import { appData } from './appContext';
import { GetJob } from './components/GetJob';

const { jobs, skills, baseUrl } = appData;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1>Full-Stack REST</h1>
<p>We are loading from ${baseUrl}</p>
    <p>There are ${jobs.length} jobs.</p>
    <p>There are ${skills.length} skills.</p>
${GetJob()}
`