import { ISurvey } from '@surveychimp/surveychimp-lib';
import fetch from 'node-fetch';


const getSurveys = async (): Promise<ISurvey[]> => {
    return (await fetch(`/api/survey`)).json();
}

export default getSurveys;