import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../reduxStore/signUp";


const Body = () => {
    const dispatch = useDispatch();
     

    onAuthStateChanged(auth, (user) => {
        if (user) {
        // user is signedIn and signedUp
        const {uid,email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid,email:email, displayName:displayName, photoURL:photoURL}))
        } else {
          // User is signed out
        dispatch(removeUser());
        }
    });
      

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
        },
        {
            path:'/browse',
            element: <Browse/>
        }
    ])

  return (
   <RouterProvider router={appRouter}/>
  )
}

export default Body