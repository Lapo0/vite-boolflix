import { reactive } from 'vue'

const store = reactive({
    movies: [],
    tvSeries: [],
    inputSearch: '',
    idCard: '',
    cast: '',
    selectedCard: '',
    config: {
		API_KEY: '58623a99a2c476889e8b156ffe3ae51b',
		BASE_URI: 'https://api.themoviedb.org/3',
	},
})

export default store