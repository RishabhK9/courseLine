import { StaticImageData } from 'next/image';

// Icons
import alert from './icons/alert.png';
import help from './icons/help.png';
import check from './icons/check.png';
import closeButton from './icons/closeButton.png';
import darkMode from './icons/dark.png';
import discord from './icons/discord.png';
import explore from './icons/explore.png';
import fire from './icons/fire.png';
import home from './icons/home.svg';
import instagram from './icons/instagram.png';
import lightMode from './icons/light.png';
import linkedin from './icons/linkedin.png';
import loudspeaker from './icons/loudspeaker.svg';
import magic from './icons/magic.png';
import notDone from './icons/notDone.png';
import paperclip from './icons/paperclip.png';
import plus from './icons/plus.png';
import plusThick from './icons/plusThick.png';
import plusThickDark from './icons/plusThickDark.png';
import redirect from './icons/redirect.png';
import rightArrow from './icons/rightArrow.png';
import backArrow from './icons/backArrow.png';
import rocket from './icons/rocket.png';
import sampleProfilePic from './icons/sampleProfilePic.png';
import settings from './icons/settings.svg';
import twitter from './icons/twitter.png';
import bookmark from './icons/bookmark.svg';
import search from './icons/search.png';
import filter from './icons/filter.png';
import display from './icons/display.png';
import github from './icons/github.png';
import figma from './icons/figma.png';

// Black Icons
import discordBlack from './icons/discordBlack.png';
import instagramBlack from './icons/instagramBlack.png';
import linkedinBlack from './icons/linkedinBlack.png';
import locationPin from './icons/locationPin.png';
import locationPinTwoX from './icons/locationPinTwoX.png';
import locationShadow from './icons/locationShadow.png';
import paperclipBlack from './icons/paperclipBlack.png';
import twitterBlack from './icons/twitterBlack.png';


// ... (rest of the file remains the same)

type ImagesType = {
    [key: string]: StaticImageData;
    // Icons
    alert: StaticImageData;
    help: StaticImageData;
    check: StaticImageData;
    plus: StaticImageData;
    closeButton: StaticImageData;
    darkMode: StaticImageData;
    discord: StaticImageData;
    explore: StaticImageData;
    fire: StaticImageData;
    home: StaticImageData;
    instagram: StaticImageData;
    lightMode: StaticImageData;
    linkedin: StaticImageData;
    loudspeaker: StaticImageData;
    magic: StaticImageData;
    notDone: StaticImageData;
    paperclip: StaticImageData;
    plusThick: StaticImageData;
    plusThickDark: StaticImageData;
    redirect: StaticImageData;
    rightArrow: StaticImageData;
    backArrow: StaticImageData;
    rocket: StaticImageData;
    sampleProfilePic: StaticImageData;
    settings: StaticImageData;
    twitter: StaticImageData;
    bookmark: StaticImageData;
    search: StaticImageData;
    filter: StaticImageData;
    display: StaticImageData;
    github: StaticImageData;
    figma: StaticImageData;

};

const Images: ImagesType = {
    alert,
    help,
    check,
    plus,
    closeButton,
    darkMode,
    discord,
    explore,
    fire,
    home,
    instagram,
    lightMode,
    linkedin,
    loudspeaker,
    magic,
    notDone,
    paperclip,
    plusThick,
    plusThickDark,
    redirect,
    rightArrow,
    backArrow,
    rocket,
    sampleProfilePic,
    settings,
    twitter,
    bookmark,
    search,
    filter,
    display,
    github,
    figma,
    discordBlack,
    instagramBlack,
    linkedinBlack,
    locationPin,
    locationPinTwoX,
    locationShadow,
    paperclipBlack,
    twitterBlack,
};

export default Images;
