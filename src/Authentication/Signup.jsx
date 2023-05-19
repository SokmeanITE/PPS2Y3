import React from 'react';

function Signup() {
  return (
    <div class="container">
    <div class="row">
        <div class="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
            <div class="panel border bg-white">
                <div class="panel-heading">
                    <h3 class="pt-3 font-weight-bold">Log In</h3>
                </div>
                <div class="panel-body p-3">
                    <form action="login_script.php" method="POST">
                    <div class="form-group py-2">
                            <div class="input-field"> <span class="far fa-user p-2"></span> <input type="text" placeholder="Username" required/> </div>
                        </div>
                        <div class="form-group py-2">
                            <div class="input-field"> <span class="far fa-user p-2"></span> <input type="text" placeholder="Email" required/> </div>
                        </div>
                        <div class="form-group py-1 pb-2">
                            <div class="input-field"> <span class="fas fa-lock px-2"></span> <input type="password" placeholder="Password" required/> <button class="btn bg-white text-muted"> <span class="far fa-eye-slash"></span> </button> </div>
                        </div>
                        <div class="btn btn-primary btn-block mt-3">Sign Up <a href="/"> </a></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Signup;
