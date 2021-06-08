import styles from './Register.module.scss'
// import firebase from '../../Config/Firebase'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import {auth} from '../../Config/Firebase';

export default function Register() {
    let history = useHistory();

    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');

    const [loading,
        setLoading] = useState(false)

    const handleRegister = () => {
        if (email.length < 1 || password.length < 1) {
            return alert('data tidak boleh kosong')
        }

        setLoading(true)

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setLoading(false)
                alert('akun berhasil didaftarkan')
                console.log(userCredential)
                setTimeout(() => {
                    history.push("/login");
                }, 1200);
            })
            .catch((error) => {
                setLoading(false)
                var errorMessage = error.message;
                alert(errorMessage)
            });

    }

    return (
        <section className={styles['section__register']}>
            <div className={styles['wrapper-register']}>
                <h1 className={styles['title__register']}>
                    REGISTER
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

                    <button className={styles['btn-register']} onClick={handleRegister}>
                        {loading
                            ? "Loading..."
                            : "Register"}
                    </button>

                    <span className={styles['register']}>
                        Sudah memiliki akun ?
                        <Link to="/login">
                            klik disini
                        </Link>
                    </span>

                </div>
            </div>

        </section>
    )
}