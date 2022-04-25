import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<div className='form-container'>
			<div>
				<h2 className='form-title'>Login</h2>
				<form>
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input type="text" name="email" id="" />
					</div>
					<div className="input-group">
						<label htmlFor="Password">Password</label>
						<input type="password" name="password" id="" />
					</div>
					<div className="input-group">
						<label htmlFor="Password">Confirm Password</label>
						<input type="password" name="password" id="" />
					</div>
					<input className='form-submit' type="submit" value="Sign Up" />
				</form>
				<p>Already have an account? <Link className='form-link' to="/login">Login</Link></p>
			</div>
		</div>
	);
};

export default SignUp;