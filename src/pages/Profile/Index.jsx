import { Grid } from "@mui/material";
import * as React from 'react';
import { useLayoutEffect, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import styles from './Profile.module.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardRepos } from "../../components/Cards/indexRepos";
import { CardProfile } from "../../components/Cards/indexDetailsProfile";
import { NavBar } from "../../components/navBar";

export function Profile() {
    const { user } = useParams();
    const [listUser, setListUser] = useState({});
    const [listRepositorio, setlistRepositorio] = useState([]);

    useEffect(() =>{
        const data = async () => {
            await axios
                .get(`https://api.github.com/users/${user}`)
                .then(async (Response) => {
                    setListUser(Response.data);

                    await axios
                        .get(`https://api.github.com/users/${user}/repos`)
                        .then((res) => {
                            setlistRepositorio(res.data && res.data.sort((a, b) => b.stargazers_count - a.stargazers_count));
                        })
                        .catch(e => console.log(e));
                })
                .catch(e => console.log(e));
        };
        data();
    }, []);

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.112)";
    });

    return (
        <>
        <div className={styles.navbar}>
            <NavBar user={user}/>
        </div>

        <Grid className={styles.grid} container spacing={4}>
            <Grid item md={2}>
                <CardProfile
                    img={listUser.avatar_url}
                    name={listUser.name}
                    login={listUser.login}
                    bio={listUser.bio}
                    followers={listUser.followers}
                    following={listUser.following}
                    company={listUser.company}
                    location={listUser.location}
                    email={listUser.email}
                    blog={listUser.blog}
                    twitter={listUser.twitter_username} />
                <br />
                <div className={styles.contato}>
                    <Button variant='contained'>CONTATO</Button>
                </div>
            </Grid>

            <Grid item  md={8}>
                <Card sx={{ minWidth: 275 }}>
                    {listRepositorio && listRepositorio.map((obj) => {
                        return (
                            <CardRepos
                                user={user}
                                reposName={obj.name}
                                stars={obj.stargazers_count}
                                description={obj.description}
                                update={obj.updated_at} />
                        );
                    })}
                </Card>
            </Grid>
        </Grid>
        </>
    );
}