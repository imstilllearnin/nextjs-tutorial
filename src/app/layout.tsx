export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header
          style={{
            backgroundColor: "lightpink",
            padding: "1rem",
          }}
        >
          <p>header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "lightcyan",
            padding: "1rem",
          }}
        >
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}
