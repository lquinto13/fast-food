<template>
	<base-layout>
		<template #header-title>
			<ion-label>
				<div class="header-container">
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
							src="../assets/icons/Tzuyu.png" />
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
				<img
					alt="category_1"
					src="../assets/images/category_1.png" />
				<img
					alt="category_1"
					src="../assets/images/category_1.png" />
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
					><ion-card>
						<ion-card-header>
							<img
								alt="Silhouette of mountains"
								src="../assets/images/steak-fries-veggies.png" />
							<ion-card-title>Steak Fries Veggies</ion-card-title>

							<ion-card-subtitle>Meat</ion-card-subtitle>
						</ion-card-header>
						<ion-card-content>
							<div class="price">
								<h3>P 175</h3>
								<span>*****</span>
							</div>
						</ion-card-content>
					</ion-card>
				</ion-col>
				<ion-col
					><ion-card>
						<ion-card-header>
							<img
								alt="Silhouette of mountains"
								src="../assets/images/chicken.png" />
							<ion-card-title>Chicken Salad</ion-card-title>
							<ion-card-subtitle>Chicken</ion-card-subtitle>
						</ion-card-header>
						<ion-card-content>
							<div class="price">
								<h3>P 172</h3>
								<span>*****</span>
							</div>
						</ion-card-content>
					</ion-card>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col
					><ion-card>
						<ion-card-header>
							<img
								alt="Silhouette of mountains"
								src="../assets/images/steak-fries-veggies.png" />
							<ion-card-title>Sorvetes Primavera</ion-card-title>
							<ion-card-subtitle>Dessert</ion-card-subtitle>
						</ion-card-header>
						<ion-card-content>
							<div class="price">
								<h3>P 185</h3>
								<span>*****</span>
							</div>
						</ion-card-content>
					</ion-card>
				</ion-col>
				<ion-col
					><ion-card>
						<ion-card-header>
							<img
								alt="Silhouette of mountains"
								src="../assets/images/chicken.png" />
							<ion-card-title>Fried Chicken</ion-card-title>
							<ion-card-subtitle>Chicken</ion-card-subtitle>
						</ion-card-header>
						<ion-card-content>
							<div class="price">
								<h3>P 175</h3>
								<span>*****</span>
							</div>
						</ion-card-content>
					</ion-card>
				</ion-col>
			</ion-row>
		</ion-grid>
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

	.new-product {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	ion-col {
		padding-left: 2px;
	}

	ion-card {
		--background: #e9ecef;
		--color: #000000;
		width: 100%;
		box-sizing: border-box;
		margin: 0;
		box-shadow: none;
		font-weight: none;
		border-radius: 24px;
		padding-top: 24px;
		padding-bottom: 24px;
	}

	ion-card-header {
		display: flex;
		flex-direction: column; /* Stack children vertically */
		align-items: flex-start; /* Align children to the start (left) */
	}

	ion-row {
		grid-gap: 2px; /* Add gap between columns */
	}
	ion-card-header img {
		margin-bottom: 14px;
	}

	ion-card-title {
		--color: #000000;
		font-size: 14px;
		font-weight: 700;
	}

	ion-card-subtitle {
		--color: #000000;
		font-size: 12px;
		font-weight: 400;
		text-transform: none;
	}

	.price {
		display: flex;
		justify-content: space-between;
		color: #d71921;
	}

	.price h3 {
		font-weight: 700;
	}
</style>
