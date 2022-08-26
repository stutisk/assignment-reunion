import styles from "../HouseTypeModal/HouseTypeModal.module.css"
const HouseTypeModal = () => {
    return(
        <div className={`${styles.housetypeModal} border-radius1 btn-padding `}>
      <div >Townhomes</div>
      <div className=" margin-top">Multi-family</div>
      <div className=" margin-top">Lots/Land</div>
      <div className=" margin-top">Appartment</div>
      
    </div>
    )
}
export {HouseTypeModal}