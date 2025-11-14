import { useState, createContext, useEffect } from "react";
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import  {  toast  }  from  'react-toastify' ;

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigate = useNavigate();

    async function signIn(email, password){
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            const docRef = doc(db, "users", uid)
            const docSnap = await getDoc(docRef)

            let data =  {
                uid: uid,
                nome: docSnap.data().nome,
                email: value.user.email
            }

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success("Login realizado com sucesso")
            navigate("/Dashboard");
        })
        .catch((error) => {
            console.log(error);
            setLoadingAuth(false);
            toast.error("Ops, algo deu errado!");
        })
    }

    async function signUp(name, email, password){
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid

            await setDoc(doc(db, "users", uid),{
                nome: name,
            })
            .then(() =>{
                let data = {
                    uid: uid,
                    nome: name,
                    email: value.user.email
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success("Cadastro realizado com Sucesso!");
                navigate("/Dashboard");
            })
        })
        .catch((error) =>{
            console.log(error);
            setLoadingAuth(false);
        })
    }

    function storageUser(data){
        localStorage.setItem('@tickets', JSON.stringify(data))
    }

    return(
        <AuthContext.Provider value={{
                signed: !!user,
                user,
                signIn,
                signUp,
                loadingAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;