import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

function App() {
  const experience = [
    {
      title: "Data Scientist",
      organization: "UK Civil Service",
      type: "Full-time",
      period: "Nov 2024 - Present",
      location: "Bristol, UK (Hybrid)",
      description: "Building ML-powered applications and agentic AI systems using TypeScript (React) and Python (FastAPI, LangChain/LangGraph) in Azure. Data engineering for complex SysML architecture data. Presenting to senior government officials including in the Houses of Parliament and Lords.",
      skills: ["Python", "TypeScript", "React", "FastAPI", "LangChain", "Azure", "ML/AI"]
    },
    {
      title: "Data Analyst II",
      organization: "Government Statistical Service",
      type: "Full-time",
      period: "Jul 2023 - Nov 2024",
      location: "Bristol, UK (Hybrid)",
      description: "Management-level statistician responsible for Accredited Official Statistics published on gov.uk. Statistical modelling with R, FOI requests, Parliamentary Questions, and maintaining Power BI dashboards supporting medical specialists.",
      skills: ["R", "Power BI", "SQL", "Statistics"]
    },
    {
      title: "Data Analyst I",
      organization: "Government Statistical Service",
      type: "Full-time",
      period: "Dec 2020 - Jul 2023",
      location: "Bristol, UK",
      description: "Developed statistical reports and dashboards using R, RShiny, and Power BI for public sector stakeholders to influence medical policy and support high-level decision-making.",
      skills: ["R", "RShiny", "Power BI", "SQL"]
    },
    {
      title: "Research Scientist",
      organization: "University of Lincoln",
      type: "Internship",
      period: "Jul 2019 - Aug 2019",
      location: "Lincoln, UK",
      description: "Competitive UROS placement developing a 3D image processing pipeline in Python to streamline analysis of terabytes of micro-CT data.",
      skills: ["Python", "Image Processing", "3D Analysis"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img
              src="/src/img/Tomos_Picture.jpeg"
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
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl">{job.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {job.organization} · {job.type}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
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
                Write a short paragraph about yourself and your interests here...
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
            {/* Placeholder project cards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Project Title</CardTitle>
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
