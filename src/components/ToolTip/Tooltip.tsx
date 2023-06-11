import {FC, ReactNode} from 'react';
import styles from '@/components/ToolTip/ToolTip.module.css';
import { JsxElement } from 'typescript';

interface IToolTipProps {
    position: "top" | "left" | "right" | "bottom"
    content: string
    trigger: ReactNode
}


const ToolTip:FC<IToolTipProps> = (props) => {
    const {position, content, trigger} = props;
    return (
        <>
            <div className={styles.tooltipTrigger}>
                {trigger}
            </div>
            <p className={`${styles.tooltip} ${styles['tooltip-'+position]}`}>{content}</p>
        </>
    )
}

export default ToolTip;