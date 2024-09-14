<template>
	<ion-page>
		<ion-header class="ion-no-border">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-button @click="openMenu">
						<ion-icon :src="customMenu" />
					</ion-button>
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
	import customMenu from '@/assets/icons/menu.svg'
	import { menuController } from '@ionic/vue'

	import {
		IonButtons,
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
	} from '@ionic/vue'

	const openMenu = async () => {
		await menuController.open()
	}
</script>

<style>
	.title {
		display: flex;
	}

	ion-icon {
		width: 30px;
		height: 30px;
	}
</style>
