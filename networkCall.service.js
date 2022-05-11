import axios from 'axios';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

export const postFeedback = (payload) => {
    if (payload) return 'Negative';
    return '';
    // return axios.get(`${baseUrl}/random.php`)
}

export const getAllFeedbacks = () => {
    return [
        {
            "feedback": "bad quality. ",
            "analysis": "Negative"
        },
        {
            "feedback": "Not bad",
            "analysis": "Neutral"
        },
        {
            "feedback": "This is very bad ",
            "analysis": "Negative"
        },
        {
            "feedback": "This is quite good ",
            "analysis": "Positive"
        },
        {
            "feedback": "user experience is good",
            "analysis": "Positive"
        },
        {
            "feedback": "good",
            "analysis": "Positive"
        },
        {
            "feedback": "good quality",
            "analysis": "Positive"
        }
    ];
    // return axios.get(`${baseUrl}/search.php?s=${query}`)
}

export const fetchMealById = (mealId) => {
    return axios.get(`${baseUrl}/lookup.php?i=${mealId}`)
}