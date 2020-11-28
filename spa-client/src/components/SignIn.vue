<template>
  <div class="container login-container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6 login-form-1">
        <h3>Auth</h3>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Email" value="" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" value="" />
          </div>
          <div class="form-group">
            <input type="submit" class="btnSubmit" value="Sign In" />
          </div>
          <div class="form-group">
            <a href="#" class="ForgetPwd">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
}
</script>

<style scoped>
.login-container{
  margin-top: 5%;
  margin-bottom: 5%;
}
.login-form-1{
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
  text-align: center;
  color: #333;
}
.login-container form{
  padding: 10%;
}
.btnSubmit
{
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  cursor: pointer;
}
.login-form-1 .btnSubmit{
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
}
.login-form-1 .ForgetPwd{
  color: #0062cc;
  font-weight: 600;
  text-decoration: none;
}
</style>