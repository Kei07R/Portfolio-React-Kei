export const CertificationsSection = () => {
    return (
      <section id="certifications" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Certifications</span>
          </h2>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div className="gradient-border p-6 card-hover">
              <h4 className="font-semibold text-lg mb-2">
                Full Stack Web Development – Meta
              </h4>
              <p className="text-muted-foreground">
                Completed a hands-on program covering frontend, backend, and
                deployment with React and Node.js.
              </p>
            </div>
            <div className="gradient-border p-6 card-hover">
              <h4 className="font-semibold text-lg mb-2">
                React Native Specialization – Coursera
              </h4>
              <p className="text-muted-foreground">
                Built real-world mobile applications with React Native, Expo, and Redux.
              </p>
            </div>
            {/* Add more certification blocks as needed */}
          </div>
        </div>
      </section>
    );
  };
  