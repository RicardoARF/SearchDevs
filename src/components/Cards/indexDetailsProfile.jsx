import { Card, CardContent, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";
import styles from '../../pages/Profile/Profile.module.css';

export function CardProfile({img, name, login, bio, followers, following, company, location, email, blog, twitter}) {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className={styles.details}>
                    <img className={styles.image} src={img} alt="" /> 
                    <div>
                        <a className={styles.name}>{name}</a>
                        <br/>
                        @{login}
                    </div>
                </div>
                <br/>
                {bio != null &&
                    <Typography variant="body2">
                        {bio}
                    </Typography>
                }
                <br/>
                {followers != null &&
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div className={styles.stars}>
                            <GroupsIcon />
                            <div style={{ marginLeft: 10 }}>
                                {followers} seguidores
                            </div>
                        </div>
                    </Typography>
                }
                {following != null &&
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div className={styles.stars}>
                            <FavoriteIcon />
                            <div style={{ marginLeft: 10 }}>
                                {following} seguindo
                            </div>
                        </div>
                    </Typography>
                }
                {company != null &&
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div className={styles.stars}>
                            <BusinessIcon />
                            <div style={{ marginLeft: 10 }}>
                                {company}
                            </div>
                        </div>
                    </Typography>
                }
                {location != null &&
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div className={styles.stars}>
                            <LocationOnIcon />
                            <div style={{ marginLeft: 10 }}>
                                {location}
                            </div>
                        </div>
                    </Typography>
                }
                {email != null &&
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div className={styles.stars}>
                            <EmailIcon />
                            <div style={{ marginLeft: 10 }}>
                                {email}
                            </div>
                        </div>
                    </Typography>
                }
                {blog != null &&
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                         <div className={styles.stars}>
                            <LinkIcon />
                            <div style={{ marginLeft: 10 }}>
                                <Link to={`${blog}`} target="_blank">{blog}</Link>
                            </div>
                        </div>
                    </Typography>
                }
                {twitter != null &&
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                         <div className={styles.stars}>
                            <TwitterIcon />
                            <div style={{ marginLeft: 10 }}>
                                <Link to={`https://twitter.com/${twitter}`} target="_blank">@{twitter}</Link>
                            </div>
                        </div>
                    </Typography>
                }
            </CardContent>
        </Card>
    );
}