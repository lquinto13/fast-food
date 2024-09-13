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
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
