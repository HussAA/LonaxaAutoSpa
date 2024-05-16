import React from "react";
import styled from "@emotion/styled";
import { TawkContext } from "../providers";
const FooterContainer = styled.footer`
  background: #24262b;
  text-align: center;
  min-height: 150px;
  padding: 35px;
`;
const FooterBottom = styled.div`
  min-height: 35px;
  background: #1b1d21;
`;
const Icon = styled.i`
  font-size: 20px;
  margin: 10px;
  color: white;
  transition: 0.2s;
`;
const Footerlink = styled.a`
  font-size: 15px;
  margin: 8px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: grey;
  }
`;

const MyLink = styled.a`
  text-decoration: none;
  color: #62cbe3;
  transition: 0.3s;
  :hover {
    color: #53A9BD;
  }
`;
const Footer = () => {
  const { tawkMessenger } = React.useContext(TawkContext);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <FooterContainer>
        <div>
          <a
            href="https://www.instagram.com/lonaxa.auto.spa/"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <Icon className="bi bi-instagram" />
          </a>
          <a
            href="https://www.google.com/search?q=lonaxa+autospa+london+ontario&sca_esv=697ef796fdf142b1&rlz=1C1CHBF_enCA931CA931&biw=1195&bih=1011&sxsrf=ADLYWIIgB-3Am3fD4BnES2NbJ9rLwQFY7g%3A1715808229890&ei=5SdFZpD_NeGB0PEPlbSlmA0&oq=lonaxa+autospa+london&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWxvbmF4YSBhdXRvc3BhIGxvbmRvbioCCAAyBRAhGKABMgUQIRigAUj2EFBlWOgLcAF4AZABAJgBdaABkwWqAQM1LjK4AQPIAQD4AQGYAgigAqIFwgIKEAAYsAMY1gQYR8ICBxAhGKABGAqYAwCIBgGQBgiSBwM2LjKgB78X&sclient=gws-wiz-serp#lrd=0x6d594109faf4733:0x1172567e0a1f68c9,1,,,,"
            target="_blank"
            rel="noreferrer"
            aria-label="google"
          >
            <Icon className="bi bi-google" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:Kingsautozone@gmail.com"
            aria-label="email"
          >
            <Icon className="bi bi-envelope-plus" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="tel:+12269985884"
            aria-label="phone"
          >
            <Icon className="bi bi-telephone" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@kingsautozone_yeg"
            aria-label="tiktok"
          >
            <Icon className="bi bi-tiktok" />
          </a>
        </div>
        <div className="p-3 d-flex flex-column flex-md-row justify-content-center align-items-center">
          <Footerlink href="#About">About</Footerlink>
          <Footerlink
            onClick={() => {
              tawkMessenger.toggle();
            }}
          >
            Book Now
          </Footerlink>
          <Footerlink href="#Packages">Packages</Footerlink>
          <Footerlink href="#Services">Services</Footerlink>
          <Footerlink onClick={scrollTop}>Back To Top</Footerlink>
        </div>
      </FooterContainer>
      <FooterBottom>
        <div
          className="text-center p-2"
          style={{ color: "white", fontSize: 15 }}
        >
          Copyright © {new Date().getFullYear()}; Built by {""}
          <MyLink
            target="_blank"
            rel="noreferrer"
            href="https://hussainalnakhli.com/"
          >
            Hussain Alnakhli
          </MyLink>
        </div>
      </FooterBottom>
    </>
  );
};

export default Footer;

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const TransitionsModal = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Footerlink onClick={handleOpen}>Terms & Conditions</Footerlink>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         disableScrollLock={true}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//             <Typography id="transition-modal-title" variant="h6" component="h2">
//               Terms & Conditions
//             </Typography>
//             <Typography id="transition-modal-description" sx={{ mt: 2}}>
//               <i class="bi bi-star-half" /> Customers should remove all the
//               personal belongings and other valuable items from their vehicle
//               prior to any type of detailing. We are not responsible for any
//               lost valuables. <br />
//               <br />
//               <i class="bi bi-star-half" /> Kings Autozone will not accept any
//               liability for any loss or damage to any personal any missed-out
//               spots to be done again. property including the vehicle being
//               serviced or any belongings contained inside of the vehicle. <br />
//               <br />
//               <i class="bi bi-star-half" /> All vehicles are cleaned at the
//               customers own risk and must withstand normal cleaning processes.
//               Please let us know if your car has any battery or other mechanical
//               issues. <br />
//               <br />
//               <i class="bi bi-star-half" /> We cannot guarantee any firm times
//               when accepting your booking. Our detailing times are an estimate
//               only. Each vehicle is different and may require more or less time
//               to fulfill the detailing type.
//               <br />
//               <br />
//               <i class="bi bi-star-half" /> We are not responsible for the
//               engine lights or other indicators on the dash if you choose a
//               package that includes engine shampoo.
//               <br />
//               <br />
//               <i class="bi bi-star-half" /> Please inspect your vehicle properly
//               before leaving the shop. Let us know if you want
//             </Typography>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// };
