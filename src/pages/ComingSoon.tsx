import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ComingSoon = () => (
  <Layout>
    <Seo
      title="Internships & Careers | Gavit E-Services"
      description="Join Gavit E-Services. Explore internship and career opportunities in IT, digital marketing, web development, and business development."
      canonical="https://www.gaviteservice.com/coming-soon"
      keywords={["career", "jobs", "internship", "Gavit E-Services", "apply"]}
    />

    <section className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-slate-950">
      <div className="container max-w-4xl">
        {/* Attractive gradient card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-8 md:p-12 shadow-2xl">
          <div className="relative z-10 text-left space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              Internships & Career
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              From learning to leading – we grow talent & ship quality.
            </h1>
            <p className="text-lg text-white/85 max-w-xl leading-relaxed">
              Drop us a line and we'll turn your ambition into a real plan—with timelines, mentorship, and clear paths in IT, marketing, or business development.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90 font-semibold shadow-lg rounded-lg px-8"
              >
                <Link to="/career/apply">Apply</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/15 hover:text-white rounded-lg"
              >
                <Link to="/career">Back to Career</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ComingSoon;
