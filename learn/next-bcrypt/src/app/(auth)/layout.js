export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4">{children}</div>
    </div>
  );
}
