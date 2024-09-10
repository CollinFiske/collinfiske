

function Socials() {

    const onLinkedInClick = () => {
        //
    };
    const onGithubClick = () => {
        //
    };
    const onEmailClick = () => {
        //
    };

    return (
      <div className="logos">

        <img onClick={onLinkedInClick} className="logo" alt="linkedin logo and link"/>
        <img onClick={onGithubClick} className="logo" alt="github logo and link"/>
        <img onClick={onEmailClick} className="logo" alt="gmail logo and link"/>

      </div>
    );
  }
  
  export default Socials;
  