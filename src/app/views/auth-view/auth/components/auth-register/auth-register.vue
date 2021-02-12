<template lang="pug">
	.auth-register.w-100
		form(@submit.prevent="onSubmit" novalidate)
			//- Card header
			h3.text-center.mb-5.auth-title Create Account

			//- Name
			.form-group
				label(for='name') Name
				input#name.form-control(
					name="name" 
					type="text"
					placeholder="Name" 
					v-model.trim="name" 
					:class="{'error': !$v.name.required && $v.name.$dirty}"  
					@input="$v.name.$touch()"
				)
				.invalid-feedback(v-show="!$v.name.required && $v.name.$dirty") 
					| Name cannot be blank.

			//- Email Address
			.form-group
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
				.invalid-feedback(v-show="$v.password.required && !$v.password.hasUpperCase && $v.password.$dirty") 
					| Password must contain at least 1 Upper Case Letter.
				.invalid-feedback(v-show="$v.password.required && !$v.password.hasNumber && $v.password.$dirty") 
					| Password must contain at least 1 Number.
				.invalid-feedback(v-show="!$v.password.minLength && $v.password.$dirty") 
					| Password must be at least 6 characters long.
			
			//- Confirm Password
			.form-group
				label(for='confirmPassword') Confirm Password
				input#confirmPassword.form-control(
					name="confirmPassword" 
					type="password" 
					placeholder="Confirm Password" 
					autocomplete="confirmPassword"
					v-model="confirmPassword" 
					:class="{'error': ((confirmPassword !== password) || !$v.confirmPassword.required) && $v.confirmPassword.$dirty}" 
					@input="$v.confirmPassword.$touch()"
				)
				.invalid-feedback(v-show="!$v.confirmPassword.required && $v.confirmPassword.$dirty")
					| Confirm Password cannot be blank.
				.invalid-feedback(v-show="(confirmPassword !== password) && $v.confirmPassword.$dirty") 
					| Password does not match.

			//- Auth status
			.alert.mt-4(v-show="getAuthStatus.status !== null" role="alert" :class="getAuthStatus.status === 'failed' ? 'alert-danger' : 'alert-success'")
				| {{ getAuthStatus.message }}

			//- Submit Button
			button.btn.main-btn.w-100.mt-4(
				type='submit'
				:class="{'btn-disabled': isDisabled, 'btn-loading': isAPILoading }"
			) Sign Up

			//- Footer
			.form-group.auth-footer.mt-4
				p.mb-0 Already have an account?
					a.ml-2(href="javasript:void(0);" @click.prevent="goToLogin") Sign In
</template>

<script src="./auth-register.js"></script>

<style lang="scss" scoped>
	@import './auth-register.scss';
</style>

