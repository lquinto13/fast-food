<template>
	<ion-app>
		<ion-menu
			ref="menu"
			content-id="main-content"
			type="overlay">
			<ion-content>
				<ion-list
					id="inbox-list"
					v-if="user">
					<ion-list-header>
						<ion-avatar>
							<img
								alt="Silhouette of a person's head"
								:src="user.profile_picture" />
						</ion-avatar>
						<ion-label @click="goToLoyalty">
							<ion-menu-toggle>
								<div class="points">
									<img
										alt="crown"
										src="../src/assets/icons/crown.svg" />
									<h3>{{ user.points }} points</h3>
									<img
										alt="arrow"
										src="../src/assets/icons/Vector.svg" />
								</div>
							</ion-menu-toggle>
						</ion-label>
					</ion-list-header>
					<ion-note>
						<h1>{{ user.first_name }} {{ user.last_name }}</h1>
						<p>+{{ user.phone_number }}</p>
					</ion-note>
					<ion-menu-toggle
						:auto-hide="false"
						v-for="(p, i) in appPages"
						:key="i">
						<ion-item
							@click="selectedIndex = i"
							router-direction="root"
							:router-link="p.url"
							lines="none"
							:detail="false"
							class="hydrated"
							:class="{ selected: selectedIndex === i }">
							<ion-icon
								aria-hidden="true"
								slot="start"
								:ios="p.iosIcon"
								:md="p.mdIcon"></ion-icon>
							<ion-label>{{ p.title }}</ion-label>
							<ion-label
								v-if="i === 2"
								class="notif-icon">
								<h6>{{ user.notification }}</h6>
							</ion-label>
						</ion-item>
					</ion-menu-toggle>
				</ion-list>

				<ion-list id="labels-list">
					<ion-menu-toggle
						:auto-hide="false"
						v-for="(p, i) in labels"
						:key="i">
						<ion-item
							router-direction="root"
							lines="none"
							:detail="false"
							class="hydrated">
							<ion-icon
								aria-hidden="true"
								slot="start"
								:ios="p.iosIcon"
								:md="p.mdIcon"></ion-icon>
							<ion-label>{{ p.title }}</ion-label>
							<ion-label
								v-if="i === 0"
								class="notif-icon">
								<h6>{{ user.orders }}</h6>
							</ion-label>
						</ion-item>
					</ion-menu-toggle>
				</ion-list>
				<ion-button>Logout</ion-button>
			</ion-content>
		</ion-menu>

		<ion-router-outlet id="main-content"></ion-router-outlet>
	</ion-app>
</template>

<script setup>
	import {
		IonApp,
		IonContent,
		IonIcon,
		IonItem,
		IonLabel,
		IonList,
		IonListHeader,
		IonMenu,
		IonMenuToggle,
		IonNote,
		IonRouterOutlet,
		IonButton,
	} from '@ionic/vue'
	import { ref } from 'vue'
	import customBell from '@/assets/icons/bell.svg'
	import customChicken from '@/assets/icons/chicken.svg'
	import customFavorite from '@/assets/icons/favorite.svg'
	import customHistory from '@/assets/icons/history.svg'
	import customLocation from '@/assets/icons/location.svg'
	import customLogo from '@/assets/icons/logo.svg'
	import customQuestionMark from '@/assets/icons/question-mark-circle.svg'
	import customShoppingBag from '@/assets/icons/shopping-bag-alt.svg'
	import customStore from '@/assets/icons/store-alt.svg'
	import customSilhoutte from '@/assets/icons/silhouette.svg'
	import { useRouter } from 'vue-router'
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	const store = useStore()

	const router = useRouter()
	const menu = ref(null)
	const user = computed(() => store.getters.getUser)

	const selectedIndex = ref(0)
	const appPages = [
		{
			title: 'Home',
			url: '/home',
			iosIcon: customLogo,
			mdIcon: customLogo,
		},
		{
			title: 'Order Now!',
			url: '/products',
			iosIcon: customChicken,
			mdIcon: customChicken,
		},
		{
			title: 'Notifications',
			url: '/notifications',
			iosIcon: customBell,
			mdIcon: customBell,
		},
		{
			title: 'Store Locator',
			url: '/store',
			iosIcon: customStore,
			mdIcon: customStore,
		},
		{
			title: "FAQ's",
			url: '/faq',
			iosIcon: customQuestionMark,
			mdIcon: customQuestionMark,
		},
	]

	const labels = [
		{
			title: 'My Order',
			iosIcon: customShoppingBag,
			mdIcon: customShoppingBag,
		},
		{
			title: 'My Account',
			iosIcon: customSilhoutte,
			mdIcon: customSilhoutte,
		},
		{
			title: 'My Favorites',
			iosIcon: customFavorite,
			mdIcon: customFavorite,
		},
		{
			title: 'Order Tracker',
			iosIcon: customLocation,
			mdIcon: customLocation,
		},
		{
			title: 'Order History',
			iosIcon: customHistory,
			mdIcon: customHistory,
		},
	]

	const path = window.location.pathname
	if (path !== undefined) {
		if (selectedIndex.value > 1) {
			selectedIndex.value = 0
		}
		selectedIndex.value = appPages.findIndex(
			(page) => page.title.toLowerCase() === path.toLowerCase()
		)
	}
	function goToLoyalty() {
		selectedIndex.value = 0
		router.push({ name: 'LoyaltyPage' })
	}
