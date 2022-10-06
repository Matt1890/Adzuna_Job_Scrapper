import { getCurrencySymbol, extractFormData } from '.api/frontend/src/utils.js';
import { jobTemplate } from '.api/frontend/src/templates.js';

export class JobSearch {
    constructor(
        searchFormSelector,
        resultsContainerSelector,
        loadingElementSelector,
    ) {
        this.searchForm = document.querySelector(searchFormSelector);
        this.resultsContainer = document.querySelector(resultsContainerSelector);
        this.loadingElementSelector = document.querySelector(loadingElementSelector);
    }
    setCountryCode() {
        this.countryCode = 'us';
        this.setCurrencyCode();

        fetch('http://ip-api.com/json')
            .then(results => results.json())
            .then(results => {
                this.countryCode = results.countryCode.toLowerCase();
                this.setCurrencySymbol();
            });
    }

    setCurrencyCode() {
        this.currencySymbol = getCurrencySymbol(this.countryCode);
    }
    configureFormListener() {
        this.searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.resultsContainer.innerHTML = '';
            const { search, location } = extractFormData(this.searchForm);

            this.startLoading();
        
            fetch(`http://localhost:3000/?search=${search}&location=${location}&country=${this.countryCode}`)
                .then(response => response.json())
                .then(({ results }) => {
                    this.stopLoading();
                    return results
                        .map(job => jobTemplate(job, this.currencySymbol))
                        .join('');
                })
                .then(jobs => this.resultsContainer = jobs)
                .catch(() => this.stopLoading());
        });
    }
    startLoading(){
        this.loadingElement.classList.add('loading');
    }
    stopLoading(){
        this.loadingElement.classList.remove('loading');
    }
}