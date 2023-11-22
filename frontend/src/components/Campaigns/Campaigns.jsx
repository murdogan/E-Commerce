import CampaingsItem from "./CampaingsItem";
import "./Campaings.css";

const Campaigns = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaingsItem />
          <CampaingsItem />
        </div>
        <div className="campaigns-wrapper">
          <CampaingsItem />
          <CampaingsItem />
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
