<template>
	<base-layout>
		<template #header-title>
			<ion-label>
				<div class="product-header">
					<h1 style="font-weight: 700">Our Foods</h1>
					<ion-icon :src="bag"></ion-icon>
				</div>
			</ion-label>
		</template>
		<div class="search">
			<ion-item class="custom-input">
				<ion-icon
					slot="start"
					:src="customSearch"></ion-icon>
				<ion-input
					class="input"
					placeholder="try our new Bibimbowl"></ion-input>
				<ion-icon
					slot="end"
					:src="customFilter"></ion-icon>
			</ion-item>
		</div>
		<!-- Slider main container -->
		<swiper
			:slidesPerView="4"
			:spaceBetween="4"
			:freeMode="true">
			<swiper-slide
				v-for="(button, i) in buttons"
				:key="button">
				<ion-button :class="{ selected: selectedIndex === i }">
					{{ button }}
				</ion-button>
			</swiper-slide>
		</swiper>
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
	// import Swiper bundle with all modules installed
	import { ref } from 'vue'
	import { Swiper, SwiperSlide } from 'swiper/vue'
	import bag from '@/assets/icons/shopping-bag-alt.svg'
	import customSearch from '@/assets/icons/search.svg'
	import customFilter from '@/assets/icons/filter.svg'
	import 'swiper/css'

	const selectedIndex = ref(0)
	const buttons = ['All', 'Breakfast', 'Chicken', 'Seafood', 'Meat']
</script>

<style scoped>
	.product-header {
		display: flex;
		justify-content: space-between;
	}

	.swiper {
		padding-left: 5px;
		padding-right: 5px;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;

		/* Center slide text vertically */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	ion-button.selected {
		--background: #d71921;
		--color: white;
	}
	ion-icon {
		width: 27px;
		height: 27px;
		fill: #d71921;
		color: #d71921;
	}

	.search {
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	ion-button {
		width: 100%;
		--background: #dee2e6;
		text-transform: none;
		--border-radius: 16px;
		--box-shadow: none;
		--color: black;
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
	.swiper-container {
		width: 100%;
		height: 100%;
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
		height: 273px;
	}

	ion-card-header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 0;
	}

	ion-row {
		grid-gap: 2px; /* Add gap between columns */
	}

	ion-card-title {
		margin-top: 24px;
		--color: #000000;
		font-size: 14px;
		font-weight: 700;
		margin: 0;
		padding: 0;
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

	.price {
		margin-top: 14px;
		display: flex;
		justify-content: space-between;
		color: #d71921;
	}

	.price h3 {
		font-weight: 700;
	}
</style>
