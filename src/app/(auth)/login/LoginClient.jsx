'use client'
import Image from "next/image";
import React, {useState} from "react";
import LogoPath from '@/assets/colorful.svg'
import { useRouter } from "next/navigation";
import styles from './Auth.module.scss'
import Loader from '@/components/loader/Loader';
import Input from "@/components/input/Input";
import AutoSignInCheckbox from "@/components/autoSignInCheckbox/AutoSignInCheckbox";
import Divider from "@/components/divider/Divider";
import Button from "@/components/button/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '@/firebase/firebase';

const LoginClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] =  useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();
  const redirectUser = () => {
    router.push('/');
  }

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      setIsLoading(false);
      toast.info('로그인 성공')
      redirectUser();
    })
    .catch((error) => {
      setIsLoading(false);
      toast.error(error.message);
      
    })
  }

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
      toast.info('구글 로그인 성공')
      redirectUser();
    })
    .catch((error) => {
      toast.error(error.message);
    })
  }

  return (
    <>
  { isLoading && <Loader/>}
   <section className={styles.page}>
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <Image src={LogoPath} alt="logo"/>
      </h1>

      <form className={styles.form} onSubmit={loginUser}>
          {/* input */}
          <Input
            email
            icon="letter"
            id="email"
            name="email"
            label="이메일"
            placeholder="Enter your email"
            className={styles.control}
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <Input
            password
            icon="lock"
            id="password"
            name="password"
            label="비밀번호"
            placeholder="password"
            className={styles.control}
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            
        <div className={styles.group}>
          <AutoSignInCheckbox 
            checked={isAutoLogin}
            onChange={(e) => setIsAutoLogin(e.target.checked)} 
          />
          <Link href={"/reset"} className={styles.findLink}>
          비밀번호 수정하기
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={styles.findLinkArrow}>
            <path d="M1.5 1L9.5 9L1.5 17" stroke="#0074E9" strokeWidth="2" />
        </svg>
          </Link>
          </div>
            {/* button */}
            <div className={styles.buttonGroup}>
            <Button 
               type="submit"
               width="100%"
            >
              로그인
            </Button>
            <Divider/>
            <Button
              width="100%"
              secondary
            >
              <Link href={"register"}>
              회원가입
              </Link>
            </Button>
            <Divider />
            
            <div>
              {/* button */}
              <Button
                onClick={signInGoogle}
              >
              구글로그인
            </Button>
            </div>
          </div>
      </form>
    </div>
    </section>
    </>
  );
}

export default LoginClient;


