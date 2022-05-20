import { useEffect, useState } from "react"
import initializeAuthentication from "../Component/Firebase/Firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


initializeAuthentication()

const UseFirebase = () =>{
    const [user, setUser] = useState({});
    const [isloding, setIsloding] = useState(true);
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name) => {
        setIsloding(true)
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            saveUser(email, name, 'POST')
            const user = userCredential.user;
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
          })
          .finally(() => setIsloding(false));
      };

      const loginUser = (email, password, location, Navigate) =>{
        setIsloding(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            Navigate(destination);
          
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        })
        .finally(() => setIsloding(false));
    
      }


      const signInUsingGoogle = (location, Navigate) =>{
        setIsloding(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            // const destination = location?.state?.from || '/';
            // Navigate(destination);
          
    
          
        }).catch((error) => {
          
          const errorCode = error.code;
          const errorMessage = error.message;
          
          const email = error.email;
         
          const credential = GoogleAuthProvider.credentialFromError(error);
          
        })
        .finally(() => setIsloding(false));
    
      }

      const logOut = () =>{
        setIsloding(true)
        signOut(auth).then(() => {
            
          }).catch((error) => {
           
          })
          .finally(() => setIsloding(false));
      }

      




      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              
              
              setUser(user)
              
            } else {
              setUser({})
            }
            setIsloding(false)
          });
          return () => unsubscribe;
      }, [])

         // admin
  useEffect(() =>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res =>res.json())
    .then(data => setAdmin(data.admin))

  }, [user.email])


      const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
          method: method,
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
      }


    

    return {
        user,
        registerUser,
        loginUser,
        signInUsingGoogle,
        admin,
        logOut
    }
}
export default UseFirebase;