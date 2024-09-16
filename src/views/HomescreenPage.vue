<template>
	<base-layout>
		<template #header-title>
			<ion-label>
				<div
					class="header-container"
					v-if="user">
					<div class="points">
						<img
							alt="crown"
							src="../assets/icons/crown.svg" />
						<h3>0 points</h3>
						<img
							alt="arrow"
							src="../assets/icons/Vector.svg" />
					</div>

					<ion-avatar>
						<img
							alt="profile"
							:src="user.profile_picture" />
					</ion-avatar>
				</div>
			</ion-label>
		</template>
		<div class="search">
			<div class="search-header">
				<img
					alt="logo"
					src="../assets/icons/logo.svg" />
				<div class="welcome">
					<p>Annyeong, Chou!</p>
					<h1>What do you want to eat?</h1>
				</div>
			</div>

			<ion-item class="custom-input">
				<ion-icon
					slot="start"
					:md="customSearch"></ion-icon>
				<ion-input
					class="input"
					placeholder="try our new Steak Fries Veggies"></ion-input>
			</ion-item>
		</div>

		<div class="special-offer">
			<div class="special-offer-heading">
				<h2>Special Offers!</h2>
				<span>
					<p>View All</p>
					<img
						alt="arrow"
						src="../assets/icons/Vector.svg" />
				</span>
			</div>
			<div class="offers">
				<img
					alt="offer_1"
					src="../assets/images/offer_1.png" />
				<img
					alt="offer_1"
					src="../assets/images/offer_1.png" />
			</div>
		</div>

		<div class="category">
			<div class="category-heading">
				<h2>Category</h2>
			</div>
			<div class="offers">
				<div class="offer-item">
					<img
						alt="category_1"
						src="../assets/images/category_1.png" />
					<div class="offer-text">Offer 1</div>
				</div>
				<div class="offer-item">
					<img
						alt="category_2"
						src="../assets/images/category_1.png" />
					<div class="offer-text">Offer 2</div>
				</div>
			</div>
		</div>

		<div class="whats-new">
			<div class="whats-new-heading">
				<h2>Category</h2>
			</div>
			<div class="new-product">
				<img
					alt="category_1"
					src="../assets/images/whats-new.png" />
			</div>
		</div>

		<div class="popular">
			<div class="popular-heading">
				<h2>Most Popular</h2>
			</div>
		</div>
		<ion-grid>
			<ion-row>
				<ion-col
					v-for="(product, index) in products"
					:key="index"
					size="6"
					><ion-card>
						<ion-card-header>
							<img
								alt="Silhouette of mountains"
								:src="product.image" />
							<ion-card-title>{{ product.title }}</ion-card-title>

							<ion-card-subtitle>{{ product.subtitle }}</ion-card-subtitle>
						</ion-card-header>
						<ion-card-content>
							<div class="price">
								<h3>P {{ product.price }}</h3>
								<span
									><ion-icon
										slot="end"
										class="rating-icon"
										:src="rating"></ion-icon
								></span>
							</div>
						</ion-card-content>
					</ion-card>
				</ion-col>
			</ion-row>
		</ion-grid>

		<ion-button
			@click="goToProducts"
			slot="fixed"
			id="open-custom-dialog"
			expand="block"
			>Order Now!</ion-button
		>
	</base-layout>
</template>

<script setup>
	import {
		IonLabel,
		IonAvatar,
		IonInput,
		IonIcon,
		IonCol,
		IonGrid,
		IonRow,
	} from '@ionic/vue'
	import customSearch from '@/assets/icons/search.svg'
	import { computed } from 'vue'
	import { useRouter } from 'vue-router'
	import { useStore } from 'vuex'
	import rating from '@/assets/icons/rating.svg'

	const store = useStore()
	const router = useRouter()

	const products = computed(() => store.getters.products)
	const user = computed(() => store.getters.getUser)
	function goToProducts() {
		router.push({ name: 'ProductsPage' })
	}
</script>

<style scoped>
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.points {
		margin-left: 30px;
		width: 12rem;
		display: flex;
		gap: 1.75rem;
		align-items: center;
	}
	.points h3 {
		font-weight: 800;
		font-size: 16px;
	}

	.search,
	.special-offer,
	.category,
	.whats-new,
	.popular {
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.search img {
		width: 67px;
		height: 72px;
	}
	.search-header {
		display: flex;
		gap: 20px;
	}

	.welcome {
		width: 14rem;
	}
	.welcome h1,
	p {
		width: 100%;
	}

	.welcome h1 {
		font-size: 25px;
		font-weight: 700;
	}

	.welcome p {
		font-size: 14px;
		font-weight: 400;
	}
	ion-label {
		width: 10rem;
	}
	ion-avatar {
		width: 37px;
		height: 37px;
	}

	.custom-input {
		--border-radius: 16px;
		--border-width: 1px;
		--background: #f8f9fa;
		--padding-start: 16px;
		--padding-end: 16px;
		--placeholder-color: #6c757d;
		--inner-padding-top: 10px;
		--inner-padding-bottom: 10px;
		--color: #000;
	}

	.custom-input ion-input {
		--padding-start: 0px; /* Adjust padding to move the placeholder */
	}

	.special-offer h2,
	.category h2,
	.whats-new h2,
	.popular h2 {
		font-size: 20px;
		font-weight: 700;
	}

	ion-col {
		padding-left: 2px;
	}

	.no-link-style {
		text-decoration: none;
	}
	ion-card {
		--background: #e9ecef;
		--color: #000000;
		width: 100%;
		box-sizing: border-box;
		box-shadow: none;
		font-weight: none;
		border-radius: 24px;
		padding-top: 24px;
		height: 273px;
	}
	ion-card img {
		padding-bottom: 24px;
		width: 136px;
		height: 136px;
	}
	ion-card-header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 0;
	}

	ion-row {
		display: flex;
		flex-wrap: wrap;
	}

	ion-card-title {
		margin-top: 24px;
		--color: #000000;
		font-size: 14px;
		font-weight: 700;
	}

	ion-card-subtitle {
		display: flex;
		--color: #000000;
		font-size: 12px;
		font-weight: 400;
		text-transform: none;
		margin-top: 2px;
		padding: 0;
	}

	ion-grid {
		padding-right: 24px;
	}
	.special-offer-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.special-offer-heading span {
		display: flex;
		align-items: center;
		gap: 10px;
		color: #d71921;
		font-size: 14px;
		font-weight: 700;
	}
	.offers {
		display: flex;
		gap: 8px;
	}

	.offers img {
		border-radius: 20px;
	}

	.offer-item {
		position: relative;
	}
	.new-product {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.price {
		margin-top: 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #d71921;
	}

	.price h3 {
		font-weight: 700;
	}

	ion-button {
		--padding-start: 34px;
		--padding-top: 24px;
		--padding-bottom: 24px;
		--padding-end: 34px;
		--background: #d71921;
		--border-radius: 16px;
		text-transform: none;
		bottom: 20px;
		right: 15px;
	}

	span ion-icon {
		width: 64px;
	}
</style>
