import Header from "./component/Headers";
import PersonalInfo from "./component/PersonalInfo";

function App() {
    function handleScrollToSection(event, sectionId) {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
      <div>
          <Header/>
          <main>
              <section id={"about"}>
                  <PersonalInfo/>
              </section>
              <hr/>
          </main>
      </div>
  );
}

export default App;
