<template lang="pug">
	.auth-login.w-100
		form(@submit.prevent="onSubmit" novalidate)
			//- Card header
			h3.text-center.auth-title Login Account

			//- Info message
			.alert.alert-info.mt-4(v-show="referredRoute" role="alert")
				| Please login your account first to proceed.

			//- Email Address
			.form-group(:class="referredRoute ? 'mt-4' : 'mt-5'")
				label(for='email') Email address
				input#email.form-control(
					name="email" 
					type="email"
					placeholder="Email Address" 
					v-model.trim="email" 
					:class="{'error': (!$v.email.required  || !$v.email.email) && $v.email.$dirty}"  
					@input="$v.email.$touch()"
				)
				.invalid-feedback(v-show="!$v.email.required && $v.email.$dirty") 
					| Email Address cannot be blank.
				.invalid-feedback(v-show="!$v.email.email && $v.email.$dirty")
					| Invalid Email Address format.
			
			//- Password
			.form-group
				label(for='password') Password
				input#password.form-control(
					name="password" 
					type="password" 
					placeholder="Password" 
					autocomplete="password"
					v-model="password" 
					:class="{'error': $v.password.$invalid && $v.password.$dirty}"
					@input="$v.password.$touch()"
				)
				.invalid-feedback(v-show="!$v.password.required && $v.password.$dirty") 
					| Password cannot be blank.
			
			//- Auth status
			.alert.mt-4(v-show="getAuthStatus.status" role="alert" :class="getAuthStatus.status === 'failed' ? 'alert-danger' : 'alert-success'")
				| {{ getAuthStatus.message }}
			
			//- Submit Button
			button.btn.btn-primary.main-btn.w-100.mt-4(
				type='submit' 
				:disabled="$v.$invalid" 
				:class="{'btn-disabled': $v.$invalid || isAPILoading, 'btn-loading': isAPILoading }"
			) Sign In

			//- Footer
			.form-group.auth-footer.mt-4
				p.mb-0 Don't have an account?
					a.ml-2(href="javasript:void(0);" @click.prevent="goToRegister") Sign Up
</template>

<script src="./auth-login.js"></script>

<style lang="scss" scoped>
	@import './auth-login.scss';
</style>

