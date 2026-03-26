export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="bg-sage-dark py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <p className="font-display text-xl font-semibold text-primary-foreground">
          Mouing
        </p>
        <p className="text-primary-foreground/80 text-sm">
          Mouing is coming soon. Built by instructors, for instructors.
        </p>
        <p className="text-primary-foreground/50 text-xs pt-2">
          © {year}.{" "}
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
