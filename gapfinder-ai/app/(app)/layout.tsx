"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@/components/AppProvider";
import { Button } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { ThemeToggle } from "@/components/ThemeToggle";

const FLOW = [
  { href: "/materials", label: "Materials", icon: "upload", key: "materials" },
  { href: "/topics", label: "Syllabus map", icon: "map", key: "topics" },
  { href: "/quiz", label: "Diagnostic quiz", icon: "quiz", key: "attempts" },
  { href: "/report", label: "Gap report", icon: "report", key: "reports" },
  { href: "/plan", label: "Revision plan", icon: "plan", key: "plan" },
] as const;
const TOOLS = [
  { href: "/explain", label: "Learning assistant", icon: "chat" },
  { href: "/agents", label: "Agent activity", icon: "agents" },
  { href: "/how-it-works", label: "How it works", icon: "info" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { ready, user, data, signOut, resetDemo } = useApp();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  if (!ready || !user)
    return (
      <div className="boot" role="status">
        <span className="logo-mark">◎</span>
        <span>Loading your workspace…</span>
      </div>
    );

  const done: Record<string, boolean> = {
    materials: data.materials.length > 0,
    topics: data.topics.length > 0,
    attempts: data.attempts.length > 0,
    reports: data.reports.length > 0,
    plan: !!data.plan,
  };
  const doneCount = FLOW.filter((f) => done[f.key]).length;
  const on = (href: string) => !!path?.startsWith(href);
  const initials = user.name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="side-top">
          <Link href="/" className="logo"><span className="logo-mark">◎</span> GapFinder AI</Link>
          <ThemeToggle className="on-dark" />
        </div>
        <nav className="nav" aria-label="Main">
          <Link href="/dashboard" className={on("/dashboard") ? "active" : ""}><Icon name="home" /><span>Dashboard</span></Link>
          <div className="nav-group">
            <div className="nav-title">
              <span>Your diagnosis</span>
              <span className="nav-count">{doneCount}/5</span>
            </div>
            <div className="nav-meter"><span style={{ width: `${(doneCount / 5) * 100}%` }} /></div>
            {FLOW.map((n) => (
              <Link key={n.href} href={n.href} className={on(n.href) ? "active" : ""}>
                <Icon name={n.icon} />
                <span>{n.label}</span>
                {done[n.key] && <span className="tick" title="Done"><Icon name="check" size={12} /></span>}
              </Link>
            ))}
          </div>
          <div className="nav-group tools">
            <div className="nav-title"><span>Tools</span></div>
            {TOOLS.map((n) => (
              <Link key={n.href} href={n.href} className={on(n.href) ? "active" : ""}>
                <Icon name={n.icon} />
                <span>{n.label}</span>
              </Link>
            ))}
          </div>
        </nav>
        <div className="sidebar-foot">
          <div className="user-chip">
            <span className="avatar">{initials}</span>
            <div>
              <div className="user-name">{user.name}</div>
              <div className="user-sub">{data.subject}</div>
            </div>
          </div>
          <div className="row">
            <Button variant="ghost" size="sm" onClick={() => { signOut(); router.replace("/login"); }}>
              <Icon name="logout" size={14} /> Log out
            </Button>
            {user.demo && (
              <Button variant="ghost" size="sm" title="Restore the original demo data" onClick={async () => { if (confirm("Reset the demo account to its original data?")) await resetDemo(); }}>
                Reset demo
              </Button>
            )}
          </div>
        </div>
      </aside>

      <main className="main">{children}</main>

      <nav className="tabbar" aria-label="Quick navigation">
        {[{ href: "/dashboard", label: "Home", icon: "home" }, { href: "/quiz", label: "Quiz", icon: "quiz" }, { href: "/report", label: "Gaps", icon: "report" }, { href: "/plan", label: "Plan", icon: "plan" }, { href: "/explain", label: "Ask", icon: "chat" }].map((n) => (
          <Link key={n.href} href={n.href} className={on(n.href) ? "active" : ""}>
            <Icon name={n.icon} size={20} />
            <span>{n.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
