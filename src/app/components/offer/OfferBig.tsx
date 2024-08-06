"use client";
import { Typography } from "@mui/material";
import styles from "./OfferBig.module.css";
import RatingTag from "./RatingTag";
import { HomeType } from "@/app/utils/data";
import { svgs } from "@/app/utils/icons";
import { useState } from "react";
import Offer from "./Offer";

export default function OfferBig({
  home,
  onSubmit,
  onClick,
}: {
  home: HomeType;
  onSubmit?: (number) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.container} onClick={onClick}>
      {showPopup && (
        <div className={styles.showOffer} onClick={()=>setShowPopup(false)}>
          <Offer home={home} onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}/>
        </div>
      )}

      <div className={styles.pictures}>
        <img
          src={home.image_url[0]}
          alt="House"
          className={styles.mainPicture}
        />

        {home.image_url.map((url, index) => {
          if (index > 0 && index < 5) {
            return <img src={url} alt="House" className={styles.picture} />;
          }
        })}
      </div>

      <div className={styles.info}>
        <div className={styles.price}>
          <Typography variant="h3" sx={{ fontWeight: "500" }}>
            {home.price.toLocaleString('en-US',{
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
          </Typography>
        </div>
        <div className={styles.address}>
          <Typography variant="h5">
            {home.address}, {home.city}, {home.zip_code}
          </Typography>
        </div>
        <div className={styles.details}>
          <div className={styles.beds}>
            <Typography variant="h4">{home.bedrooms}</Typography>
          </div>
          <div className={styles.baths}>
            <Typography variant="h4">{home.bathrooms}</Typography>
          </div>
          <div className={styles.sqft}>
            <Typography variant="h4">{home.square_feet}</Typography>
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
        <button
          className={styles.infoButton}
          onClick={() => setShowPopup(true)}
        >
          <Typography variant="h5">Submit offer</Typography>
        </button>
        <div className={styles.estimation}>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Est: $8,200
          </Typography>
        </div>
      </div>

      <Typography variant="h4">Agent Report</Typography>
      <div className={styles.agentReport}>
        <div className={styles.report}>
          <div className={styles.rating}>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Rating
              <div style={{ display: "inline-block", width: "40px" }}></div>
              <span
                className="fa fa-star"
                style={{ color: "#14B49C", width: "45px" }}
              ></span>
              <span
                className="fa fa-star"
                style={{ color: "#14B49C", width: "45px" }}
              ></span>
              <span
                className="fa fa-star"
                style={{ color: "#14B49C", width: "45px" }}
              ></span>
              <span
                className="fa fa-star"
                style={{ color: "#14B49C", width: "45px" }}
              ></span>
              <span className="fa fa-star"></span>
            </Typography>
            <div className={styles.tags}>
              <RatingTag text="Good Neighbor" svg={svgs[0]} />
              <RatingTag text="Priced to sell" svg={svgs[1]} />
              <RatingTag text="Portfolio match" svg={svgs[2]} />
              <RatingTag text="Excellent schools" svg={svgs[2]} />
              <RatingTag text="Example tag" svg={svgs[2]} />
              <RatingTag text="Example tag" svg={svgs[2]} />
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
