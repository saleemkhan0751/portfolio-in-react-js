import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
function SignInPage() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('');
    const navigate = useNavigate();
    let user = localStorage.getItem('user-info')

    useEffect(()=>{
        if(user){
            console.log('ggjffjfjfjjf',user)
            navigate('/dashboard');
        }else {
            navigate('/')
        }

    },[user])
   async function Login() {
       let item = {email, password}
        let result=await  fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
       result = await result.json();
       if(result.status==true){
           console.log(result);
           localStorage.setItem("user-info", JSON.stringify(result))
           navigate('/dashboard');
       }else{
           setMessage(result.success)
       }
    }
    return (
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link rel="shortcut icon" href="%PUBLIC_URL%/admin/img/icons/icon-48x48.png"/>
            <title>Profile | AdminKit Demo</title>
            <link href="%PUBLIC_URL%/admin/css/app.css" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>

        <body>
        <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">
                            <div className="text-center mt-4">
                                <h1 className="h2">Welcome back, Portfolio</h1>
                                <p className="lead">
                                    Sign in to your account to continue
                                </p>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-4">
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control form-control-lg" type="email"
                                                       onChange={(e)=>setEmail(e.target.value)}
                                                       name="email" placeholder="Enter your email"/>

                                            </div>
                                        <div className="mb-3">
                                            <span className="text-danger">{message}</span>
                                        </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input className="form-control form-control-lg" type="password"
                                                       onChange={(e)=>setPassword(e.target.value)}
                                                       name="password" placeholder="Enter your password"/>
                                                <small>
                                                    <a href="index.html">Forgot password?</a>
                                                </small>
                                            </div>
                                            <div>
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                           value="remember-me" name="remember-me" checked/>
                                                    <span className="form-check-label">
              Remember me next time
            </span>
                                                </label>
                                            </div>
                                            <div className="text-center mt-3">
                                                <button  onClick={Login} className="btn btn-lg btn-primary">Sign
                                                    in</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <script src="js/app.js"></script>
        <script src="%PUBLIC_URL%/admin/js/app.js"></script>
        <script src="%PUBLIC_URL%/admin/js/chart.js"></script>
        </body>
        </>
    )
}

export default SignInPage