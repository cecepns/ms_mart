import {auth} from '../../Config/Firebase'
import {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import AuthContext from '../../Config/Context/AuthContext'
import styles from './Login.module.scss'

export default function Login() {
    let history = useHistory();

    const {setStore} = useContext(AuthContext)

    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');

    const [loading,
        setLoading] = useState(false)

    const handleSubmit = () => {
        setLoading(true)
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setLoading(false)
                alert('berhasil login')
                console.log(userCredential)
                setStore({type: 'login', role: 'admin'})
                localStorage.setItem("loggedIn", true);
                setTimeout(() => {
                    history.push("/admin");
                }, 2000);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(error)
                alert('error ' + errorMessage)
                setLoading(false)
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
                    type="password"
                    placeholder="masukan password"
                    onChange={e => setPassword(e.target.value)}/>
                <div className={styles['wrapper__button']}>

                    <button className={styles['btn-login']} onClick={handleSubmit}>
                        {loading
                            ? "Loading..."
                            : "Login"}
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