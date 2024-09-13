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

			<ion-input
				class="custom-input"
				fill="outline"
				placeholder="try our new Steak Fries Veggies"></ion-input>
		</div>
	</base-layout>
</template>

<script setup>
	import { IonLabel, IonAvatar, IonInput } from '@ionic/vue'
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

	.search {
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
		width: 16rem;
	}
	.welcome h1,
	p {
		margin: 0px;
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
		--background: #f4f4f4;
		--padding-start: 16px;
		--padding-end: 16px;
		--box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
		--placeholder-color: #ccc;
		--color: #000;
	}
</style>
