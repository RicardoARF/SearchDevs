import Button from '@mui/material/Button';
import styles from './Home.module.css';
import { useState } from 'react';

export function Home(){
    const [user, setUser] = useState('')

    const handleSearch = async () => {
        window.location.href=`/profile/${user}`;
    }

    return(
        <>
        <div className={styles.title}>
            <label className={styles.searchTittle}>Search</label>
            <label className={styles.devsTitle}>d_evs</label>
        </div>
        <div className={styles.search}>
            <input type='text' placeholder='search' onChange={(e) => setUser(e.target.value)}/>
            <Button onClick={() => handleSearch()} variant='contained'>Search</Button>
        </div>
        </>
    );
}