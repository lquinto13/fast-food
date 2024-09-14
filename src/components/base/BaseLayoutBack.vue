<template>
	<ion-page>
		<ion-header class="ion-no-border">
			<ion-toolbar>
				<ion-buttons slot="start">
					<div class="back-container">
						<ion-back-button
							defaultHref="/products"
							text="">
							<ion-icon
								slot="start"
								name="chevron-back"></ion-icon>
						</ion-back-button>
					</div>
				</ion-buttons>
				<ion-title>
					<slot
						class="title"
						name="header-title" />
				</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<slot />
		</ion-content>
	</ion-page>
</template>

<script setup>
	import {
		IonTitle,
		IonPage,
		IonHeader,
		IonToolbar,
		IonContent,
		IonButtons,
		IonBackButton,
		IonIcon,
	} from '@ionic/vue'
</script>

<style>
	.back-container {
		width: 40px;
		height: 40px;
		background-color: #dee2e6;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #dee2e6;
		border-radius: 15px;
	}
</style>
