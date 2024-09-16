<template>
	<ion-page>
		<ion-header class="ion-no-border">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-button @click="openMenu">
						<ion-icon :src="customMenu" />
						<div
							v-if="user.notification > 0"
							class="notif-icon"></div>
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
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	const store = useStore()
	const user = computed(() => store.getters.getUser)

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

	.notif-icon {
		position: absolute;
		width: 12px;
		height: 12px;
		background-color: #edbe4c;
		border: 1px solid #edbe4c;
		border-radius: 100%;
		top: 2px;
		right: -4px;
	}
</style>
