export const ResearchSection = () => {
    return (
      <section id="research" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Research <span className="text-primary">Work</span>
          </h2>
  
          <div className="gradient-border p-6 card-hover text-center">
            <h4 className="font-semibold text-lg mb-2">
                Real-Time Transcription Language Translation Using WebRTC
            </h4>
            <p className="text-muted-foreground mb-2 text-left">
            This literature survey paper titled "Real-Time Transcription Language Translation Using WebRTC" explores the 
            current landscape of real-time speech translation technologies. We summarize and analyze various 
            research efforts in the domain, highlighting their methodologies, findings, and 
            limitations. Additionally, we propose a novel approach that leverages WebRTC to 
            enhance real-time transcription and translation efficiency. By identifying gaps in 
            existing studies, we outline the scope for future research, aiming to improve user 
            experience in multilingual communication. This survey serves as a comprehensive 
            resource for researchers and practitioners interested in advancing real-time language 
            translation technologies
            </p>
            <a
              href="#"
              className="text-primary underline hover:text-primary/80 text-sm"
            >
              View Publication
            </a>
          </div>
        </div>
      </section>
    );
  };
  