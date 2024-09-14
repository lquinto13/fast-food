import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
	{
		path: '',
		redirect: '/home',
	},
	{
		path: '/home',
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
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
