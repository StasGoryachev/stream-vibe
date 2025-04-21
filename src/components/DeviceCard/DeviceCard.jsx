import './DeviceCard.scss'

const DeviceCard = (props) => {        
   const {
      title,
      description,
      imgSrc,
   } = props
   return ( 
      <div className="device-card">
      <header className="device-card__header"></header>
      <div className="device-card__description"></div>
      </div>
    );
}
 
export default DeviceCard;