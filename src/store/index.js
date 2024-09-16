import { createStore } from 'vuex'
import steakFries from '../assets/images/steak-fries-veggies.png'
import chicken from '../assets/images/chicken.png'
import sorbet from '../assets/images/sorbet.png'
import friedChicken from '../assets/images/fchicken.png'
import profile from '../assets/images/Tzuyu.png'

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
					ratings: 4,
				},
				{
					id: 2,
					title: 'Chicken Salad',
					subtitle: 'Chicken',
					price: 172,
					image: chicken,
					ratings: 4,
				},
				{
					id: 3,
					title: 'Sorvetes Primavera',
					subtitle: 'Dessert',
					price: 185,
					image: sorbet,
					ratings: 4,
				},
				{
					id: 4,
					title: 'Fried Chicken',
					subtitle: 'Chicken',
					price: 175,
					image: friedChicken,
					ratings: 4,
				},
			],
			user: {
				first_name: 'Chou',
				last_name: 'Tzuyu',
				phone_number: '63 912 345 6789',
				profile_picture: profile,
				points: 0,
				notification: 4,
				orders: 2,
			},
		}
	},
	getters: {
		products(state) {
			return state.products
		},
		getProductById: (state) => (id) => {
			return state.products.find((product) => product.id === id)
		},
		getUser(state) {
			return state.user
		},
	},
})

export default store
