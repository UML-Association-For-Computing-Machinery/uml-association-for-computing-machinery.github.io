import styles from './styles.module.css';
import Link from '@docusaurus/Link';

/**
 * 
 * @param {*} title card topic 
 * @param {*} description paragraph about the topic
 * @param {*} buttonTitle self-explanatory
 * @param {*} buttonLink link displayed after clicking button
 * @returns A card containing information about the club and additional resources
 * 
 * Made using the Infima library:
 * 
 * Date created: August 17th 2025 
 */
export default function Feature({title, description, buttonTitle, buttonLink}) {
  return (
    <div className={"card infocard"}>
      <div className="card__header text--center">
        <h3>{title}</h3>
      </div>
      <div className={"card__body text--center"}>
        <p>{description}</p>
      </div>
      <div className={"card__footer"}>
        <Link className="button button--secondary button--block" to={buttonLink}>{buttonTitle}</Link>
      </div>
    </div>
  );
}