"use client";

import { getIconForPlatform } from "@/app/constants";
import { Icons } from "@/assets";
import type { Links } from "@/types/links";
import type { UserRaw } from "@/types/users";
import Image from "next/image";
import styles from "./index.module.scss";

interface ProfileProps {
  profile: UserRaw;
}

interface LinksProps {
  links: Links;
}

interface PhoneDisplayProps {
  profile: UserRaw;
  links: Links;
  asEdit: boolean;
}

function Profile({ profile }: ProfileProps) {
  const { emailAddress, imgSrc } = profile ?? {};

  return (
    <div className={styles.profile}>
      {profile ? (
        <>
          {imgSrc ? (
            <Image
              src={imgSrc!}
              alt={`${emailAddress}`}
              className="profileImage"
            />
          ) : (
            <div className="placeholderImage" />
          )}
          <div className={styles.names}>
            <span className={styles.firstName}>{emailAddress}</span>
            <span className={styles.lastName}>{"devlinks"}</span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.placeholderImage} />
          <div className={styles.placeholderNames}>
            <span className={styles.placeholderFirstName} />
            <span className={styles.placeholderLastName} />
          </div>
        </>
      )}
    </div>
  );
}

function LinksSection({ links }: LinksProps) {
  return (
    <div className={styles.linksSection}>
      {links.length > 0 ? (
        <div className={styles.links}>
          {links.map((link, index) => {
            const IconComponent = getIconForPlatform(link.platform!);

            return (
              <div
                style={{ backgroundColor: link.brandColor, color: "white" }}
                key={link.id}
                className={styles.link}
              >
                <span>
                  {IconComponent && <IconComponent className="icon" />}
                </span>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
                <Icons.ArrowRight
                  className="icon"
                  style={{ marginLeft: "auto" }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.empty}>
          <div className={styles.placeholderLink} />
          <div className={styles.placeholderLink} />
          <div className={styles.placeholderLink} />
          <div className={styles.placeholderLink} />
        </div>
      )}
    </div>
  );
}

export default function PhoneDisplay({ profile, links }: PhoneDisplayProps) {
  return (
    <div className={styles.phoneDisplay}>
      <Icons.SvgPhone />
      <div className={styles.content}>
        <Profile profile={profile} />
        <LinksSection links={links} />
      </div>
    </div>
  );
}
