import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../../components/forminput/FormInput";
import Button from "../../components/button/Button";
import {
  fetchMoviesAsync,
  fetchTrendingAsync,
  fetchTopRatedAsync,
  fetchUpcomingAsync,
  fetchPopularTVShowsAsync,
  fetchTopRatedTVShowsAsync,
  fetchTrendingShowsTVAsync,
} from "../../store/movies/movies.action";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { SignInContainer, ParentContainer } from "./signin.styles";
// Default form fields for the sign-in form
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  // State for form fields
  const [formFields, setFormFields] = useState(defaultFormFields); // State to track user loading status
  const [isUserLoading, setIsUserLoading] = useState(false);
  // Destructuring form fields
  const { email, password } = formFields;
  // React Router navigation hook
  const navigate = useNavigate();
  // Redux dispatch function
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch movie and TV show data on component mount
    dispatch(fetchMoviesAsync);
    dispatch(fetchTrendingAsync);
    dispatch(fetchTrendingShowsTVAsync);
    dispatch(fetchTopRatedAsync);
    dispatch(fetchUpcomingAsync);
    dispatch(fetchPopularTVShowsAsync);
    dispatch(fetchTopRatedTVShowsAsync);
  }, [dispatch]);

  const handleChange = (e) => {
    // Handle input field changes and update formFields state
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    try {
      setIsUserLoading(true); // Start user loading state
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // Sign in user with email and password
      setIsUserLoading(false); // Stop user loading state
      navigate("/browse"); // Navigate to browse page on successful sign-in
      resetFormFields(); // Reset form fields
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Wrong Password"); // Display error toast for wrong password
          setIsUserLoading(false); // Stop user loading state
          break;
        case "auth/user-not-found":
          toast.error("No user associated with this email"); // Display error toast for user not found
          setIsUserLoading(false); // Stop user loading state
          break;
        default:
          console.log({ error });
      }
    }
  };

  const resetFormFields = () => {
    // Reset form fields to default values
    setFormFields(defaultFormFields);
  };

  return (
    <ParentContainer>
      <SignInContainer>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Email'
            type='email'
            name='email'
            value={email}
            required
            onChange={handleChange}
          />

          <FormInput
            label='Password'
            type='password'
            name='password'
            value={password}
            required
            onChange={handleChange}
          />

          <Button
            buttonText={isUserLoading ? "Loading..." : "Sign In"}
            type='submit'
            isUserLoading={isUserLoading}
          />
        </form>
      </SignInContainer>
    </ParentContainer>
  );
};

export default SignIn;
