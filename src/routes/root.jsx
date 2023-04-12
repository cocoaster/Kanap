export default function Root() {
    return (
      <>
        <div className="header">
          <img src="../assets/Logo_text.png" alt="logo" />
        <nav>
          <ul>
            <li>
              <a href={`/`}>Accueil</a>
            </li>
            <li>
              <a href={`/A_Propos`}>A Propos</a>
            </li>
          </ul>
        </nav>
      </div>
      </>
    );
  }