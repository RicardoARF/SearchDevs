import { CardContent, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import moment from "moment/moment";
import styles from '../../pages/Profile/Profile.module.css';

export function CardRepos({reposName, stars, description, update}) {

    const today = moment();
    const days = today.diff(update, "days");

    return (
        <CardContent>
            <Typography style={{fontWeight: "bold"}} variant="h5" component="div">
                {reposName}
            </Typography>
            <br/>
            <Typography variant="body2">
               {description}
            </Typography>
            <br/>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <div className={styles.stars}>
                    <StarBorderIcon />
                    <div style={{marginLeft: 5}}>
                        {stars} <a style={{fontWeight: "bolder", fontSize: 25}}>.</a> Atualizado há {days} dias
                    </div>
                </div>
            </Typography>
            <hr />
        </CardContent>
    );
}