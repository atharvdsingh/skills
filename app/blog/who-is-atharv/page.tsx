import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Who is Atharv? | From Hindi Medium to Full-Stack Developer",
  description:
    "The real story of Atharv. Born in 2005, Hindi medium school, moved to Indore alone, scored 92% in boards, built NoteBuddy with 1800+ users, applied to 300 companies, rejected by 284. A self-taught full-stack developer from Prayagraj, India.",
  keywords: [
    "Atharv", "who is Atharv", "Atharv developer", "Atharv blog",
    "Atharv story", "Atharv Prayagraj", "Atharv full-stack developer",
    "Atharv self-taught developer", "Atharv NoteBuddy", "Atharv portfolio",
    "Atharv software engineer", "Atharv MCA", "Atharv University of Allahabad",
    "self-taught developer India", "full-stack developer journey India",
    "developer blog India", "Prayagraj developer", "Hindi medium to developer",
    "Hindi medium to software engineer", "NoteBuddy founder", "NoteBuddy platform",
    "how to become developer India", "developer journey blog",
    "college student developer India", "MCA developer", "Allahabad developer",
    "building in public India", "systems over motivation",
    "Indian developer blog", "coding journey India", "developer hustle India",
    "from zero to developer", "self-taught programmer story",
  ],
  openGraph: {
    title: "Who is Atharv? | From Hindi Medium to Full-Stack Developer",
    description:
      "Born 2005. Hindi medium. Moved cities alone at 14. 92% in boards. Built a product with 1800+ users. Applied to 300 companies, rejected 284 times. This is the real story.",
    type: "article",
    publishedTime: "2025-05-01T00:00:00.000Z",
    authors: ["Atharv"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Who is Atharv? From Hindi Medium to Full-Stack Developer",
  description: "The journey of Atharv, a self-taught full-stack developer from Prayagraj who built products used by thousands.",
  author: { "@type": "Person", name: "Atharv", url: "https://atharvdev.sanchetna.in" },
  publisher: { "@type": "Person", name: "Atharv", url: "https://atharvdev.sanchetna.in" },
  datePublished: "2025-05-01",
  dateModified: "2025-05-01",
  mainEntityOfPage: "https://atharvdev.sanchetna.in/blog/who-is-atharv",
  inLanguage: "en",
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollReveal />

      <main className="tech-grid min-h-screen">
        <div className="mx-auto max-w-3xl px-6 pt-12 pb-8">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <a href="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to Portfolio</a>
          </Button>

          <div className="animate-fade-up">
            <span className="mono-label">Blog</span>
            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Who is Atharv?
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              From a Hindi medium school to building products used by thousands. No fluff, no filters. Just the real story.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" /><span>May 2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" /><span>15 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" /><span>Prayagraj, India</span>
              </div>
            </div>
          </div>
          <div className="section-divider mt-10" />
        </div>

        <article className="mx-auto max-w-3xl px-6 pb-24">
          <div className="space-y-12">

            <blockquote className="reveal border-l-2 border-foreground/20 pl-6 text-lg italic text-muted-foreground">
              &quot;If it was easy, anyone could have done it.&quot;
              <span className="mt-1 block text-sm not-italic text-muted-foreground/70">&mdash; Atharv</span>
            </blockquote>

            {/* ── PHASE 1 ── */}
            <section className="reveal space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                The Math Kid
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                I was born in August 2005. Started school at 2 because I refused to let my older sister go alone. My mother had already taught me basic Hindi and math by then, so I skipped kindergarten and went straight to 1st class.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                When I was in 3rd class, my sister started 5th class math tuitions. I tagged along. The teacher started giving me 5th class problems too. They used to hold speed-solving competitions with prizes for whoever finished first. Took me about a month before I started winning.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I stayed at that coaching till 9th class. Won over 50 prizes. Notebooks filled cover to cover with perfect scores. Got so fast I could solve problems in my head without writing anything down. School was easy too. 95%+ without much effort. Used to finish homework before leaving school itself. My family would say <em>&quot;beta kuch padh lo, marks hi sab nhi hota&quot;</em> (son, study something, marks are not everything).
              </p>
              <div className="glass rounded-xl p-5">
                <span className="mono-label">What this actually taught me</span>
                <p className="mt-2 text-sm text-foreground">
                  Breaking big problems into small parts. Finding patterns fast. Competing with myself. These are the same skills I use every day writing code and debugging systems. The 50+ prizes were not about math. They were about building a brain that refuses to quit.
                </p>
              </div>
            </section>

            {/* ── PHASE 2 ── */}
            <section className="reveal space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Moving to Indore. Alone. At 14.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                After 9th class my uncle casually asked if I wanted to move to Indore and join an English medium school. I was from a Hindi medium background. Decent grammar, zero spoken English. I said yes anyway. Left my friends, left my comfort zone, left everything familiar.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Spent the entire next week getting rejected by every good school in the city. &quot;We do not admit Hindi medium students during board year.&quot; That was what every principal told us. Finally one school agreed to take a chance.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                First day. Last bench. Avoiding eye contact with everyone. Could not understand a single word from teachers or students. It was genuinely depressing. I thought I had made a massive mistake. Then the maths period came. And suddenly everything made sense. I understood every concept being taught. That one class changed my entire outlook: maybe I could survive here.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Two weeks later, first test results came out. I got 3 marks out of 40 in Social Science. Failed English. Passed only in Math, Science, Hindi and Sanskrit. So I bought the same NCERT textbooks in both Hindi and English. Read them side by side. Painful but it worked.
              </p>
              <div className="glass rounded-xl p-5">
                <div className="flex items-baseline gap-6">
                  <div>
                    <span className="font-mono text-3xl font-bold text-foreground">3rd</span>
                    <p className="text-xs text-muted-foreground">Rank in school</p>
                  </div>
                  <div>
                    <span className="font-mono text-3xl font-bold text-foreground">92%</span>
                    <p className="text-xs text-muted-foreground">Board results</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  From 3 out of 40 in Social Science to 3rd rank in the entire school. The boy who &quot;should not have been admitted&quot; beat expectations that nobody even had for him.
                </p>
              </div>
            </section>

            {/* ── PHASE 3 ── */}
            <section className="reveal space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Finding Code During COVID
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                11th standard was COVID. I will be honest: I skipped the entire year. Did not read a single page, did not buy a single book. Got a phone for &quot;online classes&quot; and immediately started searching how to make money on the internet.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Tried video editing in KineMaster. Did that for a month, quit. Tried Java and DSA because the internet said that is what you are supposed to do. Did it for a month, hated it. Then I found a tutorial on building a chat app in Java. I did not have a laptop so I used a website that gave you a virtual desktop. Spent 20 days copy-pasting code, solving weird errors. Without even knowing what I was doing, I had built something using WebSockets, Spring Boot, compiled an APK, and hosted the backend. Wild.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                After that I tried everything. Drones. Arduino. Training AI models (quit because I did not know calculus). Electrical engineering. App development. Nothing stuck because I had no laptop and limited resources. But web development? HTML, CSS, a bit of JS? I could do that on my phone. Built my first portfolio website. My first fake e-commerce site. That was the start.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                For 12th boards I had zero preparation from 11th. Managed 75.4%. Got 79th percentile in JEE which was not enough for any good college. Took admission in a private university the same day as my second JEE attempt. I knew that if I wanted to be a software engineer, spending two more years on physics and chemistry was a bad trade.
              </p>
            </section>

            {/* ── PHASE 4 ── */}
            <section className="reveal space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                300 Applications. 284 Rejections. 3 Offers.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                First year of college ended and I felt confident about becoming a video editor. A friend mentioned her content writing internship paying 1000 rupees a month. I thought that was huge money because I was editing 60-second videos for 50 rupees each. Got referred. Cracked the interview.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                The excitement lasted exactly one week. 50 videos, 200+ graphics, endless revisions. All for 1000 rupees. Staying up till 3 AM with burning eyes, laptop fan cooking my thighs, churning out generic Instagram posts. I was making less per hour than a street vendor. So I quit.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Then I did what any desperate college student does. Spam-applied to 300 companies on LinkedIn.
              </p>
              <div className="glass rounded-xl p-6">
                <div className="flex flex-wrap items-baseline gap-6">
                  <div>
                    <span className="font-mono text-3xl font-bold text-foreground">300</span>
                    <p className="text-xs text-muted-foreground">Applications</p>
                  </div>
                  <div>
                    <span className="font-mono text-3xl font-bold text-destructive">284</span>
                    <p className="text-xs text-muted-foreground">Rejections</p>
                  </div>
                  <div>
                    <span className="font-mono text-3xl font-bold text-foreground">3</span>
                    <p className="text-xs text-muted-foreground">Offers</p>
                  </div>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                One company offered 8000 per month for video editing and design. I joined on my 18th birthday. After a month I asked if I could do web development too. They said yes. Suddenly I was doing videos, graphics, UI design, and code, all in 3-4 day sprints. Daily routine: college 9 to 6, gym at 7, work through the night, sleep 4-5 hours. My attendance was barely above minimum. My college friends thought I had lost my mind.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                The company taught me more in a single day than college taught in two years. Real bugs, real clients, real deadlines. One project had me revamp an entire website twice in the same day because the client did not like a single pixel. Then they asked me to make it multilingual and integrate a Web3 wallet. Painful. But I learned everything.
              </p>

              <h3 className="font-heading text-xl font-semibold text-foreground">
                NoteBuddy: My First Real Product
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                During December break I built NoteBuddy. A notes sharing platform for my university. The existing system was broken: no structured notes, no dark mode, professors would not share anything. My university even removed third-party notes for copyright. But I had my own notes written from scratch. So my product filled the gap perfectly.
              </p>
              <div className="glass rounded-xl p-6">
                <span className="mono-label">NoteBuddy Results</span>
                <div className="mt-3 flex flex-wrap items-baseline gap-6">
                  <div>
                    <span className="font-mono text-2xl font-bold text-foreground">1,800+</span>
                    <p className="text-xs text-muted-foreground">Users</p>
                  </div>
                  <div>
                    <span className="font-mono text-2xl font-bold text-foreground">200K+</span>
                    <p className="text-xs text-muted-foreground">Total views</p>
                  </div>
                  <div>
                    <span className="font-mono text-2xl font-bold text-foreground">15K</span>
                    <p className="text-xs text-muted-foreground">Daily traffic during exams</p>
                  </div>
                  <div>
                    <span className="font-mono text-2xl font-bold text-foreground">100s</span>
                    <p className="text-xs text-muted-foreground">Paid subscribers</p>
                  </div>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                Built it, marketed it, managed it, all solo. Learned product management the hard way. The original company founder later DM&apos;d me asking if I wanted to come back. This time I was not desperate. I negotiated from strength.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Later moved to Bangalore for a backend role on an AI product. Bangalore was tough as a vegetarian. The atta was 50% maida which wrecked my digestion. But the one good thing that happened there: I bought my first MacBook Pro with my own money. No more dual booting Linux or carrying a brick charger.
              </p>
            </section>

            {/* ── PHASE 5 ── */}
            <section className="reveal space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Systems Beat Motivation. Every Single Time.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                None of what I described above happened because I was motivated every day. Motivation is unreliable. It comes and goes. What kept me going was building a system that works whether I feel like it or not.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I use TickTick. Split my life into sections: projects, learning, health, personal. Each project gets a kanban board with deadlines, subtasks, and a stopwatch. I can track every single thing without missing a deadline. The system runs even when my brain does not want to.
              </p>

              <h3 className="font-heading text-xl font-semibold text-foreground">
                How I Learn Anything
              </h3>
              <div className="glass rounded-xl p-5">
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-foreground/50">01</span>
                    <span>Get interested first. Ask &quot;what cool things can I build with this?&quot;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-foreground/50">02</span>
                    <span>Watch one basic video or read docs. Just enough to start.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-foreground/50">03</span>
                    <span>Start building a project immediately.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-foreground/50">04</span>
                    <span>Code. Hit error. Understand why. Discover new concept. Repeat forever.</span>
                  </li>
                </ol>
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground">
                The Dopamine Problem
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Think about it this way. One Instagram reel gives you 1 dopamine point. One hour of actual work gives you maybe 0.25 points. If you are used to getting 200 points a day from reels, work will never feel rewarding enough. Your brain will quit every time.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                My fix: I deactivated Instagram and Snapchat. Made a fresh YouTube account subscribed only to dev channels. Archived almost everyone on WhatsApp except college and work groups. Did this for 6-8 months. It was painful. Massive FOMO. But slowly, I started to prefer working over scrolling. That switch changed everything.
              </p>
            </section>

            {/* ── WHERE I AM NOW ── */}
            <section className="reveal space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Where I Am Today
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                I am not the same person who got 3 marks in Social Science. Or who got rejected by 284 companies. Today I have:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  A system that runs without motivation
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  Products that real people use and pay for
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  2,000+ followers on X who actually engage
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  The confidence that I can figure out anything given enough time
                </li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                But I am still learning. Still curious. The same curiosity that made me try drones and Arduino and AI models at 15 is the same curiosity that pushes me to build better products today. The only difference is now I have a framework that turns that curiosity into real skills and real value.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Your journey will look nothing like mine. Different phases, different struggles, different wins. But the principles are universal: build systems instead of relying on willpower, ship real things instead of just learning, manage your dopamine, and get comfortable being uncomfortable.
              </p>
            </section>

            {/* ── CTA ── */}
            <div className="reveal glass rounded-xl p-8 text-center">
              <p className="font-heading text-xl font-bold text-foreground">
                If it was easy, anyone could have done it.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                The question is not whether you can do it. The question is: will you?
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a href="/">View Portfolio</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://x.com/atharvvvvv" target="_blank" rel="noopener noreferrer">
                    Follow on X
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
