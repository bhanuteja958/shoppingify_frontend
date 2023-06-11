import { FC, MouseEvent, useState } from "react";
import styles from '@/components/SideNav/SideNav.module.css';
import Image from "next/image";
import Link from "next/link";
import listOutline from '@/assets/list-outline.svg';
import refresh from '@/assets/refresh-solid.svg';
import stats from '@/assets/stats.svg';
import { NextRouter, useRouter } from "next/router";
import ToolTip from "../ToolTip/Tooltip";

const SideNav:FC<{}> = () => {
    const router: NextRouter = useRouter();
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    return (
        <div className={styles.navContainer}>
            <Image src={"/logo.svg"} alt={"A vector icon of a bit taken cookie"} width="45" height="45" className={styles.navLogo}/>
            <nav className={styles.nav}>
                <Link
                    href={"/"}
                    className={router.pathname === '/' ?  `${styles.navLink} ${styles.navLink__active}` : `${styles.navLink}`}
                >
                    <ToolTip
                        content="Items"
                        position="right"
                        trigger={
                            <Image src={listOutline} alt={"A list icon with bullet list"} width="30" height="30"/>
                        }
                    />
                </Link>
                <Link
                    href={"/history"}
                    className={router.pathname === '/history' ? `${styles.navLink} ${styles.navLink__active}` : styles.navLink}
                >
                    <ToolTip
                        content="History"
                        position="right" 
                        trigger={
                            <Image src={refresh} alt={"A refresh icon"} width="30" height="30"/>
                        }
                    />
                </Link>
                <Link
                    href={"/statistics"}
                    className={router.pathname === '/statistics' ? `${styles.navLink} ${styles.navLink__active}` : styles.navLink}
                >
                    
                    <ToolTip
                        content="Stats"
                        position="right"
                        trigger={
                            <Image src={stats} alt={"A icon depicting bar chart inside a box"} width="30" height="30"/>
                        }
                    />
                </Link>
            </nav>
        </div>
    )
}

export default SideNav