"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/app/store/Auth";
import { useEffect, useState } from "react";
import LogoImg from "@/public/assets/logo.png";
import { useDrawerStore } from "@/app/store/Drawer";
import styles from "@/app/styles/sideNav.module.css";
import { usePathname } from "next/navigation";
import {
  RiVipCrownLine as VipIcon,
  RiDashboardHorizontalLine as DashboardIcon,
} from "react-icons/ri";
import { IoMdInformationCircleOutline as AboutIcon } from "react-icons/io";
import {
  BiMoneyWithdraw as MoneyIcon,
  BiFootball as FootballIcon,
} from "react-icons/bi";
import { HiOutlineLogout as LogoutIcon } from "react-icons/hi";
import { IoBookOutline as TermsIcon } from "react-icons/io5";
import {
  PiCourtBasketball as OtherSportIcon,
  PiTelegramLogo as TelegramLogo,
} from "react-icons/pi";
import { WiDayCloudy as BankerIcon } from "react-icons/wi";

import { RiMenu4Fill as MenuIcon } from "react-icons/ri";

export default function SideNav() {
  const { isOpen, toggleOpen } = useDrawerStore();
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const { isAuth, toggleAuth } = useAuthStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarClasses = `${styles.sideContainer} ${
    isMobile
      ? isOpen
        ? styles.showSideNav
        : styles.hideSideNav
      : styles.showSideNav
  }`;

  const openTelegram = () => {
    window.open("https://t.me/+p9eRLjKRtv45Y2Fk", "_blank");
  };

  return (
    <div className={sidebarClasses}>
      {isMobile && (
        <div onClick={toggleOpen} className={styles.toggleMenuButton}>
          <MenuIcon
            className={styles.toggleMenuIcon}
            aria-label="Toggle menu"
            alt="toggle menu icon"
          />
        </div>
      )}
      <div className={styles.sideLogo}>
        <Image
          className={styles.logo}
          src={LogoImg}
          alt="logo"
          height={35}
          priority
        />
      </div>
      <div className={styles.sideTop}>
        {isAuth && (
          <Link href="/page/dashboard" className={styles.sideLink}>
            <div
              className={`${styles.innerSideLink} ${
                pathname === "/page/dashboard" ||
                pathname.startsWith("/page/dashboard/")
                  ? styles.activeLink
                  : ""
              }`}
            >
              <DashboardIcon
                alt="dashboard icon"
                aria-label="dashboard icon"
                className={styles.linkIcon}
              />
              <h1>Dashboard</h1>
            </div>
          </Link>
        )}

        <Link href="/page/football" className={styles.sideLink}>
          <div
            className={`${styles.innerSideLink} ${
              pathname === "/page/football" ||
              pathname.startsWith("/page/football/")
                ? styles.activeLink
                : ""
            }`}
          >
            <BankerIcon
              alt="straight icon"
              aria-label="straight icon"
              className={styles.linkIcon}
            />
            <h1>Banker of the day</h1>
          </div>
        </Link>
        <Link href="/page/straight" className={styles.sideLink}>
          <div
            className={`${styles.innerSideLink} ${
              pathname === "/page/straight" ||
              pathname.startsWith("/page/straight/")
                ? styles.activeLink
                : ""
            }`}
          >
            <FootballIcon
              alt="football icon"
              aria-label="football icon"
              className={styles.linkIcon}
            />
            <h1>Straight win</h1>
          </div>
        </Link>
        <Link href="/page/otherSport" className={styles.sideLink}>
          <div
            className={`${styles.innerSideLink} ${
              pathname === "/page/otherSport" ||
              pathname.startsWith("/page/otherSport/")
                ? styles.activeLink
                : ""
            }`}
          >
            <OtherSportIcon
              alt="football icon"
              aria-label="football icon"
              className={styles.linkIcon}
            />
            <h1>Other Sports</h1>
          </div>
        </Link>

        <Link href="/page/vip" className={styles.sideLink}>
          <div
            className={`${styles.innerSideLink} ${
              pathname === "/page/vip" || pathname.startsWith("/page/vip/")
                ? styles.activeLink
                : ""
            }`}
          >
            <VipIcon alt="vip icon" className={styles.linkIcon} />
            <h1>Vip</h1>
          </div>
        </Link>
        <Link href="/page/payment" className={styles.sideLink}>
          <div
            className={`${styles.innerSideLink} ${
              pathname === "/page/payment" ||
              pathname.startsWith("/page/payment/")
                ? styles.activeLink
                : ""
            }`}
          >
            <MoneyIcon
              alt="payment icon"
              aria-label="payment icon"
              className={styles.linkIcon}
            />
            <h1>How to pay</h1>
          </div>
        </Link>

        <div className={styles.sideLink} onClick={openTelegram}>
          <div className={styles.innerSideLink}>
            <TelegramLogo
              alt="telegran icon"
              aria-label="telegram icon"
              className={styles.linkIcon}
            />
            <h1>Join telegram</h1>
          </div>
        </div>
        <Link href="/page/about" className={styles.sideLink}>
          <div
            className={`${styles.innerSideLink} ${
              pathname === "/page/about" || pathname.startsWith("/page/about/")
                ? styles.activeLink
                : ""
            }`}
          >
            <AboutIcon
              alt="about icon"
              aria-label="about icon"
              className={styles.linkIcon}
            />
            <h1>About</h1>
          </div>
        </Link>
        <Link href="/page/terms" className={styles.sideLink}>
          <div
            className={`${styles.innerSideLink} ${
              pathname === "/page/terms" || pathname.startsWith("/page/terms/")
                ? styles.activeLink
                : ""
            }`}
          >
            <TermsIcon
              alt="terms icon"
              aria-label="terms icon"
              className={styles.linkIcon}
            />
            <h1>Terms</h1>
          </div>
        </Link>
      </div>
      <div className={styles.sideBottom}>
        <LogoutIcon
          alt="logout icon"
          aria-label="logout icon"
          className={styles.linkIcon}
        />
      </div>
    </div>
  );
}
