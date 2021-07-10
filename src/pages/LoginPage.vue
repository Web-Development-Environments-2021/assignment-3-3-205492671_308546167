<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        class="bold"
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
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
        class="bold"
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
          Password is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.password.length">
          The password have to be between 5-10 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.password.valid">
          The password have to contains at least one digit and one special character
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="success"
        style="width:100px;display:block;"
        class="mx-auto w-100 login-button"
        >Login</b-button
      >
      <div class="mt-2">
        Do not have an account yet?
        <router-link to="register" class="register-text"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
  </div>
</template>

<script>
import { required,  minLength, maxLength, alpha} from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
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
      }
    }}
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const response = await this.axios.post(
          "http://localhost:4000/auth/login",
          {
            username: this.form.username,
            password: this.form.password
          }, {withCredentials: true}
        );
        this.$root.store.actions.login(this.form.username, response.data.roles, response.data.profile_picture);
        this.$router.push("/").catch(()=>{});
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.Login();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 400px;
  color: #25302B;
  background-color: #E5E5EC;
  opacity: 0.85;
  margin-top: 5%;
}

.login-button{
  background-color: #25302B;
  border-color: #4A503D;
  
}
.login-button:hover{
  background-color: #8E9775;
}

.title{
  color:#25302B;
  text-align: center;
}
.register-text{
  color:#7DA87B;
}

</style>
