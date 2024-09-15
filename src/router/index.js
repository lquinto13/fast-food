import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'HomePage',

		component: () => import('../views/HomescreenPage.vue'),
	},
	{
		path: '/products',
		component: () => import('../views/ProductsPage.vue'),
	},
	{
		path: '/products/:id',
		name: 'AddToBagPage',
		component: () => import('../views/AddToBagPage.vue'),
		props: (route) => ({ id: Number(route.params.id) }),
	},
	{
		path: '/checkout',
		name: 'CheckoutPage',
		component: () => import('../views/CheckoutPage.vue'),
	},
	{
		path: '/order-received',
		name: 'OrderReceivedPage',
		component: () => import('../views/OrderReceivedPage.vue'),
	},
	{
		path: '/loyalty',
		name: 'LoyaltyPage',
		component: () => import('../views/LoyaltyPage.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
