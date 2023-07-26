export default function UserInformation({
  name = "",
  aboutMe = "",
  socialNetwork = [],
}) {
  return (
    <div>
      <div className="photo-social-media">
        <img alt="shows the user's profile" className="photo" />
        <div>
          {socialNetwork.map((social)=>{
            return (<a href={social.url}>
            <img alt={"shows the "+social.name+"'s icon"} src={social.urlLogo}></img>
          </a>)
          })}
        </div>
      </div>
      <div className="title-description">
        <h1>Hola, soy {name}</h1>
        <p>{aboutMe}</p>
      </div>
    </div>
  );
}
