export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-2xl gradient-bg opacity-20 animate-pulse" />
          <div className="absolute inset-2 flex items-center justify-center rounded-xl gradient-bg">
            <span className="text-xl font-bold text-white">S</span>
          </div>
          <div className="absolute -inset-1 rounded-2xl border-2 border-primary/30 animate-spin border-t-primary" />
        </div>
        <p className="text-sm text-muted-foreground animate-pulse">
          Carregando...
        </p>
      </div>
    </div>
  );
}
