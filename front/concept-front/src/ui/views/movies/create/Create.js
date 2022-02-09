import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import movieState from '../../../../application/states/movies'

export default {
	components: {
		FormMovie: defineAsyncComponent(() => import('../form/Form.vue')),
	},
	setup() {
		const { createNewMovie } = movieState()
		const router = useRouter()
		// Call to creation of movie
		const createMovie = async (event) => {
			try {
				const { id } = await createNewMovie(event)
				router.push({ name: 'detail-movie', params: { id: id } })
			} catch (e) {
				console.error(e)
			}
		}

		return {
			createMovie,
		}
	},
}
