import axios from "axios";
import Notiflix from 'notiflix';

export default class NewsApiService {
    constructor() {
        this.searchValue = "";
        this.page = 1;
        this.per_page = 40;
    }

     async fetchArticles(searchValue) {
        
        const searchParams = new URLSearchParams({
            key: '34952835-217ffd47b9fc04227874ce881',
            q: this.searchValue,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: this.per_page,
            page: this.page
        })
    
        try {
            const response = await axios.get(`https://pixabay.com/api/?${searchParams.toString()}`);
            this.page += 1;
            return response.data;
        } catch (error) {console.error(error)}
    }

    get value() {
        return this.searchValue;
    }

    set value(newValue) {
        this.searchValue = newValue;
    }

    resetPage() {
        this.page = 1;
    }
    
}