import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SLBwPN42F5wS5lOc0181tQPr3f96y-T5bIw9sct0BqtQfq3A2h3GrY6hHQnp-FJi6d1U_6biGO6pjs0qdhzWc3dACKKGWAbpwmqs07FjmrhZpb72Yo4oBWpJYwOWX3Yx',
    }
})

