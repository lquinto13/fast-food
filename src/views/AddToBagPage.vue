<template>
	<base-layout-back>
		<template #header-title>
			<ion-label>
				<div class="bag-header">
					<h1 style="font-weight: 700">{{ product.subtitle }}</h1>
					<ion-icon :src="bag"></ion-icon>
				</div>
			</ion-label>
		</template>
		<div class="product-container">
			<ion-card>
				<img
					alt="Food"
					:src="product.image" />
			</ion-card>
			<span class="heart"> <ion-icon :src="heart"></ion-icon> </span>
		</div>
		<div class="description-container">
			<h3>{{ product.title }}</h3>
			<p>
				Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
				cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque
				nunc, tincidunt nec dui ac, rutrum consectetur ligula.
			</p>
		</div>

		<div class="price-container">
			<h1>P {{ product.price }}</h1>
			<div class="quantity-container">
				<span class="chevron-container"> - </span>
				<p>1</p>
				<span class="chevron-container"> + </span>
			</div>
		</div>

		<div class="beverages">
			<h2>Beverages</h2>
			<ion-select
				label-placement="stacked"
				label="Choose Beverages"
				:toggle-icon="toggle">
				<ion-select-option value="option1">Coke</ion-select-option>
				<ion-select-option value="option2">Royal</ion-select-option>
			</ion-select>
			<div class="size-buttons">
				<ion-button
					v-for="(size, i) in sizes"
					:key="size"
					:class="{ selected: selectedIndex === i }"
					@click="handleClick(size)">
					{{ size }}
				</ion-button>
			</div>
		</div>

		<div class="add-ons">
			<h2>Add Ons</h2>
			<ion-list>
				<ion-radio-group v-model="selectedOption">
					<ion-item>
						<img
							alt="Food"
							src="../assets/images/sauce.png" />
						<div class="label">
							<h6>Tomato Sauce</h6>
							<p>Sauce</p>
							<h5>P 49</h5>
						</div>
						<div class="radio-container">
							<ion-radio
								slot="end"
								value="option1">
							</ion-radio>
							<div class="quantity-container">
								<span class="chevron-container"> - </span>
								<p>1</p>
								<span class="chevron-container"> + </span>
							</div>
						</div>
					</ion-item>

					<ion-item>
						<img
							alt="Food"
							src="../assets/images/rice.png" />
						<div class="label">
							<h6>White Rice</h6>
							<p>Rice</p>
							<h5>P 25</h5>
						</div>
						<div class="radio-container">
							<ion-radio
								slot="end"
								value="option2">
							</ion-radio>
							<div class="quantity-container">
								<span class="chevron-container"> - </span>
								<p>1</p>
								<span class="chevron-container"> + </span>
							</div>
						</div>
					</ion-item>
				</ion-radio-group>
			</ion-list>
		</div>
		<ion-button
			slot="fixed"
			id="open-custom-dialog"
			expand="block"
			>Add To Bag</ion-button
		>

		<ion-modal
			id="example-modal"
			ref="modal"
			trigger="open-custom-dialog">
			<div class="wrapper">
				<img
					alt="positive"
					src="../assets/images/positive-vote.png" />
				<h3>Succesfully added</h3>
				<p>What do you want to do now?</p>
				<ion-button @click="goToCheckout">Proceed to Checkout</ion-button>
				<h5>Add More</h5>
			</div>
		</ion-modal>
	</base-layout-back>
</template>

<script setup>
	import { computed, ref } from 'vue'
	import { useStore } from 'vuex'
	import { useRoute, useRouter } from 'vue-router'
	import { IonModal, IonItem, IonLabel, IonIcon, IonList } from '@ionic/vue'

	import bag from '@/assets/icons/shopping-bag-alt.svg'
	import heart from '@/assets/icons/heart.svg'
	import toggle from '@/assets/icons/chevron-down.svg'
	const route = useRoute()

	const selectedIndex = ref(0)
	const store = useStore()
	const productId = parseInt(route.params.id)
	const product = computed(() => store.getters.getProductById(productId))
	const sizes = ['Regular', 'Large', 'X-Large']

	const router = useRouter()

	function goToCheckout() {
		router.push({ name: 'CheckoutPage' })
		const modal = document.getElementById('example-modal')
		modal.dismiss()
	}
</script>

