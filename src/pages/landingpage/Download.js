import React from "react";
import phone from "../../assets/phone1.png";
import bitcoin from "../../assets/btc.png";
import naira from "../../assets/ngr.png";
import eth from "../../assets/eth.png";
import { RiArrowRightSFill } from "react-icons/ri";
import {
  DownloadBigText,
  DownloadContainer,
  DownloadLinkContainer,
  DownloadSmallText,
  DownloadLinkText,
  DownloadFooterText,
  DownloadButton,
  DownloadFooterContainer,
  Bitcoin,
  Naira,
  Eth,
  DownloadImg,
  DownloadFlex,
  color,
} from "../../components/StyledComponent";

const Download = () => {
  return (
    <div>
      <DownloadContainer>
        <DownloadImg src={phone} alt="phone" />
        <DownloadBigText>Install the App today</DownloadBigText>
        <DownloadSmallText>
          The Progressive Web App works just like your regular App, it’s super
          easy and convenient. To instal, please follow the process below.
        </DownloadSmallText>
        <DownloadLinkContainer>
          <DownloadFlex>
            <RiArrowRightSFill size={30} color={color.secondary}/>
            <DownloadLinkText>
              Launch www.jupitapp.com/signin from your mobile device or tablet.
            </DownloadLinkText>
          </DownloadFlex>
          <DownloadFlex >
            <RiArrowRightSFill size={50} color={color.secondary}/>
            <DownloadLinkText>
              Navigate to the browser option on your android device or tap the
              share button on your IOS device.
            </DownloadLinkText>
          </DownloadFlex>
          <DownloadFlex>
            <RiArrowRightSFill size={20} color={color.secondary}/>
            <DownloadLinkText>Select Add Page to Home Screen.</DownloadLinkText>
          </DownloadFlex>
          <DownloadFlex>
            <RiArrowRightSFill size={30} color={color.secondary}/>
            <DownloadLinkText>
              Return to home menu to launch the application shortcut.
            </DownloadLinkText>
          </DownloadFlex>
        </DownloadLinkContainer>
        <DownloadFooterContainer>
          <DownloadFooterText>
            Join our 3,620 and counting user today and start transacting
            seamlessly
          </DownloadFooterText>
          <DownloadButton>Get Started</DownloadButton>
          <Bitcoin src={bitcoin} alt="bitcoin" />
          <Naira src={naira} alt="naira" />
          <Eth src={eth} alt="eth" />
        </DownloadFooterContainer>
      </DownloadContainer>
    </div>
  );
};

export default Download;
