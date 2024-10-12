import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export const PLATFORMS_NAME = {
    GITHUB: 'Github',
    YOUTUBE: 'Youtube',
    LINKEDIN: 'LinkedIn',
    TWITTER: 'Twitter',
} as const;

export const PLATFORMS = [
    { name: PLATFORMS_NAME.GITHUB, prefix: 'https://www.github.com/' },
    { name: PLATFORMS_NAME.YOUTUBE, prefix: 'https://www.youtube.com/' },
    { name: PLATFORMS_NAME.LINKEDIN, prefix: 'https://www.linkedin.com/' },
    { name: PLATFORMS_NAME.TWITTER, prefix: 'https://www.twitter.com/' },
];

export const PLATFORMS_ICONS = {
    [PLATFORMS_NAME.GITHUB]: { icon: FaGithub, bgColor: '#333' },
    [PLATFORMS_NAME.YOUTUBE]: { icon: FaYoutube, bgColor: '#ff0000' },
    [PLATFORMS_NAME.LINKEDIN]: { icon: FaLinkedin, bgColor: '#0077b5' },
    [PLATFORMS_NAME.TWITTER]: { icon: FaTwitter, bgColor: '#1da1f2' },
};