<style scoped>
	.bag-header {
		display: flex;
		justify-content: space-between;
	}

	ion-icon {
		width: 27px;
		height: 27px;
		color: #d71921;
	}
	.product-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	ion-card {
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: none;
		width: 343px;
		height: 239px;
		--background: #e9ecef;
		border: solid 1px #e9ecef;
		border-radius: 16px;
	}

	ion-card img {
		width: 260px;
		height: 175px;
	}

	.heart {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 45px;
		height: 45px;
		background-color: #ffffff;
		border: 1px solid #ffffff;
		border-radius: 18px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		bottom: -10px;
		right: 35px;
	}

	ion-item {
		box-shadow: none;
	}

	.description-container,
	.price-container,
	.beverages,
	.add-ons {
		margin-left: 24px;
		margin-right: 24px;
	}

	.description-container h3,
	.beverages h3 {
		font-weight: 700;
		font-size: 16px;
	}

	.description-container p {
		width: 343px;
		font-weight: 400;
		font-size: 14px;
		padding-right: 4px;
		color: #6c757d;
	}

	.price-container {
		margin-top: 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.price-container h1 {
		color: #d71921;
		font-weight: 700;
	}

	.quantity-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
	}

	.quantity-container p {
		font-weight: 700;
		font-size: 14px;
	}
	.chevron-container {
		width: 32px;
		height: 32px;
		border: 1px solid #bec1c4;
		background-color: #bec1c4;
		border-radius: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #d71921;
		font-weight: 800;
		font-size: 12px;
	}
	.beverages h2,
	.add-ons h2 {
		margin-top: 24px;
		margin-bottom: 12px;
		font-weight: 700;
		font-size: 20px;
	}
	ion-select {
		--background: #e9ecef;
		--padding-start: 12px;
		--padding-end: 12px;
		--border-radius: 16px;
	}

	ion-select #icon {
		color: #d71921;
	}

	.size-buttons {
		display: flex;
		justify-content: space-between;
		width: 20rem;
		margin-top: 12px;
	}

	ion-button {
		width: 100%;
		height: 42px;
		--border-radius: 14px;
		--background: white;
		--box-shadow: none;
		--border-color: #dee2e6;
		--color-activated: white;
		--border-width: 1px;
		--background-activated: #ffc02e;
		--border-style: solid;
		--color: black;
		text-transform: none;
		font-size: 14px;
		font-weight: 700;
	}

	ion-button.selected {
		--background: #ffc02e;
		--border-style: solid;
		--border-color: #ffc02e;
		--border-width: 1px;
		color: white;
	}
	ion-list {
		margin-bottom: 80px;
	}
	ion-item {
		display: flex;
		width: 100%;
		--background: #e9ecef;
		--min-height: 100px;
		--border-radius: 16px;
		--inner-padding-end: 10px;
		margin-top: 12px;
	}
	.label {
		width: 100%;
	}

	.label p {
		margin-bottom: 12px;
		font-size: 12px;
		font-weight: 400;
	}

	.label h6 {
		font-size: 14px;
		font-weight: 700;
	}

	.label h5 {
		font-size: 16px;
		font-weight: 700;
		color: #d71921;
	}
	ion-radio::part(container) {
		width: 18px;
		height: 18px;
		border-radius: 6px;
		border: 2px solid #ddd;
		background-color: white;
	}

	ion-radio::part(mark) {
		background: none;
		transition: none;
		transform: none;
		border-radius: 0;
	}

	ion-radio.radio-checked::part(container) {
		background: white;
		border-color: transparent;
	}

	ion-radio.radio-checked::part(mark) {
		width: 6px;
		height: 10px;

		border-width: 0px 2px 2px 0px;
		border-style: solid;
		border-color: #ffc02e;

		transform: rotate(45deg);
	}

	.radio-container {
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: end;
	}

	ion-button[slot='fixed'] {
		padding-left: 10px;
		padding-right: 10px;
		bottom: 0;
		height: 60px;
		--background: #d71921;
		color: white;
	}

	ion-modal#example-modal {
		--width: fit-content;
		--min-width: 330px;
		--height: fit-content;
		--border-radius: 6px;
		--box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
	}

	ion-modal#example-modal h1 {
		margin: 20px 20px 10px 20px;
	}

	ion-modal#example-modal ion-icon {
		margin-right: 6px;
		width: 48px;
		height: 48px;
		padding: 4px 0;
		color: #aaaaaa;
	}

	ion-modal#example-modal .wrapper {
		margin-bottom: 10px;
	}

	.wrapper {
		padding: 12px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.wrapper h3 {
		padding: 1.25rem;
		font-weight: 700;
		font-size: 24px;
	}

	.wrapper p {
		padding-bottom: 1rem;
		color: #6c757d;
		font-weight: 400;
	}

	.wrapper ion-button {
		--background: #d71921;
		color: white;
		--background-activated: #c6151e;
	}

	.wrapper h5 {
		color: #d71921;
		font-weight: 700;
		font-size: 14px;
	}
</style>
