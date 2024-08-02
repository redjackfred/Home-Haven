import { Typography } from "@mui/material";
import styles from "./RatingTag.module.css";

export default function RatingTag({text}: {text: string}) {
 return(
    <div className={styles.rating}>
        <Typography variant="h5">{text}</Typography>
    </div>
 );   
}
