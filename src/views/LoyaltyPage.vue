<template>
	<base-layout>
		<template #header-title>
			<ion-label> <h1>Loyalty Points</h1> </ion-label>
		</template>
		<div class="tier">
			<div class="header">
				<div class="header-title">
					<ion-icon :src="crown"></ion-icon>
					<h3>Beginner Tier</h3>
				</div>

				<div class="view">
					<h4>View All</h4>
					<ion-icon
						class="right"
						:src="right"></ion-icon>
				</div>
			</div>
			<p>
				Earn points by purchasing from our store. Vestibulum ante ipsum primis
				in faucibus orci luctus et.
			</p>
		</div>

		<div class="circle-containers">
			<div class="circle">
				<div class="inner-circle">
					<h1>0 / 160</h1>
				</div>
			</div>
		</div>
		<div class="tier">
			<div class="header">
				<div class="header-title">
					<h3>Rewards</h3>
				</div>

				<div class="view">
					<h4>How it Works</h4>
					<ion-icon
						class="right"
						:src="right"></ion-icon>
				</div>
			</div>
			<ion-buttons>
				<div class="button-container">
					<ion-button
						v-for="button in buttons"
						:key="button">
						{{ button }}
					</ion-button>
				</div>
			</ion-buttons>
			<div class="reward-item">
				<div class="reward-pic">
					<img src="../assets/images/steak-fries-veggies.png" />
				</div>
				<div class="reward-text">
					<h6>Steak Fries Veggies</h6>
					<p>Meat</p>
					<span class="points">
						<ion-icon :src="crown"></ion-icon> 20 Points</span
					>
				</div>
			</div>
		</div>
	</base-layout>
</template>

<script setup>
	import { IonIcon } from '@ionic/vue'
	import crown from '../assets/icons/crown.svg'
	import right from '../assets/icons/Vector.svg'
	import 'swiper/css'
	const buttons = ['All', 'Beginner', 'Intermediate', 'Loyal']
</script>

<style scoped>
	h1 {
		font-weight: 700;
		font-size: 25px;
		color: #000;
	}

	ion-icon {
		width: 48px;
		height: 48px;
	}

	h3 {
		font-weight: 700;
		font-size: 16px;
	}

	h4 {
		font-weight: 700;
		font-size: 14px;
	}
	.tier {
		padding: 18px;
		width: 100%;
	}

	.tier p {
		font-weight: 400;
		font-size: 14px;
		color: #6c757d;
	}
	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header-title {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
	}
	.view {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 7px;
		color: #d71921;
	}

	.right {
		width: 10px;
		height: 10px;
	}
	.circle-containers {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 24px;
	}
	.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 182px;
		height: 182px;
		border: 27px solid #d7192133;
		border-radius: 100%;
	}

	.inner-circle {
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 4px 4px 0 #d7192133;
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}

	.swiper-container {
		width: 100%;
		height: 100%;
	}
	.button-container {
		display: flex;
		justify-content: space-around;
		gap: 6px;
		margin-top: 10px;
	}

	.button-container ion-button {
		font-weight: 400;
		--background: #dee2e6;
		--color: #6c757d;
		--border-radius: 14px;
		--padding-start: 14px;
		--padding-top: 14px;
		--padding-bottom: 14px;
		--padding-end: 12px;
		--height: 40px;
		font-size: 14px;
		text-transform: none;
	}

	.button-container ion-button.selected {
		--background: #f8f9fa;
		--color: #d71921;
		--border: 1px solid #d71921;
	}

	.reward-item {
		padding: 12px;
		display: flex;
		margin-top: 14px;
		width: 343px;
		height: 100px;
		background-color: #e9ecef;
		border: 1px solid #e9ecef;
		border-radius: 16px;
	}

	.reward-pic img {
		width: 65px;
		height: 55px;
	}

	.points {
		display: flex;
		align-items: center;
		justify-content: start;
	}

	.points ion-icon {
		width: 22px;
		height: 22px;
	}

	.reward-text h6 {
		font-size: 14px;
		font-weight: 700;
	}

	.reward-text p {
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 4px;
	}
	.points {
		gap: 14px;
		font-weight: 700;
		color: #d71921;
		font-size: 16px;
	}
</style>
