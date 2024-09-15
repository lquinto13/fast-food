<template>
	<base-layout-back>
		<template #header-title>
			<ion-label>
				<h1 style="font-weight: 700">Order Summary</h1>
			</ion-label>
		</template>
		<div class="address">
			<ion-list>
				<ion-item-sliding
					@ionDrag="onDrag"
					class="item-sliding">
					<div class="sliding-container">
						<ion-item class="custom-item">
							<div class="text-container">
								<h6>Chou Tzuyu</h6>
								<p>+63 912 345 6789</p>
								<p>chou.tzu-yu@emial.com</p>
							</div>
						</ion-item>
						<ion-icon
							class="slide-icon"
							:src="dots">
						</ion-icon>
					</div>
					<div>
						<ion-item-options side="end">
							<ion-item-option class="custom-first">
								<ion-icon
									slot="icon-only"
									:src="edit"></ion-icon>
							</ion-item-option>
							<ion-item-option class="custom-second">
								<ion-icon
									slot="icon-only"
									:src="trash"></ion-icon>
							</ion-item-option>
						</ion-item-options>
					</div>
				</ion-item-sliding>
				<ion-item-sliding
					@ionDrag="onDrag"
					class="item-sliding">
					<div class="sliding-container">
						<ion-item class="custom-item">
							<div class="text-container">
								<h6>My Home Address</h6>
								<p>
									No 21 St. Agustin Street, Brgy. De Jose Delgado City 2234
									Philippines
								</p>
							</div>
						</ion-item>
						<ion-icon
							class="slide-icon"
							:src="dots">
						</ion-icon>
					</div>
					<div>
						<ion-item-options side="end">
							<ion-item-option class="custom-first">
								<ion-icon
									slot="icon-only"
									:src="edit"></ion-icon>
							</ion-item-option>
							<ion-item-option class="custom-second">
								<ion-icon
									slot="icon-only"
									:src="trash"></ion-icon>
							</ion-item-option>
						</ion-item-options>
					</div>
				</ion-item-sliding>
				<ion-item-sliding
					@ionDrag="onDrag"
					class="item-sliding">
					<div class="sliding-container">
						<ion-item class="custom-item">
							<div class="text-container">
								<h6>Work/Office</h6>
								<p>
									3rd flr Anyeong Bldg. Seareal St Joaqin City 3456 Philippines
								</p>
							</div>
						</ion-item>
						<ion-icon
							class="slide-icon"
							:src="dots">
						</ion-icon>
					</div>
					<div>
						<ion-item-options side="end">
							<ion-item-option class="custom-first">
								<ion-icon
									slot="icon-only"
									:src="edit"></ion-icon>
							</ion-item-option>
							<ion-item-option class="custom-second">
								<ion-icon
									slot="icon-only"
									:src="trash"></ion-icon>
							</ion-item-option>
						</ion-item-options>
					</div>
				</ion-item-sliding>
			</ion-list>
		</div>

		<div class="orders">
			<h1>Orders</h1>
			<ion-item-sliding
				@ionDrag="onDrag"
				class="item-sliding">
				<div class="sliding-container">
					<ion-item class="custom-item">
						<div class="text-container">
							<div class="food">
								<img
									alt="Silhouette of mountains"
									src="../assets/images/steak-fries-veggies.png" />
								<div class="food-items">
									<h6>Steak Fries Veggies</h6>
									<p>1x Tomato Sauce</p>
									<p>1x Regular Coke</p>

									<p>1x Fried Chicken</p>
								</div>
							</div>
							<div class="price">
								<h6>P 185</h6>
								<div class="quantity-container">
									<span class="chevron-container"> - </span>
									<p>1</p>
									<span class="chevron-container"> + </span>
								</div>
							</div>
						</div>
					</ion-item>
					<ion-icon
						class="slide-icon"
						:src="dots">
					</ion-icon>
				</div>
				<div>
					<ion-item-options side="end">
						<ion-item-option class="custom-first">
							<ion-icon
								slot="icon-only"
								:src="edit"></ion-icon>
						</ion-item-option>
						<ion-item-option class="custom-second">
							<ion-icon
								slot="icon-only"
								:src="trash"></ion-icon>
						</ion-item-option>
					</ion-item-options>
				</div>
			</ion-item-sliding>
		</div>

		<div class="payment-option">
			<h1>Payment Options</h1>
			<ion-list>
				<ion-radio-group>
					<div class="options-container">
						<ion-item>
							<div></div>
							<div class="label">
								<h6>Cash on Delivery</h6>
								<p>Pay when you received the order</p>
							</div>
							<ion-radio
								slot="end"
								value="option1">
							</ion-radio>
						</ion-item>

						<ion-item>
							<div class="label">
								<h6>Loyalty Points <span>(0 points)</span></h6>
								<p>Pay using your earned loyalty points</p>
							</div>
							<ion-radio
								slot="end"
								value="option2">
							</ion-radio>
						</ion-item>

						<ion-item>
							<div class="label">
								<img
									alt="paypal"
									src="../assets/images/paypal.png" />
								<p>A new tab will open to access your account</p>
							</div>
							<ion-radio
								slot="end"
								value="option3">
							</ion-radio>
						</ion-item>

						<ion-item>
							<div class="label">
								<img
									alt="paynamic"
									src="../assets/images/paynamics.png" />
								<p>Choose paynamics services available from you</p>
							</div>
							<ion-radio
								slot="end"
								value="option4">
							</ion-radio>
						</ion-item>
					</div>
				</ion-radio-group>
			</ion-list>
		</div>

		<div class="total">
			<div class="subtotal">
				<h6>Subtotal</h6>
				<h6>P 185</h6>
			</div>
			<div class="delivery-charge">
				<h6>Delivery Charge</h6>
				<h6>P 59</h6>
			</div>
			<ion-input
				class="input"
				placeholder="e.g 1000"
				label="Change for"
				label-placement="stacked"></ion-input>
		</div>
		<div class="fixed-button-container">
			<div class="grand-total">
				<p>Grand Total</p>
				<h6>P 244</h6>
			</div>
			<ion-button
				class="custom-button"
				@click="goToReceived"
				>Place Order</ion-button
			>
		</div>
	</base-layout-back>
