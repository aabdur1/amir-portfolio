export function Footer() {
  return (
    <footer className="w-screen text-center text-xs bg-background text-muted-foreground py-6 border-t border-muted-foreground">
      &copy; {new Date().getFullYear()} Amir Abdur-Rahim. All rights reserved.
    </footer>
  );
}
