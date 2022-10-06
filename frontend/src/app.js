import { JobSearch } from 'src/JobSearch.js';

const jobSearch = new JobSearch('#search-form', '.result-container', '.loading-element');
jobSearch.setCountryCode();
jobSearch.configureFormListener();
