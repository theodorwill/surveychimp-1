import { ISurvey } from '@surveychimp/surveychimp-lib';
import fetch from 'node-fetch';

const getSurveyById = async (surveyId: string): Promise<ISurvey> => {
    return (await fetch(`/api/survey/${surveyId}`)).json();
}

export default getSurveyById;