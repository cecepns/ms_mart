import {auth} from '../../Config/Firebase'
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import styles from './Login.module.scss'

export default function Login() {
    let history = useHistory();

    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');

    const handleSubmit = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user)
                alert('berhasil login')
                localStorage.setItem("loggedIn", true);
                setTimeout(() => {
                    history.push("/admin");
                }, 2000);

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                alert('error ' + errorMessage)
                // ..
            });

    }

    return (
        <section className={styles['section__login']}>
            <div className={styles['wrapper-login']}>
                <h1 className={styles['title__login']}>
                    Login
                </h1>
                <input
                    type="text"
                    placeholder="masukan email"
                    onChange={e => setEmail(e.target.value)}/>
                <input
                    type="text"
                    placeholder="masukan password"
                    onChange={e => setPassword(e.target.value)}/>
                <div className={styles['wrapper__button']}>

                    <button className={styles['btn-login']} onClick={handleSubmit}>
                        Login
                    </button>

                    <span className={styles['register']}>
                        Belum punya akun ?
                        <Link to="/register">
                            klik disini
                        </Link>
                    </span>

                </div>
            </div>

        </section>
    )
}