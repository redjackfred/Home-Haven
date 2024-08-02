import { Typography } from "@mui/material";
import styles from "./RatingTag.module.css";


export default function RatingTag({text, svg}: {text: string, svg: JSX.Element}) {
 return(
    <div className={styles.rating}>           
        <Typography variant="h5">{svg} {text}</Typography>
    </div>
 );   
}
