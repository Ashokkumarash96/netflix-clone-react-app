import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/navigation/Navigation";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import UserProfile from "./pages/userprofile/UserProfile";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import GlobalStyles from "./GlobalStyles";
import { setCurrentUser } from "./store/user/user.actions";
import Details from "./pages/detail/Details";
import MyList from "./pages/mylist/MyList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set up an auth state change listener when the component mounts
    const unsubscribe = onAuthStateChangeListener((user) => {
      // If a user is authenticated, create a user document in the database
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // Dispatch the action to set the current user in the Redux store
      dispatch(setCurrentUser(user));
    });
    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='login' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='browse' element={<UserProfile />}>
          <Route path=':id' element={<Details />} />
        </Route>
        <Route path='mylist' element={<MyList />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
