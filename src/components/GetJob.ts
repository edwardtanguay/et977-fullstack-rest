import { IJob } from '../interfaces';
import { appData } from '../appContext';

const { baseUrl } = appData;

export const GetJob = () => {

	setTimeout(() => {
		const jobIdElem = document.querySelector<HTMLInputElement>('.getJob .jobId');
		const buttonElem = document.querySelector<HTMLInputElement>('.getJob button');
		const displayElem = document.querySelector<HTMLDivElement>('.getJob .display');

		if (buttonElem && jobIdElem && displayElem) {
			buttonElem.addEventListener('click', async (e) => {
				e.preventDefault();
				const jobId = jobIdElem.value;
				const response = await fetch(`${baseUrl}/jobs/${jobId}`);
				const job: IJob = await response.json();
				if (response.status === 200) {
					displayElem.innerHTML = `
                        <div class="job">
                            <div>${job.title} (${job.company})</div>
                            <div>${job.skillList}</div>
                        </div>
                    `
				} else {
					displayElem.innerHTML = `
                        <div class="error">Job not found.</div>
                    `
				}
			});
		}

	});

	return /*html*/ `
		<fieldset class="component getJob">
			<legend>Search for individual job</legend>
			<form>
			Job ID: <input class="jobId" value="0"/><button>Search</button>
			</form>
			<div class="display"></div>
		</fieldset>
		<style>
			.getJob .jobId {
				width: 2rem;
				margin-right: .3rem;
				text-align: right;
			}
			.getJob .job {
				margin-top: 1rem;
			}
		</style>
	`
}