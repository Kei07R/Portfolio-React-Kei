export const EducationSection = () => {
    return (
      <section id="education" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Education <span className="text-primary">Background</span>
          </h2>
  
          <div className="gradient-border p-8 rounded-2xl bg-card shadow-md card-hover space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-muted-foreground">
                MIT Academy Of Engineering (2021 – 2025)
              </p>
              <p className="text-primary font-medium text-lg mt-1">CGPA: 8.94 / 10</p>
            </div>
  
            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold text-lg mb-3 text-center">Key Courses</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-muted-foreground list-disc list-outside pl-5">
                <li>Data Structures & Algorithms</li>
                <li>Operating Systems</li>
                <li>Computer Networks</li>
                <li>Database Management Systems</li>
                <li>Software Engineering</li>
                <li>Web & Mobile Development</li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  