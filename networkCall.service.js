import axios from 'axios';

const baseUrl = 'http://localhost:8080/v1';

export const postFeedback = (payload) => {
    // if (payload) return 'Positive';
    // return '';
    return axios.post(`${baseUrl}/standford-sentimental-analysis`, payload)
}

export const getAllFeedbacks = () => {
    // return [
    //     {
    //         "feedback": "bad quality. ",
    //         "analysis": "Negative"
    //     },
    //     {
    //         "feedback": "Not bad",
    //         "analysis": "Neutral"
    //     },
    //     {
    //         "feedback": "This is very bad ",
    //         "analysis": "Negative"
    //     },
    //     {
    //         "feedback": "This is quite good ",
    //         "analysis": "Positive"
    //     },
    //     {
    //         "feedback": "user experience is good",
    //         "analysis": "Positive"
    //     },
    //     {
    //         "feedback": "good",
    //         "analysis": "Positive"
    //     },
    //     {
    //         "feedback": "good quality",
    //         "analysis": "Positive"
    //     }
    // ];
    return axios.get(`${baseUrl}/get-feedback-list`)
}
