import './style.scss'
import { appData } from './appContext';

const { jobs, skills } = appData;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1>Full-Stack REST</h1>
    <p>There are ${jobs.length} jobs.</p>
    <p>There are ${skills.length} skills.</p>
`