import styles from './Register.module.scss'
import firebase from '../../Config/Firebase'
import {Link, Redirect, useHistory} from 'react-router-dom'
import {useState} from 'react'

export default function Register() {
    let history = useHistory();

    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');

    const handleRegister = () => {
        if (email.length < 1 || password.length < 1) {
            return alert('data tidak boleh kosong')
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert('akun berhasil didaftarkan')
                setTimeout(() => {
                    history.push("/login");
                }, 2000);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ..
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
                    type="text"
                    placeholder="masukan password"
                    onChange={e => setPassword(e.target.value)}/>
                <div className={styles['wrapper__button']}>

                    <button className={styles['btn-register']} onClick={handleRegister}>
                        Daftar
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