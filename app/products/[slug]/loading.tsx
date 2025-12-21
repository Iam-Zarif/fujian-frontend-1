export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 pt-24 animate-pulse space-y-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="h-6 w-32 rounded bg-gray-200" />
          <div className="h-10 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>

        <div className="aspect-4/3 rounded-3xl bg-gray-200" />
      </div>

      <div className="space-y-4 max-w-4xl">
        <div className="h-8 w-64 rounded bg-gray-200" />
        <div className="h-5 w-full rounded bg-gray-200" />
        <div className="h-5 w-5/6 rounded bg-gray-200" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="aspect-4/3 rounded-2xl bg-gray-200" />
        <div className="aspect-4/3 rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}
