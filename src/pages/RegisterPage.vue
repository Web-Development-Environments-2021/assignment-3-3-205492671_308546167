<template>
  <div>
    <br>
    <div class="container">
      <h1 class="title">Register</h1>
      <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
        <b-form-group
          id="input-group-username"
          label-cols-sm="4"
          label="Username:"
          label-for="username"
        >
          <b-form-input
            id="username"
            v-model="$v.form.username.$model"
            type="text"
            :state="validateState('username')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.username.required">
            Username is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.username.length">
            Username length should be between 3-8 characters long
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.username.alpha">
            Username should conatins letters only
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-firstname"
          label-cols-sm="4"
          label="Firstname:"
          label-for="firstname"
        >
          <b-form-input
            class= "my-input"
            id="firstname"
            v-model="$v.form.firstname.$model"
            type="text"
            :state="validateState('firstname')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.firstname.required">
            firstname is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-lastname"
          label-cols-sm="4"
          label="Lastname:"
          label-for="lastname"
        >
          <b-form-input
            id="lastname"
            v-model="$v.form.lastname.$model"
            type="text"
            :state="validateState('lastname')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.lastname.required">
            lastname is required
          </b-form-invalid-feedback>
        </b-form-group>


        <b-form-group
          id="input-group-country"
          label-cols-sm="4"
          label="Country:"
          label-for="country"
        >
          <b-form-select
            id="country"
            v-model="$v.form.country.$model"
            :options="countries"
            :state="validateState('country')"
          ></b-form-select>
          <b-form-invalid-feedback>
            Country is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-Password"
          label-cols-sm="4"
          label="Password:"
          label-for="password"
        >
          <b-form-input
            id="password"
            type="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.password.required">
            Password is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.password.length">
            The password have be between 5-10 characters long
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.password.valid">
            The password have to contains at least one digit and one special character
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-confirmedPassword"
          label-cols-sm="4"
          label="Confirm Password:"
          label-for="confirmedPassword"
        >
          <b-form-input
            id="confirmedPassword"
            type="password"
            v-model="$v.form.confirmedPassword.$model"
            :state="validateState('confirmedPassword')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">
            Password confirmation is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-else-if="!$v.form.confirmedPassword.sameAsPassword"
          >
            The confirmed password is not equal to the original password
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-email"
          label-cols-sm="4"
          label="Email:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="$v.form.email.$model"
            type="email"
            :state="validateState('email')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.email.required">
            Email is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.email.email">
            email should be in the following format: "xxx@xxx.xxx"
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-profilePicture"
          label-cols-sm="4"
          label="ProfilePicture:"
          label-for="profilePicture"
        >
          <b-form-input
            id="profilePicture"
            v-model="$v.form.profilePicture.$model"
            type="url"
            :state="validateState('profilePicture')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.profilePicture.required">
            Profile Picture is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.profilePicture.url">
            Profile picture should be in the URL format
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button
          type="submit"
          variant="primary"
          style="width:40%; margin-left:30%;"
      
          id="register-button"
          >Register</b-button
        >
        <div class="mt-2">
          You have an account already?
          <router-link to="login"> Log in here</router-link>
        </div>
      </b-form>
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Register failed: {{ form.submitError }}
      </b-alert>
    </div>
    <br>
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email,
  url
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        profilePicture: "",
  
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      firstname: {
        required
      },
      lastname: {
        required
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        valid: function (value) {
          const containsNumber = /[0-9]/.test(value);
          const containsSpecial = /[#?!@$%^&*-]/.test(value);
          return (
            containsNumber &&
            containsSpecial
          );
      }},
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
        email: {
        required,
        email
      },
        profilePicture: {
        required,
        url
      }

    }
  },
  mounted() {
    this.countries.push(...countries);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        const response = await this.axios.post(
          "http://localhost:4000/auth/Register",
          {
            username: this.form.username,
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            country: this.form.country,
            password: this.form.password,
            email: this.form.email,
            profilePicture: this.form.profilePicture,
          }
        );
        this.$router.push("/");
      } catch (err) {
        debugger
        this.$root.toast("Register", err.response.data, "danger");
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstname: "",
        lastname: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>

.container {
  max-width: 40%;
  color: #25302B;
  background-color: #E5E5EC;
  opacity: 0.85;
  // margin: 0 auto; 
  // float: none; 
  
  // align-content: center;
}

</style>
