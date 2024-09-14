import { createStore } from 'vuex'
import steakFries from '../assets/images/steak-fries-veggies.png'
import chicken from '../assets/images/chicken.png'
import sorbet from '../assets/images/sorbet.png'
import friedChicken from '../assets/images/fchicken.png'

const store = createStore({
	state() {
		return {
			products: [
				{
					id: 1,
					title: 'Steak Fries Veggies',
					subtitle: 'Meat',
					price: 175,
					image: steakFries,
				},
				{
					id: 2,
					title: 'Chicken Salad',
					subtitle: 'Chicken',
					price: 172,
					image: chicken,
				},
				{
					id: 3,
					title: 'Sorvetes Primavera',
					subtitle: 'Dessert',
					price: 185,
					image: sorbet,
				},
				{
					id: 4,
					title: 'Fried Chicken',
					subtitle: 'Chicken',
					price: 175,
					image: friedChicken,
				},
			],
		}
	},
	getters: {
		products(state) {
			return state.products
		},
		getProductById: (state) => (id) => {
			return state.products.find((product) => product.id === id)
		},
	},
})

export default store
