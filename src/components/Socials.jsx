

function Socials({ email = 'cfiske09@gmail.com', subject = '', body = '' }) {

    const onLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/collinfiske/', '_blank', 'noopener,noreferrer');
    };
    const onGithubClick = () => {
        window.open('https://github.com/CollinFiske', '_blank', 'noopener,noreferrer');
    };
    const onEmailClick = () => {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };


    return (
      <div className="logos">

        <img onClick={onLinkedInClick} className="logo" alt="linkedin logo and link" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"/>
        <img onClick={onGithubClick} className="logo" alt="github logo and link" src="https://cdn.icon-icons.com/icons2/3685/PNG/512/github_logo_icon_229278.png"/>
        <img onClick={onEmailClick} className="logo" alt="gmail logo and link" src="https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png"/>

      </div>
    );
  }
  
  export default Socials;
  