export default function Loading() {
  return (
    <main className="min-h-screen bg-cloud">
      {/* Hero skeleton — mimics the site's dark navy hero sections */}
      <section className="bg-navy py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Breadcrumb placeholder */}
          <div className="mx-auto mb-4 h-4 w-48 animate-pulse rounded bg-white/10" />
          {/* Title placeholder */}
          <div className="mx-auto mb-3 h-10 w-80 animate-pulse rounded bg-white/15" />
          {/* Subtitle placeholder */}
          <div className="mx-auto h-5 w-96 max-w-full animate-pulse rounded bg-white/10" />
        </div>
      </section>

      {/* Content skeleton */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        {/* Section heading placeholder */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <div className="h-7 w-64 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-96 max-w-full animate-pulse rounded bg-gray-100" />
        </div>

        {/* 6-card grid skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              {/* Icon placeholder */}
              <div className="mb-4 h-12 w-12 animate-pulse rounded-lg bg-gray-200" />
              {/* Title placeholder */}
              <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-gray-200" />
              {/* Text line placeholders */}
              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
