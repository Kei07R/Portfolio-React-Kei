export const ExperienceSection = () => {
    return (
      <section id="experience" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>
  
          <div className="space-y-6">
          <div className="gradient-border p-6 card-hover">
              <h4 className="font-semibold text-lg mb-1">
                Full-Stack Intern – Dataintelo
              </h4>
              <p className="text-muted-foreground mb-1 text-sm">
                Feb 2025 – Current
              </p>
              <p className="text-muted-foreground text-left">
                Working on developing a mobile appliction personality checker mobile app that 
                offers multiple types of quizzes (e.g., personality tests, couple compatibility tests, 
                career aptitude assessments, etc.) with a strong emphasis on shareability, 
                social engagement, and personalized insights.
              </p>
            </div>

            <div className="gradient-border p-6 card-hover">
              <h4 className="font-semibold text-lg mb-1">
                Full-Stack Intern – Colgate Global Business Services
              </h4>
              <p className="text-muted-foreground mb-1 text-sm">
                June 2024 – Dec 2024
              </p>
              <p className="text-muted-foreground text-left">
                Developed dashboard components using React and integrated REST APIs.
                Collaborated in agile sprints to deliver scalable web features.
              </p>
            </div>
  
            <div className="gradient-border p-6 card-hover">
              <h4 className="font-semibold text-lg mb-1">
                Open Source Contributor – Hacktoberfest
              </h4>
              <p className="text-muted-foreground mb-1 text-sm">
                Oct 2023
              </p>
              <p className="text-muted-foreground text-left">
                Contributed to React-based projects, resolving issues, and submitting meaningful PRs
                across GitHub repositories.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  