</template>

<script setup>
	import {
		IonItem,
		IonItemOption,
		IonItemOptions,
		IonItemSliding,
		IonLabel,
		IonList,
	} from '@ionic/vue'
	import edit from '@/assets/icons/pencil.svg'
	import trash from '@/assets/icons/trash.svg'
	import dots from '@/assets/icons/three-dots.svg'
	import { useRouter } from 'vue-router'

	import { ref } from 'vue'

	const isSliding = ref(false)
	const router = useRouter()

	const onDrag = (event) => {
		isSliding.value = event.detail.ratio > 0.1
	}

	function goToReceived() {
		router.push({ name: 'OrderReceivedPage' })
	}
</script>

<style scoped>
	.bag-header {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: space-between;
	}

	ion-item {
		width: 100%;
		--background: #e9ecef;
		--min-height: 103px;
		--border-radius: 16px;
	}

	.text-container h6 {
		font-weight: 700;
		font-size: 14px;
		margin-bottom: 10px;
	}

	.text-container p {
		font-size: 14px;
		color: #6c757d;
	}
	.sliding-container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 10px;
	}

	.custom-item {
		padding-left: 16px;
		--inner-padding-start: 16px;
		--inner-padding-end: 16px;
	}

	.option-slide {
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
	}

	ion-icon {
		width: 24px;
		height: 24px;
	}

	ion-item-options {
		position: absolute;
	}

	ion-item-sliding {
		margin-top: 10px;
	}
	.item-sliding.item-sliding-active-slide ion-item-options {
		animation: slideIn 0.5s;
	}
	.item-sliding.item-sliding-closing ion-item-options {
		transform: translateX(30%);
		animation: slideOut 0.5s;
	}

	.item-sliding.item-sliding-active-slide .slide-icon {
		transform: translateX(100%);
		animation: slideOut 0.1s;
	}

	.item-sliding.item-sliding-closing .slide-icon {
		transform: translateX(0%);
		animation: slideIn 0.5s;
	}
	.slide-icon {
		position: relative;
		animation: slide-out 0.3;
	}
	ion-item-option.custom-first {
		--background: #fd7e1433;
		z-index: 1000;
		border-radius: 16px;
		width: 44px;
	}

	ion-item-option.custom-second {
		--background: #dc354533;
		border-radius: 16px;
		width: 44px;
		margin-left: 4px;
		margin-right: 4px;
	}

	@keyframes slideIn {
		from {
			transform: translateX(30%);
		}
		to {
			transform: translateX(0%);
		}
	}

	@keyframes slideOut {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(30%);
		}
	}

	.orders,
	.payment-option,
	.total {
		margin-top: 24px;
		padding-left: 24px;
	}

	.payment-option,
	.total {
		padding-right: 24px;
	}
	.orders ion-item {
		padding: 0;
	}

	h1 {
		font-weight: 700;
		margin-bottom: 12px;
	}

	.order-detail {
		width: 327px;
		height: 180px;
		border: 1px solid #e9ecef;
		border-radius: 16px;
		background-color: #e9ecef;
	}

	.price {
		width: 280px;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.price h6 {
		color: #d71921;
	}
	.food {
		margin-top: 24px;
		display: flex;
		gap: 5px;
		margin-bottom: 12px;
	}

	.food img {
		width: 67px;
		height: 45px;
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

	.options-container {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.label span {
		color: #d71921;
		font-weight: 700;
	}
	.label p {
		font-weight: 400;
		font-size: 12px;
	}

	.total h6 {
		font-weight: 700;
	}

	.total {
		margin-bottom: 30px;
	}
	.subtotal,
	.delivery-charge {
		display: flex;
		justify-content: space-between;
	}

	ion-input {
		--background: #f8f9fa;
		--padding-start: 10px;
		--highlight-color-focused: #f8f9fa;
		--color-focused: black;
		--border-radius: 16px;
	}

	.grand-total {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.grand-total p {
		font-weight: 400;
		font-size: 12px;
	}

	.grand-total h6 {
		font-weight: 700;
		font-size: 20px;
	}
	.custom-button {
		--height: 45px; /* Set your desired height */
		--padding-top: 12px;
		--padding-bottom: 12px;
		--background: #d71921;
		--border-radius: 16px;
		width: 60%;
		font-size: 14px;
		font-weight: 700;
		text-transform: none;
		color: white;
		pointer-events: all; /* Add this */
	}
	.fixed-button-container {
		align-items: center;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 85px;
		z-index: 1000;
		padding: 8px;
		background-color: white;
		box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
	}
</style>
