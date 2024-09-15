<template>
	<ion-page>
		<ion-content>
			<div class="container">
				<img
					alt="positive"
					src="../assets/images/positive-vote-big.png" />
				<h1>Order Received!</h1>
				<p>
					Your order <span>No. 19049585</span> has successfully take and now
					being processed. Kindly wait for our notification regarding your
					order.
				</p>

				<div class="button-container">
					<ion-button class="custom-button">Track Order</ion-button>
					<h5 @click="goToHome">Back to Home</h5>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup>
	import { IonButton, IonContent, IonPage } from '@ionic/vue'
	import { useRouter } from 'vue-router'
	const router = useRouter()

	function goToHome() {
		router.push({ name: 'HomePage' })
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 7rem;
	}

	h1 {
		font-weight: 700;
		font-size: 25px;
	}

	p {
		padding: 12px;
		flex-wrap: wrap;
		text-align: center;
		font-weight: 400;
		font-size: 14px;
	}

	span {
		color: #d71921;
		font-weight: 700;
	}

	h5 {
		color: #d71921;
		font-weight: 700;
		font-size: 14px;
	}
	.button-container {
		width: 100%;
		position: absolute;
		bottom: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
	}

	.custom-button {
		padding-left: 24px;
		padding-right: 24px;
		height: 60px;
		--padding-top: 12px;
		--padding-bottom: 12px;
		--background: #d71921;
		width: 100%;
		--border-radius: 16px;
		font-size: 14px;
		font-weight: 700;
		text-transform: none;
		color: white;
	}
</style>
