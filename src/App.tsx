import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Github, Linkedin } from "lucide-react"

function App() {
  const experience = [
    {
      organization: "UK Civil Service",
      type: "Full-time",
      location: "Bristol, UK (Hybrid)",
      roles: [
        {
          title: "Data Scientist",
          period: "Nov 2024 - Present",
          description: "Building ML-powered applications and agentic AI systems using TypeScript (React) and Python (FastAPI, LangChain/LangGraph) in Azure. Data engineering for complex SysML architecture data. Presenting to senior government officials including in the Houses of Parliament and Lords.",
          skills: ["Python", "TypeScript", "React", "FastAPI", "LangChain", "Azure", "ML/AI"]
        }
      ]
    },
    {
      organization: "Government Statistical Service",
      type: "Full-time",
      location: "Bristol, UK (Hybrid)",
      roles: [
        {
          title: "Data Analyst",
          period: "Jul 2023 - Nov 2024",
          description: "Management-level statistician responsible for Accredited Official Statistics published on gov.uk. Statistical modelling with R, FOI requests, Parliamentary Questions, and maintaining Power BI dashboards supporting medical specialists.",
          skills: ["R", "Power BI", "SQL", "Statistics"]
        },
        {
          title: "Statistical Programmer",
          period: "Dec 2020 - Jul 2023",
          description: "Developed statistical reports and dashboards using R, RShiny, and Power BI for public sector stakeholders to influence medical policy and support high-level decision-making.",
          skills: ["R", "RShiny", "Power BI", "SQL"]
        }
      ]
    },
    {
      organization: "University of Lincoln",
      type: "Internship",
      location: "Lincoln, UK",
      roles: [
        {
          title: "Research Scientist",
          period: "Jul 2019 - Aug 2019",
          description: "Competitive UROS placement developing a 3D image processing pipeline in Python to streamline analysis of terabytes of micro-CT data.",
          skills: ["Python", "Image Processing", "3D Analysis"]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img
              src="/Tomos_Picture.jpeg"
              alt="Tomos Davies"
              className="w-48 h-48 rounded-full object-cover shadow-xl ring-4 ring-primary/20"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Hello, I'm <span className="text-primary">Tomos Davies</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Data Scientist and Software Engineer building full stack ML-powered applications and agentic AI systems
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/tomos-davies115/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/tdavies-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-6">
            {experience.map((company, companyIndex) => (
              <Card key={companyIndex} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl">
                        {company.roles.map((role, i) => (
                          <span key={i}>
                            {role.title}
                            {i < company.roles.length - 1 && " & "}
                          </span>
                        ))}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {company.organization} · {company.type}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{company.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {company.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className={roleIndex > 0 ? "pt-6 border-t" : ""}>
                      <div className="mb-3">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{role.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{role.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Big into nature, fitness, birdwatching, and pub quizzes. Bookworm - I love Vonnegut, Dostoyevsky, and the Dune series. Welsh speaker - o bydded i'r hen iaith barhau! Building and learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <a href="https://github.com/tdavies-dev/gutenshad" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle>Gutenshad</CardTitle>
                  <CardDescription>Browser-based e-reader for classic literature</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A clean reading interface for the top 100 books on Project Gutenberg. Full-stack app with a Python backend and TypeScript/React frontend using shadcn.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                </CardContent>
              </Card>
            </a>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Another Project</CardTitle>
                <CardDescription>Brief description of the project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Add your project details here...
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tech 1</Badge>
                  <Badge variant="secondary">Tech 2</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-muted-foreground">
        <p>&copy; 2026 Tom Davies. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
