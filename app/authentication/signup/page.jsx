"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import { useAuthStore } from "@/app/store/Auth";
import styles from "@/app/style/auth.module.css";
import auth1Image from "@/public/assets/auth1Image.jpg";
import auth2Image from "@/public/assets/auth2Image.jpg";
import auth3Image from "@/public/assets/auth3Image.jpg";
import auth4Image from "@/public/assets/auth4Image.jpg";
import countriesData from "@/app/components/countries.js";

import {
  KeyIcon as PasswordIcon,
  UserIcon as UserNameIcon,
  EnvelopeIcon as EmailIcon,
  EyeIcon as ShowPasswordIcon,
  EyeSlashIcon as HidePasswordIcon,
} from "@heroicons/react/24/outline";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState("");
  const { isAuth, toggleAuth } = useAuthStore();
  const [terms, setTerms] = useState(false);


  const images = [auth1Image, auth2Image, auth3Image, auth4Image  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);


  const router = useRouter();

  const handleTermsChange = (event) => {
    setTerms(event.target.checked);
  };

  const toggleConfirmPassword = () => {
    setConfirmPassword(!showConfirmPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const policy = () => {
    router.push("/page/policy", { scroll: false });
  };

  const readTerms = () => {
    router.push("/page/terms", { scroll: false });
  };

  const forgotPassword = () => {
    router.push("forgot", { scroll: false });
  };

  const Login = () => {
    router.push("login", { scroll: false });
  };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      // const response = await fetch("/api/submit", {
      //   method: "POST",
      //   body: formData,
      // });

      toggleAuth();
      toast.success("Welcome back");
      router.push("/page/dashboard", { scroll: false });
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.authComponent}>
   <div className={styles.authComponentBgImage}>
        <Image
          className={styles.advertImage}
          src={images[currentImageIndex]}
          alt="auth image"
          layout="fill"
          quality={100}
          objectFit="cover"
          priority
        />
        <div className={styles.slideController}>
          <div onClick={nextImage} className={styles.slideBtn}>
            Next
          </div>
          <div className={styles.imageSlider}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles.circleAdv} ${
                  currentImageIndex === index ? styles.activeCircle : ""
                }`}
              ></div>
            ))}
          </div>
          <div onClick={prevImage} className={styles.slideBtn}>
            Previous
          </div>
        </div>
      </div>
      <div className={styles.authWrapper}>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Sign up</h1>
            <p>Enter your account details</p>
          </div>
          {/* Name */}

          <div className={styles.authInput}>
            <UserNameIcon
              className={styles.authIcon}
              alt="Name icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Full name"
            />
          </div>
             {/* Email */}

             <div className={styles.authInput}>
            <EmailIcon
              className={styles.authIcon}
              alt="Email icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
            />
          </div>
          <div className={styles.authInput}>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option disabled value="">Select your country</option>
              {Object.values(countriesData).map((countryName, index) => (
                <option key={index} value={Object.keys(countriesData)[index]}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>
          {/*  password */}

          <div className={styles.authInput}>
            <PasswordIcon
              className={styles.authIcon}
              alt="password icon"
              width={20}
              height={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              id="Password"
              placeholder="Password"
            />
            <button type="button" className={styles.showBtn} onClick={toggleShowPassword}>
              {showPassword ? (
                <HidePasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              ) : (
                <ShowPasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
          {/* confirm password */}

          <div className={styles.authInput}>
            <PasswordIcon
              className={styles.authIcon}
              alt="confirm password"
              width={20}
              height={20}
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
            <button type="button" className={styles.showBtn} onClick={toggleConfirmPassword}>
              {showConfirmPassword ? (
                <HidePasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              ) : (
                <ShowPasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
          <div className={styles.formChange}>
            <div className={styles.termsContainer}>
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={handleTermsChange}
              />
              <label htmlFor="terms">Accept terms and condition</label>
            </div>
            <span onClick={forgotPassword}>Forgot Password</span>
          </div>
          <div className={styles.authBottomBtn}>
               <button
            type="submit"
            disabled={isLoading}
            className={styles.formAuthButton}
          >
            {isLoading ? <Loader /> : "Sign up"}
          </button>
   
          </div> 
          <h3>
            Already have an account?{" "}
            <div className={styles.btnLogin} onClick={Login}>
              Login
            </div>
          </h3>
        </form>
      </div>
    </div>
  );
}