import React from 'react';

function Signup() {
  return (
    <form>
      <h3>Sign Up</h3>
      <div class="container  mt-5 w-50">
        <form>
            <div><h3>Register Form</h3></div>
            <div class="mb-3">
              <label  class="form-label">Email *</label>
              <input type="email" id="email" class="form-control" placeholder="Email email"  aria-describedby="emailHelp"/>
              <p class="text-danger" id="erroremail"></p>
            </div>

            <div class="mb-3">
              <label  class="form-label">Password</label>
              <input type="password" id="pass" class="form-control" placeholder="Enter password"/>
            </div>
            <p class="text-danger" id="errorpassword"></p>
            
            <div class="mb-3">
                <label  class="form-label">Fullname *</label>
                <input type="email" id="name" class="form-control" placeholder="Enter lastname firstname"  aria-describedby="emailHelp"/>
              </div>
              <p class="text-danger" id="errorname"></p>

            <div class="mb-3">
                <label  class="form-label">Phone *</label>
                <input type="email" id="phone" class="form-control" placeholder="Enter phone"  aria-describedby="emailHelp"/>
            </div>
            <p class="text-danger" id="errorphone"></p>

            <button type="submit" id="btn-submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

    </form>
  );
}

export default Signup;
