import { Typography } from "@mui/material";
import styles from "./OfferBig.module.css";
import RatingTag from "./ratingTag";

export default function OfferBig() {
  return (
    <div className={styles.container}>
      <div className={styles.pictures}></div>

      <div className={styles.info}>
        <div className={styles.price}>
          <Typography variant="h3" sx={{ fontWeight: "600" }}>
            $1,200,000
          </Typography>
        </div>
        <div className={styles.address}>
          <Typography variant="h5">
            22055 White Stone Road, Marysville OH
          </Typography>
        </div>
        <div className={styles.details}>
          <div className={styles.beds}>
            <Typography variant="h4">3</Typography>
          </div>
          <div className={styles.baths}>
            <Typography variant="h4">2</Typography>
          </div>
          <div className={styles.sqft}>
            <Typography variant="h4">2,789</Typography>
          </div>
        </div>
        <div className={styles.detailsTitle}>
          <div className={styles.beds}>
            <Typography variant="h5">beds</Typography>
          </div>
          <div className={styles.baths}>
            <Typography variant="h5">baths</Typography>
          </div>
          <div className={styles.sqft}>
            <Typography variant="h5">sqft</Typography>
          </div>
        </div>
        <button className={styles.infoButton}>
            <Typography variant="h5">Submit offer</Typography>
        </button>
        <div className={styles.estimation}>
            <Typography variant="h5" sx={{fontWeight: "600"}}>Est: $3,287,567</Typography>
        </div>
      </div>

      <Typography variant="h4">Agent Report</Typography>
      <div className={styles.agentReport}>
        <div className={styles.report}>
          <div className={styles.rating}>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Rating
              <div style={{ display: "inline-block", width: "20px" }}></div>
              <span
                className="fa fa-star"
                style={{ color: "#14B49C", width: "30px" }}
              ></span>
              <span
                className="fa fa-star"
                style={{ color: "#14B49C", width: "30px" }}
              ></span>
              <span
                className="fa fa-star"
                style={{ color: "#14B49C", width: "30px" }}
              ></span>
              <span
                className="fa fa-star"
                style={{ color: "#14B49C", width: "30px" }}
              ></span>
              <span className="fa fa-star"></span>
            </Typography>
            <div className={styles.tags}>
              <RatingTag text="Professionalism" />
              <RatingTag text="Communication" />
              <RatingTag text="Expertise" />
              <RatingTag text="Negotiation" />
              <RatingTag text="Market Knowledge" />
              <RatingTag text="Responsiveness" />
            </div>
          </div>
          <div className={styles.summary}>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Summary
            </Typography>
            <ul className={styles.lists}>
              <li>
                Meticulous 20-year renovation combining modern efficiency with
                original charm.
              </li>
              <li>
                Major updates: drywall, plumbing, electrical wiring, HVAC
                systems.
              </li>
              <li>
                Serene exterior: park-like front porch, bamboo-lined backyard,
                paver patios, koi pond, fruit trees, vibrant perennials.
              </li>
              <li>
                Interior highlights: formal dining room with antique chandelier,
                modern eat-in kitchen, cozy enclosed back porch.
              </li>
              <li>
                Spacious owners' bedroom with unique bath featuring a claw-foot
                tub.
              </li>
              <li>
                Historical elegance and contemporary comfort, approx. 1,800
                square feet, surrounded by beautiful garden areas.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
    </div>
  );
}
