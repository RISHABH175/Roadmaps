<template>
    <div class="vue-tempalte">
        <form>
            <h3>Login </h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" style="margin-bottom:20px"> Login</button>

           

            

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>