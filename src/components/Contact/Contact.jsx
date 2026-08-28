import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { useIsland } from '../../context/IslandContext';
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  GlobeIcon,
  MediumIcon,
  SubstackIcon,
  LeetcodeIcon,
  PhoneIcon,
} from '../icons/Icons';
import { contactChannels, profile } from '../../data/portfolio';
import styles from './Contact.module.css';

const iconMap = {
  mail: MailIcon,
  phone: PhoneIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  website: GlobeIcon,
  medium: MediumIcon,
  substack: SubstackIcon,
  leetcode: LeetcodeIcon,
};

export default function Contact() {
  const { notify } = useIsland();
  const [copiedId, setCopiedId] = useState(null);

  async function handleChannelClick(event, channel) {
    if (channel.action !== 'copy') return;
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(channel.value);
    } catch {
      window.location.href = channel.href;
      return;
    }

    setCopiedId(channel.id);
    notify(`${channel.label} copied to clipboard`, 'check', 2000);
    window.setTimeout(() => {
      setCopiedId((current) => (current === channel.id ? null : current));
    }, 2000);
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={`container ${styles.inner}`}>
        <SectionHeading id="contact-heading" title="Get In Touch" align="center" />

        <Reveal as="p" className={styles.lede}>
          Have a project in mind or just want to say hello? My inbox is always open — I try to reply
          within a day or two.
        </Reveal>

        <Reveal delay={0.08} className={styles.ctaWrap}>
          <Button as="a" href={`mailto:${profile.email}`} variant="primary" size="lg" icon={<ArrowUpRightIcon />}>
            Say Hello
          </Button>
        </Reveal>

        <ul className={styles.channels}>
          {contactChannels.map((channel, index) => {
            const Icon = iconMap[channel.icon];
            const isCopied = copiedId === channel.id;
            return (
              <Reveal as="li" key={channel.id} delay={0.14 + index * 0.06}>
                <a
                  href={channel.href}
                  target={channel.action === 'link' ? '_blank' : undefined}
                  rel={channel.action === 'link' ? 'noreferrer' : undefined}
                  className={styles.channel}
                  onClick={(event) => handleChannelClick(event, channel)}
                >
                  <span className={styles.channelIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={styles.channelText}>
                    <span className={styles.channelLabel}>{channel.label}</span>
                    <span className={styles.channelValue}>{channel.value}</span>
                  </span>
                  <span className={styles.channelAction} aria-hidden="true">
                    {channel.action === 'copy' ? isCopied ? <CheckIcon /> : <CopyIcon /> : <ArrowUpRightIcon />}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
