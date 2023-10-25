import axios from 'axios';
import { IAppData } from './interfaces';

const baseUrl = 'http://localhost:6995';

export const appData: IAppData = {
	baseUrl,
	jobs: await (await fetch(`${baseUrl}/jobs`)).json(),
	skills: (await axios.get(`${baseUrl}/skills`)).data
}