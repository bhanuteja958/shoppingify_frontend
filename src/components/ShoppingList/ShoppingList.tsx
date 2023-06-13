import {FC, useState} from 'react';
import styles from '@/components/ShoppingList/ShoppingList.module.css';
import Image from 'next/image';
import bottle from '@/assets/bottle.svg';
import shoppingCart from '@/assets/shopping-cart.svg';

const ShoppingList:FC<{}> = () => {
    const [items, setItems] = useState<any[]>([]);
    return (
        <section className={styles.shoppingListContainer}>
            <div className={styles.addItemContainer}>
                <Image
                    src={bottle}
                    alt={"A wine colored bottle tilted to the left"}
                    className={styles.itemSvg}
                />
                <div className={styles.addItem}>
                    <p className={styles.addItemTitle}>Didn't find what you <br/>need?</p>
                    <button type="button" className={styles.addItemBtn}>Add Item</button>
                </div>
            </div>
            <div className={styles.shoppingList}>
                <div className={styles.noItemsContainer}>
                    <p>No Items</p>
                    <Image
                        src={shoppingCart}
                        alt={"Grahic of a female moving a shopping cart"}
                        className={styles.shoppingCartSvg}
                    />
                </div>
            </div>
            <div className={styles.addListContainer}>
                <div className={styles.addInputContainer}>
                    <input type="text" className={styles.addInput} placeholder='Enter a name'/>
                    <button type='button' className={styles.saveBtn}>Save</button>
                </div>
            </div>
        </section>
    ) 
};

export default ShoppingList;