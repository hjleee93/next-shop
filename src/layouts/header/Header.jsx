'use client'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { toast } from 'react-toastify'
import { usePathname } from 'next/navigation'
import InnerHeader from '../innerHeader/InnerHeader'
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '@/redux/slice/authSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [displayName, setdisplayName] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if( user ){
        if(user.displayName === null){
          
          const u1 = user.email.substring(0, user.email.indexOf('@'))
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
          setdisplayName(uName)
        }else{
          // setdisplayName(user.displayName)
        }
        //유저 정보 리덕스에 넣기
        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayName,
          userID: user.uid
        }))

      }else{
        setdisplayName('')
        dispatch(REMOVE_ACTIVE_USER())
      }
    })
  
  }, [dispatch, displayName])
  

const logoutUser = () =>{
  signOut(auth)
  .then(()=>{
    toast.success('로그아웃 성공')
    router.push('/')
  })
  .catch((error) => {
    toast.error(error.message)
  })

  
}
  if(pathname === '/login' || pathname === '/register' || pathname === '/reset'){
    return null
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={"/login"}>로그인</Link>
          </li>
              <li className={styles.item}>
                <Link
                  href={"/admin/dashboard"}
                >
                  관리자
                </Link>
              </li>

              <li className={styles.item}>
                <Link
                  href={"/order-history"}
                >
                  주문 목록
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href={"/"} 
                >
                  로그아웃
                </Link>
              </li>

              <li className={styles.item}>
                <Link
                  href={"/"}
                >
                  제휴 마케팅
                </Link>
              </li>

              <li className={styles.item}>
                <Link
                  href={"/"}
                >
                  쿠팡 플레이
                </Link>
              </li>

              <li className={styles.item}>
                <Link
                  href={"/"}
                >
                  고객센터
                </Link>
              </li>
              </ul>
      </div>
    {
      pathname.startsWith('/admin') ?
       null : 
       <InnerHeader/>
    }
    </header>
  )
}

export default Header