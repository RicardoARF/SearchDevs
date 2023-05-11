import styles from '../pages/Profile/Profile.module.css';

export function NavBar({user}){
    return(
        <>
            <div className={styles.logoName}>
                <label className={styles.searchTittle}>Search</label>
                <label className={styles.devsTitle}>d_evs</label>
            </div><div>
                <input type="text" placeholder={user}></input>
            </div>
        </>
    );
}