</script>

<style scoped>
	.points {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.points h3 {
		font-weight: 700;
		font-size: 16px;
	}

	ion-menu ion-content {
		--background: var(--ion-item-background, var(--ion-background-color, #fff));
	}

	ion-menu.md ion-content {
		--padding-start: 8px;
		--padding-end: 8px;
		--padding-top: 20px;
		--padding-bottom: 20px;
	}

	ion-menu.md ion-list {
		padding: 0px 0px 0px 0px;
	}

	ion-menu.md ion-note h1,
	p {
		margin: 0px;
	}

	ion-menu.md ion-note h1 {
		margin-top: 10px;
		font-weight: 700;
		color: #000;
	}

	ion-menu.md ion-note p {
		font-weight: 400;
		font-size: 14px;
		color: #6c757d;
		font-style: Nunito;
	}

	ion-menu.md ion-list-header,
	ion-menu.md ion-note {
		padding-left: 10px;
	}

	ion-menu.md ion-list#inbox-list {
		border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
	}

	ion-menu.md ion-list#inbox-list ion-list-header {
		font-size: 22px;
		font-weight: 1000;
		min-height: 20px;
		color: black;
	}

	ion-menu.md ion-list#labels-list ion-list-header {
		font-size: 16px;
		margin-bottom: 18px;
		color: #757575;
		min-height: 26px;
	}

	ion-menu.md ion-item {
		display: flex;
		align-items: center;
		justify-content: center;
		--padding-start: 10px;
		--padding-end: 10px;
		border-radius: 4px;
	}

	ion-menu.md ion-item.selected ion-icon {
		color: #d71921;
		fill: #d71921;
	}

	ion-menu.md ion-item ion-icon {
		color: #dee2e6;
	}

	ion-menu.md ion-item ion-label {
		font-weight: 700;
		font-size: 14px;
	}

	ion-menu.ios ion-content {
		--padding-bottom: 20px;
	}

	ion-menu.ios ion-list {
		padding: 20px;
	}

	ion-menu.ios ion-note {
		line-height: 24px;
		margin-bottom: 20px;
	}

	ion-menu.ios ion-item {
		--padding-start: 16px;
		--padding-end: 16px;
		--min-height: 50px;
	}

	ion-menu.ios ion-item.selected ion-icon {
		color: #d71921;
		fill: #d71921;
	}

	ion-menu.ios ion-item ion-icon {
		color: #dee2e6;
		fill: #dee2e6;
	}

	ion-menu.ios ion-list#labels-list ion-list-header {
		margin-bottom: 8px;
	}

	ion-menu.ios ion-list-header,
	ion-menu.ios ion-note {
		padding-left: 16px;
		padding-right: 16px;
	}

	ion-menu.ios ion-note {
		margin-bottom: 8px;
	}

	ion-note {
		display: inline-block;
		font-size: 16px;
		color: var(--ion-color-medium-shade);
	}

	ion-item.selected {
		--color: #d71921;
	}

	ion-button {
		margin-top: 50px;
		--background: #d71921;

		--width: 165px;
		--color: white;
		text-transform: none;
		--border-radius: 16px;
		--border-color: #d71921;
		--border-style: solid;
		--border-width: 1px;

		--padding-top: 16px;
		--padding-bottom: 15px;
		--padding-end: 50px;
		--padding-start: 50px;
	}

	.notif-icon {
		margin-top: 14px;
		margin-right: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		background-color: #edbe4c;
		border: 1px solid #edbe4c;
		border-radius: 100%;
	}

	.notif-icon h6 {
		color: white;
		font-weight: 400;
		font-size: 10px;
	}
</style>
