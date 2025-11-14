import { useState, createContext, useEffect } from "react";
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import  {  toast  }  from  'react-toastify' ;

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigate = useNavigate();

    function signIn(email, password){
        console.log(email)
        console.log(password);
        alert("usuario logado");
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
                toast.success("funcionoou");
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